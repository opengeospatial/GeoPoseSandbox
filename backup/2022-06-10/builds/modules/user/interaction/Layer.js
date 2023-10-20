import { Node } from "../../data/Node.js";
import { NodeSet } from "../../data/NodeSet.js";
import { Presence } from "./Presence.js";
import { Space } from "./Space.js";

/** Defines an Interaction (Viewport) Layer . */
export class Layer extends Node {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Space instance.
	 * @param name The name of the space.
	 * @param parentNode The parent node.
	 * @param params The initialization parameters. */
	constructor(name, parentNode, params = {}) {

		// Call the base class constructor
		super(name, "space", parentNode, params);

		// Create the child nodes
		this._widgets = params._widgets || new NodeSet("widgets", this);
		this._space = params.space || new Space("spaces", this);
		this._presence = params._presence || new Presence("presence", this, null);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The widgets of the Layer. */
	get widgets() { return this._widgets; }

	/** The Interaction Space associated to the Layer. */
	get space() { return this._space; }

	/** The user Presence in the Layer. */
	get presence() { return this._presence; }
}

