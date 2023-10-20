import { Item } from "../../Item.js";
import { Type } from "../../Type.js";
import { Pose } from "../Pose.js";
import { EuclideanPosition } from "../positions/EuclideanPosition.js";
import { QuaternionOrientation } from "../orientations/QuaternionOrientation.js";


/** Defines a Euclidean pose with a quaternion orientation. */
export class EuclideanPoseQuaternion extends Pose {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the EuclideanPoseQuaternion class. */
	public static type: Type = new Type("euclidean-pose-quaternion", 
		EuclideanPoseQuaternion, Pose.type);

	
	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The position of the Euclidean Pose. */
	get position(): EuclideanPosition { 
		return this._position as EuclideanPosition; 
	}

	/** The orientation of the Euclidean Pose. */
	get orientation(): QuaternionOrientation { 
		return this._orientation as QuaternionOrientation; 
	}


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR
	
	/** Initializes a new instance of the EuclideanPoseQuaternion class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	 constructor(name?: string, parent?: Item, data?: any) { 
		
		// Call the base class constructor
		super(name, parent, data);

		// Create the child items
		this._position = new EuclideanPosition("position", this, null);
		this._orientation = new QuaternionOrientation("orientation", this);

		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}
}