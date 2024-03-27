import { Item } from "../../Item.js";
import { Type } from "../../Type.js";
import { Orientation } from "../Orientation.js";
import { Angle } from "../../types/measures/Angle.js";

/** Defines a Tait-Bryan orientation with Yaw, Pitch and Roll angles. */
export class YawPitchRollOrientation extends Orientation {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the YawPitchRollOrientation class. */
	public static type: Type = new Type("yaw-pitch-roll-orientation", 
		YawPitchRollOrientation, Orientation.type);


	// --------------------------------------------------------- PRIVATE FIELDS

	/** The Angle in degrees around the equator of the globe. */
	private _yaw: Angle;

	/** The Angle in degrees around the prime meridian of the globe. */
	private _pitch: Angle;

	/** The vertical Distance relative to the surface to the globe. */
	private _roll: Angle;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The Angle in degrees around the equator of the globe. */
	get yaw() { return this._yaw; }

	/** The Angle in degrees around the prime meridian of the globe. */
	get pitch() { return this._pitch; }

	/** The vertical distance relative to the surface to the globe. */
	get roll() { return this._roll; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR
	/** Initializes a new instance of the YawPitchRollOrientation class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	 constructor(name?: string, parent?: Item, data?: any) { 
		
		// Call the base class constructor
		super(name, parent, data);

		// Create the child items
		this._yaw = new Angle("yaw", this);
		this._pitch = new Angle("pitch", this);
		this._roll = new Angle("roll", this);

		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}
}
