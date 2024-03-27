import { Type } from "../../Type.js";
import { Simple } from "../Simple.js";

/** Defines a boolean data item. */
export class Boolean extends Simple {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Boolean class.
	 * @param name The name of the data type.
	 * @param parent The parent data type.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent, data);

		// Set the values of the properties
		this._value = undefined;
		this._defaultValue = false;

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Serializes the Boolean instance.
	 * @return The serialized data. */
	serialize() { return this.value; }


	/** Deserializes the Boolean instance.
	 * @param data The data to deserialize. */
	deserialize(data) {
		if (typeof data == "object") {
			this._defaultValue = data.defaultValue;
			data = this.value = data.value;
		}
		else if (typeof data !== "boolean")
			this.value = (data == "false" || data == 0) ? false : true;
		else
			this.value = data;
	}


	/** Obtains the string representation of the Boolean instance.
	 * @returns The string representation of the Boolean instance. */
	toString() { return this.value ? "true" : "false"; }


	/** Obtains the primitive value of the Boolean instance.
	 * @returns The primitive value of the Boolean instance. */
	valueOf() { return this.value; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Boolean class. */
Boolean.type = new Type("boolean", Boolean, Simple.type);
//# sourceMappingURL=Boolean.js.map