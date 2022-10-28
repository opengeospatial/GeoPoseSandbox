import { Type } from "../Type.js";
import { Pose } from "./Pose.js";
import { Collection } from "../Collection.js";
import { GeodeticFrame } from "./frames/GeodeticFrame.js";
import { Extension } from "./Extension.js";

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
		this._frame = new GeodeticFrame("frame", this);
		this._extensions = new Collection([Extension.type], this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);

	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The geodetic frame of the GeoPose. */
	get frame() { return this._frame; }

	/** The extensions of the GeoPose. */
	get extensions() { return this._extensions; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Pose class. */
GeoPose.type = new Type("geopose", GeoPose, Pose.type);
