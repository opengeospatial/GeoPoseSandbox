import { Type } from "../../Type.js";
import { Position } from "../Position.js";
import { Angle } from "../../items/measures/Angle.js";
import { Distance } from "../../items/measures/Distance.js";
import { Vector } from "../../items/complex/Vector.js";


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
		super(name, parent, data);

		// Create the children nodes
		this._longitude = new Angle("longitude", this);
		this._latitude = new Angle("latitude", this);
		this._altitude = new Distance("h", this);
		this._tangentVector = new Vector("tangentVector", this);
		this._verticalVector = new Vector("verticalVector", this);

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

	/** The tangent vector of the GeoPosition. */
	get tangentVector() { return this._tangentVector; }

	/** The tangent vector of the GeoPosition. */
	get verticalVector() { return this._verticalVector; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the GeoPosition instance.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		// If the update is not forced, skip it when the item is already updated
		if (this._updated && !forced)
			return;

		// Get the frame from the parent geopose
		let geoFrame = this.parent.frame, equatorRadius = geoFrame.equatorialRadius.value, polarRadius = geoFrame.polarRadius.value, flatteningFactor = polarRadius / equatorRadius;

		// Perform some basic trigonometric calculations
		let lng = -this.longitude.value * (Math.PI / 180), lat = this.latitude.value * (Math.PI / 180), lngSin = Math.sin(lng), lngCos = Math.cos(lng), latSin = Math.sin(lat), latCos = Math.cos(lat), alt = this.altitude.value, geoX = lngCos * latCos, geoY = latSin, geoZ = lngSin * latCos;

		// Calculate the relative location on the surface of the GeoFrame
		let x = geoX * equatorRadius, y = geoY * equatorRadius *
			flatteningFactor, z = geoZ * equatorRadius;

		// Create the vertical vector
		this._verticalVector.setValues(geoX, geoY / flatteningFactor, geoZ);
		this._verticalVector.normalize();
		let v = this._verticalVector.getValues();

		// Calculate the tangent vector
		this.relativeValues.setValues(x + v.x * alt, y + v.y * alt, z + v.z * alt);

		// Calculate the tangent vector
		let x0 = latSin * equatorRadius, x1 = latSin * (equatorRadius + 1), y0 = latCos * equatorRadius * flatteningFactor, y1 = latCos * (equatorRadius + 1) * flatteningFactor, dx = x1 - x0, dy = y1 - y0, l = Math.sqrt((dx * dx) + (dy * dy));
		this.additionalRotation.x.value = -Math.PI / 2 + Math.acos(dx / l);
		this.additionalRotation.y.value = Math.PI / 2 - lng;
		this.additionalRotation.z.value = 0;

		// Call the base class function
		super.update(deltaTime, forced);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the GeodeticPosition class. */
GeoPosition.type = new Type("geo-position", GeoPosition, Position.type);
