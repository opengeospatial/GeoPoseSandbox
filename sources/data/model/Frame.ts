import { Item } from "../Item";
import { Type } from "../Type";
import { String } from "../items/Simple/String";
import { Shape } from "../items/Shape";

/** Defines a reference frame. */
export class Frame extends Item {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the Frame class. */
	public static type: Type = new Type("frame", Frame, Item.type);


	// --------------------------------------------------------- PRIVATE FIELDS

	/** The handedness of the reference frame ("right" by default). */
	private _handedness: String;

	/** The vertical axis of the reference frame ("Z" by default). */
	private _verticalAxis: String;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The handedness of the reference frame ("right" by default). */
	get handedness() { return this._handedness; }

	/** The vertical axis of the reference frame ("Z" by default). */
	get verticalAxis() { return this._verticalAxis; }



	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Frame class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name?: string, parent?: Item, data?: any) { 

		// Call the base class constructor
		super(name, parent, data);

		this._handedness = new String("handedness", this, 
			{ validValues: ["right", "left"], defaultValue: "right"});

		this._verticalAxis = new String("verticalAxis", this, 
			{ validValues: ["X", "Y", "Z"], defaultValue: "Z"});

		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}
}