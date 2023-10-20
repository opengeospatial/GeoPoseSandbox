import { Node } from "../../Node.js";
import { Measure } from "../Measure.js";

/** Defines a three-dimensional vector. */
export class Vector3 extends Node {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Vector3 class.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name, parentNode, params = {}) {

		// Call the parent constructor
		super(name, "vector3", parentNode, params);

		// If the params is an array, convert it to an object
		if (Array.isArray(params)) {
			params = {
				x: (params.length > 0) ? params[0] : 1,
				y: (params.length > 1) ? params[1] : 1,
				z: (params.length > 2) ? params[2] : 1
			};
		}

		// Create the children nodes
		this._x = new Measure("x", "x", this, params.x || 0);
		this._y = new Measure("y", "y", this, params.y || 0);
		this._z = new Measure("z", "z", this, params.z || 0);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The value in the X axis. */
	get x() { return this._x; }

	/** The value in the Y axis. */
	get y() { return this._y; }

	/** The value in the Z axis. */
	get z() { return this._z; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Converts the Vector3 instance into an array representation. */
	toArray() {
		return [this._x.value, this._y.value, this._z.value];
	}

	/** Sets the values of the Vector3 from an array.
	* @param values An array with the numerical values. */
	fromArray(values) {
		this.x.setValue((values.length > 0) ? values[0] : 0);
		this.y.setValue((values.length > 1) ? values[1] : 0);
		this.z.setValue((values.length > 2) ? values[2] : 0);
	}
}
