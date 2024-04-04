/******************************************************************************
 GeoPose Sandbox Build System
 A NodeJS script manages the build system.
******************************************************************************/

'use strict' // Make sure that we are working on strict mode

// -------------------------------------------------------------------- IMPORTS
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process'


// ----------------------------------------------------------- GLOBAL VARIABLES

// Get the basic folder path
let currentFilePath = fileURLToPath(import.meta.url),
	currentFolderPath = path.dirname(currentFilePath),
	rootFolderPath = joinPaths(currentFilePath, '..');

// The project data (obtained from the package.json file)
let projectData = {};

/** The compiler options. */
let compilerOptions = {
	clean: true,
	watch: false,
	verbose: 4,
}

/** The codebase. */
let codebase = { files: {}, variables: {}, functions: {}, enums: {}, classes: {} };

/** The folder paths. */
let folderPaths = {};


// ---------------------------------------------------------- UTILITY FUNCTIONS

/** Shows a message on console.
 * @param message The message to show on console.
 * @param level The level of the message. */
function log(message, level = 0) { 
	if (level < compilerOptions.verbose) 
		console.log('  '.repeat(level) + message);
}


/** Reads a text file.
 * @param filepath The path to the text file.
 * @returns The text data. */
function readFile(filepath) { 
	return fs.readFileSync(filepath, { encoding: 'utf-8' }); 
}


/** Writes a text file.
 * @param filepath The path to the text file.
 * @param data The text data. */
function writeFile(filepath, data){
	let folderPath = path.dirname(filepath);
	if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath, {recursive: true});
	fs.writeFileSync(filepath, data, { encoding: 'utf-8' });
}

/** Joins multiple paths into one-
 * @param paths The paths to join.
 * @return The resulting path. */
function joinPaths (... paths) { 
	return path.join(...paths).replace(/\\/g, '/');
}

/** Clones a data item.
 * @param item The data item to copy.
 * @param clean Whether to remove undefined data subitems.
 * @returns The cloned data item. */
function cloneItem(item, clean = false) {
	if (clean && item == undefined) return undefined; 
	if (Array.isArray(item)) {
		let clone = [];
		if (clean && item.length == 0) return undefined; 
		for (let subItem of item) {
			let value = cloneItem(subItem, clean);
			if (clean && value == undefined) continue;
			clone.push(value);
		}
		return clone;
	} else if (typeof item == "object") {
		let clone = {}, keys = Object.keys(item);
		if (clean && keys.length == 0) return undefined; 
		for (let key of keys) {
			let value = cloneItem(item[key], clean);
			if (clean && value == undefined) continue;
			clone[key] = value;
		}
		return clone;
	} 
	return item;
}

// ------------------------------------------------------------- MAIN FUNCTIONS

/** Reads the package.json file of the project to get updated data. */
function readProjectData() {

	// Recursively look for the package json file
	let rootFolderPath = currentFolderPath, packageFilePath ='';
	do {
		packageFilePath = joinPaths(rootFolderPath, 'package.json')
		if (fs.existsSync(packageFilePath)) break;
		rootFolderPath = path.dirname(rootFolderPath);
	} while (rootFolderPath != path.dirname(rootFolderPath))
	if (rootFolderPath == path.dirname(rootFolderPath))
		throw Error('No "package.json" file detected');

	// Read the package json file
	try {
		let packageFileData = readFile(packageFilePath);
		projectData = JSON.parse(packageFileData);
	} catch (e) { 
		throw Error('Unable to parse "package.json" file: ' + e.message);
	}

	// Read the directories for the main elements and create the paths
	let directories = projectData.directories;
	if (!directories) throw Error('No "directories" specified');
	for (let directory in directories) folderPaths[directory] = 
		joinPaths(rootFolderPath, directories[directory]);
	
	// Read the main source file and extract the files from the exports
	if (!projectData.mainSourceFile) 
		throw Error ('No "' + mainSourceFileName + '" property');
	let mainSourceFileName = projectData.mainSourceFile,
		mainSourceFilePath = joinPaths(folderPaths.sources, mainSourceFileName);
	if (!fs.existsSync(mainSourceFilePath))
		throw Error('Unable to read main source file: ' + mainSourceFilePath);
	let data = readFile(mainSourceFilePath), lines = data.split('\n'), 
		lineIndex, lineCount = lines.length, filePaths = [];
	for (lineIndex = 0; lineIndex < lineCount; lineIndex++) {
		let l = lines[lineIndex].trim(); 
		if (l.startsWith('export') && l.includes(' from ')) {
			let delimiter = '"', startIndex = l.indexOf(delimiter);
			if (startIndex < 0) 
				{ delimiter = '\''; startIndex = l.indexOf(delimiter); }
			if (startIndex < 0) throw ('Unable to parse export declaration' +
				' at line: ' + lineIndex + ' in ' + mainSourceFileName);
			let endIndex = l.indexOf(delimiter, ++startIndex);
			if (endIndex < 0) throw ('Unable to parse export declaration' +
				' at line: ' + lineIndex + ' in ' + mainSourceFileName);
				filePaths.push(l.slice(startIndex, endIndex));
		}
	}
	filePaths.push(mainSourceFileName);

	// Create an entry for each file in the codebase
	for (let filePath of filePaths) {
		if (filePath.startsWith('./'))filePath = filePath.slice(2);
		if (filePath[filePath.length-3] == '.') filePath = filePath.slice(0,-3);
		codebase.files[filePath] = {}
	}
}


