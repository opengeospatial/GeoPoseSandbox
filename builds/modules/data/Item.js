import { Type } from "./Type.js";
import { Event } from "../logic/Event.js";
import { Collection } from "./Collection.js";
import { Serialization } from "./Serialization.js";

/** Defines a data item (often called a datum) in a graph structure .
 * Provides a way to store information in a mainly hierarchical way. */
export class Item {


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The type of the data item. */
	get type() { return this._type; }

	/** The name of the data item. */
	get name() { return this._name; }

	/** The parent of the data item. */
	get parent() { return this._parent; }

	/** The child data items. */
	get children() { return this._children; }

	/** The linked data items. */
	get links() { return this._links; }

	/** The update state of the item. */
	get updated() { return this._updated; }
	set updated(value) {

		// If the value is the same as the current update state
		if (this._updated == value)
			return;

		// Set the update state and update the time
		this._updated = value;
		this._updateTime = Date.now();

		// Trigger the "modified" event
		this.onModified.trigger(this, value);
		Item.onModified.trigger(this, value);

		// Propagate the event upwards in the hierarchy and to the links
		if (value == false) {
			if (this._parent)
				this._parent.updated = false;
			for (let link of this._links)
				link.updated = false;
		}
	}

	/** The last update time. */
	get updateTime() { return this._updateTime; }

	/** A global event triggered when the item is modified. */
	get onModified() { return this._onModified; }

	/** An event triggered before the item is updated. */
	get onPreUpdate() { return this._onPreUpdate; }

	/** An event triggered after the item is updated. */
	get onPostUpdate() { return this._onPostUpdate; }

	/** A global event triggered when a item is modified. */
	static get onModified() { return Item._onModified; }

	/** An event triggered before a item is updated. */
	static get onPreUpdate() { return Item._onPreUpdate; }

	/** An event triggered after a item is updated. */
	static get onPostUpdate() { return Item._onPostUpdate; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Item class.
	 * @param name The name of the data item.
	 * @param parent The parent data item. */
	constructor(name, parent, data) {

		// Obtain the type of item from the static property
		let type = this.constructor["type"], className = this.constructor.name;
		if (type && type instanceof Type)
			this._type = type;
		else
			throw Error("No type data defined for class '" + className +
				"'. Remember to add it through the 'type' static property.");

		// Check the name of the item
		if (name && typeof (name) && name.length > 0)
			this._name = name;
		else
			name = type.name;

		// If there is a parent type, store the reference and create a link
		if (parent && parent instanceof Item) {
			this._parent = parent;
			parent._children.add(this);
		}

		// Initialize the list of children and of linked items
		this._children = new Collection([Item.type], this);
		this._links = new Collection([Item.type], this);

		// Create the events
		this._onModified = new Event("modified", this);
		this._onPreUpdate = new Event("pre-update", this);
		this._onPostUpdate = new Event("post-update", this);

		// Set the update state to false and set the update time
		this.updated = false;
		this._updateTime = Date.now();

		// Trigger the onCreation event
		Item.onCreation.trigger(this);
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the Item instance.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		// If the update is not forced, skip it when the item is already updated
		if (this._updated && !forced)
			return;

		// Trigger the pre-update event 
		this._onPreUpdate.trigger(this);
		Item._onPreUpdate.trigger(this);

		// Update the children
		for (let child of this._children)
			child.update(deltaTime, forced);

		// Mark this item as updated
		this._updated = true;

		// Trigger the post-update event 
		this._onPostUpdate.trigger(this);
		Item._onPostUpdate.trigger(this);
	}


	/** Destroys the Item instance. */
	destroy() {
		if (this._parent)
			this._parent._children.remove(this);
		if (this._children.count > 0)
			this._children.clear();
	}


	/** Serializes the Item instance.
	 * @param format The serialization format.
	 * @return The serialized data. */
	serialize(format) {
		return Serialization.serialize(this, format);
	}


	/** Deserializes the Item instance.
	 * @param data The data to deserialize. */
	deserialize(data = {}) { Serialization.deserialize(this, data); }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Item class. */
Item.type = new Type("item", Item);

/** A global event triggered when a data item is modified. */
Item._onModified = new Event("modified");

/** A global event triggered before a data item is updated. */
Item._onPreUpdate = new Event("pre-update");

/** A global event triggered when a data item is updated. */
Item._onPostUpdate = new Event("post-update");


// ---------------------------------------------------------- PUBLIC EVENTS

/** A global event triggered when a data item is created. */
Item.onCreation = new Event("creation");
