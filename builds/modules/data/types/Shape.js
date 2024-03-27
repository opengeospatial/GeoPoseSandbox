import { Item } from "../Item.js";
import { Type } from "../Type.js";
import { String } from "./simple/String.js";


/** Defines a three dimensional shape. */
export class Shape extends Item {


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** Indicates if the Shape should be shaded or not. */
	get shaded() { return this._shaded; }

	/** The color of the Shape. */
	get color() { return this._color; }

	/** The diffuse texture of the Shape. */
	get texture() { return this._texture; }

	/** The emissive texture of the Shape. */
	get emissive() { return this._emissive; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes the Shape instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent, data);

		// Create the child items
		this._shaded = new String("shaded", this);
		this._color = new String("color", this);
		this._texture = new String("texture", this);
		this._emissive = new String("color", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Shape class. */
Shape.type = new Type("shape", Shape, Item.type);

//# sourceMappingURL=Shape.js.map