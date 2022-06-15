import { Item } from "../../Item";
import { Type } from "../../Type";
import { GeoPose } from "../GeoPose";
import { GeoPosition } from "../positions/GeoPosition";
import { QuaternionOrientation } from "../orientations/QuaternionOrientation";

/** Defines a basic GeoPose with Quaternion-based orientation. */
export class GeoPoseBasicQuaternion extends GeoPose {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the GeoPoseBasicQuaternion class. */
	public static type: Type = new Type("geopose-basic-quaternion", 
		GeoPoseBasicQuaternion, GeoPose.type);

	
	// --------------------------------------------------------- PRIVATE FIELDS
	
	/** The position of the GeoPose. */
	private _position: GeoPosition;

	/** The orientation of the GeoPose. */
	private _orientation: QuaternionOrientation;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The position of the GeoPose. */
	get position(): GeoPosition { return this._position; }

	/** The orientation of the GeoPose. */
	get orientation(): QuaternionOrientation { return this._orientation; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR
	
	/** Initializes a new instance of the GeoPoseBasicQuaternion class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	 constructor(name?: string, parent?: Item, data?: any) { 
		
		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._position = new GeoPosition("position", this);
		this._orientation = new QuaternionOrientation("orientation", this);

		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}
}