import { Type } from "../../Type.js";
import { Shape } from "../Shape.js";
import { Size } from "../measures/Size.js";

/** Defines a three-dimensional box Shape (global). */
export class Box extends Shape {


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The size of the box the X axis. */
	get width() { return this._width; }

	/** The size of the box in the Y axis. */
	get height() { return this._height; }

	/** The size of the box the Z axis. */
	get depth() { return this._depth; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes the Box instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent, data);

		// Create the child items
		this._width = new Size("width", this);
		this._depth = new Size("depth", this);
		this._height = new Size("height", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Box class. */
Box.type = new Type("box", Box, Shape.type);
