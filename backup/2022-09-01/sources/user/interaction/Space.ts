import { Item } from "../../data/Item";
import { Type } from "../../data/Type";
import { List } from "../../data/collections/List";
import { SpaceEntity } from "../../logic/entities/SpaceEntity";
import { Presence } from "./Presence";
import { Widget } from "./Widget";

/** Defines an Interaction Space. */
export class Space extends Item {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the Space class. */
	public static type: Type = new Type("space", Space, Item.type);


	// --------------------------------------------------------- PRIVATE FIELDS

	/** The entity of the space. */
	private _entity: SpaceEntity;

	/** The subspaces of the space. */
	private _spaces: List<Space>;

	/** The user presences in the space. */
	private _presences: List<Presence>;

	/** The widgets in the space. */
	private _widgets: List<Widget>;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The entity of the space. */
	get entity(): SpaceEntity { return this._entity; }

	/** The subspaces of the space. */
	get spaces(): List<Space> { return this._spaces; }

	/** The user presences in the space. */
	get presences(): List<Presence> { return this._presences; }

	/** The widgets of the space. */
	get widgets(): List<Widget> { return this._widgets; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Space instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	 constructor(name?: string, parent?: Item, data?: any) {

		// Call the parent class constructor
		super(name, parent);

		// Create the child nodes
		this._entity = new SpaceEntity(this.name);
		this._spaces = new List<Space>([Space.type], this);
		this._presences = new List<Presence>([Presence.type], this);
		this._widgets = new List<Widget>([Widget.type], this);
		
		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the space.
	 * @param deltaTime The update time. 
	 * @param forced Indicates whether the update is forced or not. */
	 update(deltaTime: number = 0, forced: boolean = false) {
		
		// If the update is not forced, skip it when the item is already updated
		if (this._updated && !forced) return;

		// Call the parent class update function
		super.update(deltaTime, forced);
		
		// Show a message on console
		// console.log("Space Updated");
	}
}