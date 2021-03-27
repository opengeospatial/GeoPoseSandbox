import { Angle } from "../../types/measures/Angle.js";
import { Orientation } from "../Orientation.js";

/** Defines the Euler Orientation.
 * @see https://en.wikipedia.org/wiki/Euler_angles */
export class EulerOrientation extends Orientation {


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
			params = { x: (l > 0) ? v[0] : 0, y: (l > 1) ? v[1] : 0, z: (l > 2) ? v[2] : 0 };
		}

		// Create the children nodes
		this._x = new Angle("x", this, params.x || 0);
		this._y = new Angle("y", this, params.y || 0);
		this._z = new Angle("z", this, params.z || 0);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The Angle in the X axis. */
	get x() { return this._x; }

	/** The Angle in the Y axis. */
	get y() { return this._y; }

	/** The Angle in the Z axis. */
	get z() { return this._z; }
}

