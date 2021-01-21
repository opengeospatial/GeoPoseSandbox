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

/** Creates the AscciDoc documentation file. */
function createAsciiDocFile() {

	// Create the file data
	let fileData = '= ' + MAIN_TITLE + '\n';

	// Add a (sorted) list of classes
	fileData += "\n\n== Classes\n";
	let classes = codebase.classes, classNames = Object.keys(classes).sort(),
		classIndex, classCount = classNames.length;
	for (classIndex = 0; classIndex < classCount; classIndex++) {
		const type = classes[classNames[classIndex]];
		fileData += '* ' + 	type.name + " (at " + 
			path.relative(SOURCES_FOLDER_PATH, type.filePath) + ")\n";
		fileData += '** ' + type.comment + "\n";
	}

	// Add the list of fields
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
	main.log("Creating documentation files...", 1);

	// Create the Asciidoc documentation file
	main.log("Creating the Asciidoc documentation file...", 2);
	createAsciiDocFile();
}


// Define the exports of the module
module.exports = {build};