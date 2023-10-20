/******************************************************************************
 GeoPose Sandbox Build System - Documentation
******************************************************************************/

'use strict' // Make sure that we are working on strict mode

// ------------------------------------------------------------------ CONSTANTS
// The NodeJS modules
const fs = require('fs'), 				// File System access
	path = require('path'),				// File Path handling
	main = require('../build'),			// The main module of the build system
	codebase = require('./build_codebase');	// The codebase of the project

/** Creates the JSON documentation file. */
function createJsonFile() {

	// Create the file data
	let data = { name: MAIN_NAMESPACE, classes: {}, files: {} };
	let tab = "\t";
	data.classes = codebase.classes;
	
	// Go file by file
	codebase.filePaths.forEach((filePath) => {
		let f = data.files[filePath] = {};
		let file = codebase.files[filePath];
		f.classes = file.classes;
		f.links = file.links;
	});

	// Convert the JSON data to text
	let fileData = JSON.stringify(data, null, tab);
	
	// Clean the resulting string line by line
	let lines = fileData.split('\n'), lineIndex, lineCount = lines.length; 
	for (lineIndex = 0; lineIndex < lineCount; lineIndex++) {
		let line = lines[lineIndex], tLine = line.trim();
		let level = line.length - tLine.length;
		let lastChar = line[line.length - 1];
		
		// Reduce the size of elements and arrays
		if (lastChar == '{' || lastChar == '[') {
			let endText = (tab.repeat(level)) + ((lastChar == '{')? '}': ']');
			for (let endLine = lineIndex + 1; endLine < lineCount; endLine++) {
				let line2 = lines[endLine], lc = line2[line2.length-1];
				if (lc == '{' || lc == '[') break;
				if (line2.startsWith(endText)) {
					let compoundLine = line;
					for (let l = lineIndex + 1; l <= endLine; l++)
						compoundLine += " " + lines[l].trim();
					lines[lineIndex] = compoundLine;
					lines.splice(lineIndex + 1, endLine - lineIndex);
					lineCount -= endLine - lineIndex; 
					break;
				}
			}
		}
	}

	// Rejoin the lines and save the resulting data
	fs.writeFileSync(path.join(REFERENCE_DOCS_FOLDER_PATH, 
		MAIN_FILE_NAME + '.reference.json'), lines.join("\n"), TEXT_FILE);
}


