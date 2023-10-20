
import { Node } from "../../Node";
import { Position } from "../Position";
import { Angle } from "../../types/measures/Angle";
import { Distance } from "../../types/measures/Distance";
import { Ellipsoid } from "../../types/shapes/Ellipsoid";


/** Defines a location in an orbital coordinate system. */
export class OrbitalPosition extends Position {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The Angle in degrees around the equator of the globe. */
	private _x : Distance;

	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The Angle in degrees around the equator of the globe. */
	get x() { return this._x; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR
	
	/** Initializes a new instance of the OrbitalPosition class.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name : any, parentNode?: Node, params: any = {}){ 

		// Call the parent constructor
		super(name, parentNode, params);

		// If the params is an array, convert it to an object
		if (Array.isArray(params)) {
			let v = params, l = v.length; params = {longitude: (l>0)? v[0]: 0, 
				latitude: (l>1)? v[1]: 0, altitude: (l>2)? v[2]: 0};
		}

		// Create the children nodes
		this._x = new Angle("x", this, params.x || 0);
	}
}