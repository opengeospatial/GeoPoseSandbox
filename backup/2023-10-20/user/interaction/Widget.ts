import { Collection } from "../../data/Collection.js";
import { Item } from "../../data/Item.js";
import { Type } from "../../data/Type.js";
import { Entity } from "../../logic/Entity.js";
import { Layer } from "./Layer.js";
import { Space } from "./Space.js";

/** Defines an user interaction widget. */
export class Widget extends Item {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the Widget class. */
	public static type: Type = new Type("widget", Widget, Item.type);


	// ------------------------------------------------------- PROTECTED FIELDS

	/** The entity of the widget. */
	protected _entity: Entity;

	/** The parent entity of the widget. */
	protected _parentEntity: Entity;

	/** The list of child widgets. */
	protected _widgets: Collection<Widget>;

	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The entity of the space. */
	get entity(): Entity { return this._entity; }

	/** The list of child widgets. */
	get widgets(): Collection<Widget> { return this._widgets; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Widget instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	 constructor(name?: string, parent?: Item, data: any = {}) {

		// Call the parent class constructor
		super(name, parent, data);

		// Create the child items
		this._widgets = new Collection<Widget>([Widget.type], this);

		// Check the parent node and get the parent entity
		if (!parent ||!(parent.type.is(Layer.type) 
			|| parent.type.is(Widget.type)))
				throw Error("Invalid parent for Widget " + name);
		this._parentEntity = (parent as any).entity;
		
		// Create the entity
		this._entity = new Entity(this.name, this._parentEntity);
		this._entity.links.add(this);

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
		this._entity.update(deltaTime, forced);

		// Show a message on console
		// console.log("Widget Updated");
	}
}