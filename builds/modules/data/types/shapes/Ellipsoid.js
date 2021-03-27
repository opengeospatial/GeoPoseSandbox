import { Shape } from '../Shape.js';
import { Size } from '../measures/Size.js';

/** Defines a three-dimensional ellipsoid Shape. */
export class Ellipsoid extends Shape {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes the Ellipsoid instance.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters. */
	constructor(name, parentNode, params = {}) {
		super(name, parentNode, params);
		if (Array.isArray(params)) {
			params = {
				radiusX: (params.length > 0) ? params[0] : 1,
				radiusY: (params.length > 1) ? params[1] : 1,
				radiusZ: (params.length > 2) ? params[2] : 1
			};
		}
		let radius = params.radius || params.radiusX || 1;
		this._radiusX = new Size("radiusX", this, params.radiusX || radius);
		this._radiusY = new Size("radiusY", this, params.radiusY || radius);
		this._radiusZ = new Size("radiusZ", this, params.radiusZ || radius);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The Size of the radius in the X axis. */
	get radiusX() { return this._radiusX; }

	/** The Size of the radius in the Y axis. */
	get radiusY() { return this._radiusY; }

	/** The Size of the radius in the Z axis. */
	get radiusZ() { return this._radiusZ; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Converts the Ellipsoid instance into an array representation. */
	toArray() {
		return [this._radiusX.value, this._radiusY.value, this._radiusZ.value];
	}

	/** Sets the values of the Ellipsoid from an array.
	* @param values An array with the numerical values. */
	fromArray(values) {
		this._radiusX.setValue((values.length > 0) ? values[0] : 0);
		this._radiusY.setValue((values.length > 1) ? values[1] : values[0]);
		this._radiusZ.setValue((values.length > 2) ? values[2] : values[0]);
	}
}
