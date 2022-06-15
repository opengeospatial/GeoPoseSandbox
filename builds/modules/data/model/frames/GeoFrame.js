import { Type } from "../../Type.js";
import { Frame } from "../Frame.js";
import { Distance } from "../../items/measures/Distance.js";
import { Number } from "../../items/simple/Number.js";

/** Defines a geographical frame. */
export class GeoFrame extends Frame {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the GeoFrame class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the children nodes
		this._semiMajorAxis = new Distance("SemiMajorAxis", this, data.semiMajorAxis || 6378137.0);
		this._semiMinorAxis = new Distance("SemiMinorAxis", this, data.semiMajorAxis || 6356752.314245);
		this._flattening = new Number("flattening", this, data.z || 0);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);

		// TODO Map projections
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The semi major axis. */
	get semiMajorAxis() { return this._semiMajorAxis; }

	/** The semi minor axis. */
	get semiMinorAxis() { return this._semiMinorAxis; }

	/** The flattening factor. */
	get flattening() { return this._flattening; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the GeoFrame class. */
GeoFrame.type = new Type("geo-frame", GeoFrame, Frame.type);