/** Processes a Typescript file.
 * @param fileId The id of the Typescript file path. 
 * @returns The information of the file. */
function processTypeScriptFile(fileId) {
	
	// Read the file path
	let sourceFilePath = joinPaths(folderPaths.sources, fileId + '.ts');
	log('Processing: ' + fileId + '.ts', 2);
	let data = readFile(sourceFilePath);

	// Process the file line by line
	let lines = data.split('\n'), lineIndex, lineCount = lines.length,
		level = 0, delimiter = null, items = [], itemIndex, itemCount, comment;
	
	// Create several private functions to manage the items of the file
	function createItem (type, text = '') { 
		return { type: type, text: text, level: level, line: lineIndex +1 };
	}
	function getItem(i) { return (i >= 0 && i <itemCount)? items[i]: {}; }
	function analyzeItems(index, callback) {
		let item = items[index], line = item.line, level = item.level;
		while (++index < itemCount) {
			item = items[index];
			if (item.line != line) break;
			if (item.level != level) break;
			if (callback(item, item.text)) break;
		}
	}

	// Process the file line by line
	for (lineIndex = 0; lineIndex < lineCount; lineIndex++) {
		let line = lines[lineIndex], l = line.trim();
		
		// Add a special comment for empty lines
		if (l.length == 0) { lines[lineIndex] = '////'; continue; }

		// Read JavaDoc comments
		if (l.startsWith('/**')) {
			let commentString = '';
			do { commentString += ' ' + lines[lineIndex++].trim(); }
			while (lineIndex < lineCount && !commentString.endsWith ('*/'))
			lineIndex--;
			let item = createItem('javadoc');
			let words = commentString.slice(3, -2).split(' ') , 
				wordIndex = 0, wordCount = words.length, 
				key = 'text', paramName = '';
			for (wordIndex = 0; wordIndex < wordCount; wordIndex++) {
				let word = words[wordIndex], startChar = word[0];
				if (startChar == '*') word = word.slice(1);
				else if (startChar == '@') {
					let tag = word.slice(1); paramName = undefined;
					switch (tag) {
						case 'param':
							if (!item.params) item.params = {};
							let param = createItem('param'), 
								name = words[++wordIndex];
							if (name.startsWith('{') && name.endsWith('}')) {
								param.class = name.slice(1, -1);
								name = words[++wordIndex];
							}
							if (name.startsWith('[') && name.endsWith(']')) {
								param.optional = true; name = name.slice(1, -1);
							}
							paramName =  name;
							item.params[name] = param; continue;
						case 'return': tag = 'returns'; 
						default: key = tag; item[key] = ''; continue;
					}
				}
				if (!word) continue;
				if (paramName) item.params[paramName].text += 
					(item.params[paramName].text.length > 0? ' ': '') + word; 
				else item[key] += (item[key].length > 0? ' ': '') + word; 
			}
			items.push(item);  continue;
		}

		// Read the items of the lines
		let item = createItem('word'), delimiter = null, previousLetter = null;
		for (let letter of line) {
			if (delimiter) {
				if (letter == delimiter && previousLetter != '\\') {
					if (item.text.length > 0) items.push(item); 
					item = createItem('word');
					delimiter = null; continue;
				}
				item.text += letter; previousLetter = letter; continue;
			}
			if (letter == '\'' || letter == '\"') { 
				if (item.text.length > 0) items.push(item); 
				item = createItem('string');
				delimiter = letter; continue;
			}
			if (letter == '/' && previousLetter != '/') break;
			else if (letter == '{') level++; else if (letter == '}') level--; 
			else if ((letter >= 'A' && letter <= 'Z') ||
				(letter >= 'a' && letter <= 'z') ||
				(letter >= '0' && letter <= '9') ||
				letter == '_') { item.text += letter; continue; }
			if (item.text.length > 0) items.push(item); 
			if (letter.trim().length > 0) {
				item = createItem('symbol', letter); items.push(item); 
			}
			item = createItem('word'); previousLetter = letter;
		}
		if (item.text.length > 0) items.push(item);
	}

	// Create the file data
	let file = { imports: {}, exports: {} };

	// Analyze the items 
	itemIndex = 0; itemCount = items.length;
	for (itemIndex = 0; itemIndex < itemCount; itemIndex++) {
		let item = items[itemIndex]; lineIndex = item.line;

		// Focus on the elements in the first
		if (item.level > 0) continue;

		// Store Javadoc comments
		if (item.type == 'javadoc') { comment = item; continue; }

		// Process imported elements
		if (item.text == 'import') {
			try {
				let importedElements = [];
				item = getItem(++itemIndex);
				if (item.text == '*') continue;
				if (item.text == '{') {
					while (++itemIndex < itemCount && 
						items[itemIndex].line == lineIndex) {
						let importedElement = getItem(itemIndex);
						if (importedElement.text == '}') break;
						if (importedElement.type == 'word') 
							importedElements.push(importedElement.text);
					}
				}
				if (getItem(++itemIndex).text != 'from') throw Error();
				let importPathItem = getItem(++itemIndex);
				if (importPathItem.type != 'string') throw Error();
				let importPath = joinPaths(fileId, importPathItem.text);
				for (let importedElement of importedElements)
					file.imports[importedElement] = importPath;
			} catch(e) { throw Error('Invalid import on line: ' + item.line); }
			continue;
		}

		// Process exported elements
		if (item.text == 'export') {

			// Skip special exports
			if (getItem(itemIndex+1).text == '*') continue;

			// Analyze the element
			let exportedElement = { variables: {}, functions: {}, enums: {}, 
				classes: {}, static: undefined, abstract: undefined }, 
				elementName, elementType = 'variable';
			while (++itemIndex < itemCount) {
				switch (items[itemIndex].text) {
					case 'static': exportedElement.static = true; continue; 
					case 'abstract': exportedElement.abstract = true; continue; 
					case 'function': elementType = 'function'; continue;
					case 'enum': elementType = 'enum'; continue;
					case 'class': elementType = 'class'; continue;
				}
				elementName = items[itemIndex].text; break;
			}

			// Save the element in the list
			if (file.exports[elementName]) 
				throw Error('Repeated export element: "' + elementName + '"' );
			file.exports[elementName] = elementType;

			// Check if there is a JavaDoc comment
			if (!comment) log("No JavaDoc comment for :" + elementName, 1);
			else { exportedElement.comment = comment.text; comment = null; }
			
			// TODO analyze other elements apart from classes
			if (elementType != 'class') continue;
			codebase.classes[elementName] = exportedElement;

			//
			if (getItem(++itemIndex).text == 'extends') 
				exportedElement.parent = getItem(++itemIndex).text;

			// Read the members of the class
			while (++itemIndex < itemCount && items[itemIndex].level > 0) {
				let item = getItem(itemIndex);
				if (item.type == 'javadoc') { comment = item; continue; }
				if (item.type != 'word') continue;

			// 	itemIndex--;
			// 	let member = { type: 'field', visibility: 'public' };
			// 	while (++itemIndex < itemCount && items[itemIndex].level == 1) {
			// 		item = getItem(itemIndex);
			// 		if (!member.name) {
			// 			switch (item.text) {
			// 				case 'private': case 'protected': case 'public':
			// 					member.visibility = item.text; continue;
			// 				case 'static':
			// 					member.static = true; continue;
			// 				case 'get': member.type = 'property'; continue;
			// 				case 'set': member.type = 'property'; continue;
			// 				default: member.name = item.text; continue;
			// 			}
			// 		} else {
			// 			// Process the parameters of functions
			// 			if (item.text == '(') {
			// 				if (member.type == 'field') member.type = 'method';
			// 				while (++itemIndex < itemCount && 
			// 					items[itemIndex].text != ')') continue;
			// 			} 
						
			// 			// Get the type or subtype of the member
			// 			if (getItem(itemIndex + 1).text == ':') {
			// 				member.class = getItem(itemIndex + 2).text;
			// 				if (getItem(itemIndex + 3).text == '<')
			// 					member.subclass = getItem(itemIndex + 4).text;
			// 			}

			// 			// Reorder the elements
			// 			let list;
			// 			switch(member.type) {
			// 				case 'field': list = element.fields; break;
			// 				case 'property': list = element.properties; break;
			// 				case 'method': list = element.methods; break;
			// 			}
			// 			list[member.name] = {
			// 				comment: (comment)? comment.text : undefined,
			// 				type: member.class,
			// 				subtype: member.subclass,
			// 				static: member.static,
			// 				visibility: member.visibility != 'public'?
			// 					member.visibility : undefined,
			// 			};

			// 			// Continue until the end of the line
			// 			while (++itemIndex < itemCount && 
			// 				items[itemIndex+1].line == item.line) continue;
			// 			break;
			// 		}
			// 	}
			}
		}
	}

	// Save a copy of the file in a temporal folder
	let temporalFilePath = joinPaths(folderPaths.temporal, fileId + '.ts');
	writeFile(temporalFilePath, lines.join('\n'));

	// Save the file data in the codebase and return the file data
	codebase.files[fileId] = file; return file;
}



