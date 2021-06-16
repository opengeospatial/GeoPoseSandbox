import { Pose } from "../model/Pose.js";

/** Defines a Serialization/Deserialization of the GeoPose Standard. */
export class GeoPoseSerialization {


	/** Serializes a Pose into the Geopose JSON string.
	 * @param pose The (Geo)Pose instance to serialize.
	 * @returns The GeoPose JSON string. */
	static serializeJSON(pose) {
		let geopose = {};
		return JSON.stringify(geopose);
	}

	/** Deserializes a GeoPose JSON string into a Pose.
	 * @param geoposeData The JSON string with the geopose data.
	 * @returns The deserialized (Geo)Pose instance. */
	static deserializeJSON(geoposeData) {
		let data = JSON.parse(geoposeData);
		let geopose = new Pose("GeoPose", null, {

		});
		return geopose;
	}


	/** Serializes a Pose into the Geopose CSV string.
	 * @param pose The (Geo)Pose instance to serialize.
	 * @returns The GeoPose CSV string. */
	static serializeCSV(pose) {
		let geoPoseValues = [];
		return geoPoseValues.join(',');
	}

	/** Deserializes a GeoPose CSV string into a Pose.
	 * @param geoposeData The CSV string with the geopose data.
	 * @returns The deserialized (Geo)Pose instance. */
	static deserializeCSV(geoposeData) {
		let geoPoseValues = geoposeData.split(',');
	}
}


