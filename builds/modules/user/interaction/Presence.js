import { Item } from "../../data/Item.js";
import { Type } from "../../data/Type.js";
import { PresenceEntity } from "../../logic/entities/PresenceEntity.js";


/** Defines the user Presence in an interaction space. */
export class Presence extends Item {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Presence instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent);

		// Create the child items
		this._entity = new PresenceEntity(name + "Entity", this);
		// The space node is not initialized here because it is actually a link

		// Deserialize the initialization data
		if (data)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The entity associated with this presence. */
	get entity() { return this._entity; }

	/** The space associated with the presence. */
	get space() { return this._space; }
	set space(space) { this._space = space; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Presence class. */
Presence.type = new Type("presence", Presence, Item.type);
