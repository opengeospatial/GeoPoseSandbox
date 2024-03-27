
/** Provides multiple methods to serialize and deserialize data items. */
export class Serialization {

	/** Serializes a Item instance into an object.
	 * @param item The item to serialize.
	 * @param item The format to use in the serialization.
	 * @return The serialized data. */
	static serialize(item, format) {
		let data = {};
		for (let child of item.children)
			data[child.name] = child.serialize(format);
		return data;
	}


	/** Deserializes generic data into a data Item.
	 * @param item The data item to store the data.
	 * @param data The data to deserialize. */
	static deserialize(item, data) {

		// If the data is a string, check if it is JSON or CSV data
		if (typeof data == "string") {

			// Start parsing it as a CSV string
			let parsed;
			try {
				parsed = Serialization.fromCSV(data);
			}
			catch { }
			if (!parsed)
				try {
					parsed = Serialization.fromCSV(data);
				}
				catch { }
			if (!parsed)
				try {
					parsed = Serialization.fromJSON(data);
				}
				catch { }
			if (!parsed)
				return; // If no system has been successful
			data = parsed;
		}

		// If the data is an array, try to parse it value by value
		if (Array.isArray(data)) {
			for (let [index, dataPart] of data) {
				if (index >= item.children.count)
					return;
				item.children[index].deserialize(dataPart);
			}
		}

		// If the data is an object, analyze it key by key
		else
			for (let key in data) {
				let dataPart = data[key];
				if (dataPart == undefined)
					continue;
				let child = item.children.getByName(key);
				if (child)
					child.deserialize(dataPart);
			}
	}

	/** Parses a string.
	* @param s The string to parse.
	* @returns The CSV data. */
	static fromWords(s, separator = ' ') {
		let data = [];

		return data;
	}

	/** Parses a CSV (Comma-Separated-Values) string.
	 * @param s The string to parse.
	 * @returns The parsed data. */
	static fromCSV(s) {
		let data = [];

		return data;
	}



	/** Parses a JSON (JavaScript-Object-Notation) string.
	 * @param s The string to parse.
	 * @returns The parsed data. */
	static fromJSON(s) { return JSON.parse(s); }


	/** Converts an object into a CSV (Comma-Separated-Values) string.
	 * @param data The data object to convert.
	 * @returns The CSV representation of the object. */
	static toCSV(data) {

		// Returns the resulting string
		let string = "";

		// Returns the resulting string
		return string;
	}


	/** Converts an object into a JSON (JavaScript-Object-Notation) string.
	 * @param data The data object to convert.
	 * @returns The JSON representation of the object. */
	static toJSON(data, maxIndentation = 0) {

		// Returns the resulting string
		let string = "";

		// Returns the resulting string
		return string;
	}


	/** Serializes a data item into a string.
	 * @param item The data item to serialize to a string.
	 * @return The resulting string. */
	static toString(item) {
		let s = "";

		return s;
	}
}

/** Enumerates the different serialization formats. */
export var SerializationFormat;
(function (SerializationFormat) {
	SerializationFormat[SerializationFormat["CSV"] = 0] = "CSV";
	SerializationFormat[SerializationFormat["JSON"] = 1] = "JSON";
	SerializationFormat[SerializationFormat["XML"] = 2] = "XML";
})(SerializationFormat || (SerializationFormat = {}));
//# sourceMappingURL=Serialization.js.map