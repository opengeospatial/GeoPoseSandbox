import { Node } from "../Node.js";

/** Defines the basic class of a Pose Extension. */
export class Extension extends Node {

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Extension class.
	 * @param name The name(s) of the node.
	 * @param type The type of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name, type, parentNode, params = {}) {

		// Call the parent constructor
		super(name, type || "extension", parentNode, params);
	}
}
