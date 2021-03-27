/******************************************************************************
  GeoPose Sandbox Build System - Distributables
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

// ------------------------------------------------------------------ FUNCTIONS

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
		' --target ES6' +
		' --moduleResolution node' +
		' --rootDir "."' +
		' --outDir "' + path.relative(TEMPORAL_FOLDER_PATH, MODULES_FOLDER_PATH) + '"' +
		' "' + codebase.filePaths.join('" "') + '"';

	try { // to execute the command while showing the output on console
		if (main.options.verbose) console.log(command);
		exec.execSync(command, { cwd: TEMPORAL_FOLDER_PATH, stdio: 'inherit'});
	} catch (e) { console.error("Unable to transpile!!"); throw (e); }

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

				// Remove global imports (preserving the number of characters)
				if (!filePath.startsWith(".")) lines[lineIndex] = '';
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
	main.log('Combining: ' + path.basename(outputFilePath), 1);
	
	// Process each file
	let fileIndex, fileCount = filePaths.length, combinedData = [];
	for (fileIndex = 0; fileIndex < fileCount; fileIndex++) {
		let data = fs.readFileSync(filePaths[fileIndex], TEXT_FILE);

		// If it is a simple combination, just add the data to the list
		if (type == null) { combinedData.push(data + "\n" ); continue; } 

		// 
		let lines = data.split("\n"), combinedLines = [],
			lineIndex, lineCount = lines.length;
		for (lineIndex = 0; lineIndex < lineCount; lineIndex++) {
			let line = lines[lineIndex], l = line.trim();

			// Remove export/import declarations
			if ((l.startsWith("export ") || l.startsWith("import "))
				&& (l.indexOf(" from ") >= 0)) line = l = "";

			// If it is not a module, remove the export declarations
			if (type != "module" && l.startsWith("export "))
				line = line.replace("export ", "       ");

			// Add the line to the list
			combinedLines.push(line);
		}
		combinedData.push(combinedLines.join("\n"));
	}
	
	// If it is a module, add the default export
	if (type == "module") 
		combinedData.push('export default ' + MAIN_NAMESPACE + ';');

	// Write the combined file
	let data = prefix + combinedData.join("\n\n");
	fs.writeFileSync(outputFilePath, data, TEXT_FILE);
}


/** Builds the output files. */
function build() {

	// Show a message on console
	main.log("Creating distributable files...", 0);

	// Transpile the TypeScript files
	main.log("Transpile TypeScript files...", 1);
	transpileTypeScriptFiles();

	// Combine the JavaScript files
	main.log("Combining JavaScript files...", 1);
	combine(moduleFilePaths, BUILD_FILE_PATH + '.module.js', "module" );
	combine(moduleFilePaths, BUILD_FILE_PATH + '.js', "browser");

	// Create the bundles with the necessary three js
	main.log("Creating the bundles...", 1);
	combine([ENGINE_FILE_PATH, LOADERS_FOLDER_PATH + 'GLTFLoader.js',
		BUILD_FILE_PATH + '.js'], BUILD_FILE_PATH + '.bundle.js', null,
		"// GeoPose Sandbox + ThreeJS Bundle\n\n");

}


// Define the exports of the module
module.exports = {build};