import { Node } from "../Node";
import { Measure } from "../Measure";

/** Defines a three-dimensional vector. */
export class Vector3 extends Node {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The value in the X axis. */
	private _x: Measure;

	/** The value in the Y axis. */
	private _y: Measure;

	/** The value in the Z axis. */
	private _z: Measure;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** Gets the value in the X axis. */
	get x() { return this._x; }

	/** Gets the value in the Y axis. */
	get y() { return this._y; }

	/** Gets the value in the Z axis. */
	get z() { return this._z; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Vector3 class.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name: any, parentNode?: Node, params?: number[]);
	constructor(name: any, parentNode?: Node, params?: object);
	constructor(name: any, parentNode?: Node, params: any = {}) {

		// Call the parent constructor
		super(name, parentNode, params);

		// If the params is an array, convert it to an object
		if (Array.isArray(params)) {
			let v = params, l = v.length;
			params = { x: (l > 0) ? v[0] : 0, y: (l > 1) ? v[1] : 0, z: (l > 2) ? v[2] : 0 };
		}

		// Create the children nodes
		this._x = new Measure("x", this, params.x || 0);
		this._y = new Measure("y", this, params.y || 0);
		this._z = new Measure("z", this, params.z || 0);
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Converts the Vector3 instance into an array representation. */
	toArray(): number[] {
		return [this._x.value, this._y.value, this._z.value];
	}

	/** Sets the values of the Vector3 from an array.
	* @param values An array with the numerical values. */
	fromArray(values: number[]) {
		this.x.set((values.length > 0) ? values[0] : 0);
		this.y.set((values.length > 1) ? values[1] : 0);
		this.z.set((values.length > 2) ? values[2] : 0);
	}
}