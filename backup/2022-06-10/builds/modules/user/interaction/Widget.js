import { Node } from "../../data/Node.js";
import { NodeSet } from "../../data/NodeSet.js";
import { Entity } from "../../logic/Entity.js";

/** Defines an Interaction Widget. */
export class Widget extends Node {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Widget instance.
	 * @param name The name of the widget.
	 * @param type The type of widget.
	 * @param parentNode The parent widget or space.
	 * @param params The initialization parameters. */
	constructor(name, type, parentNode, params = {}) {

		// Call the base class constructor
		super(name || type, type, parentNode, params);

		// Create the child nodes
		this._widgets = new NodeSet("widgets", this);
		this._components = new NodeSet("components", this);

		// Check the parent node and get the parent entity
		if (parentNode) {
			let p = parentNode.parentNode;
			if (!p || !(p.type == "widget" || p.type == "space"))
				throw Error("Invalid parent for Widget " + name);
			this._parentEntity = p.entity;
		}

		// Create the entity
		this._entity = new Entity(this.name, "widget", this._parentEntity);

	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The entity of the space. */
	get entity() { return this._entity; }

	/** The list of child widgets. */
	get widgets() { return this._widgets; }

	/** The components of the widget. */
	get components() { return this._components; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the widget.
	 * @param forced Indicates whether the update is forced or not.
	 * @param deltaTime The update time. */
	update(forced = false, deltaTime = 0) {

		// Call the parent class update function
		super.update(forced, deltaTime);

		// Update the associated entity
		this._entity.update(forced, deltaTime);

		// console.log("Widget Updated");

	}
}
