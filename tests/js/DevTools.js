
/** Creates a simplified development tools panel. */
export class DevTools {
	
	/** Initializes a new instance of the DevTools class. 
	 * @param params The initialization parameters. */
	constructor(params = {}) {

		// Parse the parameters
		this.show = params.show == undefined? true : params.show;
		this.scrollToBottomConsole = true;
		this.stopOnInvalidTest = true; this.testingStopped = false;
		this.ValidResults = 0; this.InvalidResults = 0;
		this.color = '#FFF'; 
		this.background = '#6668'; 
		this.infoColor = '#FFF'; 
		this.validColor = '#22dd22'; 
		this.errorColor = '#dd2222'

		// Create the elements
		this.panel = this.createDomElement('div', 'DevToolsPanel', null, '', '',
			'position:fixed; bottom: 0; left: 0; width: 100%; height: 50%; ' +
			'z-index: 1000; display: flex; flex-direction: column; ' +
			'font-family: Courier New; font-weight: bold;');
		this.panelHeader = this.createDomElement('div', 'DevToolsHeader', 
			this.panel, 'Console:', '', 'background: #0008; padding: 1vmin;');
		this.panelCloseButton = this.createDomElement('button', 
			'DevToolsCloseButton', this.panelHeader, 'X', null, 
			'float:right; border: none; background: none; color: white;');
		this.panelConsole = this.createDomElement('div', 'DevToolsPanelConsole', 
			this.panel, '', '', 'overflow: auto; padding: 1vmin;' +
			'font-family: Courier New; font-weight: bold;');

		this.panel.style.color = this.color;
		this.panel.style.backgroundColor = this.background;

		// Process the initialization parameters
		this.panel.style.display = (this.show)? 'flex' : 'none';

		// Disable automatic scroll if the user manually scrolls the console
		this.panelConsole.onscroll = 
			(e) => { this.scrollToBottomConsole = false; };

		// Handle the visibility of the panel
		this.panelCloseButton.onclick = (e) => { this.show(false); }
		document.onkeyup = (e) => { if (e.key=='º') this.show(); }

		// Create a button to go back to the index
		if (window.self == window.top) {
			let backButton = document.createElement('button');
			backButton.innerText = 'Index';
			backButton.style.cssText = 'position: fixed; z-index: 1000; top: 0;' +
				'right: 0; font: 2vh Arial; color: white; background: #0008;' +
				'border: 1px solid white; padding: 1vmin; margin: 1vmin;';
			backButton.onclick = () => { location.href = './index.html'; }
			document.body.append(backButton);
		}

		// Save this instance
		DevTools.instance = this;
	}

