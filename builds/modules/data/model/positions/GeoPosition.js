import { Type } from "../../Type.js";
import { Position } from "../Position.js";
import { Angle } from "../../items/measures/Angle.js";
import { Distance } from "../../items/measures/Distance.js";


/** Defines a location in global (elliptical) coordinate system.
* (Based on PICE and LPT-ENU). */
export class GeoPosition extends Position {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the GeoPosition class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the children nodes
		this._longitude = new Angle("longitude", this);
		this._latitude = new Angle("latitude", this);
		this._altitude = new Distance("h", this);

		// TODO Improve this
		let lng = -this._longitude.value * (Math.PI / 180), lat = this._latitude.value * (Math.PI / 180), alt = this._altitude.value, //  + 6378137,
		lngSin = Math.sin(lng), lngCos = Math.cos(lng), latSin = Math.sin(lat), latCos = Math.cos(lat);

		// Calculate the relative location
		this.relativeValues.x.value = (lngCos * latCos * alt);
		this.relativeValues.y.value = (latSin * alt);
		this.relativeValues.z.value = (lngSin * latCos * alt);

		// Calculate the vertical vector
		this.verticalVector.x.value = (0);
		this.verticalVector.y.value = (-lng);
		this.verticalVector.z.value = (lat - Math.PI / 2);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The Angle in degrees around the equator of the globe. */
	get longitude() { return this._longitude; }

	/** The Angle in degrees around the prime meridian of the globe. */
	get latitude() { return this._latitude; }

	/** The vertical Distance relative to the surface to the globe. */
	get altitude() { return this._altitude; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the EuclideanPosition class. */
GeoPosition.type = new Type("geo-position", GeoPosition, Position.type);
