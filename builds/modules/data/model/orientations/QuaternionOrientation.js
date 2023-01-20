import { Type } from "../../Type.js";
import { Orientation } from "../Orientation.js";
import { Number } from "../../items/simple/Number.js";


/** Defines an orientation with a quaternion. */
export class QuaternionOrientation extends Orientation {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the QuaternionOrientation class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent, data);

		// Create the child items
		this._x = new Number("x", this);
		this._y = new Number("y", this);
		this._z = new Number("z", this);
		this._w = new Number("w", this, { value: 1, defaultValue: 1 });

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The value of the quaternion vector in the X(i) axis. */
	get x() { return this._x; }

	/** The value of the quaternion vector in the Y(j) axis. */
	get y() { return this._y; }

	/** The value of the quaternion vector in the Z(k) axis. */
	get z() { return this._z; }

	/** The rotation half-angle around the quaternion vector. */
	get w() { return this._w; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the QuaternionOrientation class. */
QuaternionOrientation.type = new Type("quaternion-orientation", QuaternionOrientation, Orientation.type);
