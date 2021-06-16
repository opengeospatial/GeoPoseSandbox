import { Vector3 } from "../types/complex/Vector3.js";
import { Node } from "../Node.js";

/** Define the basic class of a three dimensional position within a reference frame. */
export class Location extends Node {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Location class.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name, parentNode, params = {}) {

		// Call the parent constructor
		super(name, "position", parentNode, params);

		// Create the children nodes
		this._relativeValues = new Vector3("relativeValues", this);
		this._absoluteValues = new Vector3("absoluteValues", this);
		this._verticalVector = new Vector3("verticalVector", this);
		this._forwardVector = new Vector3("forwardVector", this);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The relative position. */
	get relativeValues() { return this._relativeValues; }

	/** The absolute position. */
	get absoluteValues() { return this._absoluteValues; }

	/** The vertical vector. */
	get verticalVector() { return this._verticalVector; }

	/** The forward vector. */
	get forwardVector() { return this._forwardVector; }
}
