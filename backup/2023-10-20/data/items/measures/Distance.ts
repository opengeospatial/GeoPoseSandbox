import { Item } from "../../Item.js"
import { Type } from "../../Type.js"
import { Measure, MeasurementUnit } from "../Measure.js"

/** Defines a length measurement. */
export class Distance extends Measure {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the Distance class. */
	public static type: Type = new Type("distance", Distance, Measure.type);

	/** The measurement units associated to the Distance class. */
	public static units: MeasurementUnit[] = [
		new MeasurementUnit("meters",["m", "ms"], 1),
		new MeasurementUnit("centimeters",["cm", "cms"], 0.01),
		new MeasurementUnit("millimeters",["mm", "mms"], 0.001),
		new MeasurementUnit("kilometers",["km", "kms"], 1000)
	];


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Distance class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name?: string, parent?: Item, data?: any) {

		// Call the parent class constructor
		super(name, parent, data);

		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}
}