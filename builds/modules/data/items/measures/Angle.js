import { Type } from "../../Type.js";
import { Measure, MeasurementUnit } from "../Measure.js";

/** Defines a angular measurement. */
export class Angle extends Measure {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Angle class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Angle class. */
Angle.type = new Type("angle", Angle, Measure.type);

/** The measurement units associated to the Angle class. */
Angle.units = [
	new MeasurementUnit("degrees", ["deg", "d", "º"], 1),
	new MeasurementUnit("radians", ["rad", "RAD"], Math.PI / 180)
];
