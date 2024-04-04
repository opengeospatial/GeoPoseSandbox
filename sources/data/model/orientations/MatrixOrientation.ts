import { Item } from "../../Item.js";
import { Type } from "../../Type.js";
import { Orientation } from "../Orientation.js";
import { Number } from "../../types/simple/Number.js";


/** Defines an orientation based on a 3x3 rotation matrix. */
export class MatrixOrientation extends Orientation {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the MatrixOrientation class. */
	public static type: Type = new Type("matrix-orientation", 
		MatrixOrientation, Orientation.type);

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The numeric values of the rotation matrix. */
	private _values : Number;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The numeric values of the rotation matrix. */
	get values(): Number { return this._values; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR
	
	/** Initializes a new instance of the MatrixOrientation class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	 constructor(name?: string, parent?: Item, data?: any) { 
		
		// Call the base class constructor
		super(name, parent, data);

		// Create the child items
		this._values = new Number("values", this, data);

		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}

}