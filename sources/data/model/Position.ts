import { Item } from "../Item";
import { Type } from "../Type";
import { Vector } from "../items/complex/Vector";

/** Defines a basic position within a reference frame. */
export class Position extends Item {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the Position class. */
	public static type: Type = new Type("position", Position, Item.type);

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Location class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name?: string, parent?: Item, data?: any) { 

		// Call the base class constructor
		super(name, parent);

		// Create the child items

		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}
}