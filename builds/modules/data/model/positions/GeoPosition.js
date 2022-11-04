import { Type } from "../../Type.js";
import { Position } from "../Position.js";
import { Angle } from "../../items/measures/Angle.js";
import { Distance } from "../../items/measures/Distance.js";


/** Defines a position in geodetic (elliptical) coordinate system.
* (Based on SPICE and Local Tangent Plane - East North Up). */
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

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The angle around the equator of the ellipsoid. */
	get longitude() { return this._longitude; }

	/** The angle around the prime meridian of the ellipsoid. */
	get latitude() { return this._latitude; }

	/** The vertical distance relative to the surface to the ellipsoid. */
	get altitude() { return this._altitude; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the GeodeticPosition class. */
GeoPosition.type = new Type("geo-position", GeoPosition, Position.type);
