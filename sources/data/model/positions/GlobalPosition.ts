import { Node } from "../../types/Node";
import { Position } from "../Position";
import { Angle } from "../../types/measures/Angle";
import { Distance } from "../../types/measures/Distance";
import { Ellipsoid } from "../../types/shapes/Ellipsoid";

/** Defines a position in global (elliptical) coordinate system.
* (Based on PICE and LPT-ENU). */
export class GlobalPosition extends Position {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The angle in degrees around the equator of the globe. */
	private _longitude : Angle;

	/** The angle in degrees around the prime meridian of the globe. */
	private _latitude : Angle;

	/** The vertical distance relative to the surface to the globe. */
	private _altitude : Distance;
	
	/** The shape of the globe. */
	private _globe : Ellipsoid = null;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** Gets the angle in degrees around the equator of the globe. */
	get longitude() { return this._longitude; }

	/** Gets the angle in degrees around the prime meridian of the globe. */
	get latitude() { return this._latitude; }

	/** Gets the vertical distance relative to the surface to the globe. */
	get altitude() { return this._altitude; }

	/** Gets the shape of the globe. */
	get globe() { return this._globe; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR
	
	/** Initializes a new instance of the GlobalPosition class.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name : any, parentNode?: Node, params?: number[]);
	constructor(name : any, parentNode?: Node, params?: object);
	constructor(name : any, parentNode?: Node, params: any = {}){ 

		// Call the parent constructor
		super(name, parentNode, params);

		// If the params is an array, convert it to an object
		if (Array.isArray(params)) {
			let v = params, l = v.length; params = {longitude: (l>0)? v[0]: 0, 
				latitude: (l>1)? v[1]: 0, altitude: (l>2)? v[2]: 0};
		}

		// Create the children nodes
		this._longitude = new Angle("longitude", this, params.longitude || 0);
		this._latitude = new Angle("latitude", this, params.latitude || 0);
		this._altitude = new Distance("altitude", this, params.altitude || 0);

		// TODO Improve this
		let lng = -this._longitude.value  * (Math.PI/180), 
			lat = this._latitude.value * (Math.PI/180),
			alt = this._altitude.value  + 6378137,
			lngSin = Math.sin(lng), lngCos = Math.cos(lng),
			latSin = Math.sin(lat), latCos = Math.cos(lat);

		// Calculate the relative position
		this.relativeValues.x.set(lngCos * latCos * alt);
		this.relativeValues.y.set(latSin * alt);
		this.relativeValues.z.set(lngSin * latCos * alt);

		// Calculate the vertical vector
		this.verticalVector.x.set(0);
		this.verticalVector.y.set(-lng );
		this.verticalVector.z.set(lat - Math.PI/2);
	}
}