import { Item } from "../Item";
import { Type } from "../Type";
import { List } from "../collections/List";
import { GeoFrame } from "./frames/GeoFrame";
import { Extension } from "./Extension";

/** Defines the GeoPose of an object. */
export abstract class GeoPose extends Item {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the Pose class. */
	public static type: Type = new Type("geopose", GeoPose, Item.type);


	// --------------------------------------------------------- PRIVATE FIELDS

	/** The frame of the GeoPose. */
	private _frame: GeoFrame;

	/** The extensions of the GeoPose. */
	private _extensions: List<Extension>;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The frame of the GeoPose. */
	get frame(): GeoFrame { return this._frame; }

	/** The extensions of the GeoPose. */
	get extensions(): List<Extension> { return this._extensions; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the GeoPose class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	 constructor(name?: string, parent?: Item, data?: any) { 
		
		// Call the base class constructor
		super(name, parent);

		// Create the child nodes
		this._frame = new GeoFrame("frame", this);
		this._extensions = new List<Extension>([Extension.type], this);

		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);

	}
}