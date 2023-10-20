import { Item } from "../../data/Item";
import { Type } from "../../data/Type";
import { Entity } from "../../logic/Entity";
import { Widget } from "./Widget";

/** Defines an interaction component */
export class Component extends Item {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the Component class. */
	public static type: Type = new Type("component", Component, Item.type);


	// --------------------------------------------------------- PRIVATE FIELDS

	/** The entity of the component. */
	protected _entity: Entity;

	/** The parent entity of the component. */
	protected _parentEntity: Entity;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The entity of the component. */
	get entity(): Entity { return this._entity; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Component instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	 constructor(name?: string, parent?: Item, data?: any) { 
		
		// Call the base class constructor
		super(name, parent);

		// Check the parent node and get the parent entity
		if(parent && parent.parent) {
			this._parentEntity = (parent.parent as any).entity;
		}
		
		// Create the entity
		// this._entity = new Entity(this.name, this._parentEntity);

		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the Component.
	 * @param deltaTime The update time. 
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime: number = 0, forced: boolean = false) {
		
		// If the update is not forced, skip it when the item is already updated
		if (this._updated && !forced) return;

		// Update the associated entity
		this._entity.update(deltaTime, forced);

		// Call the parent class update function
		super.update(deltaTime, forced);

		// Show a message on console
		// console.log("Updated component")
	}
}