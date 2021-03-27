import { Orientation } from "../Orientation.js";
import { Pose } from "../Pose.js";

/** Defines the Orientation based on an Pose to look at. */
export class LookAtOrientation extends Orientation {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the APAOrientation class.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name, parentNode, params = {}) {

		// Call the parent constructor
		super(name, parentNode, params);

		// Create the children nodes
		this._target = new Pose("target", this, params.target);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The target Entity to look at. */
	get target() { return this._target; }
}

