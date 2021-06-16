import { Node } from "../data/Node";

/** Defines an logic Behavior */
export class Behavior extends Node {

	// --------------------------------------------------------- PRIVATE FIELDS
	
	// ------------------------------------------------------- PUBLIC ACCESSORS

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new logic behavior.
	 * @param name The name of the logic behavior.
	 * @param type The type of the logic behavior.
	 * @param parentNode The parent node.*/
	constructor(name: string, type: string, parentNode?: Node) {

		// Call the base class constructor
		super(name, type, parentNode);

	}
}