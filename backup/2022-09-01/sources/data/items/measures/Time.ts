import { Item } from "../../Item";
import { Type } from "../../Type";
import { Measure, MeasurementUnit } from "../Measure";

/** Defines a temporal measurement. */
export class Time extends Measure {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the time class. */
	public static type: Type = new Type("Time", Time, Measure.type);

	/** The measurement units associated to the Time class. */
	public static units: MeasurementUnit[] = [
		new MeasurementUnit("seconds",["s", "sec"], 1),
		new MeasurementUnit("minutes",["m", "mins"], 1/60),
		new MeasurementUnit("hours",["h"], 1/3600),
		new MeasurementUnit("milliseconds",["ms", "millisecs"], 1000),
	];


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Time class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name?: string, parent?: Item, data?: any) {

		// Call the parent class constructor
		super(name, parent);

		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}
}