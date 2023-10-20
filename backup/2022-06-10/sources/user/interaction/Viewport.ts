import * as THREE from "three";
import { Presence } from "./Presence";
import { Space as Layers } from "./Space";


/** Defines an User Interaction Viewport. */
export class Viewport {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The main element of the viewport. */
	private _element: HTMLElement;

	/** The canvas element of the viewport. */
	private _canvas: HTMLCanvasElement;

	/** The renderer of the viewport. */
	private _renderer: THREE.WebGLRenderer;

	/** The state of the viewport. */
	private _state: string = "maximized";

	/** The focus state of the viewport. */
	private _focused: boolean = false;

	/** The width of the viewport. */
	private _width: number;

	/** The height of the viewport. */
	private _height: number;

	/** The layers of the viewport. */
	private _layers: Layers[] = []; 

	/** The time between updates. */
	private _deltaTime: number;

	/** The last update time. */
	private _lastTime: number;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The main element of the viewport. */
	get element(): HTMLElement { return this._element; }

	/** The canvas element of the viewport. */
	get canvas(): HTMLCanvasElement { return this._canvas; }

	/** The renderer of the viewport. */
	get renderer(): THREE.WebGLRenderer { return this._renderer; }

	/** The spaces of the viewport. */
	get spaces(): Layers[] { return this._layers; }

	/** The width of the viewport. */
	get width(): number { return this._width; }
	set width(value: number) { this._width = value; }

	/** The height of the viewport. */
	get height(): number { return this._height; }
	set height(value: number) { this._height = value; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Viewport instance.
	 * @param parentElement The parent HTML element. */
	constructor(params:any = {}) {

		// Store the scene manager associated to this viewport
		// this._scene = scene;
		params = params || {};

	
		addCssRule('html,body','{width:100%; height:100%; margin:0;}');
		addCssRule('.GeoPoseSandbox-Viewport, GeoPoseSandbox-Canvas',
			'{width:100%; height:100%; color:white; background:black;}')

		// Create the viewport WebGL renderer
		this._element = createDomElement("div", "GeoPose",
			'GeoPoseSandbox-Viewport', params.parentElement);

		// Create the renderer
		this._renderer = new THREE.WebGLRenderer();
		this._renderer.xr.enabled = true;
		this._renderer.setAnimationLoop(this.update.bind(this));
		this._canvas = this._renderer.domElement;
		this._element.appendChild(this._canvas);

		// Create the debug panel
		// this._debugPanel = new DebugPanel(this);

		// Set a connection to the resize event
		window.onresize = (e)=> { this.resize(); }

		// Update the viewport
		this.resize();
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the Viewport.
	 * @param time The current update time. */
	update(time: number = 0) {

		// this._renderer.setClearColor(0xff0000);
		this._renderer.clear();

		// Update the delta time
		this._deltaTime = time - this._lastTime; this._lastTime = time;

		// Update the interaction layers and render it
		for (let space of this._layers) {
			space.update(true);
			let camera = space.presences.getIndex(0).camera;
			camera.aspectRatio = this.width / this.height;
			camera.update(true, this._deltaTime);
			this._renderer.render(space.entity.representation, 
				space.presences.getIndex(0).camera.representation as THREE.Camera);
		}
	}


	/** Resizes the viewport. */
	resize() {
		switch (this._state) {
			case "maximized":
				this._element.style.width = "100%";
				this._element.style.height = "100%";
				this.width = this._element.clientWidth;
				this.height = this._element.clientHeight;
				break;
		}
		
		// Set the size of the renderer
		this.renderer.setSize(this.width, this.height);

		// Update the camera properties of the associated presences
		for (let space of this._layers) {
			for (let presence of space.presences) {
				if (presence.viewport != this) continue;
				presence.camera.aspectRatio = this.width / this.height;
				presence.camera.update(true);
			}
		}
	}


	/** Connects this viewport to a interaction Space.
	 * @param space The space to connect.*/
	link(space: Layers) {

		// Checks if the interaction space is already connected
		if(this._layers.indexOf(space) >= 0) throw Error(
			'Space: "' + space.name + '" is already connected');

		// Create a new presence
		new Presence("presence", space.presences, this);

		// Connect the layers
		this._layers.push(space);

		// Link the subspaces
		for (let subspace of space.spaces.childNodes) 
			this.link(subspace as Layers);
	}


	/** Disconnects an interaction Space from the viewport.
	 * @param space The space to disconnect. */
	unlink(space:Layers) {
		let spaceIndex = this._layers.indexOf(space);
		if (spaceIndex >= 0) this._layers = this._layers.splice(spaceIndex, 1);
		else throw Error('Space: "' + space.name + '" was not connected');
	}
}


/** Creates a DOM element
 * @param type The type of the element (its tag name)
 * @param id The id of the element.
 * @param classes The classes of the element.
 * @param parent The parent of the element.
 * @param content The HTML content of the element.
 * @param style The style of the element.
 * @returns The generated element. */
export function createDomElement(type: string, id: string, classes: string,
	parent?: HTMLElement, content?: string, style?: string): HTMLElement {

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
export function addCssRule(selector, rule, override = false) {
		
	// If there is no stylesheet, create it
	if (document.styleSheets.length == 0)
		document.head.append(document.createElement('style'));
	let stylesheet = document.styleSheets[0];
	
	// Check if the rule exists
	let rules = stylesheet.cssRules, ruleIndex, ruleCount = rules.length
	for(let ruleIndex = 0; ruleIndex < ruleCount; ruleIndex++) {
		if (rules[ruleIndex].cssText.startsWith(selector)) {
			if (override) rules[ruleIndex].cssText = selector + " " + rule;
			else return;
		}
	}
	
	// If no rule was fond, create i and add it at the end
	stylesheet.insertRule(selector + " " + rule, ruleCount);
}
