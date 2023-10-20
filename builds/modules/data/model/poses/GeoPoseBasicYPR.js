import { Type } from "../../Type.js";
import { GeoPose } from "../GeoPose.js";
import { YawPitchRollOrientation } from "../orientations/YawPitchRollOrientation.js";

/** Defines a basic GeoPose with Yaw-Pitch-Roll (Tait-Bryan) orientation. */
export class GeoPoseBasicYPR extends GeoPose {


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The orientation of the GeoPose. */
	get orientation() {
		return this._orientation;
	}


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the GeoPoseBasicYPR class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent, data);

		// Create the child items
		this._orientation = new YawPitchRollOrientation("orientation", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the GeoPoseBasicYPR instance.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		// If the update is not forced, skip it when the item is already updated
		if (this._updated && !forced)
			return;

		// Call the base class function
		super.update(deltaTime, forced);

	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the GeoPoseBasicYPR class. */
GeoPoseBasicYPR.type = new Type("geopose-basic-ypr", GeoPoseBasicYPR, GeoPose.type);
