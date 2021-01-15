import { Node } from '../Node'
import { Shape } from '../Shape'
import { Size } from '../measures/Size';

/** Defines a three-dimensional ellipsoid Shape. */
export class Ellipsoid extends Shape {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The radius of the ellipsoid in the X dimension. */
	public _radiusX: Size;

	/** The radius of the ellipsoid in the Y dimension. */
	public _radiusY: Size;

	/** The radius of the ellipsoid in the Z dimension. */
	public _radiusZ: Size;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** Gets the radius of the ellipsoid in the X dimension. */
	get radiusX(): Size { return this._radiusX; }

	/** Gets the radius of the ellipsoid in the Y dimension. */
	get radiusY(): Size { return this._radiusY; }

	/** Gets the radius of the ellipsoid in the Z dimension. */
	get radiusZ(): Size { return this._radiusZ; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes the Ellipsoid instance.	
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters. */
	constructor(name: any, parentNode?: Node, params?: object);
	constructor(name: any, parentNode?: Node, params?: any) {
		super(name, parentNode, params);
		this._radiusX = new Size("radiusX", this, params.radiusX);
		this._radiusY = new Size("radiusY", this, params.radiusY);
		this._radiusZ = new Size("radiusZ", this, params.radiusZ);
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Converts the Ellipsoid instance into an array representation. */
	toArray(): number[] {
		return [this._radiusX.value, this._radiusY.value, this._radiusZ.value];
	}

	/** Sets the values of the Ellipsoid from an array.
	* @param values An array with the numerical values. */
	fromArray(values: number[]) {
		this._radiusX.set((values.length > 0) ? values[0] : 0);
		this._radiusY.set((values.length > 1) ? values[1] : this.radiusX.get());
		this._radiusZ.set((values.length > 2) ? values[2] : this.radiusX.get());
	}
}