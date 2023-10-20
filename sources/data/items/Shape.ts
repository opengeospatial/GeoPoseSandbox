import { Item } from "../Item.js"
import { Type } from "../Type.js"
import { String } from "./simple/String.js"


/** Defines a three dimensional shape. */ 
export class Shape extends Item {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the Shape class. */
	public static type: Type = new Type("shape", Shape, Item.type);


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
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name?: string, parent?: Item, data?: any) { 

		// Call the base class constructor
		super(name, parent, data);

		// Create the child items
		this._shaded = new String("shaded", this); 
		this._color = new String("color", this); 
		this._texture = new String("texture", this); 
		this._emissive = new String("color", this);
		
		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}
}
