import { Space } from "./user/interaction/Space";
import { Viewport } from "./user/interaction/Viewport";

/** Manages the GeoPose Sandbox. */
export class GeoPoseSandbox {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The list of GeoPoseSandbox instances. */
	private static _instances: GeoPoseSandbox[] = [];

	/** The main interaction Space. */
	private _space: Space;

	/** The Viewports for user interaction. */
	private _viewports: Viewport[] = [];


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The application name of the Geopose Sandbox. */
	static get appName(): string { return "GeoPose Sandbox"; }

	/** The version number of the Geopose Sandbox. */
	static get version(): string { return "0.1"; }

	/** The list of GeoPoseSandbox instances. */
	static get instances(): GeoPoseSandbox[] { 
		return GeoPoseSandbox._instances;
	}

	/** The interaction space. */
	get space() { return this._space; }

	/** The Viewports for user interaction. */
	get viewports() { return this._viewports}


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new GeoPoseSandbox instance.
	 * @param params The initialization parameters. */
	constructor(params:any = {}) {

		// Add the instance to the list
		GeoPoseSandbox._instances.push(this);

		// 
		// this.space = params.space || new Space("space", this); 

		// Create a viewport
		this._viewports.push(new Viewport(params));

		// Show a message on console
		console.log(GeoPoseSandbox.appName + " " + 
			GeoPoseSandbox.version + " Initialized")
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Initializes a new GeoPoseSandbox instance.
	 * @param params The initialization parameters. 
	 * @returns The new GeoPoseSandbox instance. */
	static init(params = {}) { return new GeoPoseSandbox(params); }

}