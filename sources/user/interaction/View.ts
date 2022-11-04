import { Item } from "../../data/Item";
import { Type } from "../../data/Type";
import { Number } from "../../data/items/simple/Number";
import { String } from "../../data/items/simple/String";
import { Collection } from "../../data/Collection";
import { Layer } from "./Layer";
import { User } from "../User";
import { ViewPort } from "../../logic/ViewPort";



/** Defines a User Interaction View. */
export class View extends Item {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the View class. */
	public static type: Type = new Type("view", View, Item.type);


	// --------------------------------------------------------- PRIVATE FIELDS

	/** The main element of the view. */
	private _element: HTMLElement;

	/** The canvas element of the view. */
	private _canvas: HTMLCanvasElement;

	/** The viewport of the view. */
	private _viewport: ViewPort;

	/** The state of the view. */
	private _state: String;

	/** The width of the view. */
	private _width: Number;

	/** The height of the view. */
	private _height: Number;

	/** The layers of the view. */
	private _layers: Collection<Layer>; 

	/** The time between updates. */
	private _deltaTime: number = 0;

	/** The last update time. */
	private _lastTime: number = 0;

	/** The Frames Per Second counter. */
	private _fpsCounter: number = 0;

	/** The Frames Per Second timer. */
	private _fpsTimer: number = 0;

	/** The current Frames Per Second value. */
	private _fpsValue: number = 0;

	/** The list of Frames Per Second values. */
	private _fpsValues: number[] = [];

	/** The maximum size of the array of Frames Per Second values. */
	private _fpsValuesMaxSize: number = 100;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The main element of the view. */
	get element(): HTMLElement { return this._element; }

	/** The canvas element of the view. */
	get canvas(): HTMLCanvasElement { return this._canvas; }

	/** The state of the view. */
	get state(): String { return this._state; }

	/** The width of the view. */
	get width(): Number { return this._width; }

	/** The height of the view. */
	get height(): Number { return this._height; }

	/** The layers of the view. */
	get layers(): Collection<Layer> { return this._layers; }

	/** The current Frames Per Second value. */
	get fpsValue(): number { return this._fpsValue; }

	/** The list of Frames Per Second values. */
	get fpsValues(): number[] { return this._fpsValues; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new View instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	 constructor(name?: string, parent?: Item, data?: any) {

		// Call the parent class constructor
		super(name, parent);

		// Create the sub nodes
		this._width = new Number("width", this, { defaultValue: 100, min: 0 });
		this._height = new Number("height", this, { defaultValue: 100, min: 0 });
		this._state = new String("state", this, { defaultValue: "Maximized", 
			validValues: "Normal, Maximized, FullScreen, VR, AR" });
		this._layers = new Collection<Layer>([Layer.type], this);


		// Create the viewport WebGL renderer
		this._element = View.createDomElement("div", this.name + "View", 
			undefined, 'CoEditAR-View');
		this._canvas = View.createDomElement("canvas", this.name + "Canvas", 
			this._element, 'CoEditAR-Canvas', 'width:100%; height:100%;'
			) as HTMLCanvasElement;
		this._viewport = new ViewPort(this._canvas, this.update.bind(this));

		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);

		// If there is no layer, create a default ones
		if (this._layers.count == 0) {
			let presences = (this.parent as User).presences;
			for (let presence of presences) { 
				this.layers.add(new Layer("Layer", this, presence));
			}
		}
		
		// Set a connection to the resize event
		this.resize()
		window.onresize = (e)=> { this.resize(); }
		this._state.onModified.add(() => { this.resize(); });

		// TEMPORAL Switch to fullscreen with a double click
		// this._element.addEventListener("dblclick", () =>{
		// 	this._state.value = "FullScreen";
		// });
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the view instance.
	 * @param time The time (in milliseconds) since the last call. */
	update(time: number = 0) {

		// Update the delta time and Frames Per Second counter
		time /= 1000; // Convert the time to seconds
		this._deltaTime = time - this._lastTime; this._lastTime = time;
		this._fpsTimer += this._deltaTime; this._fpsCounter++; 
		if(this._fpsTimer >= 1) { 
			this._fpsValue = this._fpsCounter;
			if (this._fpsValues.length >= this._fpsValuesMaxSize)
				this._fpsValues.shift();
			this._fpsValues.push(this._fpsValue);
			this._fpsTimer %= 1; this._fpsCounter = 0; 

			// Show a message on console
			// console.log("FPS: " + this._fpsValue);
		}

		

		// Update and render the layers
		for (let layer of this._layers) {
			layer.update(this._deltaTime);
			this._viewport.render(layer.presence);
		}
	}


	/** Resizes the view. */
	resize() {

		// If the user has left the FullScreen mode, switch to the previous value
		if (this._state.updated && this._state.value == "FullScreen")
			if (!document.fullscreenElement) this._state.value = "Maximized";

		// Update the state of the view
 		if (!this._state.updated) {
			switch (this._state.value) {
				case "Normal":
					this._element.style.position = "initial";
					break;
				case "Maximized":
					this._element.style.position = "fixed";
					this._element.style.top = "0";
					this._element.style.left = "0";
					this._element.style.width = "100vw";
					this._element.style.height = "100vh";
					break;
				case "FullScreen":
					if (!document.fullscreenElement)
						this._element.requestFullscreen();
					this._element.style.width = "100vw";
					this._element.style.height = "100vh";
					break;
			}

			// Mark the state item as updated
			this._state.updated = true;
		}

		// Set the size of the viewport
		this._width.value = this._element.clientWidth;
		this._height.value = this._element.clientHeight;
		this._viewport.resize(this._width.value, this._height.value);
		let aspectRatio = this._width.value / this._height.value;

		// Update the camera properties of the associated presences
		for (let layer of this._layers) {
			layer.presence.entity.aspectRatio.value = aspectRatio;
			layer.presence.entity.update();
		}
	}


	/** Creates a DOM element
	 * @param type The type of the element (its tag name)
	 * @param id The id of the element.
	 * @param parent The parent of the element.
	 * @param classes The classes of the element.
	 * @param style The style of the element.
	 * @param content The HTML content of the element.
	 * @returns The generated element. */
	static createDomElement(type: string, id?: string, parent?: HTMLElement, 
		classes?: string, style?: string, content?: string): HTMLElement {

		// Create the element
		let element = document.createElement(type);

		// Set the properties of the element
		if (id) element.id = id;
		if (classes) element.className = classes;
		if (style) element.style.cssText = style;
		if (content) element.innerHTML = content;

		// Set the parent of element
		((parent) ? parent : document.body).appendChild(element);

		// Return the generated element
		return element;
	}


	/** Creates a CSS rule.
	 * @param selector The CSS selector
	 * @param rule The css rule
	 * @param override Indicates whether to override rules or not. */
	static addCssRule(selector, rule, override = false) {
			
		// If there is no stylesheet, create it
		if (document.styleSheets.length == 0)
			document.head.append(document.createElement('style'));
		let stylesheet = document.styleSheets[0];
		
		// Check if the rule exists
		let rules = stylesheet.cssRules, ruleIndex, ruleCount = rules.length
		for(ruleIndex = 0; ruleIndex < ruleCount; ruleIndex++) {
			if (rules[ruleIndex].cssText.startsWith(selector)) {
				if (override) rules[ruleIndex].cssText = selector + " " + rule;
				else return;
			}
		}
		
		// If no rule was fond, create i and add it at the end
		stylesheet.insertRule(selector + " " + rule, ruleCount);
	}
}