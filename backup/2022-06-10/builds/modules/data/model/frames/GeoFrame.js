import { Measure } from "../../types/Measure.js";
import { Distance } from "../../types/measures/Distance.js";
import { Frame } from "../Frame.js";

/** Defines a geographical frame. */
export class GeoFrame extends Frame {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the GeoFrame class.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name, parentNode, params = {}) {

		// Call the parent constructor
		super(name, "geoFrame", parentNode, params);

		// Create the children nodes
		this._semiMajorAxis = new Distance("SemiMajorAxis", this, params.semiMajorAxis || 6378137.0);
		this._semiMinorAxis = new Distance("SemiMinorAxis", this, params.semiMajorAxis || 6356752.314245);
		this._flattening = new Measure("z", "flattening", this, params.z || 0);


		// MAP PROJECTIONS?
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The semi major axis. */
	get semiMajorAxis() { return this._semiMajorAxis; }

	/** The semi minor axis. */
	get semiMinorAxis() { return this._semiMinorAxis; }

	/** The flattening factor. */
	get flattening() { return this._flattening; }
}
