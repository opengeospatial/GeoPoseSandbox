import { Item } from "../Item";
import { Type } from "../Type";
import { Shape } from "../items/Shape";

/** Defines a reference frame. */
export class Frame extends Item {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the Frame class. */
	public static type: Type = new Type("frame", Frame, Item.type);


	// --------------------------------------------------------- PRIVATE FIELDS

	/** The shape of the reference frame. */
	private _shape: Shape;

	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The shape of the reference frame. */
	get shape() { return this._shape; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Frame class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name?: string, parent?: Item, data?: any) { 

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._shape = new Shape("shape", this);

		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}
}