import { Item } from "../../Item";
import { Type } from "../../Type";
import { Measure, MeasurementUnit } from "../Measure";

/** Defines a angular measurement. */
export class Angle extends Measure {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the Angle class. */
	public static type: Type = new Type("angle", Angle, Measure.type);

	/** The measurement units associated to the Angle class. */
	public static units: MeasurementUnit[] = [
		new MeasurementUnit("degrees",["deg", "d", "º"], 1),
		new MeasurementUnit("radians",["rad", "RAD"], Math.PI/180)
	];


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Angle class.
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