import { Measure } from "../../types/Measure.js";
import { Orientation } from "../Orientation.js";

/** Defines a Quaternion-based Orientation.
 * @see https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation */
export class QuaternionOrientation extends Orientation {



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
			params = { x: (l > 0) ? v[0] : 0, y: (l > 1) ? v[1] : 0, z: (l > 2) ? v[2] : 0,
				w: (l > 3) ? v[3] : 1 };
		}

		// Create the children nodes
		this._x = new Measure("x", "x", this, params.x || 0);
		this._y = new Measure("y", "y", this, params.y || 0);
		this._z = new Measure("z", "z", this, params.z || 0);
		this._w = new Measure("w", "w", this, params.w || 1);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The value of the quaternion vector in the X(i) axis. */
	get x() { return this._x; }

	/** The value of the quaternion vector in the Y(j) axis. */
	get y() { return this._y; }

	/** The value of the quaternion vector in the Z(k) axis. */
	get z() { return this._z; }

	/** The rotation half-angle around the quaternion vector. */
	get w() { return this._w; }
}

