import { Item } from "../Item";
import { Type } from "../Type";
import { Pose } from "./Pose";
import { GeoFrame } from "./frames/GeoFrame";
import { GeoPosition } from "./positions/GeoPosition";

/** Defines the GeoPose of an object. */
export abstract class GeoPose extends Pose {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the Pose class. */
	public static type: Type = new Type("geopose", GeoPose, Pose.type);


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The geodetic frame of the GeoPose. */
	get frame(): GeoFrame { return this._frame as GeoFrame; }

	/** The position of the GeoPose. */
	get position(): GeoPosition { return this._position as GeoPosition; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the GeoPose class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name?: string, parent?: Item, data: any = {}) { 
		
		// Call the base class constructor
		super(name, parent, data);

		// Create the child nodes
		this._frame = data.frame || new GeoFrame("frame", this);
		this._position = new GeoPosition("position", this);

		if (data.frame) data.frame.links.add(this);

		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}



	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the GeoPose instance.
	 * @param deltaTime The update time. 
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime: number = 0, forced: boolean = false) {

		// If the update is not forced, skip it when the item is already updated
		if (this._updated && !forced) return;

		// Call the base class function
		super.update(deltaTime, forced);
	}
}