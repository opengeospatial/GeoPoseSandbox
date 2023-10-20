import { Node } from "../../data/Node";
import { NodeSet } from "../../data/NodeSet";
import { Presence } from "./Presence";
import { Space } from "./Space";
import { Widget } from "./Widget";

/** Defines an Interaction (Viewport) Layer . */
export class Layer extends Node {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The widgets of the Layer. */
	private _widgets: NodeSet<Widget>;

	/** The Interaction Space associated to the Layer. */
	private _space: Space;

	/** The user Presence in the Layer. */
	private _presence: Presence;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The widgets of the Layer. */
	get widgets(): NodeSet<Widget> { return this._widgets; }

	/** The Interaction Space associated to the Layer. */
	get space(): Space { return this._space; }

	/** The user Presence in the Layer. */
	get presence(): Presence { return this._presence; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Space instance.
	 * @param name The name of the space.
	 * @param parentNode The parent node.
	 * @param params The initialization parameters. */
	 constructor(name, parentNode?: Node, params: any = {}) {

		// Call the base class constructor
		super(name, "space", parentNode, params);

		// Create the child nodes
		this._widgets = params._widgets || new NodeSet<Widget>("widgets", this);
		this._space = params.space || new Space("spaces", this);
		this._presence = params._presence || new Presence("presence", this, null);
	}

}
