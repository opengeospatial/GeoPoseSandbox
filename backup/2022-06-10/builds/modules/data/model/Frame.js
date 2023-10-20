import { Node } from "../Node.js";
import { Shape } from "../types/Shape.js";



/** Defines a reference frame. */
export class Frame extends Node {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Frame class.
	 * @param name The name(s) of the node.
	 * @param type The type of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name, type, parentNode, params = {}) {

		// Call the parent constructor
		super(name, "frame", parentNode, params);

		// Create the children nodes
		this._shape = new Shape("shape", this);
	}

	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The shape of the reference frame. */
	get shape() { return this._shape; }
}
