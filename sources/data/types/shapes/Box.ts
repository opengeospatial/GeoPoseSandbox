import { Node } from '../Node'
import { Shape } from '../Shape'
import { Size } from '../measures/Size';

/** Defines a three-dimensional box Shape (global). */
export class Box extends Shape {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The size of the Box in the X dimension. */
	public _width: Size;

	/** The size of the Box in the Y dimension. */
	public _height: Size;

	/** The size of the Box in the Z dimension. */
	public _depth: Size;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** Gets the size of the Box in the X dimension. */
	get width(): Size { return this._width; }

	/** Gets the size of the Box in the Z dimension. */
	get depth(): Size { return this._depth; }

	/** Gets the size of the Box in the Y dimension. */
	get height(): Size { return this._height; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes the Box instance.
	 * @param name The name(s) of the node.
	 * @param parentNode The parent node.
	 * @param params The initialization parameters. */
	constructor(name: any, parentNode?: Node, params?: object);
	constructor(name: any, parentNode?: Node, params?: any) {
		super(name, parentNode, params);
		this._width = new Size("Width", this, params[0]);
		this._height = new Size("Height", this, params[1] || params[0]);
		this._depth = new Size("Depth", this, params[2] || params[0]);
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Converts the Box instance into an array representation. */
	toArray(): number[] {
		return [this._width.value, this._depth.value, this._height.value];
	}

	/** Sets the values of the Box from an array.
	* @param values An array with the numerical values. */
	fromArray(values: number[]) {
		this._width.set((values.length > 0) ? values[0] : 0);
		this._depth.set((values.length > 1) ? values[1] : this.width.get());
		this._height.set((values.length > 2) ? values[2] : this.width.get());
	}
}