/** Processes a source map file.
 * @param originalFilePath The path of the original source map file. 
 * @param processedFilePath The path of the processed source map file.
 * @param sourcePath The file path to the source file. */
function processSourceMapFile(originalFilePath, processedFilePath, sourcePath) {

	// Read the JSON data 
	let data = JSON.parse(readFile(originalFilePath));
	
	// Check the source files
	if (sourcePath) {
		let sourceIndex, sourceCount = data.sources.length;
		for (sourceIndex = 0; sourceIndex < sourceCount; sourceIndex++)
			data.sources[sourceIndex] = sourcePath + data.sources[sourceIndex];
	}
	
	// Create a more readable version of the 
	data = JSON.stringify(data, null, '\t');
	let lines = data.split('\n'), lineIndex, lineCount = lines.length;
	for (lineIndex = 0; lineIndex < lineCount; lineIndex++) {
		if (lines[lineIndex].endsWith('[')) {	// Compress arrays
			let value; do {
				value = lines[lineIndex+1].trim();
				lines[lineIndex] += ' ' + value;
				lines.splice(lineIndex+1, 1); lineCount--;
			} while (!value.startsWith(']'));
		}
	}
	writeFile(processedFilePath || originalFilePath, lines.join('\n'));
}


/** Processes a Javascript file.
 * @param filePath The path of the Javascript file. */
