import { Item } from "../../Item";
import { Type } from "../../Type";
import { Position } from "../Position";


/** Defines a location in an orbital coordinate system. */
export class OrbitalPosition extends Position {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the OrbitalPosition class. */
	public static type: Type = new Type("orbital-position", OrbitalPosition, 
		Position.type);

	// --------------------------------------------------------- PRIVATE FIELDS

	// TODO


	// ------------------------------------------------------- PUBLIC ACCESSORS

	// TODO


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR
	
	/** Initializes a new instance of the OrbitalPosition class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	 constructor(name?: string, parent?: Item, data?: any) { 
		
		// Call the base class constructor
		super(name, parent);

		// Create the children nodes
		// TODO

		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}
}