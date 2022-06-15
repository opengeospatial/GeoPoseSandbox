import { Item } from "../../data/Item";
import { Type } from "../../data/Type";
import { List } from "../../data/collections/List";
import { Entity } from "../../logic/Entity";
import { Component } from "./Component";
import { Space } from "./Space";

/** Defines an user interaction widget. */
export class Widget extends Item {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the Widget class. */
	public static type: Type = new Type("widget", Widget, Item.type);


	// --------------------------------------------------------- PRIVATE FIELDS

	/** The entity of the widget. */
	private _entity: Entity;

	/** The parent entity of the widget. */
	private _parentEntity: Entity;

	/** The list of child widgets. */
	private _widgets: List<Widget>;

	/** The components of the widget. */
	private _components: List<Component>;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The entity of the space. */
	get entity(): Entity { return this._entity; }

	/** The list of child widgets. */
	get widgets(): List<Widget> { return this._widgets; }

	/** The components of the widget. */
	get components(): List<Component> { return this._components; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Widget instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	 constructor(name?: string, parent?: Item, data?: any) {

		// Call the parent class constructor
		super(name, parent);

		// Create the child items
		this._widgets = new List<Widget>([Widget.type], this);
		this._components = new List<Component>([Component.type], this);

		// Check the parent node and get the parent entity
		if(parent) {
			// if(!p || !(p.type == "widget" || p.type == "space")) 
			// 	throw Error("Invalid parent for Widget " + name);
			this._parentEntity = (parent as any).entity;
		}

		// Create the entity
		this._entity = new Entity(this.name, this);

		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}

	
	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the Widget instance.
	 * @param deltaTime The update time. 
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime: number = 0, forced: boolean = false) {
		
		// If the update is not forced, skip it when the item is already updated
		if (this._updated && !forced) return;

		// Call the parent class update function
		super.update(deltaTime, forced);

		// Update the associated entity
		// this._entity.update(forced, deltaTime);

		// console.log("Widget Updated");
	}
}