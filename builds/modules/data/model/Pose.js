import { Item } from "../Item.js";
import { Type } from "../Type.js";
import { Position } from "./Position.js";
import { Orientation } from "./Orientation.js";
import { List } from "../collections/List.js";

/** Defines a Pose of an object. */
export class Pose extends Item {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Pose class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._position = new Position("position", this);
		this._orientation = new Orientation("orientation", this);
		this._childPoses = new List([Pose.type], this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The position of the Pose. */
	get position() { return this._position; }

	/** The orientation of the Pose. */
	get orientation() { return this._orientation; }

	/** The parent Pose. */
	get parent() { return this._parentPose; }

	/** The child Poses. */
	get childPoses() { return this._childPoses; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Pose class. */
Pose.type = new Type("pose", Pose, Item.type);
