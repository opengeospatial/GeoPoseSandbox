/******************************************************************************
  Build System - Distributables
******************************************************************************/

'use strict' // Make sure that we are working on strict mode

// ------------------------------------------------------------------ CONSTANTS
// The NodeJS modules
const fs = require('fs'), 				// File System access
	path = require('path'),				// File Path handling
	exec = require('child_process'),	// External command execution
	main = require('../build'),			// The main module of the build system
	codebase = require('./build_codebase');	// The codebase of the project


// ----------------------------------------------------------- GLOBAL VARIABLES

/** The paths of the temporal files. */
let temporalFilePaths = [];

/** The paths of the module files. */
let moduleFilePaths = [];

/** The external files to copy. */
let externalFiles = {
	"three.js" : { path:  "build\\three.js" }, 
	"three.min.js" : { path: "build\\three.min.js" },
	"three.module.js" : { path: "build\\three.module.js" },
};

/** A dictionary for the global imports. */
let importDictionary = {
	"three" : "externals/three.module.js"
}


// ------------------------------------------------------------------ FUNCTIONS

/** Copy the external files. */
function copyExternalFiles() {
	
	// Create a temporal copy of the files and prepare them for transpilation
	main.log('Copying external files...', 1);
	main.checkFolderStructure(EXTERNALS_FOLDER_PATH);
	for(let externalFileName in externalFiles) {
		let externalFile = externalFiles[externalFileName];
		if(fs.existsSync(externalFile)) continue;
		fs.copyFileSync(ENGINE_FOLDER_PATH + externalFile.path, 
			EXTERNALS_FOLDER_PATH + externalFileName);
	}
}


/** Transpile the TypeScript files. */
function transpileTypeScriptFiles() {

	// Create a temporal copy of the files and prepare them for transpilation
	main.log('Preprocessing source files...', 1);

	// Process each file and generates a temporal copy
	let fileIndex, fileCount = codebase.filePaths.length;
	for (fileIndex = 0; fileIndex < fileCount; fileIndex++) {
		let tsFilePath = codebase.filePaths[fileIndex];
		let temporalFilePath = path.resolve(TEMPORAL_FOLDER_PATH, tsFilePath);
		temporalFilePaths.push(temporalFilePath);
		let file = codebase.files[tsFilePath];
		main.log("Processing: " + tsFilePath, 2);
		let lines = file.data.split("\n"), lineIndex, lineCount = lines.length;
		for (lineIndex = 0; lineIndex < lineCount; lineIndex++) {
			// Add a special comment in empty lines
			if (lines[lineIndex].trim().length == 0) lines[lineIndex] = "////";
			if (lines[lineIndex].indexOf("node_modules") >= 0) lines[lineIndex] = "////";
		}
		
		main.checkFolderStructure(path.dirname(temporalFilePath));
		fs.writeFileSync(temporalFilePath, lines.join("\n"), TEXT_FILE);
	}
	
	// Transpile the TypeScript code to Javascript
	// https://www.typescriptlang.org/docs/handbook/compiler-options.html
	main.log('Transpiling source files...', 1);
	let command = 'tsc' +
		' --target es2016' +
		// ' --lib ES7 --lib DOM' + 
		' --moduleResolution node' +
		' --rootDir "."' +
		' --outDir "' + path.relative(TEMPORAL_FOLDER_PATH, MODULES_FOLDER_PATH) + '"' +
		' "' + codebase.filePaths.join('" "') + '"';

	try { // to execute the command while showing the output on console
		if (main.options.verbose) console.log(command);
		exec.execSync(command, { cwd: TEMPORAL_FOLDER_PATH, stdio: 'inherit'});
	} catch (e) { 
		console.log("Unable to transpile!!"); 
		//throw e; 
		process.exit(1);
	}

	// Remove the temporal folder
	main.cleanFolder(TEMPORAL_FOLDER_PATH, true);

	// Clean the result of the transpilation (due to interconnections between 
	// modules, all the files in the modules folder need to be processed)
	main.log('Postprocessing output files...', 1);
	for (fileIndex = 0; fileIndex < fileCount; fileIndex++) {
		let jsFilePath = codebase.filePaths[fileIndex].replace('.ts','.js');
		let moduleFilePath = path.resolve(MODULES_FOLDER_PATH, jsFilePath);
		moduleFilePaths.push(moduleFilePath);
		main.log("Processing: " + jsFilePath, 2);
		let data = fs.readFileSync(moduleFilePath, TEXT_FILE);
		let lines = data.split("\r\n"), lineIndex, lineCount = lines.length;
		for (lineIndex = 0; lineIndex < lineCount; lineIndex++) {
			let line = lines[lineIndex].trim();
			// Remove special comments
			if (line == "////") lines[lineIndex] = '';
			// Process imports/exports
			else if (line.startsWith('import ') || line.startsWith('export ')){
				// Get the path from the section between single or double quotes
				let s = '"', filePathEnd = line.lastIndexOf(s);
				if (filePathEnd < 0) filePathEnd = line.lastIndexOf(s="'");
				if (filePathEnd < 0) continue
				let filePathStart = line.lastIndexOf(s, filePathEnd - 1);
				if (filePathStart < 0) throw Error("No file path detected");

				// Remove the quotes
				let filePath = line.substring(filePathStart + 1, filePathEnd);

				// Handle the imports
				if (importDictionary[filePath]) {
					lines[lineIndex] = line.slice(0, filePathStart + 1) + 
						main.relativePath(path.dirname(moduleFilePath), 
						BUILDS_FOLDER_PATH) + "/" + importDictionary[filePath] + 
						line.slice(filePathEnd);
				}
				else if (!filePath.endsWith('.js')) 
					lines[lineIndex] = line.slice(0, filePathEnd) + '.js' +
						line.slice(filePathEnd);
			}
			// Convert spaces to tabs
			else {
				let spaces = 0, tabs = 0, spacesInTab = 4;
				while (lines[lineIndex][spaces] == ' ') spaces++;
				tabs = Math.floor(spaces / spacesInTab);
				if (tabs > 0) lines[lineIndex] = '\t'.repeat(tabs) +
					lines[lineIndex].slice(tabs * spacesInTab);
			}
		}

		// Recombine the data and save the files
		fs.writeFileSync(moduleFilePath, lines.join("\n") , TEXT_FILE);
	}
}


