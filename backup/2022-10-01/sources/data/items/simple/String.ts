import { Item } from "../../Item";
import { Type } from "../../Type";
import { Simple } from "../Simple";

/** Defines a String data item. */
export class String extends Simple<string> {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the String class. */
	public static type: Type = new Type("string", String, Simple.type);


	// ------------------------------------------------------- PROTECTED FIELDS

	/** The regular expression of the string. */
	protected _validRegEx: RegExp | undefined;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The regular expression values of the string.*/
	get validRegEx(): RegExp | undefined { return this._validRegEx; }
	set validRegEx(newValidRegEx: RegExp | undefined) {
		this._validRegEx = newValidRegEx;
		if (!this._value) return;
		if (!this.checkValue(this._value)) throw Error(
			'Invalid value "' + this._value + '" for: ' + this.name);
		this._onModified.trigger(this);
	}


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the String class.
	 * @param name The name of the data item.
	 * @param parent The parent data item.
	 * @param data The initialization data. */
	constructor(name?: string, parent?: Item, data?: any) {

		// Call the parent class constructor
		super(name, parent);

		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Deserializes the String instance.
	 * @param data The data to deserialize. */
	deserialize(data: any) {
		if (typeof data == "object") {
			this._validValues = data.validValues;
			this._validRegEx = data.validRegEx;
			this._defaultValue = data.default; // Check the default value
			data = this.value = data.value; 
		}
		if (typeof data !== "string") data = JSON.stringify(data);
		this.value = data;
	}


	/** Checks if the value is valid for this String instance.
	 * @param value The value to check.
	 * @returns A boolean value indicating whether the value is valid or not. */
	checkValue(value:string): boolean {

		// Check the regular expression
		if (this._validRegEx && !this._validRegEx.test(value)) return false;

		// If the value has not been rejected, check the 
		return super.checkValue(value);
	}


	/** Obtains the string representation of the Number instance.
	 * @returns The string representation of the Number instance. */
	toString(): string { return this.value || ""; }
}