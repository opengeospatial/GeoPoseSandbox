import { Item } from "../Item";
import { Type } from "../Type";
import { Pose } from "./Pose";
import { Collection } from "../Collection";
import { GeodeticFrame } from "./frames/GeodeticFrame";
import { Extension } from "./Extension";

/** Defines the GeoPose of an object. */
export abstract class GeoPose extends Pose {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the Pose class. */
	public static type: Type = new Type("geopose", GeoPose, Pose.type);


	// --------------------------------------------------------- PRIVATE FIELDS

	/** The geodetic frame of the GeoPose. */
	private _frame: GeodeticFrame;

	/** The extensions of the GeoPose. */
	private _extensions: Collection<Extension>;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The geodetic frame of the GeoPose. */
	get frame(): GeodeticFrame { return this._frame; }

	/** The extensions of the GeoPose. */
	get extensions(): Collection<Extension> { return this._extensions; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the GeoPose class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	 constructor(name?: string, parent?: Item, data?: any) { 
		
		// Call the base class constructor
		super(name, parent, data);

		// Create the child nodes
		this._frame = new GeodeticFrame("frame", this);
		this._extensions = new Collection<Extension>([Extension.type], this);

		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);

	}
}