import { Type } from "../../Type.js";
import { Shape } from '../Shape.js';
import { Size } from '../measures/Size.js';

/** Defines a three-dimensional spherical Shape. */
export class Sphere extends Shape {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes the Sphere instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent, data);

		// Create the child items
		this._radius = new Size("radius", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The Size of the radius in all axes. */
	get radius() { return this._radius; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Sphere class. */
Sphere.type = new Type("sphere", Sphere, Shape.type);

