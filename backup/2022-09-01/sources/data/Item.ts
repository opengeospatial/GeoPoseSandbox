import { Type } from "./Type";
import { Event } from "../logic/Event"
import { Collection } from "./Collection";
import { Relationship } from "./Relationship";
import { List } from "./collections/List";
import { Serialization, SerializationFormat } from "./Serialization";

/** Defines a data item (often called a datum) in a graph structure .
 * Provides a way to store information in a complex way. */
export class Item {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the Item class. */
	public static type: Type = new Type("item", Item);

	
	// ------------------------------------------------------- PROTECTED FIELDS

	/** The type of the data item. */
	protected _type: Type;

	/** The name of the data item. */
	protected _name: string;

	/** The parent data item. */
	protected _parent: Item;

	/** The child data items. */
	protected _children: List<Item>;

	/** The update state of the item. */
	protected _updated: boolean;

	/** The last update time. */
	protected _updateTime: number;
	
	/** The additional relationships of the data item. */
	protected _relationships: Record<string, Relationship>;

	/** A event triggered when the data item is modified. */
	protected _onModified: Event;

	/** A event triggered before the data item is updated. */
	protected _onPreUpdate: Event;
	
	/** A event triggered when the data item is updated. */
	protected _onPostUpdate: Event;

	/** A global event triggered when a data item is modified. */
	protected static _onModified: Event = new Event("modified");

	/** A global event triggered before a data item is updated. */
	protected static _onPreUpdate: Event = new Event("pre-update");

	/** A global event triggered when a data item is updated. */
	protected static _onPostUpdate: Event = new Event("post-update");


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The type of the data item. */
	get type(): Type { return this._type; }

	/** The name of the data item. */
	get name(): string { return this._name; }

	/** The parent of the data item. */
	get parent(): Item { return this._parent; }

	/** The child data items. */
	get children(): Collection<Item> { return this._children; }

	/** The additional relationships of the data item. */
	get relationships(): Record <string, Relationship> {
		 return this._relationships;
	}

	/** The update state of the item. */
	get updated(): boolean { return this._updated; }
	set updated(value: boolean) {

		// If the value is the same as the current update state
		if (this._updated == value) return;

		// Set the update state and update the time
		this._updated = value; this._updateTime = Date.now();
		
		// Trigger the "modified" event
		this.onModified.trigger(this, value);
		Item.onModified.trigger(this, value);

		// Propagate the event upwards in the hierarchy
		if (this._parent && value == false) this._parent.updated = false;
	}

	/** The last update time. */
	get updateTime(): number { return this._updateTime; }
	
	/** A global event triggered when the item is modified. */
	get onModified(): Event { return this._onModified; }

	/** An event triggered before the item is updated. */
	get onPreUpdate(): Event { return this._onPreUpdate; }

	/** An event triggered after the item is updated. */
	get onPostUpdate(): Event { return this._onPostUpdate; }

	/** A global event triggered when a item is modified. */
	static get onModified(): Event { return Item._onModified; }

	/** An event triggered before a item is updated. */
	static get onPreUpdate(): Event { return Item._onPreUpdate; }

	/** An event triggered after a item is updated. */
	static get onPostUpdate(): Event { return Item._onPostUpdate; }


	// ---------------------------------------------------------- PUBLIC EVENTS

	/** A global event triggered when a data item is created. */
	static onCreation: Event = new Event("creation");

	
	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Item class.
 	 * @param name The name of the data item.
	 * @param parent The parent data item. */
	constructor(name?: string, parent?: Item) {

		// Obtain the type of item from the static property
		let type = this.constructor["type"], className = this.constructor.name;
		if (type && type instanceof Type) this._type = type
		else throw Error ("No type data defined for class '" + className +
			 "'. Remember to add it through the 'type' static property.");

		// Check the name of the item
		if (name && typeof(name) && name.length > 0) this._name = name;
		else name = type.name;

		// If there is a parent type, store the reference and create a link
		if (parent && parent instanceof Item) { 
			this._parent = parent; parent._children.add(this);
		}

		// Initialize the list of children
		this._children = new List([Item.type], this);

		// Initialize the relationships
		this._relationships = {};

		// Create the events
		this._onModified = new Event("modified", this);
		this._onPreUpdate = new Event("pre-update", this);
		this._onPostUpdate = new Event("post-update", this);

		// Set the update state to false and set the update time
		this.updated = false; this._updateTime = Date.now();

		// Register this instance in the list of instances of the data type
		// this._type.register(this);

		// Trigger the onCreation event
		Item.onCreation.trigger(this);
	}

	
	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the Item instance. 
	 * @param deltaTime The update time. 
	 * @param forced Indicates whether the update is forced or not. */
	 update(deltaTime: number = 0, forced: boolean = false) {

		// If the update is not forced, skip it when the item is already updated
		if (this._updated && !forced) return;

		// Trigger the pre-update event 
		this._onPreUpdate.trigger(this); Item._onPreUpdate.trigger(this);

		// Update the children
		for (let child of this._children) child.update(deltaTime, forced);

		// Mark this item as updated
		this._updated = true;

		// Trigger the post-update event 
		this._onPostUpdate.trigger(this); Item._onPostUpdate.trigger(this);
	}


	/** Serializes the Item instance.
	 * @param format The serialization format.
	 * @return The serialized data. */
	serialize(format?: SerializationFormat): object { 
		return Serialization.serialize(this, format);
	}


	/** Deserializes the Item instance.
	 * @param data The data to deserialize. */
	deserialize(data: object = {}) { Serialization.deserialize(this, data); }
	
}