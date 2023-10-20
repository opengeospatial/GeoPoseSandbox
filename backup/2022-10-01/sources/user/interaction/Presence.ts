import { Item } from "../../data/Item";
import { Type } from "../../data/Type";
import { PresenceEntity } from "../../logic/entities/PresenceEntity";
import { Space } from "./Space";


/** Defines the user Presence in an interaction space. */
export class Presence extends Item {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the Presence class. */
	public static type: Type = new Type("presence", Presence, Item.type);


	// --------------------------------------------------------- PRIVATE FIELDS

	/** The main entity of the presence. */
	private _entity: PresenceEntity;

	/** The space associated with the presence. */
	private _space: Space;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The entity associated with this presence. */
	get entity(): PresenceEntity { return this._entity; }

	/** The space associated with the presence. */
	get space(): Space { return this._space; }
	set space(space: Space) { this._space = space; }
	

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Presence instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	 constructor(name?: string, parent?: Item, data?: any) {

		// Call the parent class constructor
		super(name, parent);
		
		// Create the child items
		this._entity = new PresenceEntity(name + "Entity", this);
		// The space node is not initialized here because it is actually a link

		// Deserialize the initialization data
		if (data) this.deserialize(data);
	}


	// --------------------------------------------------------- PUBLIC METHODS

}