import { Item } from "../Item.js"
import { Type } from "../Type.js"
import { Vector } from "../items/complex/Vector.js"


/** Defines a basic position within a reference frame. */
export class Position extends Item {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the Position class. */
	public static type: Type = new Type("position", Position, Item.type);

	
	// --------------------------------------------------------- PRIVATE FIELDS

	/** The relative values of the Position. */
	private _relativeValues: Vector;

	/** The absolute position of the Position. */
	private _absoluteValues: Vector;

	/** The additional rotation of the Position. */
	private _additionalRotation: Vector;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The relative position of the Pose. */
	get relativeValues() { return this._relativeValues; }

	/** The absolute position of the Pose. */
	get absoluteValues() { return this._absoluteValues; }

	/** The absolute position of the Pose. */
	get additionalRotation() { return this._additionalRotation; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Location class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name?: string, parent?: Item, data?: any) { 

		// Call the base class constructor
		super(name, parent, data);

		// Create the child items
		this._relativeValues = new Vector("relativeValues", this);
		this._absoluteValues = new Vector("absoluteValues", this);
		this._additionalRotation = new Vector("additionalRotation", this);

		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}
}