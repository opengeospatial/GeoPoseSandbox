import { Item } from "../../Item";
import { Type } from "../../Type";
import { Simple } from "../Simple";

/** Defines a boolean data item. */
export class Boolean extends Simple<boolean> {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the Boolean class. */
	public static type: Type = new Type("boolean", Boolean, Simple.type);


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Boolean class.
	 * @param name The name of the data type.
	 * @param parent The parent data type.
	 * @param data The initialization data. */
	constructor(name?: string, parent?: Item, data?: any) {

		// Call the parent class constructor
		super(name, parent, data);

		// Set the values of the properties
		this._value = undefined; this._defaultValue = false; 

		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Serializes the Boolean instance.
	 * @return The serialized data. */
	serialize(): any { return this.value; }


	/** Deserializes the Boolean instance.
	 * @param data The data to deserialize. */
	deserialize(data: any) {
		if (typeof data == "object") {
			this._defaultValue = data.defaultValue;
			data = this.value = data.value; 
		}
		else if (typeof data !== "boolean") 
			this.value = (data == "false" || data == 0)? false: true;
		else this.value = data;
	}


	/** Obtains the string representation of the Boolean instance.
	 * @returns The string representation of the Boolean instance. */
	toString(): string { return this.value? "true" : "false"; }


	/** Obtains the primitive value of the Boolean instance.
	 * @returns The primitive value of the Boolean instance. */
	valueOf(): boolean { return this.value; }
}