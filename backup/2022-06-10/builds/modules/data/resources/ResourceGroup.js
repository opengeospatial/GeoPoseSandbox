import { Node } from "../Node.js";
import { NodeSet } from "../NodeSet.js";

/** Provides a way to group resources. */
export class ResourceGroup extends Node {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new ResourceManager instance.
	 * @param name The name of the interaction space. */
	constructor(name) {

		// Call the base class constructor
		super(name, "resourceGroup");

		// Create the node sets
		this._models = new NodeSet("models", this);
		this._fonts = new NodeSet("fonts", this);
		this._audios = new NodeSet("audios", this);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The model resources. */
	get models() { return this._models; }

	/** The font resources. */
	get fonts() { return this._fonts; }

	/** The audio resources. */
	get audios() { return this._audios; }
}
