import { Item } from "../../data/Item.js";
import { Type } from "../../data/Type.js";
import { Collection } from "../../data/Collection.js";
import { SpaceEntity } from "../../logic/entities/SpaceEntity.js";
import { Presence } from "./Presence.js";
import { Widget } from "./Widget.js";

/** Defines an Interaction Space. */
export class Space extends Item {


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The entity of the space. */
	get entity() { return this._entity; }

	/** The subspaces of the space. */
	get subspaces() { return this._subspaces; }

	/** The user presences in the space. */
	get presences() { return this._presences; }

	/** The widgets of the space. */
	get widgets() { return this._widgets; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Space instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data = {}) {

		// Call the parent class constructor
		super(name, parent, data);

		// Create the child nodes
		this._entity = new SpaceEntity(this.name);
		this._subspaces = new Collection([Space.type], this);
		this._presences = new Collection([Presence.type], this);
		this._widgets = new Collection([Widget.type], this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the space.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		// If the update is not forced, skip it when the item is already updated
		if (this._updated && !forced)
			return;

		// Call the parent class update function
		super.update(deltaTime, forced);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Space class. */
Space.type = new Type("space", Space, Item.type);
//# sourceMappingURL=Space.js.map