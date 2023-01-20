import { Type } from "../../Type.js";
import { Pose } from "../Pose.js";
import { EuclideanPosition } from "../positions/EuclideanPosition.js";
import { QuaternionOrientation } from "../orientations/QuaternionOrientation.js";


/** Defines a Euclidean pose with a quaternion orientation. */
export class EuclideanPoseQuaternion extends Pose {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the EuclideanPoseQuaternion class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent, data);

		// Create the child items
		this._position = new EuclideanPosition("position", this, null);
		this._orientation = new QuaternionOrientation("orientation", this);

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

/** The data type associated to the EuclideanPoseQuaternion class. */
EuclideanPoseQuaternion.type = new Type("euclidean-pose-quaternion", EuclideanPoseQuaternion, Pose.type);
