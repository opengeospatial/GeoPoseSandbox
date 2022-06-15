import { Item } from "../../Item";
import { Type } from "../../Type";
import { Measure, MeasurementUnit } from "../Measure";

/** Defines a dimensional measurement. */
export class Size extends Measure {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the Size class. */
	public static type: Type = new Type("size", Size, Measure.type);

	/** The measurement units associated to the Size class. */
	public static units: MeasurementUnit[] = [
		new MeasurementUnit("meters",["m", "ms"], 1),
		new MeasurementUnit("centimeters",["cm", "cms"], 0.01),
		new MeasurementUnit("millimeters",["mm", "mms"], 0.001),
		new MeasurementUnit("kilometers",["km", "kms"], 1000)
	];


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Size class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name?: string, parent?: Item, data?: any) {

		// Call the parent class constructor
		super(name, parent);

		// Sizes can not have negative values
		this._value = 0; this._min = 0; 

		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}
}