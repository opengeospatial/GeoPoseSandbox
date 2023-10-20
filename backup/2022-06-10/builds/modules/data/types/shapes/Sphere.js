import { Shape } from '../Shape.js';
import { Size } from '../measures/Size.js';

/** Defines a three-dimensional spherical Shape. */
export class Sphere extends Shape {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes the Sphere instance.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters. */
	constructor(name, parentNode, params = {}) {
		super(name, parentNode, params);
		this._radius = new Size("radius", this, params.radius || 1);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The Size of the radius in all axes. */
	get radius() { return this._radius; }
}

