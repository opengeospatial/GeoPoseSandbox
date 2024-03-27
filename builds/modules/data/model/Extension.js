import { Item } from "../Item.js";
import { Type } from "../Type.js";


/** Defines the basic class of a Pose Extension. */
export class Extension extends Item {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Extension class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent, data);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Extension class. */
Extension.type = new Type("extension", Extension, Item.type);
//# sourceMappingURL=Extension.js.map