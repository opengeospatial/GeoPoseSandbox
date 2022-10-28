import { Type } from "../../Type.js";
import { Frame } from "../Frame.js";
import { Distance } from "../../items/measures/Distance.js";
import { Number } from "../../items/simple/Number.js";


/** Defines a geodetic (elliptical) frame. */
export class GeodeticFrame extends Frame {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the GeodeticFrame class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data = {}) {

		// Call the base class constructor
		super(name, parent);

		// Create the children nodes
		this._equatorialRadius = new Distance("equatorialRadius", this, data.equatorialRadius || 6378137.0);
		this._polarRadius = new Distance("polarRadius", this, data.equatorialRadius || 6356752.314245);
		this._flattening = new Number("flattening", this, data.z || 0);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);

		// TODO Map projections
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The equatorial radius (the semi-major axis). */
	get equatorialRadius() { return this._equatorialRadius; }

	/** The polar radius (the semi-minor axis). */
	get polarRadius() { return this._polarRadius; }

	/** The flattening factor. */
	get flattening() { return this._flattening; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the GeodeticFrame class. */
GeodeticFrame.type = new Type("geodetic-frame", GeodeticFrame, Frame.type);


GeodeticFrame.defaultFrame = new GeodeticFrame("Earth", undefined);


