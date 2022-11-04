import { Type } from "../../Type.js";
import { Simple } from "../Simple.js";

/** Defines a String data item. */
export class String extends Simple {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the String class.
	 * @param name The name of the data item.
	 * @param parent The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The regular expression values of the string.*/
	get validRegEx() { return this._validRegEx; }
	set validRegEx(newValidRegEx) {
		this._validRegEx = newValidRegEx;
		if (!this._value)
			return;
		if (!this.checkValue(this._value))
			throw Error('Invalid value "' + this._value + '" for: ' + this.name);
		this._onModified.trigger(this);
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Deserializes the String instance.
	 * @param data The data to deserialize. */
	deserialize(data) {
		if (typeof data == "object") {
			this._validValues = data.validValues;
			this._validRegEx = data.validRegEx;
			this._defaultValue = data.defaultValue;
			data = this.value = data.value;
		}
		else if (typeof data !== "string")
			data = JSON.stringify(data);
		else
			this.value = data;
	}


	/** Checks if the value is valid for this String instance.
	 * @param value The value to check.
	 * @returns A boolean value indicating whether the value is valid or not. */
	checkValue(value) {

		// Check the regular expression
		if (this._validRegEx && !this._validRegEx.test(value))
			return false;

		// If the value has not been rejected, check the 
		return super.checkValue(value);
	}


	/** Obtains the string representation of the Number instance.
	 * @returns The string representation of the Number instance. */
	toString() { return this.value || ""; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the String class. */
String.type = new Type("string", String, Simple.type);
