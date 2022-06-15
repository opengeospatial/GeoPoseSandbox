import { Type } from "../../Type.js";
import { GeoPose } from "../GeoPose.js";
import { GeoPosition } from "../positions/GeoPosition.js";
import { YawPitchRollOrientation } from "../orientations/YawPitchRollOrientation.js";

/** Defines a basic GeoPose with Yaw-Pitch-Roll orientation. */
export class GeoPoseBasicYPR extends GeoPose {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the YawPitchRollOrientation class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._position = new GeoPosition("position", this);
		this._orientation = new YawPitchRollOrientation("orientation", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The position of the GeoPose. */
	get position() { return this._position; }

	/** The orientation of the GeoPose. */
	get orientation() { return this._orientation; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the GeoPoseBasicYPR class. */
GeoPoseBasicYPR.type = new Type("geopose-basic-ypr", GeoPoseBasicYPR, GeoPose.type);
