import { Item } from "../../Item";
import { Type } from "../../Type";
import { Position } from "../Position";
import { Distance } from "../../items/measures/Distance";


/** Defines a location in an euclidean coordinate system. */
export class EuclideanPosition extends Position {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the EuclideanPosition class. */
	public static type: Type = new Type("euclidean-position", EuclideanPosition, 
		Position.type);


	// --------------------------------------------------------- PRIVATE FIELDS

	/** The distance from the origin in the X axis. */
	private _x : Distance;

	/** The distance from the origin in the Y axis. */
	private _y : Distance;

	/** The distance from the origin in the Z axis. */
	private _z : Distance;
	


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The distance from the origin in the X axis. */
	get x() { return this._x; }

	/** The distance from the origin in the Y axis. */
	get y() { return this._y; }

	/** The distance from the origin in the Z axis. */
	get z() { return this._z; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR
	
	/** Initializes a new instance of the EuclideanPosition class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	 constructor(name?: string, parent?: Item, data?: any) { 
		
		// Call the base class constructor
		super(name, parent);

		// Create the children nodes
		this._x = new Distance("x", this);
		this._y = new Distance("y", this);
		this._z = new Distance("z", this);

		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}
}