import { Node } from '../../Node'
import { Shape } from '../Shape'
import { Size } from '../measures/Size';

/** Defines a three-dimensional spherical Shape. */
export class Sphere extends Shape {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The Size of the radius in all axes. */
	private _radius: Size;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The Size of the radius in all axes. */
	get radius(): Size { return this._radius; }

	
	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes the Sphere instance.	
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters. */
	constructor(name: any, parentNode?: Node, params: any = {}) {
		super(name, parentNode, params);
		this._radius = new Size("radius", this, params.radius || 1);
	}
}
