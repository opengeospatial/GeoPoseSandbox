import { Item } from "../Item.js";
import { Type } from "../Type.js";
import { Collection } from "../Collection.js";
import { Position } from "./Position.js";
import { Orientation } from "./Orientation.js";
import { Extension } from "./Extension.js";
import { Vector } from "../items/complex/Vector.js";

/** Defines a Pose of an object. */
export class Pose extends Item {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Pose class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent, data);

		// Create the child items
		this._position = new Position("position", this);
		this._orientation = new Orientation("orientation", this);
		this._childPoses = new Collection([Pose.type], this);
		this._extensions = new Collection([Extension.type], this);
		this._relativePosition = new Vector("relativePosition", this);
		this._absolutePosition = new Vector("absolutePosition", this);
		this._relativeOrientation = new Vector("relativeOrientation", this);
		this._verticalVector = new Vector("verticalVector", this);
		this._forwardVector = new Vector("forwardVector", this);
		this._verticalVector = new Vector("verticalVector", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The geodetic frame of the Pose. */
	get frame() { return this._frame; }

	/** The position of the Pose. */
	get position() { return this._position; }

	/** The orientation of the Pose. */
	get orientation() { return this._orientation; }

	/** The parent Pose. */
	get parent() { return this._parentPose; }

	/** The child Poses. */
	get childPoses() { return this._childPoses; }

	/** The extensions of the Pose. */
	get extensions() { return this._extensions; }

	/** The relative position of the Pose. */
	get relativePosition() { return this._relativePosition; }

	/** The absolute position of the Pose. */
	get absolutePosition() { return this._absolutePosition; }

	/** The relative orientation of the Pose. */
	get relativeOrientation() { return this._relativeOrientation; }

	/** The vertical vector of the Pose. */
	get verticalVector() { return this._verticalVector; }

	/** The forward vector of the Pose. */
	get forwardVector() { return this._forwardVector; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Pose class. */
Pose.type = new Type("pose", Pose, Item.type);
