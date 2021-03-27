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

	
/** Parse the JavaDoc comments description to clean them and add links
 * @param text The JavaDoc comments description. */ 
function processCommentText(text) {
	
	// Clean the comment
	text = text.trim();
	if (!text.endsWith('.')) text += '.';
	
	// Parse the comment, extracting the parts
	let parts = [], isWord = []; text.split(' ');
	let charCount = text.length, word = "";
	for(let charIndex = 0; charIndex < charCount; charIndex++) {
		let char = text[charIndex];
		if (char == ' ' || char == '\t' || char == '-' || char == '.' || 
			char == ',' || char == ';' || char == ':') {
			if (word.length > 0) { parts.push(word); isWord.push(true) };
			parts.push(char); isWord.push(false); word = "";
		} else word += char;
	}

	// Process each part
	let classNames = Object.keys(codebase.classes).sort();
	let partCount = parts.length, nameCount = classNames.length;
	for(let partIndex = 0; partIndex < partCount; partIndex++) {
		if (!isWord[partIndex]) continue; let part = parts[partIndex]; 
		for(let nameIndex = 0; nameIndex < nameCount; nameIndex++) {
			let name = classNames[nameIndex];
			if (part.startsWith(name)) {
				parts[partIndex] = "<<" + name + "," + part + ">>";
				break;
			}
		}
	}

	// Rejoin the parts and return the processed JavaDoc
	return parts.join('');
}


/** Creates the JSON documentation file. */
function createJsonFile() {

	// Create the file data
	let data = { name: MAIN_TITLE, classes: {}, files: {} };
	let tab = "\t";
	data.classes = codebase.classes;
	
	codebase.filePaths.forEach((filePath) => {
		let f = data.files[filePath] = {};
		let file = codebase.files[filePath];
		f.classes = file.classes;
		f.links = file.links;
	})
	
	data = JSON.stringify(data, null, tab);

	
	// Remove the references to local filepaths
	

	// R
	let lines = data.split('\n'), lineIndex, lineCount = lines.length; 
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

	data = lines.join("\n");

	fs.writeFileSync(path.join(DOCS_FOLDER_PATH, MAIN_FILENAME + '.json'), 
		data, TEXT_FILE);
}


/** Creates the AsciiDoc documentation file. */
function createAsciiDocFile() {

	// Get the list of classes and their names
	let classes = codebase.classes, classNames = Object.keys(classes).sort();

	// Create the file data
	let fileData = '= ' + MAIN_TITLE + '\n';

	// Add a (sorted) list of classes
	fileData += "\n\n== Classes\n";
	let classIndex, classCount = classNames.length;
	for (classIndex = 0; classIndex < classCount; classIndex++) {
		const type = classes[classNames[classIndex]];

		if (!type.comment) throw Error("Invalid comment for "
			+ classNames[classIndex]); 
		fileData += '[[' + type.name + ']]*' + type.name + ':* ' +
			processCommentText(type.comment.description) + "\n\n";

		// Add the list of public members
		let memberNames = Object.keys(type.members);
		let memberIndex, memberCount = memberNames.length;
		for (memberIndex = 0; memberIndex < memberCount; memberIndex++) {
			const member = type.members[memberNames[memberIndex]];
			if (member.modifiers.includes("public")) 
				fileData += '* *' + member.name + ":* " + 
				processCommentText(member.comment.description) + "\n\n";
		}
	}

	// Add the list of files
	let filePaths = main.findFilesInFolder(SOURCES_FOLDER_PATH);
	fileData += "\n\n== Files\n";
	filePaths.forEach(filePath => { 
		fileData += '* ' + 	path.relative(SOURCES_FOLDER_PATH, filePath) + "\n";
	});

	// Write the result to a file
	fs.writeFileSync(path.join(DOCS_FOLDER_PATH, MAIN_FILENAME + '.adoc'), 
		fileData, TEXT_FILE);
}


/** Builds the codebase (extracting useful data from the source files). */
function build() {

	// Show a message on console
	main.log("Creating documentation files...", 0);

	// Create the JSON documentation file
	main.log("Creating the JSON documentation file...", 1);
	createJsonFile();

	// Create the Asciidoc documentation file
	main.log("Creating the AsciiDoc documentation file...", 1);
	createAsciiDocFile();
}


// Define the exports of the module
module.exports = {build};