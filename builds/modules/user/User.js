import { Item } from "../data/Item.js";
import { Type } from "../data/Type.js";
import { List } from "../data/collections/List.js";
import { Presence } from "./interaction/Presence.js";
import { View } from "./interaction/View.js";


/** Defines a user. */
export class User extends Item {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new User class instance.
	 * @param name The name of the data item.
	 * @param parent The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent);

		// Create the child items
		this._presences = new List([Presence.type], this);
		this._views = new List([View.type], this);

		// Deserialize the initialization data
		if (data !== undefined)
			this.deserialize(data);

		// Create the defaults presences and views
		if (this._presences.count == 0) {
			let spaces = this.parent.spaces;
			for (let space of spaces) {
				let presence = new Presence("DefaultPresence", this);
				presence.space = space;
				this.presences.add(presence);
			}
		}
		if (this._views.count == 0)
			this._views.add(new View("DefaultView", this));
	}

	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The presences of the user in the interaction spaces. */
	get presences() { return this._presences; }

	/** The point of views of the user. */
	get views() { return this._views; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the User class. */
User.type = new Type("user", User, Item.type);

