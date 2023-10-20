import { Item } from "../../Item";
import { Type } from "../../Type";
import { Shape } from '../Shape'
import { Size } from '../measures/Size';

/** Defines a three-dimensional ellipsoid shape. */
export class Ellipsoid extends Shape {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the Ellipsoid class. */
	public static type: Type = new Type("ellipsoid", Ellipsoid, Shape.type);


	// --------------------------------------------------------- PRIVATE FIELDS

	/** The radius in the X axis. */
	private _radiusX: Size;

	/** The radius in the Y axis. */
	private _radiusY: Size;

	/** The radius in the Z axis. */
	private _radiusZ: Size;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The radius in the X axis. */
	get radiusX(): Size { return this._radiusX; }

	/** The radius in the Y axis. */
	get radiusY(): Size { return this._radiusY; }

	/** The radius in the Z axis. */
	get radiusZ(): Size { return this._radiusZ; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes the Ellipsoid instance.	
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name?: string, parent?: Item, data?: any) {

		// Call the parent class constructor
		super(name, parent);

		// Create the child items
		this._radiusX = new Size("radiusX", this);
		this._radiusY = new Size("radiusY", this);
		this._radiusZ = new Size("radiusZ", this);
		
		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}
}