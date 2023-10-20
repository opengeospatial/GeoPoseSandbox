import { Node } from "../Node.js";

/** Defines a numeric measure. */
export class Measure extends Node {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Measure class.
	 * @param name The name of the Measure.
	 * @param type The type of the Measure.
	 * @param parentNode The parent Measure.
	 * @param params The initialization parameters (or a numeric value). */
	constructor(name, type, parentNode, params = {}) {

		// Call the parent constructor
		super(name, type, parentNode, params);

		// --------------------------------------------------------- PRIVATE FIELDS

		/** The current value of the Measure.*/
		this._value = 0;

		/** The minimum possible value of Measure. */
		this._min = Number.NEGATIVE_INFINITY;

		/** The maximum possible value of the Measure. */
		this._max = Number.POSITIVE_INFINITY;

		/** The default value of the Measure. .*/
		this._default = 0;

		/** The accuracy of the Measure. */
		this._accuracy = 0;

		// Set the values
		if (params)
			this.setValue(params);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** Gets the current value of the Measure. */
	get value() { return this._value; }

	/** Sets the current value of the Measure. */
	set value(newValue) {
		// TODO Include Warnings messages when the value is not in range
		if (newValue < this._min)
			this._value = this._min;
		else if (newValue > this._max)
			this._value = this._max;
		else
			this._value = newValue;
		this.updated = false;
	}


	/** Gets the minimum possible value of the Measure. */
	get min() { return this._min; }

	/** Sets the minimum possible value of the Measure. */
	set min(newMin) {
		if (newMin > this._max)
			this._max = newMin;
		if (newMin > this._value)
			this.value = newMin;
		this._min = newMin;
		this.updated = false;
	}


	/** Gets the maximum possible value of the Measure. */
	get max() { return this._max; }

	/** Sets the maximum possible value of the Measure. */
	set max(newMax) {
		if (newMax < this._min)
			this._min = newMax;
		if (newMax < this._value)
			this.value = newMax;
		this._max = newMax;
		this.updated = false;
	}


	/** Gets the default value of the Measure. */
	get default() { return this._default; }

	/** Sets the default value of the Measure. */
	set default(newDefault) {
		this._default = newDefault;
		this.updated = false;
	}


	/** Gets the value accuracy of the Measure. */
	get accuracy() { return this._accuracy; }

	/** Sets the value accuracy of the Measure. */
	set accuracy(newAccuracy) {
		this._accuracy = newAccuracy;
		this.updated = false;
	}


	/** Gets the measurement unit of the Measure. */
	get unit() { return this._unit; }

	/** Sets the measurement unit of the Measure. */
	set unit(newUnit) {
		// TODO create conversion between units
		this._unit = newUnit;
		this.updated = false;
	}
	setValue(params = {}) {
		if (typeof params == "number")
			this.value = params;
		else {
			this.min = params.min;
			this.max = params.max;
			this.value = params.value;
			this.accuracy = params.accuracy;
		}
	}

	/** Gets the value of the Measure.
	 *  @returns The value of the Measure. */
	getValue() { return this._value; }
}
