import { Item } from "../../Item.js"
import { Type } from "../../Type.js"
import { Complex } from "../Complex.js"
import { String } from "../simple/String.js"
import { Angle } from "../measures/Angle.js"

/** Defines the Euler orientation. 
 * @see https://en.wikipedia.org/wiki/Euler_angles */
export class Euler extends Complex {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the Euler class. */
	public static type: Type = new Type("euler", Euler, Complex.type);


	// --------------------------------------------------------- PRIVATE FIELDS

	/** The Angle in the X axis. */
	private _x: Angle;

	/** The Angle in the Y axis. */
	private _y: Angle;

	/** The Angle in the Z axis. */
	private _z: Angle;

	/** The order of application of axis rotation. */
	private _order: String;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The Angle in the X axis. */
	get x(): Angle { return this._x; }

	/** The Angle in the Y axis. */
	get y(): Angle { return this._y; }

	/** The Angle in the Z axis. */
	get z(): Angle { return this._z; }

	/** The order of application of axis rotation. */
	get order(): String { return this._order; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Euler class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name?: string, parent?: Item, data?: any) {

		// Call the parent constructor
		super(name, parent, data);

		// Create the child items
		this._x = new Angle("x", this, 0);
		this._y = new Angle("y", this, 0);
		this._z = new Angle("z", this, 0);
		this._order = new String("order", this, "XYZ");

		// Define the components of the Complex type
		this._components = [this._x, this._y, this._z];

		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Gets the values of the Euler instance.
 	* @returns An object with the values of the Euler instance. */
	getValues(): object { 
		return { x: this._x.value, y: this._y.value, z: this._z.value };
	}


	/** Sets the values of the Euler instance.
	 * @param x The value in the X axis.
	 * @param y The value in the Y axis.
	 * @param z The value in the Z axis. */
	setValues(x: number = 0, y: number = 0, z: number = 0) {
		this._x.value = x; this._y.value = y; this._z.value = z;
	}

}
