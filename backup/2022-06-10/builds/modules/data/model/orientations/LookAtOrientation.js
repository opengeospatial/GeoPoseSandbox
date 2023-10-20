import { Vector3 } from "../../types/complex/Vector3.js";
import { String } from "../../types/String.js";
import { Orientation } from "../Orientation.js";

/** Defines an orientation with a target. */
export class LookAtOrientation extends Orientation {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the YawPitchRollOrientation class.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name, parentNode, params = {}) {

		// Call the parent constructor
		super(name, parentNode, params);

		// Create the children nodes
		this._targetName = new String("target", this, params.name);
		this._targetPosition = new Vector3("position", this, params.position);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The target to point towards. */
	get targetName() { return this._targetName; }

	/** The target position. */
	get targetPosition() { return this._targetPosition; }
}
