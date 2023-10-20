import { Item } from "./Item";

/** Provides multiple methods to serialize and deserialize data items. */
export class Serialization {

	/** Serializes a Item instance into an object.
	 * @param item The item to serialize.
	 * @param item The format to use in the serialization.
	 * @return The serialized data. */
	static serialize(item: Item, format?: SerializationFormat): any {
		let data = {};
		for (let child of item.children) 
			data[child.name] = child.serialize(format);
		return data;
	}


	/** Deserializes generic data into a data Item.
	 * @param item The data item to store the data.
	 * @param data The data to deserialize. */
	static deserialize(item: Item, data: any) {

		// If the data is a string, check if it is JSON or CSV data
		if (typeof data == "string") {

			// Start parsing it as a CSV string
			let parsed;
			try { parsed = Serialization.fromCSV(data); } catch {}
			if (!parsed) try { parsed = Serialization.fromCSV(data); } catch {}
			if (!parsed) try { parsed = Serialization.fromJSON(data); } catch {}
			if (!parsed) return; // If no system has been successful
			data = parsed;
		}

		// If the data is an array, try to parse it value by value
		if (Array.isArray(data)) {
			for (let [index, dataPart] of data) {
				if (index >= item.children.count) return;
				item.children[index].deserialize(dataPart);
			}
		}

		// If the data is an object, analyze it key by key
		else for (let key in data) {
			let dataPart = data[key]; if (dataPart == undefined) continue;
			let child = item.children.getByName(key);
			if (child) child.deserialize(dataPart);
		}
	}

	/** Parses a string.
 	* @param s The string to parse.
 	* @returns The CSV data. */
	static fromWords(s: string, separator = ' ') : object {
		let data = [];

		return data;
	}
	
	/** Parses a CSV (Comma-Separated-Values) string.
	 * @param s The string to parse.
	 * @returns The parsed data. */
	static fromCSV(s: string) : object {
		let data = [];

		return data;
	}



	/** Parses a JSON (JavaScript-Object-Notation) string.
	 * @param s The string to parse.
	 * @returns The parsed data. */
	static fromJSON(s: string) : object { return JSON.parse(s); }


	/** Converts an object into a CSV (Comma-Separated-Values) string.
	 * @param data The data object to convert.
	 * @returns The CSV representation of the object. */
	static toCSV (data: object) : string {

		// Returns the resulting string
		let string: string = "";

		// Returns the resulting string
		return string;
	}


	/** Converts an object into a JSON (JavaScript-Object-Notation) string.
	 * @param data The data object to convert.
	 * @returns The JSON representation of the object. */
	static toJSON (data: object, maxIndentation:number = 0) : string {

		// Returns the resulting string
		let string: string = "";

		// Returns the resulting string
		return string;
	}
	

	/** Serializes a data item into a string.
	 * @param item The data item to serialize to a string.
	 * @return The resulting string. */
	static toString(item: Item) : string {
		let s: string = "";

		return s;
	}
}

/** Enumerates the different serialization formats. */
export enum SerializationFormat { CSV, JSON, XML }