import { Type } from "../../Type.js";
import { Pose } from "../Pose.js";
import { EuclideanPosition } from "../positions/EuclideanPosition.js";
import { TaitBryanOrientation } from "../orientations/TaitBryanOrientation.js";

/** Defines a Euclidean pose with Yaw-Pitch-Roll orientation. */
export class EuclideanPoseYPR extends Pose {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the EuclideanPoseYPR class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._position = new EuclideanPosition("position", this, null);
		this._orientation = new TaitBryanOrientation("orientation", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The position of the Euclidean Pose. */
	get position() {
		return this._position;
	}

	/** The orientation of the Euclidean Pose. */
	get orientation() {
		return this._orientation;
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the EuclideanPoseYPR class. */
EuclideanPoseYPR.type = new Type("euclidean-basic-ypr", EuclideanPoseYPR, Pose.type);
