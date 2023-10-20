import { Node } from "../../data/Node";
import { Viewport } from "./Viewport";
import { Camera } from "../../logic/entities/Camera";


/** Defines the user Presence in an interaction space. */
export class Presence extends Node {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The viewport associated to the user presence. */
	private _viewport: Viewport;

	/** The camera associated to the user presence. */
	private _camera: Camera;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The viewport associated to the user presence. */
	get viewport(): Viewport { return this._viewport; }

	/** The camera associated to the user presence. */
	get camera(): Camera { return this._camera; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Presence instance.
	 * @param name The name of the presence.
	 * @param viewport The viewport associated to the user presence.
	 * @param camera The camera associated to the user presence.*/
	constructor(name:string, parentNode:Node, viewport: Viewport, camera?: Camera) {
		
		// Call the base class constructor
		super(name, "presence", parentNode);
		

		this._viewport = viewport;
		this._camera = camera || new Camera("camera");
	}


	// --------------------------------------------------------- PUBLIC METHODS

	// /** Updates the user presence.
	//  * @param deltaTime The delta time. */
	// update(deltaTime) {
	// 	this.camera.update(deltaTime);
	// }
}