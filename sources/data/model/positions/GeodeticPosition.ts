import { Item } from "../../Item";
import { Type } from "../../Type";
import { Position } from "../Position";
import { Angle } from "../../items/measures/Angle";
import { Distance } from "../../items/measures/Distance";
import { GeodeticFrame } from "../frames/GeodeticFrame";


/** Defines a position in geodetic (elliptical) coordinate system.
* (Based on SPICE and Local Tangent Plane - East North Up). */
export class GeodeticPosition extends Position {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the GeodeticPosition class. */
	public static type: Type = new Type("geodetic-position", GeodeticPosition, 
		Position.type);


	// --------------------------------------------------------- PRIVATE FIELDS

	/** The geodetic frame necessary to calculate the position. */
	private _frame : GeodeticFrame;

	/** The angle around the equator of the ellipsoid. */
	private _longitude : Angle;

	/** The angle around the prime meridian of the ellipsoid. */
	private _latitude : Angle;

	/** The vertical distance relative to the surface to the ellipsoid. */
	private _altitude : Distance;
	

	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The vertical distance relative to the surface to the ellipsoid. */
	get frame() { return this._frame; }

	/** The angle around the equator of the ellipsoid. */
	get longitude() { return this._longitude; }

	/** The angle around the prime meridian of the ellipsoid. */
	get latitude() { return this._latitude; }

	/** The vertical distance relative to the surface to the ellipsoid. */
	get altitude() { return this._altitude; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR
	
	/** Initializes a new instance of the GeoPosition class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	 constructor(name?: string, parent?: Item, data?: any) { 
		
		// Call the base class constructor
		super(name, parent);

		// Create the children nodes
		this._longitude = new Angle("longitude", this);
		this._latitude = new Angle("latitude", this);
		this._altitude = new Distance("h", this);

		// Store the frame
		if(!data) data = {};
		this._frame = data.frame || GeodeticFrame.defaultFrame;
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the GeoPosition.
	 * @param deltaTime The update time. 
	 * @param forced Indicates whether the update is forced or not. */
	 update(deltaTime: number = 0, forced: boolean = false) {

		// If the update is not forced, skip it when the item is already updated
		if (this._updated && !forced) return;

		// Call the base class function
		super.update(deltaTime, forced);

		// Calculate the relative location
		let lng = -this._longitude.value  * (Math.PI/180), 
			lat = this._latitude.value * (Math.PI/180),
			alt = this._altitude.value + this._frame.equatorialRadius.value,
			lngSin = Math.sin(lng), lngCos = Math.cos(lng),
			latSin = Math.sin(lat), latCos = Math.cos(lat);

		this.relativeValues.x.value = (lngCos * latCos * alt);
		this.relativeValues.y.value = (latSin * alt);
		this.relativeValues.z.value = (lngSin * latCos * alt);

		// Calculate the vertical vector
		this.verticalVector.x.value = (0);
		this.verticalVector.y.value = (-lng );
		this.verticalVector.z.value = (lat - Math.PI/2);


	}
}