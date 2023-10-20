import { Item } from "../../Item";
import { Type } from "../../Type";
import { Frame } from "../Frame";
import { Distance } from "../../items/measures/Distance";
import { Number } from "../../items/simple/Number";

/** Defines a geographical frame. */
export class GeoFrame extends Frame {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the GeoFrame class. */
	public static type: Type = new Type("geo-frame", GeoFrame, Frame.type);

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The semi major axis. */
	private _semiMajorAxis : Distance;

	/** The semi minor axis. */
	private _semiMinorAxis : Distance;

	/** The flattening factor. */
	private _flattening : Number;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The semi major axis. */
	get semiMajorAxis(): Distance { return this._semiMajorAxis; }

	/** The semi minor axis. */
	get semiMinorAxis(): Distance { return this._semiMinorAxis; }

	/** The flattening factor. */
	get flattening(): Number { return this._flattening; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR
	
	/** Initializes a new instance of the GeoFrame class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	 constructor(name?: string, parent?: Item, data?: any) { 
		
		// Call the base class constructor
		super(name, parent);

		// Create the children nodes
		this._semiMajorAxis = new Distance("SemiMajorAxis", this,
			data.semiMajorAxis || 6378137.0);
		this._semiMinorAxis = new Distance("SemiMinorAxis", this,
			data.semiMajorAxis || 6356752.314245);
		this._flattening = new Number("flattening", this, data.z || 0);

		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
		
		// TODO Map projections
	}
}