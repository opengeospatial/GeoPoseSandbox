import { Node } from "../../data/Node";
import { NodeSet } from "../../data/NodeSet";
import { Entity } from "../../logic/Entity";
import { Component } from "./Component";
import { Space } from "./Space";

/** Defines an Interaction Widget. */
export class Widget extends Node {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The entity of the widget. */
	private _entity: Entity;

	/** The parent entity of the widget. */
	private _parentEntity: Entity;

	/** The list of child widgets. */
	private _widgets: NodeSet<Widget>;

	/** The components of the widget. */
	private _components: NodeSet<Component>;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The entity of the space. */
	get entity(): Entity { return this._entity; }

	/** The list of child widgets. */
	get widgets(): NodeSet<Widget> { return this._widgets; }

	/** The components of the widget. */
	get components(): NodeSet<Component> { return this._components; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Widget instance.
	 * @param name The name of the widget.
	 * @param type The type of widget.
	 * @param parentNode The parent widget or space.
	 * @param params The initialization parameters. */
	constructor(name: string, type: string, parentNode?: Node, params: any = {}) {
		
		// Call the base class constructor
		super(name || type, type, parentNode);

		// Create the child nodes
		this._widgets = new NodeSet<Widget>("widgets", this);
		this._components = new NodeSet<Component>("components", this);

		// Check the parent node and get the parent entity
		let parent = parentNode.parentNode;
		if(!parent || !(parent.type == "widget" || parent.type == "space")) 
			throw Error("Invalid parent for Widget")
		this._parentEntity = (parent as any).entity;

		// Create the entity
		this._entity = new Entity(this.name, "widget", this._parentEntity);
	}

	
	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the widget.
	 * @param forced Indicates whether the update is forced or not.
	 * @param deltaTime The update time. */
	update(forced:boolean = false, deltaTime: number = 0) {
		
		// Call the parent class update function
		super.update(forced, deltaTime);

		// Update the associated entity
		this._entity.update(forced, deltaTime);

		// console.log("Widget Updated");

	}

}