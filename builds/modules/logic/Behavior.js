import { Item } from "../data/Item.js";
import { Type } from "../data/Type.js";

/** Defines an logic behavior, */
export class Behavior extends Item {


	// ------------------------------------------------------- PROTECTED FIELDS

	// ------------------------------------------------------- PUBLIC ACCESSORS

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Behavior instance.
	 * @param name The name of the logic behavior.
	 * @param parent The parent item.*/
	constructor(name, parent) {

		// Call the base class constructor
		super(name, parent);

	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Behavior class. */
Behavior.type = new Type("behavior", Behavior, Item.type);
