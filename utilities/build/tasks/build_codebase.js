/******************************************************************************
  GeoPose Sanbox Build System - Codebase
******************************************************************************/

'use strict' // Make sure that we are working on strict mode

// ------------------------------------------------------------------ CONSTANTS
// The NodeJS modules
const fs = require('fs'), 			// File System access
	path = require('path'),			// File Path handling
	exec = require('child_process').execSync,	// External command execution
	main = require('../build');		// The main module of the build system
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
	whitespace: "whitespace", 
	newline: "newline", 
	word: "word", 
	string: "string", 
	comment: "comment",
	other: "other"
};

/** Enumerates the different types of items. */
const WordTypes = { 
	keyword: "keyword", 
	number: "number",
	other: "other"
};

/** Enumerates the different keywords in typescript. */
const keywords = ["abstract", "arguments", "as", "await", "boolean", "break", 
	"byte", "case", "catch", "char", "class", "const", "continue", "debugger",
	"default", "delete", "do","double", "else", "enum ", "eval", "export",
	"extends", "false", "final", "finally", "float", "for", "function", "goto",
	"if", "implements", "import", "in", "instanceof", "int", "interface", "let",
	"long", "native", "new", "null", "package", "private", "protected",
	"public", "return", "short", "static", "super", "switch", "synchronized",
	"this", "throw", "throws", "transient", "true", "try", "typeof", "var",
	"void", "volatile", "while", "with", "yield"];

// ------------------------------------------------------------------ FUNCTIONS

// Collection of character analysis functions
function isWhiteSpace(c)	{ return (c == ' ' || c == '\t' || c == '\r'); }
function isDigit(c)			{ return (c >= '0' && c <= '9'); }
function isLowercase(c)		{ return (c >= 'a' && c <= 'z'); }
function isUppercase(c)		{ return (c >= 'A' && c <= 'Z'); }
function isLetter(c)		{ return (isLowercase(c) || isUppercase(c)); }
function isLetterOrDigit(c)	{ return isLetter(c) || isDigit(c); }
function isPartOfWord(c)	{ return (isLetterOrDigit(c) || c=='_'); }
function isStringSymbol(c)	{ return (c=='"' || c=='\'' || c=='`'); }
function isGroupSymbol(c)	{ return (c=='(' || c==')' || c=='[' || c==']'); }


/** Analyzes a source file.
 *  @param filePath The path of the source path. */
