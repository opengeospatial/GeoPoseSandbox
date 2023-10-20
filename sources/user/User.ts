import { Item } from "../data/Item.js";
import { Type } from "../data/Type.js";
import { Collection } from "../data/Collection.js";
import { Presence } from "./interaction/Presence.js";
import { View } from "./interaction/View.js";


/** Defines a user. */
export class User extends Item {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the User class. */
	public static type: Type = new Type("user", User, Item.type);


	// ------------------------------------------------------- PROTECTED FIELDS

	/** The presences of the user in the interaction spaces. */
	protected _presences: Collection<Presence>;

	/** The view of the user. */
	protected _views: Collection<View>;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The presences of the user in the interaction spaces. */
	get presences(): Collection<Presence> { return this._presences; }

	/** The point of views of the user. */
	get views(): Collection<View> { return this._views; }

	
	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new User class instance.
	 * @param name The name of the data item.
	 * @param parent The parent data item.
	 * @param data The initialization data. */
	 constructor(name?: string, parent?: Item, data: any = {}) {
	 
		// Call the parent class constructor
		super(name, parent, data);

		// Create the child items
		this._presences = new Collection<Presence>([Presence.type], this);
		this._views = new Collection<View>([View.type], this);

		// Deserialize the initialization data
		if (data !== undefined) this.deserialize(data);

		// Create the defaults presences and views
		if (this._presences.count == 0) {
			let spaces = (this.parent as any).spaces;
			for (let space of spaces) {
				let presence = new Presence("DefaultPresence", this);
				presence.space = space;
				this.presences.add(presence);
			}
		}
		if (this._views.count == 0) 
			this._views.add(new View("DefaultView", this));
	}
}
