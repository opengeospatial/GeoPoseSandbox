import { Node } from "../../types/Node";
import { Angle } from "../../types/measures/Angle";
import { Orientation } from "../Orientation";

/** Defines the Euler Orientation. 
 * @see https://en.wikipedia.org/wiki/Euler_angles */ 
export class EulerOrientation extends Orientation {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The angle in the X axis. */
	private _x : Angle;

	/** The angle in the Y axis. */
	private _y : Angle;

	/** The angle in the Z axis. */
	private _z : Angle;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** Gets the angle in the X axis. */
	get x() { return this._x; }

	/** Gets the angle in the Y axis. */
	get y() { return this._y; }

	/** Gets the angle in the Z axis. */
	get z() { return this._z; }


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
			params = {x:(l>0)?v[0]:0, y:(l>1)?v[1]:0, z:(l>2)?v[2]:0};
		}

		// Create the children nodes
		this._x = new Angle("x", this, params.x || 0);
		this._y = new Angle("y", this, params.y || 0);
		this._z = new Angle("z", this, params.z || 0);
	}
}
