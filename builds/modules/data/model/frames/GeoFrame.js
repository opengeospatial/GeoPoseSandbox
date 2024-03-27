import { Type } from "../../Type.js";
import { Distance } from "../../types/measures/Distance.js";
import { Frame } from "../Frame.js";


/** Defines a geodetic (elliptical) frame. */
export class GeoFrame extends Frame {


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The equatorial radius (the semi-major axis). */
	get equatorialRadius() { return this._equatorialRadius; }

	/** The polar radius (the semi-minor axis). */
	get polarRadius() { return this._polarRadius; }



	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the GeodeticFrame class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data = {}) {

		// Call the base class constructor
		super(name, parent, data);

		// Create the children nodes
		this._equatorialRadius = new Distance("equatorialRadius", this, data.equatorialRadius || 6378137.0);
		this._polarRadius = new Distance("polarRadius", this, data.equatorialRadius || 6356752.314245);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);

		// TODO Map projections
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the GeodeticFrame class. */
GeoFrame.type = new Type("geo-frame", GeoFrame, Frame.type);

/** The default GeoFrame instance */
GeoFrame.defaultFrame = new GeoFrame("Earth", undefined);


//# sourceMappingURL=GeoFrame.js.map