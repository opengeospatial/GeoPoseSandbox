import { Position } from "../Position.js";
import { Distance } from "../../types/measures/Distance.js";


/** Defines a position in local (euclidean) coordinate system. */
export class LocalPosition extends Position {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the LocalPosition class.
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
		this._x = new Distance("x", this, params.x || 0);
		this._y = new Distance("y", this, params.y || 0);
		this._z = new Distance("z", this, params.z || 0);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The Distance in the X axis. */
	get x() { return this._x; }

	/** The Distance in the Y axis. */
	get y() { return this._y; }

	/** The Distance in the Z axis. */
	get z() { return this._z; }
}