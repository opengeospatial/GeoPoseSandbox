import { Pose } from "../model/Pose";

/** Defines a Serialization/Deserialization of the GeoPose Standard. */
export class GeoPoseSerialization {


	/** Serializes a Pose into the Geopose JSON string.
	 * @param pose The (Geo)Pose instance to serialize.
	 * @returns The GeoPose JSON string. */
	 public static serialize(pose: Pose) {
		let geopose = {};
		return JSON.stringify(geopose);
	}

	/** Deserializes a GeoPose JSON string into a Pose.
	 * @param geoposeData The JSON string with the geopose data.
	 * @returns The deserialized (Geo)Pose instance. */
	public static deserialize(geoposeData: string) {
		let geopose = JSON.parse(geoposeData);
	}
}

