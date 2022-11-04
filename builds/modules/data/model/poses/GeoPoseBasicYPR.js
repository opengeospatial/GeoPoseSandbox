import { Type } from "../../Type.js";
import { GeoPose } from "../GeoPose.js";
import { TaitBryanOrientation } from "../orientations/TaitBryanOrientation.js";

/** Defines a basic GeoPose with Tait-Bryan (Yaw-Pitch-Roll) orientation. */
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
		this._orientation = new TaitBryanOrientation("orientation", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The orientation of the GeoPose. */
	get orientation() {
		return this._orientation;
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the GeoPoseBasicYPR class. */
GeoPoseBasicYPR.type = new Type("geopose-basic-ypr", GeoPoseBasicYPR, GeoPose.type);
