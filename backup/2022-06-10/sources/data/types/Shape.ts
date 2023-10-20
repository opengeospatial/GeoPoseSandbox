import { Node } from "../Node";
import { String } from './String';

/** Defines a three dimensional shape. */ 
export class Shape extends Node {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** Indicates if the Shape should be shaded or not. */
	private _shaded: String;

	/** The color of the Shape. */
	private _color: String;
	
	/** The diffuse texture of the Shape. */
	private _texture: String;

	/** The emissive texture of the Shape. */
	private _emissive: String;
	

	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** Indicates if the Shape should be shaded or not. */
	get shaded(): String { return this._shaded; }

	/** The color of the Shape. */
	get color(): String { return this._color; }

	/** The diffuse texture of the Shape. */
	get texture(): String { return this._texture; }

	/** The emissive texture of the Shape. */
	get emissive(): String { return this._emissive; }
	
	
	// ----------------------------------------------------- PUBLIC CONSTRUCTOR
	
	/** Initializes the Shape instance.	
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters. */
	constructor(name : any, parentNode?: Node, params: any = {}) { 

		// Call the parent constructor
		super(name, "shape", parentNode, params);

		// Create the children nodes
		this._shaded = new String("shaded", this, params.shaded); 
		this._color = new String("color", this, params.color); 
		this._texture = new String("texture", this, params.texture); 
		this._emissive = new String("color", this, params.color); 
	}
}
