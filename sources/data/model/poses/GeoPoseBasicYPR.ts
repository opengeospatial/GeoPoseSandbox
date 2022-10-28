import { Item } from "../../Item";
import { Type } from "../../Type";
import { GeoPose } from "../GeoPose";
import { GeodeticPosition } from "../positions/GeodeticPosition";
import { TaitBryanOrientation } from "../orientations/TaitBryanOrientation";

/** Defines a basic GeoPose with Tait-Bryan (Yaw-Pitch-Roll) orientation. */
export class GeoPoseBasicYPR extends GeoPose {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the GeoPoseBasicYPR class. */
	public static type: Type = new Type("geopose-basic-ypr", GeoPoseBasicYPR, 
		GeoPose.type);


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The position of the GeoPose. */
	get position(): GeodeticPosition { return this._position as GeodeticPosition; }

	/** The orientation of the GeoPose. */
	get orientation(): TaitBryanOrientation 
	{ return this._orientation as TaitBryanOrientation; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR
	
	/** Initializes a new instance of the YawPitchRollOrientation class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	 constructor(name?: string, parent?: Item, data?: any) { 
		
		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._position = new GeodeticPosition("position", this);
		this._orientation = new TaitBryanOrientation("orientation", this);

		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}


}