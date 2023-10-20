
import { Node } from "../../Node";
import { Position } from "../Position";
import { Angle } from "../../types/measures/Angle";
import { Distance } from "../../types/measures/Distance";
import { Ellipsoid } from "../../types/shapes/Ellipsoid";


/** Defines a location in an euclidean coordinate system. */
export class EuclideanPosition extends Position {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The Angle in degrees around the equator of the globe. */
	private _x : Distance;

	/** The Angle in degrees around the prime meridian of the globe. */
	private _y : Distance;

	/** The vertical Distance relative to the surface to the globe. */
	private _z : Distance;
	


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The Angle in degrees around the equator of the globe. */
	get x() { return this._x; }

	/** The Angle in degrees around the prime meridian of the globe. */
	get y() { return this._y; }

	/** The vertical distance relative to the surface to the globe. */
	get z() { return this._z; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR
	
	/** Initializes a new instance of the EuclideanPosition class.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name : any, parentNode?: Node, params: any = {}){ 

		// Call the parent constructor
		super(name, parentNode, params);

		// If the params is an array, convert it to an object
		if (Array.isArray(params)) {
			let v = params, l = v.length; params = 
				{x: (l>0)? v[0]: 0, y: (l>1)? v[1]: 0, z: (l>2)? v[2]: 0};
		}

		// Create the children nodes
		this._x = new Angle("x", this, params.x || 0);
		this._y = new Angle("y", this, params.y || 0);
		this._z = new Distance("z", this, params.z || 0);
	}
}