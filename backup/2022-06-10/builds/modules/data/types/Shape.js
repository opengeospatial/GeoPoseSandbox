import { Node } from "../Node.js";
import { String } from './String.js';

/** Defines a three dimensional shape. */
export class Shape extends Node {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes the Shape instance.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters. */
	constructor(name, parentNode, params = {}) {

		// Call the parent constructor
		super(name, "shape", parentNode, params);

		// Create the children nodes
		this._shaded = new String("shaded", this, params.shaded);
		this._color = new String("color", this, params.color);
		this._texture = new String("texture", this, params.texture);
		this._emissive = new String("color", this, params.color);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** Indicates if the Shape should be shaded or not. */
	get shaded() { return this._shaded; }

	/** The color of the Shape. */
	get color() { return this._color; }

	/** The diffuse texture of the Shape. */
	get texture() { return this._texture; }

	/** The emissive texture of the Shape. */
	get emissive() { return this._emissive; }
}

