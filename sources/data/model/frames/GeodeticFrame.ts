import { Item } from "../../Item";
import { Type } from "../../Type";
import { Frame } from "../Frame";
import { Distance } from "../../items/measures/Distance";
import { Number } from "../../items/simple/Number";


/** Defines a geodetic (elliptical) frame. */
export class GeodeticFrame extends Frame {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the GeodeticFrame class. */
	public static type: Type = new Type("geodetic-frame", GeodeticFrame, 
		Frame.type);


	public static defaultFrame = new GeodeticFrame("Earth", undefined);

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The equatorial radius (the semi-major axis). */
	private _equatorialRadius : Distance;

	/** The polar radius (the semi-minor axis). */
	private _polarRadius : Distance;

	/** The flattening factor. */
	private _flattening : Number;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The equatorial radius (the semi-major axis). */
	get equatorialRadius(): Distance { return this._equatorialRadius; }

	/** The polar radius (the semi-minor axis). */
	get polarRadius(): Distance { return this._polarRadius; }

	/** The flattening factor. */
	get flattening(): Number { return this._flattening; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR
	
	/** Initializes a new instance of the GeodeticFrame class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	 constructor(name?: string, parent?: Item, data: any = {}) { 
		
		// Call the base class constructor
		super(name, parent);

		// Create the children nodes
		this._equatorialRadius = new Distance("equatorialRadius", this,
			data.equatorialRadius || 6378137.0);
		this._polarRadius = new Distance("polarRadius", this,
			data.equatorialRadius || 6356752.314245);
		this._flattening = new Number("flattening", this, data.z || 0);

		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
		
		// TODO Map projections
	}
}

