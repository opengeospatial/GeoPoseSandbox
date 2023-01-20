import { Item } from "../../Item";
import { Type } from "../../Type";
import { Complex } from "../Complex";
import { Distance } from "../measures/Distance";
import { Size } from "../measures/Size";

/** Defines a three-dimensional vector. */
export class Vector extends Complex {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the Vector class. */
	public static type: Type = new Type("vector", Vector, Complex.type);


	// --------------------------------------------------------- PRIVATE FIELDS

	/** The vector component in the X axis. */
	private _x: Distance;

	/** The vector component in the Y axis. */
	private _y: Distance;

	/** The vector component in the Z axis. */
	private _z: Distance;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The vector component in the X axis. */
	get x(): Distance { return this._x; }

	/** The vector component in the Y axis. */
	get y(): Distance { return this._y; }

	/** The vector component in the Z axis. */
	get z(): Distance { return this._z; }

	/** The length of the vector. */
	get length(): Size { 
		let x = this._x.value, y = this._y.value, z = this._z.value;
		return new Size(this.name + "length", undefined,
		 {value: Math.sqrt((x * x) + (y * y) + (z * z))}); 
	}
	set length(size: Size | number) {
		if (typeof(size) != "number") size = size.value;
		let x = this._x.value, y = this._y.value, z = this._z.value;
		let length = Math.sqrt((x * x) + (y * y) + (z * z)),
			factor = size / length;
		this._x.value = x * factor; this._y.value = y * factor; 
		this._z.value = z * factor; 
	}


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Vector3 class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name?: string, parent?: Item, data?: any) {

		// Call the parent class constructor
		super(name, parent, data);

		// Create the child items
		this._x = new Distance("x", this);
		this._y = new Distance("y", this);
		this._z = new Distance("z", this);

		// Define the components of the Complex type
		this._components = [this._x, this._y, this._z];

		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Gets the values of the Vector instance.
	* @returns An object with the values of the Vector instance. */
	getValues(): object { 
		return { x: this._x.value, y: this._y.value, z: this._z.value };
	}


	/** Sets the values of the Vector instance.
	 * @param x The vector component in the X axis.
	 * @param y The vector component in the Y axis.
	 * @param z The vector component in the Z axis. */
	setValues(x: number = 0, y: number = 0, z: number = 0) {
		this._x.value = x; this._y.value = y; this._z.value = z; 
	}


	/** Normalizes the vector (by setting its length to 1). */
	normalize() { this.length = 1; }


	/** Obtains the string representation of the Vector instance. 
	 * @returns The string representation of the Vector instance. */
	toString(): string { return this._components.join(", "); }

}