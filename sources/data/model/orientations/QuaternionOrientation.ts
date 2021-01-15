import { Node } from "../../types/Node";
import { Measure } from "../../types/Measure";
import { Orientation } from "../Orientation";

/** Defines a Quaternion-based Orientation. 
 * @see https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation */ 
export class QuaternionOrientation extends Orientation {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The value of the quaternion vector in the X(i) axis. */
	private _x : Measure;

	/** The value of the quaternion vector in the Y(j) axis. */
	private _y : Measure;

	/** The value of the quaternion vector in the Z(k) axis. */
	private _z : Measure;

	/** The rotation half-angle around the quaternion vector. */
	private _w : Measure;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** Gets the value of the quaternion vector in the X(i) axis. */
	get x() { return this._x; }

	/** Gets the value of the quaternion vector in the Y(j) axis. */
	get y() { return this._y; }

	/** Gets the value of the quaternion vector in the Z(k) axis. */
	get z() { return this._z; }

	/** Gets the rotation half-angle around the quaternion vector. */
	get w() { return this._w; }



	// ----------------------------------------------------- PUBLIC CONSTRUCTOR
	
	/** Initializes a new instance of the APAOrientation class.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name : any, parentNode?: Node, params?: number[]);
	constructor(name : any, parentNode?: Node, params?: object);
	constructor(name : any, parentNode?: Node, params: any = {}){ 

		// Call the parent constructor
		super (name, parentNode, params);

		// If the params is an array, convert it to an object
		if (Array.isArray(params)) {
			let v = params, l = v.length; 
			params = {x:(l>0)?v[0]:0, y:(l>1)?v[1]:0, z:(l>2)?v[2]:0,
				w:(l>3)?v[3]:1};
		}

		// Create the children nodes
		this._x = new Measure("x", this, params.x || 0);
		this._y = new Measure("y", this, params.y || 0);
		this._z = new Measure("z", this, params.z || 0);
		this._w = new Measure("w", this, params.w || 1);
	}
}
