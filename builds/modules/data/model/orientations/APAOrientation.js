import { Angle } from "../../types/measures/Angle.js";
import { Orientation } from "../Orientation.js";

/** Defines the Aircraft Principal Axes Orientation.
 * @see https://en.wikipedia.org/wiki/Aircraft_principal_axes */
export class APAOrientation extends Orientation {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the APAOrientation class.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name, parentNode, params = {}) {

		// Call the parent constructor
		super(name, parentNode, params);

		// If the params is an array, convert it to an object
		if (Array.isArray(params)) {
			let v = params, l = v.length;
			params = { yaw: (l > 0) ? v[0] : 0, pitch: (l > 1) ? v[1] : 0,
				roll: (l > 2) ? v[2] : 0 };
		}

		// Create the children nodes
		this._roll = new Angle("roll", this, params.roll || 0);
		this._pitch = new Angle("pitch", this, params.pitch || 0);
		this._yaw = new Angle("yaw", this, params.yaw || 0);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The Angle in the X axis. */
	get roll() { return this._roll; }

	/** The Angle in the Y axis. */
	get pitch() { return this.pitch; }

	/** The Angle in the Z axis. */
	get yaw() { return this._yaw; }
}
