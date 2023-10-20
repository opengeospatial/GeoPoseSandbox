import { Node } from "../../data/Node.js";
import { NodeSet } from "../../data/NodeSet.js";
import { SceneEntity } from "../../logic/entities/SceneEntity.js";

/** Defines an Interaction Space. */
export class Space extends Node {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Space instance.
	 * @param name The name of the space.
	 * @param parentNode The parent node.
	 * @param params The initialization parameters. */
	constructor(name, parentNode, params = {}) {

		// Call the base class constructor
		super(name, "space", parentNode, params);

		// Create the child nodes
		this._spaces = new NodeSet("spaces", this);
		this._presences = new NodeSet("presences", this);
		this._widgets = new NodeSet("widgets", this);

		// Create the representation of the space
		this._entity = new SceneEntity(this.name);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The representation of the space. */
	get entity() { return this._entity; }

	/** The resources of the space. */
	get resources() { return this._resources; }

	/** The subspaces of the space. */
	get spaces() { return this._spaces; }

	/** The user presences in the space. */
	get presences() { return this._presences; }

	/** The widgets of the space. */
	get widgets() { return this._widgets; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the space.
	 * @param forced Indicates whether the update is forced or not.
	 * @param deltaTime The update time. */
	update(forced = false, deltaTime = 0) {

		// Call the parent class update function
		super.update(forced, deltaTime);

		// console.log("Space Updated");
	}
}
