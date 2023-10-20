import { Item } from "../Item";
import { Type } from "../Type";
import { Vector } from "../items/complex/Vector";

/** Defines a basic position within a reference frame. */
export class Position extends Item {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the Position class. */
	public static type: Type = new Type("position", Position, Item.type);


	// --------------------------------------------------------- PRIVATE FIELDS

	/** Define the relative position. */
	private _relativeValues: Vector;

	/** Define the absolute position. */
	private _absoluteValues: Vector;

	/** Define the vertical vector. */
	private _verticalVector: Vector;

	/** Define the forward vector. */
	private _forwardVector: Vector;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The relative position. */
	get relativeValues() { return this._relativeValues; }

	/** The absolute position. */
	get absoluteValues() { return this._absoluteValues; }

	/** The vertical vector. */
	get verticalVector() { return this._verticalVector; }

	/** The forward vector. */
	get forwardVector() { return this._forwardVector; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Location class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name?: string, parent?: Item, data?: any) { 

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._relativeValues = new Vector("relativeValues", this);
		this._absoluteValues = new Vector("absoluteValues", this);
		this._verticalVector = new Vector("verticalVector", this);
		this._forwardVector = new Vector("forwardVector", this);

		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}
}