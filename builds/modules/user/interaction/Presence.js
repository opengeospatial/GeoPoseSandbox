import { Node } from "../../data/Node.js";
import { Camera } from "../../logic/entities/Camera.js";


/** Defines the user Presence in an interaction space. */
export class Presence extends Node {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Presence instance.
	 * @param name The name of the presence.
	 * @param viewport The viewport associated to the user presence.
	 * @param camera The camera associated to the user presence.*/
	constructor(name, parentNode, viewport, camera) {

		// Call the base class constructor
		super(name, "presence", parentNode);


		this._viewport = viewport;
		this._camera = camera || new Camera("camera");
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The viewport associated to the user presence. */
	get viewport() { return this._viewport; }

	/** The camera associated to the user presence. */
	get camera() { return this._camera; }
}
