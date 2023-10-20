import { Item } from "../../Item";
import { Type } from "../../Type";
import { Shape } from '../Shape'
import { Size } from '../measures/Size';

/** Defines a three-dimensional box Shape (global). */
export class Box extends Shape {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the Box class. */
	public static type: Type = new Type("box", Box, Shape.type);


	// --------------------------------------------------------- PRIVATE FIELDS

	/** The size of the box in the X axis. */
	private _width: Size;

	/** The size of the box in the Y axis. */
	private _height: Size;

	/** The size of the box in the Z axis. */
	private _depth: Size;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The size of the box the X axis. */
	get width(): Size { return this._width; }

	/** The size of the box in the Y axis. */
	get height(): Size { return this._height; }

	/** The size of the box the Z axis. */
	get depth(): Size { return this._depth; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes the Box instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name?: string, parent?: Item, data?: any) {

		// Call the parent class constructor
		super(name, parent);

		// Create the child items
		this._width = new Size("width", this);
		this._depth = new Size("depth", this);
		this._height = new Size("height", this);
		
		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}
}