/** Creates the AsciiDoc documentation file. */
function createAsciiDocFile() {

	// Get the list of classes and their names
	let classes = codebase.classes, classNames = Object.keys(classes).sort();

	// Create the data for the HTML file and some functions to write it
	let fileData = '';
	function writeSoftBreak() { fileData += " + \n" };
	function writeHardBreak() { fileData += " \n\n" };
	function writeHeader(text = '', level = 0, newLine = true) {
		fileData += '='.repeat(level+1) + ' ' + text + (newLine? '\n\n' : '');
	}
	function writeParagraph(text = '', level = 0, newLine = true) { 
		fileData += ' '.repeat(level) + text + (newLine? '\n\n' : '');
	}
	function writeHorizontalRule() { fileData += "'''\n\n" };
	function writeType(type, prefix = null, suffix = null, newLine = true) {
		if (type) {
			if (prefix) fileData += prefix;
			if (!classNames.includes(type.name)) fileData += type.name;
			else fileData += '<<' + type.name + '>>'; 
			if (type.subtype) writeType(type.subtype, ' <', '>', false);
			if (suffix) fileData += suffix;
		}
		if (newLine) fileData += '\n\n';
	}
	function writeSection(title, members) {
		writeHeader(title, 3);
		for(let member of members) {
			fileData += "**";
			writeParagraph(member.name, 0, false);
			if (member.kind == "method" || member.kind == "constructor") {
				fileData += " (";
				let paramIndex, paramCount = member.parameters.length;
				for (paramIndex = 0; paramIndex < paramCount; paramIndex++) {
					let param = member.parameters[paramIndex];
					fileData += param.name;
					if (param.type) writeType(param.type, " : ", null, false);
					if (paramIndex < paramCount -1) fileData += ', ';
				}
				fileData += ")";
			}
			writeType(member.type, " : ", null, false);
			fileData += "**";
			if (member.comment && member.comment.description) {
				writeSoftBreak();
				writeParagraph(member.comment.description, 0, false);
			}
			if (member.kind == "method" || member.kind == "constructor") {
				let paramIndex, paramCount = member.parameters.length;
				for (paramIndex = 0; paramIndex < paramCount; paramIndex++) {
					let param = member.parameters[paramIndex];
					writeSoftBreak();
					if (!member.comment.params)
						throw Error("Invalid param description for: " + member.name);
					if (member.comment.params[param.name])
						writeParagraph("*_"+ param.name + ":_* " + 
							member.comment.params[param.name], 0, false);
				}
				if (member.comment.return){
					writeSoftBreak();
					writeParagraph("*_Returns:_* " + 
						member.comment.return, 0, false);
				}
			}
			writeHardBreak();
		}
	}

	// Write the document header
	writeHeader(MAIN_TITLE + ' Class Reference');

	// Add an index to the classes list of classes
	writeHeader('Index', 1);
	
	// Grouped by folder
	writeHeader('Grouped by folder:', 2);
	let filePaths = [...codebase.filePaths].sort(), 
		currentDir = ".", classList = []
	for (let filePath of filePaths) {
		let fileDir = path.dirname(filePath), 
			fileName = path.basename(filePath,".ts");
		if (currentDir != fileDir) {
			writeParagraph('<<' + classList.join('>>, <<') + '>>');
			writeHeader(fileDir, 3); classList = []; currentDir = fileDir;
		}
		classList.push(fileName);
	}
	writeParagraph('<<' + classList.join('>>, <<') + '>>');

	// In alphabetical order
	writeHeader('Alphabetical Order:', 2);
	writeParagraph('<<' + classNames.join('>>, <<') + '>>');

	// Add a (sorted) list of classes
	writeHeader('Classes', 1);
	let classIndex, classCount = classNames.length;
	for (classIndex = 0; classIndex < classCount; classIndex++) {
		const className = classNames[classIndex];
		const type = classes[className];

		try {
			writeHeader('[[' + type.name + ']]*' + type.name + '*',2 , false);
			writeType(type.type, " *:* ");
			writeParagraph(type.comment.description);
		} catch (e) {
			throw Error("Unable to write "+ className + " :" + e.message);
		}

		// Add the list of public members
		let memberNames = Object.keys(type.members);
		let memberIndex, memberCount = memberNames.length;
		let constructors = [], properties = [], methods = [];
		for (memberIndex = 0; memberIndex < memberCount; memberIndex++) {
			const member = type.members[memberNames[memberIndex]];
			if (!member.modifiers.includes("public")) continue;
			if (member.kind == "constructor") constructors.push(member);
			else if (member.kind == "accessor") properties.push(member);
			else if (member.kind == "method") methods.push(member);
		}

		try {
			// Write the different sections of the class
			if (constructors.length > 0) writeSection("Constructor:", constructors);
			if (properties.length > 0) writeSection("Properties:", properties);
			if (methods.length > 0)  writeSection("Methods:", methods);
		}
		catch(e) {
			throw Error("Error with class: " + type.name + " -> " + e.message);
		}
	
		writeHorizontalRule();
	}

	// Write the result to a file
	fs.writeFileSync(path.join(REFERENCE_DOCS_FOLDER_PATH, 
		MAIN_FILE_NAME + '.reference.adoc'), fileData, TEXT_FILE);
}


