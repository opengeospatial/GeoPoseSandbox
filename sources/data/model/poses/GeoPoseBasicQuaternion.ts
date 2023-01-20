import { Item } from "../../Item";
import { Type } from "../../Type";
import { GeoPose } from "../GeoPose";
import { QuaternionOrientation } from "../orientations/QuaternionOrientation";
import { Quaternion } from "../../items/complex/Quaternion";

/** Defines a basic GeoPose with Quaternion-based orientation. */
export class GeoPoseBasicQuaternion extends GeoPose {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the GeoPoseBasicQuaternion class. */
	public static type: Type = new Type("geopose-basic-quaternion", 
		GeoPoseBasicQuaternion, GeoPose.type);


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The orientation of the GeoPose. */
	get orientation(): QuaternionOrientation 
	{ return this._orientation as QuaternionOrientation; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR
	
	/** Initializes a new instance of the GeoPoseBasicQuaternion class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	 constructor(name?: string, parent?: Item, data?: any) { 
		
		// Call the base class constructor
		super(name, parent, data);

		// Create the child items
		this._orientation = new QuaternionOrientation("orientation", this);

		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}
}