function processJavascriptFile(filePath, links = false, exports = false) {

	let relativePath = filePath + '.js';
	log('Processing: ' + relativePath, 2);
	let data = readFile(joinPaths(folderPaths.temporal, relativePath));

	// Process the file line by line
	let lines = data.split('\n'), lineIndex, lineCount = lines.length;
	for (lineIndex = 0; lineIndex < lineCount; lineIndex++) {
		let line = lines[lineIndex], l = line.trim();

		// Remove links to external declarations
		if (!links && (l.startsWith('import') || l.startsWith('export')) &&
			l.includes(' from ')) line = '';

		// Remove module exports
		if (!exports && l.startsWith('export') && !l.includes(' from ')) {
			line = line.replace('export', '      ');
		}

		if (l == '////') line = '';					// Remove special comments
		else line = line.replace(/    /g, '\t');	// Replace tabs
		lines[lineIndex] = line;
	}
	data = lines.join('\n');
	writeFile(joinPaths(folderPaths.modules, relativePath), data);
}


/** Combines multiple files into one.
 * @param {*} inputFilePaths The paths of the input files.
 * @param {*} outputFilePath The paths of the output files. */
function combineFiles (inputFilePaths, outputFilePath) {
	let data = '';
	for (let filePath of inputFilePaths) 
		data += '// '+'*'. repeat(72-filePath.length)+' '+filePath + '.js\n\n' +
			readFile(joinPaths(folderPaths.modules, filePath + '.js')) + '\n\n';
	writeFile(outputFilePath, data);
}


/** Create a file with the api reference.
 * @param {*} format The format of the API reference.
 * @param {*} outputFilePath The paths of the output files. */
