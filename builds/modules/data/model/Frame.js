import { Item } from "../Item.js";
import { Type } from "../Type.js";
import { Shape } from "../items/Shape.js";

/** Defines a reference frame. */
export class Frame extends Item {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Frame class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._shape = new Shape("shape", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}

	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The shape of the reference frame. */
	get shape() { return this._shape; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Frame class. */
Frame.type = new Type("frame", Frame, Item.type);
