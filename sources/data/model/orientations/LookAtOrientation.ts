import { Node } from "../../types/Node";
import { Entity } from "../Entity";
import { Orientation } from "../Orientation";

/** Defines the Orientation based on an Entity to look at. */
export class LookAtOrientation extends Orientation {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The target Entity to look at. */
	private _target : Entity;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** Gets the target Entity to look at. */
	get target() { return this._target; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR
	
	/** Initializes a new instance of the APAOrientation class.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name : any, parentNode?: Node, params?: object);
	constructor(name : any, parentNode?: Node, params: any = {}){ 

		// Call the parent constructor
		super (name, parentNode, params);

		// Create the children nodes
		this._target = new Entity("target", this, params.target);
	}
}