/** Creates the HTML documentation file. */
function createHtmlFile() {

	// Get the list of classes and their names
	let classes = codebase.classes, classNames = Object.keys(classes).sort();

	// Get the title of the 
	let title = MAIN_TITLE + ' Class Reference';
	
	// Create the data for the HTML file and some functions to write it
	let htmlData = '', htmlIndentation = 0, cssIndentation = 0;
	function startHtmlElement(tag, attribs = {}, indent = 1, closed = false,
		 newLine = true) { 
		if (!isNaN(indent)) {
			htmlData +='\t'.repeat(htmlIndentation); htmlIndentation += indent;
		}
		htmlData += '<' + tag; 
		for (let id in attribs)	htmlData += ' ' + id + '="' + attribs[id]+ '"';
		htmlData += (closed? '/>' : '>') + (newLine? '\n' : '');
	}
	function endHtmlElement(tag, indent = -1, newLine = true) { 
		if (!isNaN(indent)) {
			htmlIndentation += indent; htmlData +='\t'.repeat(htmlIndentation);
		}
		htmlData += '</' + tag + '>' + (newLine? '\n' : ''); ; 
	}
	function createHtmlElement(tag, attribs = {}, text = null, 
			indentation = 0, closed = true, newLine = true) { 
		startHtmlElement(tag, attribs, indentation, false, false);
		if (text && text.length > 0) htmlData += text;
		if (closed) endHtmlElement(tag, NaN, false);
		if (newLine) htmlData += '\n';
	}
	function startCssRule (selector, increaseIndentation = true, newLine = true) {
		htmlData += '\t'.repeat(cssIndentation) + selector + ' {' +
			(newLine? '\n' : ' ');
		if (increaseIndentation) cssIndentation++;
	}
	function endCssRule (decreaseIndentation = true) {
		if (decreaseIndentation) cssIndentation--;
		htmlData += '\t'.repeat(cssIndentation) + '}\n ';
	}
	function createCssRule (selector, declaration) {
		startCssRule(selector, false, false);
		for (let property in declaration) htmlData += 
			property.replace(/_/g, '-') + ': ' + declaration[property]+ '; ';
		htmlData += '}\n ';
	}
	function writeType(type, prefix = null, suffix = null) {
		if (prefix) htmlData += prefix;
		if (classNames.includes(type.name)) createHtmlElement('a', 
			{ href: "#" + type.name }, type.name, NaN, true, false);
		else htmlData += type.name;
		if (type.subtype) writeType(type.subtype, ' &#60;', '&#62;');
		if (suffix) htmlData += suffix;
	}
	function writeSection(title, members) {
		startHtmlElement('div',  { class: 'section' });
		createHtmlElement('p', { class: 'title'}, title);
		for (let member of members) {
			startHtmlElement('div',  { class: 'member' });
			startHtmlElement('p', {class: 'name'}, 0, false, false);
			htmlData += member.name;
			if (member.kind == "method" || member.kind == "constructor") {
				htmlData += " (";
				let paramIndex, paramCount = member.parameters.length;
				for (paramIndex = 0; paramIndex < paramCount; paramIndex++) {
					let param = member.parameters[paramIndex];
					htmlData += param.name;
					if (param.type) writeType(param.type, ": ");
					if (param.defaultValue) 
						htmlData += " = " + param.defaultValue;
					if (paramIndex < paramCount -1) htmlData += ', ';
				}
				htmlData += ")";
			}
			if (member.type) writeType(member.type, " : ")
			endHtmlElement('p', NaN);
			if (member.comment && member.comment.description)
				createHtmlElement('p', { class: "description" }, 
				member.comment.description);
			if (member.kind == "method" || member.kind == "constructor") {
				let paramIndex, paramCount = member.parameters.length;
				for (paramIndex = 0; paramIndex < paramCount; paramIndex++) {
					let param = member.parameters[paramIndex], n = param.name;
					if (!member.comment) continue;
					if (member.comment.params && member.comment.params[n])
						createHtmlElement('p', { class: "description" },
							"<em>" + n + "</em>: " + member.comment.params[n]);
				}
				if (member.comment.return) createHtmlElement('p', 
					{ class: "description" }, "<em>Returns</em>: " + 
					member.comment.return);
		}
			endHtmlElement('div');
		}
		endHtmlElement('div');
	}

	// Define the header of the document
	startHtmlElement('!DOCTYPE html', null, NaN); 
	startHtmlElement('html');
	startHtmlElement('head');
	createHtmlElement('meta', {charset: "utf-8"}, undefined, 0, false);
	createHtmlElement('link', {rel: "icon", href:"data:;base64,="}, 
		undefined, 0, false);
	createHtmlElement('title', null, title);
	
	// Create the inline CSS rules
	let mainColor = 'white', emphasisColor = '#48F', backgroundColor = '#222',
		linkColor = '#48D', linkVisitedColor = '#248',
		border = 'solid 1px ' + emphasisColor;
	startHtmlElement('style', null); 
	createCssRule('*', { margin: 0, box_sizing: 'border-box' });
	createCssRule('html', { font_family: 'Arial', font_size: '1.5vh',
		color: mainColor, background_color: backgroundColor, 
		text_emphasis_color: emphasisColor}) ;
	createCssRule('h1, h2', { color: emphasisColor, margin: '0 0 2vh 0'}) ;
	createCssRule('h3, h4', { margin: '1vh 0 0 0'}) ;
	createCssRule('a', { text_decoration: 'none', color: linkColor }) ;
	createCssRule('a:visited', { color: linkVisitedColor });
	createCssRule('html, body', { width: '100%', height: '100%' });
	createCssRule('header', { height: '6vh', padding: '1vh'});
	createCssRule('main', { display: 'flex', height: 'calc(100% - 6vh)'});
	createCssRule('nav, section', {	overflow_y: 'auto', height: '100%',
		padding: '1vh 2vh 1vh 1vh;'});
	createCssRule('nav', { flex_grow: 0 });
	createCssRule('section', { flex_grow: 1});
	createCssRule('hr', { max_width: '60vh', margin: '2vh auto', 
		color: emphasisColor}) ;
	createCssRule('.class', { max_width: '60vh', margin: '2vh auto',
		font_size: '2.5vh' });
	createCssRule('.section', { margin: "0.5vh 0.5vh 2vh 0.5vh", 
		font_size: '2vh'});
	createCssRule('.member', { margin: "0.5vh 0.5vh 1vh 0.5vh",
		 font_size: '1.5vh' });
	createCssRule('.title', { font_weight: 'bold' });
	createCssRule('.name, .type', { display: 'inline', font_weight: 'bold' });
	createCssRule('.description', { font_size: '1.5vh', font_weight: 'normal' });
	createCssRule('header', { border_bottom: border });
	startCssRule('@media (orientation: landscape)');
	createCssRule('main', { flex_direction: 'row' });
	createCssRule('nav', { border_right: border });
	createCssRule('nav a', { display: 'block' });
	endCssRule();
	startCssRule('@media (orientation: portrait)');
	createCssRule('main', { flex_direction: 'column' });
	createCssRule('nav', { max_height: '10%', border_bottom: border });
	createCssRule('nav a', { display: 'inline' });
	endCssRule();
	endHtmlElement('style');

	// Close the Start defining the body of the document
	endHtmlElement('head');
	startHtmlElement('body');

	// Add a header on top
	startHtmlElement('header');
	createHtmlElement('h1', null, title);
	endHtmlElement('header');

	// Start the main part of the page
	startHtmlElement('main');

	// Start the navigator
	startHtmlElement('nav');
	
	// Create a list of classes, grouped by folder
	createHtmlElement('h2', null, 'By Folder:');
	let filePaths = [... codebase.filePaths].sort(), currentDir = ".";
	for (let filePath of filePaths) {
		let fileDir = path.dirname(filePath), 
			fileName = path.basename(filePath,".ts");
		if (currentDir != fileDir) {
			currentDir = fileDir; createHtmlElement('h3', null, fileDir);			
		}
		createHtmlElement('a', {href: "#" + fileName}, fileName);
	}
	
	// Create an horizontal divider
	startHtmlElement("hr", null, 0);

	// Alphabetic Order
	createHtmlElement('h2', null, 'Alphabetic Order:');
	let classIndex, classCount = classNames.length;
	for (classIndex = 0; classIndex < classCount; classIndex++) {
		const classType = classes[classNames[classIndex]];
		createHtmlElement('a', {href: "#" + classType.name}, classType.name);
	}

	// End the navigator definition
	endHtmlElement('nav');

	// Create the main section
	startHtmlElement('section');
	for (classIndex = 0; classIndex < classCount; classIndex++) {
		const classType = classes[classNames[classIndex]];
		startHtmlElement('div', {id: classType.name , class: 'class'});
	
		// Show the name, type and description of the class
		createHtmlElement('p', {class: 'name'}, classType.name);
		if (classType.type)	{
			startHtmlElement('p', {class: 'type'}, 0, false, false); 
			writeType(classType.type, ": ");
			endHtmlElement('p', NaN); 
		}
		createHtmlElement('p', { class: "description" }, 
			classType.comment.description, "HTML");
		
		// Add the list of public members
		let memberNames = Object.keys(classType.members);
		let memberIndex, memberCount = memberNames.length;
		let constructors = [], properties = [], methods = [];
		for (memberIndex = 0; memberIndex < memberCount; memberIndex++) {
			const member = classType.members[memberNames[memberIndex]];
			if (!member.modifiers.includes("public")) continue;
			if (member.kind == "constructor") constructors.push(member);
			else if (member.kind == "accessor") properties.push(member);
			else if (member.kind == "method") methods.push(member);
		}

		// Write the different sections of the class
		if (constructors.length > 0) writeSection("Constructor:", constructors);
		if (properties.length > 0) writeSection("Properties:", properties);
		if (methods.length > 0)  writeSection("Methods:", methods);
	
		// Close the class element
		endHtmlElement('div');

		// Create an horizontal ruler to better separate between classes
		if (classIndex < classCount - 2) startHtmlElement("hr", null, 0);
	}

	// Close all the remaining elements
	endHtmlElement('section'); endHtmlElement('main'); 
	endHtmlElement('body'); endHtmlElement('html');

	// Write the result to a file
	fs.writeFileSync(path.join(REFERENCE_DOCS_FOLDER_PATH, 
		MAIN_FILE_NAME + '.reference.html'), htmlData, TEXT_FILE);
}


/** Builds the codebase (extracting useful data from the source files). */
function build() {

	// Show a message on console
	main.log("Creating documentation files...", 0);

	// Remove the temporal folder
	main.checkFolderStructure(REFERENCE_DOCS_FOLDER_PATH, true);

	// Create the JSON documentation file
	main.log("Creating the JSON documentation file...", 1);
	createJsonFile();

	// Create the AsciiDoc documentation file
	main.log("Creating the AsciiDoc documentation file...", 1);
	createAsciiDocFile();

	// Create the HTML documentation file
	main.log("Creating the HTML documentation file...", 1);
	createHtmlFile();
}


// Define the exports of the module
module.exports = {build};