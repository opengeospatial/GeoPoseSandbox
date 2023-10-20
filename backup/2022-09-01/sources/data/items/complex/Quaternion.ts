import { Item } from "../../Item";
import { Type } from "../../Type";
import { Complex } from "../Complex";
import { Number } from "../simple/Number";

/** Defines a four-dimensional complex number to describe rotations. */
export class Quaternion extends Complex {
	
	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the Quaternion class. */
	public static type: Type = new Type("quaternion", Quaternion, Complex.type);


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
	get x(): Number { return this._x; }

	/** The value of the quaternion vector in the Y(j) axis. */
	get y(): Number { return this._y; }

	/** The value of the quaternion vector in the Z(k) axis. */
	get z(): Number { return this._z; }

	/** The rotation half-angle around the quaternion vector. */
	get w(): Number { return this._w; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Quaternion class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name?: string, parent?: Item, data?: any) {

		// Call the parent constructor
		super(name, parent);

		// Create the children items
		this._x = new Number("x", this, 0);
		this._y = new Number("y", this, 0);
		this._z = new Number("z", this, 0);
		this._w = new Number("w", this, 1);

		// Define the components of the Complex type
		this._components = [this._x, this._y, this._z, this._w];

		// Deserialize the initialization data
		if (data) this.deserialize(data);
	}


	// --------------------------------------------------------- PUBLIC METHODS
	
	/** Gets the values of the Quaternion instance.
	 * @returns An object with the values of the Quaternion instance. */
	getValues(): object { 
		return { x: this._x.value, y: this._y.value, z: this._z.value, 
			w: this._w.value };
	}


	/** Sets the values of the Quaternion instance.
	 * @param x The value of the quaternion vector in the X(i) axis.
	 * @param y The value of the quaternion vector in the Y(j) axis.
	 * @param z The value of the quaternion vector in the Z(k) axis.
	 * @param w The rotation half-angle around the quaternion vector. */
	setValues(x: number = 0, y: number = 0, z: number = 0, w: number = 1) {
		this._x.value = x; this._y.value = y; this._y.value = z; 
		this._w.value = w;
	}
}