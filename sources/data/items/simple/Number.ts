import { Item } from "../../Item";
import { Type } from "../../Type";
import { Simple } from "../Simple";

/** Defines a Numeric data item. */
export class Number extends Simple<number> {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the Number class. */
	public static type: Type = new Type("number", Number, Simple.type);


	// ------------------------------------------------------- PROTECTED FIELDS

	/** The minimum possible value of Number. */
	protected _min: number | undefined;

	/** The maximum possible value of the Number. */
	protected _max: number | undefined;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The minimum possible value of Number. */
	get min(): number | undefined { return this._min; }
	set min(newMin: number | undefined) {
		if (newMin == undefined) { this._min = newMin; return; }
		if (this._max != undefined && newMin > this._max) this._max = newMin;
		if (this._value != undefined && this._value < newMin) this._value = newMin;
		this._min = newMin; this.updated = false;
	}

	/** The maximum possible value of the Number. */
	get max(): number | undefined { return this._max; }
	set max(newMax: number | undefined) {
		if (newMax == undefined) { this._max = newMax; return; }
		if (this._min != undefined && newMax < this._min) this._min = newMax;
		if (this._value != undefined && this._value > newMax) this._value = newMax;
		this._max = newMax; this.updated = false;
	}


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Number class.
	 * @param name The name of the data item.
	 * @param parent The parent data item.
	 * @param data The initialization data. */
	constructor(name?: string, parent?: Item, data?: any) {

		// Call the parent class constructor
		super(name, parent);

		// Set the values of the properties
		this._value = undefined; this._defaultValue = 0;

		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Serializes the Number instance.
	 * @return The serialized data. */
	serialize(): any { return this._value; }


	/** Deserializes the Number instance.
	 * @param data The data to deserialize. */
	deserialize(data: any) {
		if (typeof data == "object") {
			this.min = data.min; this.max = data.max;
			this.defaultValue = data.defaultValue; 
			data = this.value = data.value;
		}
		else if (typeof data !== "number") this.value = parseFloat(data);
		else this.value = data;
	}


	/** Checks if the value is valid for this Number instance.
	 * @param value The value to check.
	 * @returns A boolean value indicating whether the value is valid or not. */
	checkValue(value: number): boolean {

		// Check the range 
		if (this._min != undefined && value < this._min) return false;
		if (this._max != undefined && value > this._max) return false;

		// If the value has not been rejected, check the 
		return super.checkValue(value);
	}


	/** Obtains the string representation of the Number instance.
	 * @returns The string representation of the Number instance. */
	toString(): string { return this.value.toFixed() || ""; }
}