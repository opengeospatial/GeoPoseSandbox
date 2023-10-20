import { Item } from "../../Item";
import { Type } from "../../Type";
import { Pose } from "../Pose";
import { EuclideanPosition } from "../positions/EuclideanPosition";
import { TaitBryanOrientation } from "../orientations/TaitBryanOrientation";

/** Defines a Euclidean pose with Yaw-Pitch-Roll orientation. */
export class EuclideanPoseYPR extends Pose {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the EuclideanPoseYPR class. */
	public static type: Type = new Type("euclidean-basic-ypr", EuclideanPoseYPR, 
		Pose.type);

	
	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The position of the Euclidean Pose. */
	get position(): EuclideanPosition { 
		return this._position as EuclideanPosition; 
	}

	/** The orientation of the Euclidean Pose. */
	get orientation(): TaitBryanOrientation { 
		return this._orientation as TaitBryanOrientation; 
	}


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR
	
	/** Initializes a new instance of the EuclideanPoseYPR class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	 constructor(name?: string, parent?: Item, data?: any) { 
		
		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._position = new EuclideanPosition("position", this, null);
		this._orientation = new TaitBryanOrientation("orientation", this);

		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}
}