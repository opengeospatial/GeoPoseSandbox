import { Item } from "../data/Item";
import { Type } from "../data/Type";
import { List } from "../data/collections/List";
import { Presence } from "./interaction/Presence";
import { View } from "./interaction/View";


/** Defines a user. */
export class User extends Item {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the User class. */
	public static type: Type = new Type("user", User, Item.type);


	// ------------------------------------------------------- PROTECTED FIELDS

	/** The presences of the user in the interaction spaces. */
	protected _presences: List<Presence>;

	/** The view of the user. */
	protected _views: List<View>;

	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The presences of the user in the interaction spaces. */
	get presences(): List<Presence> { return this._presences; }

	/** The point of views of the user. */
	get views(): List<View> { return this._views; }

	
	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new User class instance.
	 * @param name The name of the data item.
	 * @param parent The parent data item.
	 * @param data The initialization data. */
	 constructor(name?: string, parent?: Item, data?: any) {
	 
		// Call the parent class constructor
		super(name, parent);

		// Create the child items
		this._presences = new List<Presence>([Presence.type], this);
		this._views = new List<View>([View.type], this);

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
