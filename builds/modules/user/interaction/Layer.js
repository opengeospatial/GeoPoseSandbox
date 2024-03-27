import { Item } from "../../data/Item.js";
import { Type } from "../../data/Type.js";
import { Collection } from "../../data/Collection.js";
import { Widget } from "./Widget.js";

/** Defines an user interaction (view) layer . */
export class Layer extends Item {


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The widgets of the layer. */
	get widgets() { return this._widgets; }

	/** The Interaction Space associated to the layer. */
	get space() { return this._space; }

	/** The user Presence in the layer. */
	get presence() { return this._presence; }

	/** The entity associated to the layer. */
	get entity() { return this._space.entity; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Layer instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param presence The user presence associated with the layer. */
	constructor(name, parent, presence) {

		// Call the parent class constructor
		super(name, parent);

		// Create the child items
		this._widgets = new Collection([Widget.type], this);
		this._presence = presence;
		this._space = presence.space;
		this._presence.links.add(this);
		this._space.links.add(this);
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the layer.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		// If the update is not forced, skip it when the item is already updated
		if (this._updated && !forced)
			return;

		// Update the space	and the presence of the user within it
		this.space.update(deltaTime, forced);
		this.presence.update(deltaTime, forced);

		// Update the widgets, the space and the user presence
		for (let widget of this.widgets)
			widget.update(deltaTime, forced);

		// Call the parent class update function
		super.update(deltaTime, forced);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Layer class. */
Layer.type = new Type("layer", Layer, Item.type);

//# sourceMappingURL=Layer.js.map