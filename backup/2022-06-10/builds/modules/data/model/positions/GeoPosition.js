import { Position } from "../Position.js";
import { Angle } from "../../types/measures/Angle.js";
import { Distance } from "../../types/measures/Distance.js";
import { GeoFrame } from "../frames/GeoFrame.js";


/** Defines a location in global (elliptical) coordinate system.
* (Based on PICE and LPT-ENU). */
export class GeoPosition extends Position {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the GeoPosition class.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name, parentNode, params = {}) {

		// Call the parent constructor
		super(name, "", parentNode, params);

		// If the params is an array, convert it to an object
		if (Array.isArray(params)) {
			let v = params, l = v.length;
			params = { longitude: (l > 0) ? v[0] : 0,
				latitude: (l > 1) ? v[1] : 0, altitude: (l > 2) ? v[2] : 0 };
		}

		// Create the children nodes
		this._longitude = new Angle("longitude", this, params.longitude || 0);
		this._latitude = new Angle("latitude", this, params.latitude || 0);
		this._altitude = new Distance("h", this, params.altitude || 0);
		this._frame = new GeoFrame("frame", this, params.frame);



		// TODO Improve this
		let lng = -this._longitude.value * (Math.PI / 180), lat = this._latitude.value * (Math.PI / 180), alt = this._altitude.value + 6378137, lngSin = Math.sin(lng), lngCos = Math.cos(lng), latSin = Math.sin(lat), latCos = Math.cos(lat);

		// Calculate the relative location
		this.relativeValues.x.setValue(lngCos * latCos * alt);
		this.relativeValues.y.setValue(latSin * alt);
		this.relativeValues.z.setValue(lngSin * latCos * alt);

		// Calculate the vertical vector
		this.verticalVector.x.setValue(0);
		this.verticalVector.y.setValue(-lng);
		this.verticalVector.z.setValue(lat - Math.PI / 2);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The Angle in degrees around the equator of the globe. */
	get longitude() { return this._longitude; }

	/** The Angle in degrees around the prime meridian of the globe. */
	get latitude() { return this._latitude; }

	/** The vertical Distance relative to the surface to the globe. */
	get altitude() { return this._altitude; }

	/** The associated geographic frame. */
	get frame() { return this._frame; }
}
