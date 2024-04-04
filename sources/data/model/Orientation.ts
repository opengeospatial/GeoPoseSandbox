import { Item } from "../Item.js"
import { Type } from "../Type.js"
import { Quaternion } from "../types/complex/Quaternion.js"


/** Define the basic class of a three dimensional orientation. */
export class Orientation extends Item {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the Orientation class. */
	public static type: Type = new Type("orientation", Orientation, Item.type);


	// --------------------------------------------------------- PRIVATE FIELDS

	/** Define the relative orientation. */
	private _relativeValues: Quaternion;

	/** Define the absolute orientation. */
	private _absoluteValues: Quaternion;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The relative orientation. */
	get relativeValues() { return this._relativeValues; }

	/** The absolute orientation. */
	get absoluteValues() { return this._absoluteValues; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Orientation class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name?: string, parent?: Item, data?: any) { 

		// Call the base class constructor
		super(name, parent, data);

		// Create the child items
		this._relativeValues = new Quaternion("relativeValues", this);
		this._absoluteValues = new Quaternion("absoluteValues", this);
		
		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}
}