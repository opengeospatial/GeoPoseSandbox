import { Type } from "../../Type.js";
import { Complex } from "../Complex.js";
import { Number } from "../simple/Number.js";


/** Defines an RGBA color. */
export class Color extends Complex {


	// ------------------------------------------------------ PUBLIC PROPERTIES

	/** The red component of the color. */
	get r() { return this._r; }

	/** The green component of the color. */
	get g() { return this._g; }

	/** The blue component of the color. */
	get b() { return this._b; }

	/** The alpha component of the color. */
	get a() { return this._a; }


	// ------------------------------------------------------------ CONSTRUCTOR

	/** Initializes a new instance of the Color class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent, data);

		// Create the child items
		this._r = new Number("r", this, { min: 0, max: 1, defaultValue: 0 });
		this._g = new Number("g", this, { min: 0, max: 1, defaultValue: 0 });
		this._b = new Number("b", this, { min: 0, max: 1, defaultValue: 0 });
		this._a = new Number("a", this, { min: 0, max: 1, defaultValue: 1 });

		// Define the components of the Complex type
		this._components = [this._r, this._g, this._b, this._a];

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Gets the values of the Color instance.
	* @returns An object with the values of the Color instance. */
	getValues() {
		return { r: this._r.value, g: this._g.value, b: this._b.value,
			a: this._a.value };
	}


	/** Sets the values of the Color instance.
	 * @param r The value of the Red component.
	 * @param g The value of the Green component.
	 * @param b The value of the Blue component.
	 * @param a The value of the Alpha component. */
	setValues(r = 0, g = 0, b = 0, a = 1) {
		this._r.value = r;
		this._g.value = g;
		this._b.value = b;
		this._a.value = a;
	}


	/** Obtains the string representation of the Color instance.
	 * @returns The string representation of the Color instance. */
	toString() {
		return "rgb(" + this._r + ", " + this._g + ", " + this._b + ")";
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Color class. */
Color.type = new Type("color", Color, Complex.type);

