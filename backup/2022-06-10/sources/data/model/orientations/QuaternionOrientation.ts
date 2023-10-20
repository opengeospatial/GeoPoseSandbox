import { Measure } from "../../types/Measure";
import { Orientation } from "../Orientation";

/** Defines an orientation with a quaternion. */
export class QuaternionOrientation extends Orientation {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The value of the quaternion vector in the X(i) axis. */
	private _x: Measure;

	/** The value of the quaternion vector in the Y(j) axis. */
	private _y: Measure;

	/** The value of the quaternion vector in the Z(k) axis. */
	private _z: Measure;

	/** The rotation half-angle around the quaternion vector. */
	private _w: Measure;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The value of the quaternion vector in the X(i) axis. */
	get x() { return this._x; }

	/** The value of the quaternion vector in the Y(j) axis. */
	get y() { return this._y; }

	/** The value of the quaternion vector in the Z(k) axis. */
	get z() { return this._z; }

	/** The rotation half-angle around the quaternion vector. */
	get w() { return this._w; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the QuaternionOrientation class.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name: any, parentNode?: Node, params: any = {}) {

		// Call the parent constructor
		super(name, parentNode, params);

		// If the params is an array, convert it to an object
		if (Array.isArray(params)) { params = {
			x: (params.length > 0) ? params[0] : 0,
			y: (params.length > 1) ? params[1] : 0,
			z: (params.length > 2) ? params[2] : 0,
			w: (params.length > 3) ? params[3] : 1
		};}

		// Create the children nodes
		this._x = new Measure("x", "x", this, params.x || 0);
		this._y = new Measure("y", "y", this, params.y || 0);
		this._z = new Measure("z", "z", this, params.z || 0);
		this._w = new Measure("w", "w", this, params.w || 1);
	}

}