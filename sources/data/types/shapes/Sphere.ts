import { Item } from "../../Item.js"
import { Type } from "../../Type.js"
import { Shape } from "../Shape.js"
import { Size } from "../measures/Size.js"

/** Defines a three-dimensional spherical Shape. */
export class Sphere extends Shape {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the Sphere class. */
	public static type: Type = new Type("sphere", Sphere, Shape.type);


	// --------------------------------------------------------- PRIVATE FIELDS

	/** The Size of the radius in all axes. */
	private _radius: Size;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The Size of the radius in all axes. */
	get radius(): Size { return this._radius; }

	
	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes the Sphere instance.	
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name?: string, parent?: Item, data?: any) {

		// Call the parent class constructor
		super(name, parent, data);

		// Create the child items
		this._radius = new Size("radius", this);
		
		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}
}
