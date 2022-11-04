import { Item } from "../Item.js";
import { Type } from "../Type.js";

/** Defines a basic position within a reference frame. */
export class Position extends Item {

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Location class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Position class. */
Position.type = new Type("position", Position, Item.type);
