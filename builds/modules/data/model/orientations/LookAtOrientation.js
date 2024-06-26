import { Type } from "../../Type.js";
import { Orientation } from "../Orientation.js";
import { String } from "../../types/simple/String.js";
import { Vector } from "../../types/complex/Vector.js";


/** Defines an orientation with a target. */
export class LookAtOrientation extends Orientation {


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The target to point towards. */
	get targetName() { return this._targetName; }

	/** The target position. */
	get targetPosition() { return this._targetPosition; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the YawPitchRollOrientation class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent, data);

		// Create the child items
		this._targetName = new String("target", this);
		this._targetPosition = new Vector("position", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the LookAtOrientation class. */
LookAtOrientation.type = new Type("look-at-orientation", LookAtOrientation, Orientation.type);
//# sourceMappingURL=LookAtOrientation.js.map