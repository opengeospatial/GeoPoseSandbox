import { Node } from '../Node'
import { Shape } from '../Shape'
import { Size } from '../measures/Size';

/** Defines a three-dimensional spherical Shape. */
export class Sphere extends Shape {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The radius of the sphere in every dimension. */
	public _radius: Size;

	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** Gets the radius of the ellipsoid in the X dimension. */
	get radius(): Size { return this._radius; }

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes the Sphere instance.	
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters. */
	constructor(name: any, parentNode?: Node, params?: object);
	constructor(name: any, parentNode?: Node, params?: any) {
		super(name, parentNode, params);
		this._radius = new Size("radius", this, params.radius);
	}
}
