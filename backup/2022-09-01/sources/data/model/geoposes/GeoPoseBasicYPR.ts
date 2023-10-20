import { Item } from "../../Item";
import { Type } from "../../Type";
import { GeoPose } from "../GeoPose";
import { GeoPosition } from "../positions/GeoPosition";
import { YawPitchRollOrientation } from "../orientations/YawPitchRollOrientation";

/** Defines a basic GeoPose with Yaw-Pitch-Roll orientation. */
export class GeoPoseBasicYPR extends GeoPose {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the GeoPoseBasicYPR class. */
	public static type: Type = new Type("geopose-basic-ypr", GeoPoseBasicYPR, 
		GeoPose.type);

	
	// --------------------------------------------------------- PRIVATE FIELDS
	
	/** The position of the GeoPose. */
	private _position: GeoPosition;

	/** The orientation of the GeoPose. */
	private _orientation: YawPitchRollOrientation;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The position of the GeoPose. */
	get position(): GeoPosition { return this._position; }

	/** The orientation of the GeoPose. */
	get orientation(): YawPitchRollOrientation { return this._orientation; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR
	
	/** Initializes a new instance of the YawPitchRollOrientation class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	 constructor(name?: string, parent?: Item, data?: any) { 
		
		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._position = new GeoPosition("position", this);
		this._orientation = new YawPitchRollOrientation("orientation", this);

		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}
}