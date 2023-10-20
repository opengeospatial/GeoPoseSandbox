import { Item } from "../../Item";
import { Type } from "../../Type";
import { Orientation } from "../Orientation";
import { Number } from "../../items/simple/Number";

/** Defines an orientation with a quaternion. */
export class QuaternionOrientation extends Orientation {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the QuaternionOrientation class. */
	public static type: Type = new Type("quaternion-orientation", 
		QuaternionOrientation, Orientation.type);

	
	// --------------------------------------------------------- PRIVATE FIELDS

	/** The value of the quaternion vector in the X(i) axis. */
	private _x: Number;

	/** The value of the quaternion vector in the Y(j) axis. */
	private _y: Number;

	/** The value of the quaternion vector in the Z(k) axis. */
	private _z: Number;

	/** The rotation half-angle around the quaternion vector. */
	private _w: Number;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The value of the quaternion vector in the X(i) axis. */
	get x() { return this._x; }

	/** The value of the quaternion vector in the Y(j) axis. */
	get y() { return this._y; }

	/** The value of the quaternion vector in the Z(k) axis. */
	get z() { return this._z; }

	/** The rotation half-angle around the quaternion vector. */
	get w() { return this._w; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the QuaternionOrientation class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	 constructor(name?: string, parent?: Item, data?: any) { 
		
		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._x = new Number("x", this);
		this._y = new Number("y", this);
		this._z = new Number("z", this);
		this._w = new Number("w", this, { value:1, defaultValue: 1});

		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}

}