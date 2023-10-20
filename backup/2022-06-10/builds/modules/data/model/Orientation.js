import { Node } from "../Node.js";
import { Quaternion } from "../types/complex/Quaternion.js";

/** Define the basic class of a three dimensional orientation. */
export class Orientation extends Node {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Orientation class.
	 * @param name The name(s) of the node.
	 * @param type The type of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name, type, parentNode, params = {}) {

		// Call the parent constructor
		super(name, "orientation", parentNode, params);

		// Create the children nodes
		this._relativeValues = new Quaternion("relativeValues", this);
		this._absoluteValues = new Quaternion("absoluteValues", this);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The relative orientation. */
	get relativeValues() { return this._relativeValues; }

	/** The absolute orientation. */
	get absoluteValues() { return this._absoluteValues; }
}