function createApiReference (format, outputFilePath) {
	let data = '', title = projectData. displayName + ' API Reference';
	let classNames = Object.keys(codebase.classes);
	switch (format) {
		case 'JSON':
			data = JSON.stringify(cloneItem(codebase, true), undefined, '\t');
			data = data.replace('{', '{\n\t"title": "' + title + '",');
			data = data.replace(/\n[ \t]{4,}/g, ' ');
			data = data.replace(/\n[ \t]{3,}\}/g, ' }');
			data = data.replace(/\n[ \t]{3,}\]/g, ' ]');
			break;
		case 'MarkDown':
			data += '# ' + title + '\n\n';
			data += '## Classes \n\n';
			for(let className of classNames.sort()) {
				data += '[' +  className + '](#' + className.toLowerCase() + ')\n';
			}
			for(let className of classNames) {
				let classData = codebase.classes[className];
				data += '### ' + className + '\n\n'; 
				if(classData.parent) data += 'Extends: ' + classData.parent + '\n\n';
				data += classData.comment + '\n\n';
			}
			break;
		case 'HTML':
			let styleData = '* { margin: 0; box-sizing: border-box; }\n' +
				'html, body { width: 100%; height: 100%; overflow: hidden;}\n' +
				'body {\n' +
				'	color: white; background-color: #222; \n' +
				'	text-emphasis-color: #48F; font-family: Arial; }\n' +
				'h1, h2 { color: #48F; text-wrap: nowrap; }\n' +
				'a { text-decoration: none; color: #48F; } \n' +
				'a:visited { color: #248; } \n' +
				'header { height: 5%; padding: 1vh; font-size: 3vh; color: #48F; \n' +
				'	font-weight: bold; border-bottom: 1px solid grey;}\n' +
				'main { display: flex; width:100%; height: 95%; \n' +
				'	flex-direction: row; }\n' +
				'nav { display: flex; flex-direction: column; border-right: 1px solid grey;' +
				'	padding: 1vmin 3vmin 1vmin 1vmin; overflow: hidden auto;}\n' +
				'article { flex: 1; overflow: hidden auto; }\n ' +
				'article div { width: 60vmin; margin: 2vh auto; \n' +
				'	border-bottom: 1px solid grey; }\n'
				;
			let tabs = '\t'.repeat(4), linkList = tabs + '<h2>Classes</h2>\n',
				classList = '';

			for (let className of classNames.sort()) {
				let classData = codebase.classes[className];
				linkList += tabs + '<a href="#' + className + '">' + className + '</a>\n';
				classList += tabs + '<div id="' + className + '">\n' +
					tabs + '\t<h3>' + className + (classData.parent? 
						' : <a href="#' + classData.parent + '">' + 
							classData.parent + '</a>': '') + '</h3>\n' + 
					tabs + '\t<p>' + classData.comment + '</p>\n' +
					tabs + '</div>';
			}
			data += '<!DOCTYPE html>\n' +
					'<html>\n' +
					'	<head>\n' +
					'		<meta charset="utf-8">\n' +
					'		<title>' + title +'</title>\n' +
					'		<link rel="icon" href="data:;base64,=">\n' +
					'		<style>\n' + styleData + '\n\t\t</style>\n' +
					'	</head>\n' +
					'	<body>\n' +
					'	<header>' + title + '</header>\n' +
					'		<main>\n' +
					'			<nav>\n' + linkList + '\t\t\t</nav>\n' +
					'			<article>\n' + classList + '\t\t\t</nav>\n' +
					'		</main>\n' +
					'	</body>\n' +
					'</html>\n';
			break;
	}
	writeFile(outputFilePath, data);
}