	/** Creates a DOM element
	 * @param type The type of the element (its tag name)
	 * @param id The id of the element.
	 * @param content The HTML content of the element.
	 * @param parent The parent of the element.
	 * @param classes The classes of the element.
	 * @param style The style of the element.
	 * @param onclick The callback associated to the click action.
	 * @returns The generated element. */
	createDomElement(type, id, parent, content, classes, style, onclick) {

		// Create the element
		let element = document.createElement(type);

		// Set the properties of the element
		if (id) element.id = id;
		if (classes) element.className = classes;
		if (style) element.style.cssText = style;
		if (onclick) element.onclick = onclick;

		// Set the content of the element
		if (content) {
			if (typeof content == 'string') element.innerHTML = content
			.replace(/&/g, '&amp;').replace(/>/g, '&gt;').replace(/</g, '&lt;')
			.replace(/'/g, '&quot;').replace(/\n/g, '<br>')
			.replace(/\t/g, '&emsp;&emsp;');
		}
		
		// Set the parent of element
		((parent)? parent : document.body).appendChild(element);

		// Return the generated element
		return element;
	}

	/** Shows a message on the debug console. 
	 * @param message The message to display.
	 * @param {*} tabs The tabulation level.
	 * @param {*} color The label for. */
	log(message = '', tabs = 0, color = null, callback, stack) { 
		
		// If the message is undefined, show a special message
		if (message == undefined) message = '[undefined]';

		// If the message is not a string, try to convert it to a string
		if (typeof message != 'string') message = '' + message;

		// If no message is provided, create a blank line
		if (message == '' ) message = '\n';
		
		// Create the html element for the debug panel console
		let element = this.createDomElement('p', '', this.panelConsole, message); 
		if (color) element.style.color = color;
		if (tabs) element.style.paddingLeft = (tabs * 10) + 'px' ;
		if (this.scrollToBottomConsole && this.panelConsole)
			this.panelConsole.scrollTop = this.panelConsole.scrollHeight;

		// Use the debug messages to show the caller
		if (typeof message  == 'object') callback(message);
		else {
			if (!stack) {
				let params = undefined;
				if(tabs) message = ' '.repeat(tabs) + message;
				if (color) { message = '%c' + message; params = 'color: ' + color; }
				if (params) consoleLog(message, params); else consoleLog(message);
			} else console.error(stack);
		}

		if (color == this.errorColor) this.show(true);

		// Return the element
		return element;
	}	

	logInfo(message, tabs = 0) { this.log(message, tabs, this.infoColor); }
	logWarn(message, tabs = 0) { this.log(message, tabs, this.console.warn); }
	logError(message, tabs = 0) { this.log(message, tabs, this.errorColor); }

	/** Sets the visibility of the panel. 
	 * @param visible Whether the panel should be visible or not. */
	show(visible) {
		if (visible != undefined) this.visible = visible;
		else this.visible = !this.visible; // If undefined, switch the state
		this.panel.style.display = (this.visible)? 'flex' : 'none';
	}

	
	/** Validates a small piece of code.
	 * @param {*} label The label to display.
	 * @param {*} callback The function callback.
	 * @param {*} expected The expected result. */
	validate(label, callback, expected) {
	
		// If the testing has been stopped, do not do anything
		if (this.testingStopped) return;

		// Call the function
		let result = '', stack = '', valid = false;

		// Create the line in the custom console
		let consoleLine = this.log(label + ': ', 2);

		// Execute the given code
		try { result = callback(); }
		catch (e) { 
			result = 'Error: ' + e.message; 
			if (!result.startsWith(expected)) stack = e.stack;
		}
		if (expected != undefined) {
			if (typeof expected == 'string') valid = result.startsWith(expected);  
			else if (typeof expected == 'object') {
				for (let keys in expected) {
					valid == (expected[key] == result[key]);
					if (valid == false) break;
				}
			}
			else if (isNaN(expected)) valid = isNaN(result);
			else valid = result === expected;
		} else valid = true;

		// Create the info text
		if (typeof expected != 'string') expected = JSON.stringify(expected);
		if (typeof result != 'string') expected = JSON.stringify(result);
		let info = '(Expected: "' + expected + '" Received: "' +  result + '")'; 

		// Add the result to the line of the debug panel console
		this.createDomElement('b', null, consoleLine, 
			(valid? 'OK' : 'ERROR') + ((expected || result) ? info: ' '), null,
			'color: ' + ((valid)? this.validColor: this.errorColor));

		// Show the result on the real console
		if (stack) { consoleLog(stack); this.log(result, 4, this.infoColor); }
		// else if (result) this.log(this.result, 4, this.infoColor);

		// Check the result and whether we have to stop the test or not
		if (valid) this.ValidResults++; else this.InvalidResults++; 
		if (!valid && this.stopOnInvalidTest) this.finalizeTest(true);
	}

	/** Initialize the test environment. */
	initializeTest() {
		this.log ('STARTING TEST');
		this.ValidResults = 0; this.InvalidResults = 0;
		this.testingStopped = false;
	}

	/** Finish the test environment. */
	finalizeTest(forced = false) {
		this.log ('TEST ' + (forced? 'STOPPED' : 'COMPLETED') +
			' (OKs: ' + this.ValidResults + ',' +
			' Errors: ' + this.InvalidResults + ')');
			this.testingStopped = true;
	}
}

// Create a way to facilitate the initialization of the devtools.
DevTools.instance = null;
DevTools.init = (params) =>{ return new DevTools(params); }

// Show error messages as an alert
window.onerror = (e) => {
	if (DevTools.instance) DevTools.instance.logError(e);
};

let consoleLog = console.log;
console.log = (msg) => { DevTools.instance.logInfo(msg); }