import { Node } from '../../Node'
import { Shape } from '../Shape'
import { Size } from '../measures/Size';

/** Defines a three-dimensional ellipsoid Shape. */
export class Ellipsoid extends Shape {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The Size of the radius in the X axis. */
	private _radiusX: Size;

	/** The Size of the radius in the Y axis. */
	private _radiusY: Size;

	/** The Size of the radius in the Z axis. */
	private _radiusZ: Size;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The Size of the radius in the X axis. */
	get radiusX(): Size { return this._radiusX; }

	/** The Size of the radius in the Y axis. */
	get radiusY(): Size { return this._radiusY; }

	/** The Size of the radius in the Z axis. */
	get radiusZ(): Size { return this._radiusZ; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes the Ellipsoid instance.	
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters. */
	constructor(name: any, parentNode?: Node, params: any = {}) {
		super(name, parentNode, params);
		if (Array.isArray(params)) { params = {
			radiusX: (params.length > 0) ? params[0] : 1,
			radiusY: (params.length > 1) ? params[1] : 1,
			radiusZ: (params.length > 2) ? params[2] : 1
		};}
		let radius = params.radius || params.radiusX || 1;
		this._radiusX = new Size("radiusX", this, params.radiusX || radius);
		this._radiusY = new Size("radiusY", this, params.radiusY || radius) ;
		this._radiusZ = new Size("radiusZ", this, params.radiusZ || radius);
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Converts the Ellipsoid instance into an array representation. */
	toArray(): number[] {
		return [this._radiusX.value, this._radiusY.value, this._radiusZ.value];
	}

	/** Sets the values of the Ellipsoid from an array.
	* @param values An array with the numerical values. */
	fromArray(values: number[]) {
		this._radiusX.setValue((values.length > 0) ? values[0] : 0);
		this._radiusY.setValue((values.length > 1) ? values[1] : values[0]);
		this._radiusZ.setValue((values.length > 2) ? values[2] : values[0]);
	}
}