/** Combines the javascript files. */
function combine(filePaths, outputFilePath, type = null, prefix = "") {
	
	// Combine the javascript files
	main.log('Combining: ' + path.basename(outputFilePath), 2);
	
	// Imports
	let globalImports = [];

	// Process each file
	let fileIndex, fileCount = filePaths.length, combinedData = [];
	for (fileIndex = 0; fileIndex < fileCount; fileIndex++) {
		let data = fs.readFileSync(filePaths[fileIndex], TEXT_FILE);

		// If it is a simple combination, just add the data to the list
		if (type == null) { combinedData.push(data + "\n" ); continue; } 

		// Process each line
		let lines = data.split("\n"), combinedLines = [],
			lineIndex, lineCount = lines.length;
		for (lineIndex = 0; lineIndex < lineCount; lineIndex++) {
			let line = lines[lineIndex], l = line.trim();

			// Handle the global imports
			if (l.startsWith("import ") && (l.indexOf(" from ") >= 0)) {
				
				// Get the path from the section between single or double quotes
				let s = '"', filePathEnd = line.lastIndexOf(s);
				if (filePathEnd < 0) filePathEnd = line.lastIndexOf(s="'");
				if (filePathEnd < 0) continue
				let filePathStart = line.lastIndexOf(s, filePathEnd - 1) + 1;
				if (filePathStart <= 0) throw Error("No file path detected");

				// Remove the quotes
				let filePath = line.substring(filePathStart, filePathEnd);
				let absoluteFilePath = path.resolve(
					path.dirname(filePaths[fileIndex]), filePath);

				if (absoluteFilePath.includes(EXTERNALS_FOLDER_PATH)) {
					let gi = line.slice(0, filePathStart) + "./" +
						main.relativePath(path.dirname(outputFilePath), 
						absoluteFilePath) + line.slice(filePathEnd);
					if (!globalImports.includes(gi)) globalImports.push(gi);
				}

				// Clean the line for now
				l = line = '';
			}

			// If it is not a module, remove the export declarations
			if (type != "module" && l.startsWith("export "))
				line = line.replace("export ", "       ");

			// Add the line to the list
			combinedLines.push(line);
		}
		combinedData.push(combinedLines.join("\n"));
	}

	// If it is a module, add the global imports and the default export
	if (type == "module") {
		for (let gi of globalImports) combinedData.unshift(gi);
		combinedData.push('export default ' + MAIN_CLASS_NAME + ';');
	}

	// Write the combined file
	let data = prefix + combinedData.join("\n\n");
	fs.writeFileSync(outputFilePath, data, TEXT_FILE);
}


/** Minifies the javascript files.
 * @param fileName The file name 
 * @see https://github.com/terser/terser */
function minify (inputFilePath, outputFilePath)
{
	// Minify the code with Terser (CLI to avoid forcing to install it locally)
	main.log('Minifying: ' + path.basename(inputFilePath), 2);
	let command = 'terser -m -o ' + outputFilePath + ' ' + inputFilePath;
	try { exec.execSync(command, { stdio: 'inherit'}); }
	catch (e) { console.error("Unable to Minify!!"); throw (e); }
}


/** Builds the output files. */
function build() {

	// Show a message on console
	main.log("Creating distributable files...", 0);

	// Copy the external files
	copyExternalFiles();

	// Transpile the TypeScript files
	main.log("Transpile TypeScript files...", 1);
	transpileTypeScriptFiles();

	// Combine the JavaScript files
	main.log("Combining JavaScript files...", 1);
	combine(moduleFilePaths, BUILD_FILE_PATH + '.module.js', "module" );
	combine(moduleFilePaths, BUILD_FILE_PATH + '.js', "browser");

	// Create the bundles with the necessary three js
	main.log("Creating the bundles...", 1);
	combine([ENGINE_FILE_PATH, 
		// LOADERS_FOLDER_PATH + 'GLTFLoader.js',
		BUILD_FILE_PATH + '.js'], BUILD_FILE_PATH + '.bundle.js', null,
		"// " + MAIN_NAMESPACE + " ThreeJS Bundle\n\n");

	// Minimize the Javascript files using terse
	// main.log("Minifying the Javascript files...", 1);
	// minify(BUILD_FILE_PATH + '.js', BUILD_FILE_PATH + '.min.js');
	// minify(BUILD_FILE_PATH + '.bundle.js', BUILD_FILE_PATH + '.bundle.min.js');
}


// Define the exports of the module
module.exports = {build};