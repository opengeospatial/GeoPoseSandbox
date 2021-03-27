/******************************************************************************
  GeoPose Sandbox Build System - Codebase
******************************************************************************/

'use strict' // Make sure that we are working on strict mode

// ------------------------------------------------------------------ CONSTANTS
// The NodeJS modules
const fs = require('fs'), 			// File System access
	path = require('path'),			// File Path handling
	exec = require('child_process').execSync,	// External command execution
	main = require('../build');		// The main module of the build system
const { relative } = require('path');
const { types } = require('util');


// ----------------------------------------------------------- GLOBAL VARIABLES

/** The main file of the codebase. */
let mainFile = {};

/** The list of files of the codebase. */
let files = {};

/** The list of paths of files of the codebase. */
let filePaths = [];

/** The list of classes in the codebase. */
let classes = {};

// -------------------------------------------------------- GLOBAL ENUMERATIONS

/** Enumerates the different item types. */
const ItemTypes = {
	whitespace: "whitespace", newline: "newline", word: "word",
	string: "string", comment: "comment", keyword: "keyword", number: "number",
	other: "other"
};

/** Enumerates the different keywords in TypeScript. */
const keywords = ["break", "case", "catch", "class", "const", "continue",
	"debugger", "default", "delete", "do", "else", "enum", "export",
	"extends", "false", "finally", "for", "function", "if", "import",
	"in", "instanceof", "new", "null", "return", "super", "switch",
	"this", "throw", "true", "try", "typeof", "var", "void", "while",
	"with", "as", "implements", "interface", "let", "package", "private",
	"protected", "public", "static", "yield", "any", "boolean", "constructor",
	"declare", "get", "module", "require", "number", "set", "string",
	"symbol", "type", "from", "of"];


// ------------------------------------------------------------------ FUNCTIONS

/** Analyzes a source file.
 *  @param filePath The path of the source path. */
