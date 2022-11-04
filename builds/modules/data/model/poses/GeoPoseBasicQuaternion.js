import { Type } from "../../Type.js";
import { GeoPose } from "../GeoPose.js";
import { QuaternionOrientation } from "../orientations/QuaternionOrientation.js";

/** Defines a basic GeoPose with Quaternion-based orientation. */
export class GeoPoseBasicQuaternion extends GeoPose {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the GeoPoseBasicQuaternion class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._orientation = new QuaternionOrientation("orientation", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The orientation of the GeoPose. */
	get orientation() { return this._orientation; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the GeoPoseBasicQuaternion class. */
GeoPoseBasicQuaternion.type = new Type("geopose-basic-quaternion", GeoPoseBasicQuaternion, GeoPose.type);
