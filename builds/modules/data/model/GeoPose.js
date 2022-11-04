import { Type } from "../Type.js";
import { Pose } from "./Pose.js";
import { GeoFrame } from "./frames/GeoFrame.js";
import { GeoPosition } from "./positions/GeoPosition.js";

/** Defines the GeoPose of an object. */
export class GeoPose extends Pose {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the GeoPose class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent, data);

		// Create the child nodes
		this._frame = new GeoFrame("frame", this);
		this._position = new GeoPosition("position", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The geodetic frame of the GeoPose. */
	get frame() { return this._frame; }

	/** The position of the GeoPose. */
	get position() { return this._position; }



	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the GeoPosition.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		// If the update is not forced, skip it when the item is already updated
		if (this._updated && !forced)
			return;

		// Call the base class function
		super.update(deltaTime, forced);

		// Perform some basic trigonometric calculations
		let pos = this.position, lng = -pos.longitude.value * (Math.PI / 180), lat = pos.latitude.value * (Math.PI / 180), alt = pos.altitude.value + this.frame.equatorialRadius.value, lngSin = Math.sin(lng), lngCos = Math.cos(lng), latSin = Math.sin(lat), latCos = Math.cos(lat);

		// Calculate the relative location
		this.relativePosition.setValues((lngCos * latCos * alt), (latSin * alt), (lngSin * latCos * alt));

		// Calculate the vertical vector
		console.log("handedness: " + this.frame.handedness.value);
		switch (this.frame.handedness.value) {
			case "right":
				this.verticalVector.x.value = -lat;
				this.verticalVector.y.value = Math.PI / 2 - lng;
				this.verticalVector.z.value = 0;
				break;
		}
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Pose class. */
GeoPose.type = new Type("geopose", GeoPose, Pose.type);