/** Launches the build process. */
function build () {

	// Read the Package file to obtain the project data
	readProjectData()

	log("Building Project: " + projectData.displayName + ' ' + 
		projectData.version, 1);

	let fileIds = Object.keys(codebase.files);
	for (let fileId of fileIds) processTypeScriptFile(fileId);

	// The main file name
	let mainOutputFileName = projectData.mainOutputFile.slice(0, -3);

	// Create the API reference in several formats:
	let referencePath = joinPaths(folderPaths.reference, mainOutputFileName);
	createApiReference('JSON', referencePath + '.reference.json');
	createApiReference('MarkDown', referencePath + '.reference.md');
	createApiReference('HTML', referencePath + '.reference.html');
	
	// Transpile the Typescript files
	log('Transpiling Typescript files...', 1);
	let typescriptCommand = 'tsc ' +
		' --target es2020' +
		' --sourceMap' +
		' --moduleResolution node' + 
		' --outDir ' + folderPaths.temporal + 
		' ' + fileIds.join('.ts ') + '.ts';
	log(typescriptCommand, 2);
	execSync(typescriptCommand, {cwd: folderPaths.temporal, stdio: 'inherit'});
	
	// Process the source map files
	log('Processing Source Map files...', 1);
	for (let fileId of fileIds) 
		processSourceMapFile(joinPaths(folderPaths.temporal, fileId + '.js.map'),
			joinPaths(folderPaths.modules, fileId + '.js.map'),
			path.dirname(path.relative(
				joinPaths(folderPaths.sources, fileId),
				joinPaths(folderPaths.modules, fileId))) + '/');

	// Creating the CommonJS file
	log('Creating the CommonJS version...', 1);
	for (let fileId of fileIds) processJavascriptFile(fileId, false, false);
	combineFiles(fileIds, joinPaths(folderPaths.bin, mainOutputFileName + '.js'));

	let terserCommand = 'terser --source-map -o ' + '../' + 
	mainOutputFileName + '.min.js' + ' ' + fileIds.join('.js ') + '.js';
	log(terserCommand, 2);
	execSync(terserCommand, {cwd: folderPaths.modules, stdio: 'inherit'});
	processSourceMapFile(joinPaths(folderPaths.bin, 
		mainOutputFileName + '.min.js.map'), undefined, 'modules\\');

	// Creating the module
	console.log('  Creating the ES6 Module version...');
	for (let fileId of fileIds) processJavascriptFile(fileId, true, true);

	let moduleFileName = mainOutputFileName + '.module.js';
	let terserModuleCommand = 'terser --module --source-map -o ' + 
		'../' + moduleFileName + ' ./' + fileIds.join('.js ./') + '.js';
	log(terserModuleCommand, 2);
	execSync(terserModuleCommand, {cwd: folderPaths.modules, stdio: 'inherit'});
	processSourceMapFile(joinPaths(folderPaths.bin, moduleFileName + '.map'), 
		undefined, 'modules\\');	

	// Creating the individual modules
	log('  Processing Javascript files for modules...', 1);
	for (let fileId of fileIds) processJavascriptFile(fileId, true, true);

	// Remove the temporal folder
	log('  Cleaning temporal files...', 1);
	fs.rmSync(folderPaths.temporal, { recursive: true });
	
}



// ---------------------------------------------------------------- ENTRY POINT


if (import.meta.url.startsWith('file:') && process.argv[1]===currentFilePath) {
		
	// Convert the arguments into parameters for the guilder instance
	let args = process.argv, argIndex, argCount = args.length;
	for (argIndex = 1; argIndex < argCount; argIndex++) {
		let arg = args[argIndex];
			
		switch (arg) {
			case '-h': case '--help':
				let parameters = [
	[ 'h', 'help', 'Shows this help text' ],
	[ 'v [0-9]', 'verbose [0-9]', 'Sets the verbosity level' ],
	[ 'w', 'watch', 'Activates the watch mode' ],
	[ 'c', 'clean', 'Clean the builds folder' ],
	[ 'r <path>', 'root <path>', 'Sets the root folder path' ],
	[ 'sf <path>', 'sourcesFolder <path>', 'Sets the sources folder name' ],
	[ 'bf <path>', 'buildsFolder <path>', 'Sets the builds folder name' ],
	[ 'df <path>', 'docsFolder <path>', 'Sets the docs folder name' ],
			];

				// Calculate the columns size
				let cs = [0, 0, 0];
				for (let parameter of parameters) for (let c = 0; c < 2; c++)
					if (cs[c] < parameter[c].length)cs[c] = parameter[c].length;

				// Display the different options
				console.log('Builder options: ');
				for (let parameter of parameters)
					console.log(' -' + parameter[0] + ',' +
						' '.repeat(cs[0] - parameter[0].length) + 
						' --' + parameter[1] + 
						' '.repeat(cs[1] - parameter[1].length) + 
						'  ' + parameter[2]);

				// Exit the process
				process.exit(0);
			case '-v': case '--verbose':
				let verbosityLevel = parseInt(args[++argIndex]);
				if (verbosityLevel>0) compilerOptions.verbose = verbosityLevel;
				else throw 'Invalid verbosity: "' + args[argIndex] + '"';
				break;
			case '-w': case '--watch': compilerOptions.watch = true; break;
			case '-c': case '--clean': compilerOptions.clean = true; break;
		}
	}

	// Initialize a builder instance with the created parameters
	build();
}
