import { Node } from "../Node.js";

/** Defines a numeric measure. */
export class String extends Node {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Measure class.
	 * @param name The name of the Measure.
	 * @param parentNode The parent Measure.
	 * @param params The initialization parameters (or a string value). */
	constructor(name, parentNode, params = {}) {

		// Call the parent constructor
		super(name, "string", parentNode, params);

		// --------------------------------------------------------- PRIVATE FIELDS

		/** The current value of the Measure.*/
		this._value = null;

		/** The default value of the Measure. .*/
		this._default = null;

		// Set the values
		if (params)
			this.setValue(params);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** Gets the current value of the Measure. */
	get value() { return this._value; }

	/** Sets the current value of the Measure. */
	set value(newValue) { this._value = newValue; this.updated = false; }

	/** Gets the default value of the Measure. */
	get default() { return this._default; }

	/** Sets the default value of the Measure. */
	set default(newDefault) { this._default = newDefault; }
	setValue(params = {}) {
		if (typeof params == "string")
			this.value = params;
		else {
			this.value = params.value;
			this.default = params.default;
		}
	}

	/** Gets the value of the Number.
	 *  @returns The value of the Number. */
	getValue() { return this._value; }
}