function analyzeSourceFile(filePath) {

	// Show a message on console
	const relativeFilePath = main.relativePath(SOURCES_FOLDER_PATH, filePath);
	main.log("Analyzing File:  "+ relativeFilePath, 3, true);

	// Read the file and create a structure to store its data
	let file = {data: fs.readFileSync(filePath, {encoding:"utf8"}), 
		path: filePath, relativePath: relativeFilePath, links: [], items: []};

	// Parse the file looking for the different items 
	let charIndex, charCount = file.data.length, delimiter;
	let lineIndex = 0, columnIndex = 0, level = 0;
	let items = [], itemType, item = { string:"", type:ItemTypes.whitespace, 
		index:0, line:0, column:0, level:0 };

	// Parse the file data character by character
	for (charIndex = 0; charIndex < charCount; charIndex++) {

		// Get the current, previous and next chars for higher versatility
		const char = file.data[charIndex];
		const pChar = (charIndex > 0)? file.data[charIndex - 1] : null;
		const nChar = (charIndex<charCount-1)? file.data[charIndex+1] : null;

		// Check if it is a newline character
		if (char == '\n') {

			// Advance to the next line
			lineIndex++; columnIndex = 0; 

			// If there is no delimiter, treat it as a whitespace
			if (!delimiter) itemType = ItemTypes.newline;
			else if (itemType == ItemTypes.string) throw new Error(
					"Unfinished string at:" + filePath + ":" + lineIndex);
		}

		// Check if we have to continue process a comment
		else if (itemType == ItemTypes.comment) {
			if (char == '/' && pChar == '*') {
				item.string += char; delimiter = null;
				itemType = ItemTypes.whitespace; 
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
			if (isStringSymbol(char)) { // Check if it a string delimiters
				itemType = ItemTypes.string; delimiter = char;
			}
			else if (char == '/' && (nChar == '/' || nChar == '*')) {
				itemType = ItemTypes.comment; 
				delimiter = (nChar=='*')? '/': null; // Multiline comments
			}
			else if (isWhiteSpace(char)) itemType = ItemTypes.whitespace;
			else if (isPartOfWord(char)) itemType = ItemTypes.word;
			else itemType = ItemTypes.other;
		}


		// When the item type is different from the previous one
		if ((item.type != itemType && item.type != ItemTypes.whitespace)
			|| item.type == ItemTypes.other) {

			// Check the type of word
			if (item.type == ItemTypes.word) {
				if (keywords.includes(item.string)) {
					item.wordType = WordTypes.keyword;
				}
			}

			// Add the item to the list
			file.items.push(item); 
			
			// Check the depth level
			if(item.string == "{") level++;
			else if(item.string == "}") level--;

			// Create a new temporal item
			item = { string: "", type: itemType, previousType: item.type,
				oldLine: lineIndex+1, oldColumn: columnIndex, level: level
			};
		}

		// Store non-whitespace characters
		if (itemType != ItemTypes.whitespace) item.string += char;
		else item.oldColumn++;

		// Store the previous item type
		item.type = itemType; 
		
		// Increase the column number
		if (char != '\n') columnIndex++;
	}

	// Add any remaining item
	if (item) file.items.push(item); 


	// Process the items to analyze the code structure
	let itemIndex, itemCount = file.items.length;
	let type = null;
	for (itemIndex = 0; itemIndex < itemCount; itemIndex++) {

		// Get the current, previous and next chars for higher versatility
		item = file.items[itemIndex];
		const pItem = (itemIndex > 0)? file.items[itemIndex - 1] : null;
		const nItem = (itemIndex<itemCount-1)? file.items[itemIndex+1] : null;
		
		// Analyze classes
		if (item.string == "class") {
			type = {name: nItem.string, extends:null, filePath: filePath, 
				comment : null,fields:[], methods:[]};
			main.log("Found class: " + type.name, 3, true);
			
			// Make sure this class is defined at the global level
			if (item.level != 0) throw Error("Class '" + type.name +
				"is defined in a wrong block level: " + item.level);

			// Check if this class extends another
			if (file.items[itemIndex + 2].string == "extends") {
				type.extends = file.items[itemIndex + 3].string;
			}

			// Look for a Javadoc comment in the previous line
			for (let i = itemIndex; i >=0; i--) {
				let previousItem = file.items[i];
				if (previousItem.type == ItemTypes.comment)
					type.comment = previousItem.string.trim()
						.replace('/**','').replace(' * ','').replace('*/','');
			}

			// Save the class
			module.exports.classes[type.name] = type;
		}
		else if (item.string=='}' && item.level==0 && type!=null) type = null;
	}
}



/** Reorder the list of file paths, using the class hierarchy. */
function reorderFilePaths (order) {
	let classes = module.exports.classes, classNames = Object.keys(classes),
		classOrder = [], classIndex, classCount = classNames.length;

	// Show the original list of files
	let fileNames = []; 
	module.exports.filePaths.forEach(fp=>fileNames.push(path.basename(fp)));
	main.log("List of files: " + fileNames.join(', '), 2, true);

	// Create a copy of the list of file paths and create a new list
	let filePaths = [...order];

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
		let filePath = classes[classOrder[classIndex]].filePath;
		if (!filePaths.includes(filePath)) filePaths.push(filePath);
	}

	// If there are any files that have not yet included, do it now
	module.exports.filePaths.forEach(filePath => {
		if (!filePaths.includes(filePath))filePaths.push(filePath);
	});

	// Save the final list of filepaths
	module.exports.filePaths = filePaths;

	// Show the original list of files
	fileNames = []; filePaths.forEach(fp=>fileNames.push(path.basename(fp)));
	main.log("Reoridered list of files: " + fileNames.join(', '), 2, true);
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
	module.exports.filePaths = main.findFilesInFolder(SOURCES_FOLDER_PATH);

	// Find the source files and analyze them
	main.log("Analyzing source files...", 1);
	module.exports.filePaths.forEach(filePath => { analyzeSourceFile(filePath); });
	
	// Reorder the list of file paths, using the class hierarchy
	main.log("Reordering source files...", 1);
	reorderFilePaths([SOURCES_MAIN_FILE_PATH]);
}


	
	
//-------------------------------------------------------------- MODULE EXPORTS

// Add the global variables
module.exports = {build, mainFile:mainFile, files:files, classes:classes,
	filePaths: filePaths};