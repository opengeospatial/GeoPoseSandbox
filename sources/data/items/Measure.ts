import { Item } from "../Item.js"
import { Type } from "../Type.js"
import { Number } from "./simple/Number.js"


/** Defines a numeric Measure item. */
export class Measure extends Number {
	
	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the Measure class. */
	public static type: Type = new Type("measure", Measure, Number.type);


	// ------------------------------------------------------- PROTECTED FIELDS

	/** The units of the measure. */
	protected _units: MeasurementUnit[];

	/** The units of the measure. */
	protected _unitIndex: number;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The current unit of the measure. */
	get unit(): MeasurementUnit { return this._units[this._unitIndex]; }

	/** The units of the measure. */
	get units(): MeasurementUnit[] { return this._units; }

	/** The value of the measure in the selected unit.*/
	get unitIndex(): number { return this._unitIndex; }
	set unitIndex(u: number) {
		this._unitIndex = u; this._onModified.trigger(this);
	}


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Type class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name?: string, parent?: Item, data?: any) {

		// Call the parent class constructor
		super(name, parent, data);

		// Store the units of the Measure
		let units = this.constructor["units"], 
			className = this.constructor.name;
		if (units) this._units = units
		else throw Error ("No units defined for class '" + className + "'.");
		this._unitIndex = 0;
		
		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}
}


/** Defines a Measurement Unit. */
export class MeasurementUnit { 

	// --------------------------------------------------------- PRIVATE FIELDS
	
	/** The name of the Measurement Unit. */
	private _id: string;

	/** The list of abbreviations of the Measurement Unit. */
	private _abbrevs: string[];

	/** The relative conversion factor of the Measurement Unit. */
	private _factor: number | undefined;

	/** The default value of the Measurement Unit. */
	private _default: number | undefined;

	/** The minimum possible value of the Measurement Unit. */
	private _min: number | undefined;

	/** The maximum possible value of the Measurement Unit. */
	private _max: number | undefined;


	// ------------------------------------------------------- PUBLIC ACCESSORS
	
	/** The name of the Measurement Unit. */
	get id(): string { return this._id; }

	/** The list of abbreviations of the Measurement Unit. */
	get abbrevs(): string[] { return this._abbrevs; }

	/** The relative conversion factor of the Measurement Unit. */
	get factor(): number | undefined { return this._factor; }

	/** The default value of the Measurement Unit. */
	get default(): number | undefined { return this._default; }

	/** The minimum possible value of the Measurement Unit. */
	get min(): number | undefined { return this._min; }

	/** The maximum possible value of the Measurement Unit. */
	get max(): number | undefined { return this._max; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR
	
	/** Initializes a new instance of the MeasurementUnit class.
	 * @param id The id of the Measurement Unit.
	 * @param abbrevs The abbreviations of the Measurement Unit.
	 * @param factor The relative conversion factor of the Measurement Unit. 
	 * @param default The default value of the Measurement Unit. 
	 * @param min The minimum possible value of the Measurement Unit. 
	 * @param max The maximum possible value of the Measurement Unit. */
	constructor (id: string, abbrevs: string[], factor: number = 1, 
		defaultValue?: number, min?: number , max?: number) {
		this._id = id; this._abbrevs = abbrevs; this._factor = factor;
		this._default = defaultValue; this._min = min; this._max = max;
	}
}
