import { Node } from "../../Node";
import { Measure } from "../../types/Measure";
import { Distance } from "../../types/measures/Distance";
import { Frame } from "../Frame";

/** Defines a geographical frame. */
export class GeoFrame extends Frame {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The semi major axis. */
	private _semiMajorAxis : Distance;

	/** The semi minor axis. */
	private _semiMinorAxis : Distance;

	/** The flattening factor. */
	private _flattening : Measure;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The semi major axis. */
	get semiMajorAxis() { return this._semiMajorAxis; }

	/** The semi minor axis. */
	get semiMinorAxis() { return this._semiMinorAxis; }

	/** The flattening factor. */
	get flattening() { return this._flattening; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR
	
	/** Initializes a new instance of the GeoFrame class.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name : any, parentNode?: Node, params: any = {}) { 

		// Call the parent constructor
		super(name, "geoFrame", parentNode, params);

		// Create the children nodes
		this._semiMajorAxis = new Distance("SemiMajorAxis", this,
			params.semiMajorAxis || 6378137.0);
		this._semiMinorAxis = new Distance("SemiMinorAxis", this,
			params.semiMajorAxis || 6356752.314245);
		this._flattening = new Measure("z", "flattening", this, params.z || 0);


		// MAP PROJECTIONS?
	}
}