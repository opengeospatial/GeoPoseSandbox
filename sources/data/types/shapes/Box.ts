import { Node } from '../../Node'
import { Shape } from '../Shape'
import { Size } from '../measures/Size';

/** Defines a three-dimensional box Shape (global). */
export class Box extends Shape {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The Size of in the X axis. */
	private _width: Size;

	/** The Size of in the Y axis. */
	private _height: Size;

	/** The Size of in the Z axis. */
	private _depth: Size;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The Size of in the X axis. */
	get width(): Size { return this._width; }

	/** The Size of in the Z axis. */
	get depth(): Size { return this._depth; }

	/** The Size of in the Y axis. */
	get height(): Size { return this._height; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes the Box instance.
	 * @param name The name(s) of the node.
	 * @param parentNode The parent node.
	 * @param params The initialization parameters. */
	constructor(name: any, parentNode?: Node, params: any = {}) {
		super(name, parentNode, params);
		if (Array.isArray(params)) { params = {
			width: (params.length > 0) ? params[0] : 1,
			depth: (params.length > 1) ? params[1] : 1,
			height: (params.length > 2) ? params[2] : 1
		};}
		let defaultValue = params.size || params.width || 1;
		this._width = new Size("Width", this, params.width || defaultValue);
		this._depth = new Size("Depth", this, this._depth || defaultValue);
		this._height = new Size("Height", this, this._height || defaultValue);
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Converts the Box instance into an array representation. */
	toArray(): number[] {
		return [this._width.value, this._depth.value, this._height.value];
	}

	/** Sets the values of the Box from an array.
	* @param values An array with the numerical values. */
	fromArray(values: number[]) {
		this._width.setValue((values.length > 0)? values[0] : 0);
		this._depth.setValue((values.length > 1)? values[1] : values[0]);
		this._height.setValue((values.length > 2)? values[2] : values[0]);
	}
}