import { Type } from "../../Type.js";
import { Shape } from "../Shape.js";
import { Size } from "../measures/Size.js";

/** Defines a three-dimensional ellipsoid shape. */
export class Ellipsoid extends Shape {


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The radius in the X axis. */
	get radiusX() { return this._radiusX; }

	/** The radius in the Y axis. */
	get radiusY() { return this._radiusY; }

	/** The radius in the Z axis. */
	get radiusZ() { return this._radiusZ; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes the Ellipsoid instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent, data);

		// Create the child items
		this._radiusX = new Size("radiusX", this);
		this._radiusY = new Size("radiusY", this);
		this._radiusZ = new Size("radiusZ", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Ellipsoid class. */
Ellipsoid.type = new Type("ellipsoid", Ellipsoid, Shape.type);
