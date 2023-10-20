import { Item } from "../Item";
import { Type } from "../Type";

/** Defines the basic class of a Pose Extension. */
export class Extension extends Item {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the Extension class. */
	public static type: Type = new Type("extension", Extension, Item.type);


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Extension class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name?: string, parent?: Item, data?: any) { 

		// Call the base class constructor
		super(name, parent);
		
		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}
}