function analyzeSourceFile(filePath) {

	// Show a message on console
	const relativeFilePath = main.relativePath(SOURCES_FOLDER_PATH, filePath);
	main.log("Analyzing File:  " + relativeFilePath, 3, true);

	// Read the file and create a structure to store its data
	let file = {
		data: fs.readFileSync(filePath, { encoding: "utf8" }),
		path: filePath, relativePath: relativeFilePath, 
		classes: [], links: [], items: []
	};

	// Parse the file looking for the different items 
	let charIndex, charCount = file.data.length, delimiter;
	let lineIndex = 0, columnIndex = 0, level = 0;
	let itemType, item = {
		string: "", type: ItemTypes.whitespace,
		index: 0, line: 0, column: 0, level: 0
	};

	// Parse the file data character by character
	for (charIndex = 0; charIndex < charCount; charIndex++) {

		// Get the current, previous and next chars for higher versatility
		const char = file.data[charIndex];
		const pChar = (charIndex > 0) ? file.data[charIndex - 1] : null;
		const nChar = (charIndex < charCount - 1) ? file.data[charIndex + 1] : null;

		// Check if it is a newline character
		if (char == '\n') {

			// Advance to the next line
			lineIndex++; columnIndex = 0;

			// If there is no delimiter, treat it as a whitespace
			if (!delimiter) itemType = ItemTypes.newline;
			else if (itemType == ItemTypes.string) throw new Error(
				"Unfinished string at:" + filePath + ":" + lineIndex);
			continue; // Skip the "\n" character
		} else if (char == '\r') continue; // Skip the "\r" character

		// Parse comments, especially if they are JavaDoc
		else if (itemType == ItemTypes.comment) {
			if (delimiter && char == '/' && pChar == '*') {
				item.string += char; delimiter = null;
				itemType = ItemTypes.whitespace;

				// Get the data from JavaDoc 
				if (item.string.trim().startsWith("/**")) {
					let tag = "description", name = null, text = "";
					item.javaDoc = { description: "" };
					let words = item.string.split(/ |\t|\/\*\*|\*\/|\*/);
					let wordIndex, wordCount = words.length;
					for (wordIndex = 0; wordIndex < wordCount; wordIndex++) {
						const word = words[wordIndex];
						if (word.length == 0) continue;
						if (word.startsWith('@')) {
							name = null; text = "";
							switch (word) {
								case '@author': tag = "author"; break;
								case '@version': tag = "version"; break;
								case '@since': tag = "since"; break;
								case '@see': tag = "see"; break;
								case '@return': case '@returns':
									tag = "return"; break;
								case '@deprecated': tag = "deprecated"; break;
								case '@param': tag = "params";
									name = words[++wordIndex]; break;
								case '@throws': // @throws == @exception 
								case '@exception': tag = "throws";
									name = words[++wordIndex]; break;
								default: throw Error(
									"Invalid JavaDoc tag: " + word);
							}
						} else text += (((text != "") ? " " : "") + word);
						if (name != null) {
							if (!item.javaDoc[tag]) item.javaDoc[tag] = {};
							item.javaDoc[tag][name] = text;
						} else item.javaDoc[tag] = text;
					}
				}
			}
		}

		// Check if we have to continue process a string
		else if (itemType == ItemTypes.string) {
			if (char == delimiter && pChar != '\\') {
				item.string += char; delimiter = null;
				itemType = ItemTypes.whitespace;
			}
		}

		// Otherwise, try to determine the type of item
		else {
			if (char == '"' || char == '\'' || char == '`') { // Strings
				itemType = ItemTypes.string; delimiter = char;
			} else if (char == '/' && (nChar == '/' || nChar == '*')) {
				itemType = ItemTypes.comment; 
				delimiter = (nChar == '*') ? '*/' : null; // Multiline comments
			} else if (char == ' ' || char == '\t') { // Whitespace
				itemType = ItemTypes.whitespace;
			} else if (((char >= '0' && char <= '9') && 
				itemType != ItemTypes.word) ||
				(char == '.' && itemType == ItemTypes.number)) { // Number
				itemType = ItemTypes.number;
			} else if (((char >= 'A' && char <= 'Z') || 
				(char >= 'a' && char <= 'z')) || (char == '_') ||
				((char >= '0' && char <= '9') && item.string != "")) {
				itemType = ItemTypes.word;	// Word
			} else itemType = ItemTypes.other; // Other 
		}

		// When the item type is different from the previous one
		if ((item.type != itemType && item.type != ItemTypes.whitespace) ||
			item.type == ItemTypes.other) {

			// Check the type of word
			if (item.type == ItemTypes.word && keywords.includes(item.string))
				item.type = ItemTypes.keyword;

			// Add the item to the list
			file.items.push(item);

			// Check the depth level
			if (item.string == "{") level++;
			else if (item.string == "}") level--;

			// Create a new temporal item
			item = {
				string: "", type: itemType, previousType: item.type,
				oldLine: lineIndex + 1, oldColumn: columnIndex, level: level
			};
		}

		// Store non-whitespace characters
		if (itemType != ItemTypes.whitespace) item.string += char;
		else item.oldColumn++;

		// Store the previous item type
		item.type = itemType;

		// Increase the column number
		columnIndex++;
	}

	// Add any remaining item
	if (item) file.items.push(item);

	// Process the items to analyze the code structure
	let itemIndex, itemCount = file.items.length;
	let type = null, javaDoc = null;
	for (itemIndex = 0; itemIndex < itemCount; itemIndex++) {

		// Get the current, previous and next chars for higher versatility
		item = file.items[itemIndex];
		const pItem = (itemIndex > 0) ? file.items[itemIndex - 1] : null;
		const nItem = (itemIndex < itemCount - 1) ? file.items[itemIndex + 1] : null;

		// Get JavaDoc comments
		if (item.javaDoc != null) javaDoc = item.javaDoc;

		// Analyze import declarations
		if (item.string == "from") {
			let link = nItem.string.replace(/"|'/g,'') + '.ts';
			let linkedFile = path.resolve(path.dirname(filePath), link);
			file.links.push(main.relativePath(SOURCES_FOLDER_PATH, linkedFile));
		}

		// Analyze class declarations
		if (item.string == "class") {
			type = {
				name: nItem.string, comment: javaDoc, extends: null, 
				file: relativeFilePath,	members: {}
			};
			main.log("Found class: " + type.name, 3, true);

			// Make sure this class is defined at the global level
			if (item.level != 0) throw Error("Class '" + type.name +
				"is defined in a wrong block level: " + item.level);

			// Check if this class extends another
			if (file.items[itemIndex + 2].string == "extends") {
				type.extends = file.items[itemIndex + 3].string;
			}

			while (file.items[++itemIndex].level < 1) continue;

			module.exports.classes[type.name] = type;
			file.classes.push(type.name);
		}
		else if (item.string == '}' && item.level == 0) type = null;

		// Extract the members of the classes
		if (type !== null && item.level == 1) {
			let isConstructor = (item.string == "constructor");
			if (item.type == ItemTypes.word || isConstructor) {
				let memberName = (isConstructor)? "<constructor>": item.string;

				// Create a member of the class or reload it if duplicated 
				if (!type.members[memberName]) type.members[memberName] = {
					name: item.string, comment: javaDoc, modifiers: [] };
				let member = type.members[memberName];

				// Get the modifiers
				let modifierIndex = itemIndex - 1, modifier = pItem, m = {};
				while (modifier.type == ItemTypes.keyword) {
					member.modifiers.push(modifier.string);
					m[modifier.string] = true;
					modifier = file.items[--modifierIndex];
				}

				// Set the type and accessibility of the member
				if (!(m['private'] || m['protected']) && 
					!member.modifiers.includes("public"))
					member.modifiers.push("public");
				if (m['readonly']) member.readonly = true;
				if (isConstructor) member.type = "constructor";
				else if (m['get'] || m['set']) member.type = "accessor";
				else if (nItem.string == '(') member.type = "method";
				else member.type = "field";

				// Advance to the end of the member
				while (item.level >= 1) {
					item = file.items[++itemIndex];
					if ((item.string == ';' || item.string == '}' &&
						item.level == 1)) break;
				}
			}
		}
	}

	// Add the file to the list
	module.exports.files[relativeFilePath] = file;
}



/** Reorder the list of file paths, using the class hierarchy. 
 *  @param initialFilepaths Defines the filepaths to put in the beginning. */
function reorderFilePaths(initialFilepaths) {
	let classes = module.exports.classes, classNames = Object.keys(classes),
		classOrder = [], classIndex, classCount = classNames.length;

	// Show the original list of files
	let fileNames = [];
	module.exports.filePaths.forEach(fp => fileNames.push(path.basename(fp)));
	main.log("List of files: " + fileNames.join(', '), 2, true);

	// Create a copy of the list of file paths and create a new list
	let filePaths = [...initialFilepaths];

	// Recursively insert a new class into the ordered list
	function insertClass(className) {
		if (!(classes[className]) || classOrder.includes(className)) return;
		if (classes[className].extends) insertClass(classes[className].extends);
		classOrder.push(className);
	}

	// Reorder the name of the classes based on their hierarchy
	for (classIndex = 0; classIndex < classCount; classIndex++)
		insertClass(classNames[classIndex]);

	// Reorder the list of file paths, using the class hierarchy
	for (classIndex = 0; classIndex < classCount; classIndex++) {
		let filePath = classes[classOrder[classIndex]].file;
		if (!filePaths.includes(filePath)) filePaths.push(filePath);
	}

	// If there are any files that have not yet included, do it now
	module.exports.filePaths.forEach(filePath => {
		if (!filePaths.includes(filePath)) filePaths.push(filePath);
	});

	// Save the final list of filepaths
	module.exports.filePaths = filePaths;

	// Show the original list of files
	fileNames = []; filePaths.forEach(fp => fileNames.push(path.basename(fp)));
	main.log("Reordered list of files: " + fileNames.join(', '), 2, true);
}


/** Builds the codebase (extracting useful data from the source files). */
function build() {

	// Show a message on console
	main.log("Building the codebase...");

	// Clean the codebase
	module.exports.mainFile = null;
	module.exports.files = [];
	module.exports.filePaths = [];
	module.exports.classes = {};

	// Find the source files and analyze them
	main.log("Finding source files...", 1);
	let filePaths = main.findFilesInFolder(SOURCES_FOLDER_PATH);
	filePaths.forEach(filePath => { 
		let relativeFilePath = main.relativePath(SOURCES_FOLDER_PATH, filePath);
		module.exports.filePaths.push(relativeFilePath);
	});
	

	// Find the source files and analyze them
	main.log("Analyzing source files...", 1);
	filePaths.forEach(filePath => { analyzeSourceFile(filePath); });

	// Reorder the list of file paths, using the class hierarchy
	main.log("Reordering source files...", 1);
	reorderFilePaths([main.relativePath(SOURCES_FOLDER_PATH, 
		SOURCES_MAIN_FILE_PATH)]);
}




//-------------------------------------------------------------- MODULE EXPORTS

// Add the global variables
module.exports = { build, mainFile: mainFile, files: files, classes: classes,
	filePaths: filePaths};