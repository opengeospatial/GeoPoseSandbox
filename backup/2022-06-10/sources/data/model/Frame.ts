import { Node } from "../Node";
import { Shape } from "../types/Shape";



/** Defines a reference frame. */
export class Frame extends Node {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The shape of the reference frame. */
	private _shape: Shape;

	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The shape of the reference frame. */
	get shape() { return this._shape; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Frame class.
	 * @param name The name(s) of the node.
	 * @param type The type of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name: any, type: any, parentNode?: Node, params: any = {}) {

		// Call the parent constructor
		super(name, "frame", parentNode, params);

		// Create the children nodes
		this._shape = new Shape("shape", this);
	}
}