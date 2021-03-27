import { Viewport } from "./user/interaction/Viewport.js";

/** Manages the GeoPose Sandbox. */
export class GeoPoseSandbox {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new GeoPoseSandbox instance.
	 * @param params The initialization parameters. */
	constructor(params = {}) {

		/** The Viewports for user interaction. */
		this._viewports = [];

		// Add the instance to the list
		GeoPoseSandbox._instances.push(this);

		// Create a viewport
		this._viewports.push(new Viewport(params));

		// Show a message on console
		console.log(GeoPoseSandbox.appName + " " +
			GeoPoseSandbox.version + " Initialized");
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The application name of the Geopose Sandbox. */
	static get appName() { return "GeoPose Sandbox"; }

	/** The version number of the Geopose Sandbox. */
	static get version() { return "0.1"; }

	/** The list of GeoPoseSandbox instances. */
	static get instances() {
		return GeoPoseSandbox._instances;
	}

	/** The interaction space. */
	get space() { return this._space; }

	/** The Viewports for user interaction. */
	get viewports() { return this._viewports; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Initializes a new GeoPoseSandbox instance.
	 * @param params The initialization parameters.
	 * @returns The new GeoPoseSandbox instance. */
	static init(params = {}) { return new GeoPoseSandbox(params); }
}

// --------------------------------------------------------- PRIVATE FIELDS

/** The list of GeoPoseSandbox instances. */
GeoPoseSandbox._instances = [];
