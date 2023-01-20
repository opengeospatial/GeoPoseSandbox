import { Item } from "../Item";
import { Type } from "../Type";
import { Number } from "./simple/Number";

/** Defines a complex data item. */
export class Complex extends Item {
	
	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the Complex class. */
	public static type: Type = new Type("complex", Complex, Item.type);
	

	// ------------------------------------------------------- PROTECTED FIELDS

	/** The list of components of the complex data item. */
	protected _components: Number[];


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** Indicates whether all the the values are the default or not. */
	get isDefault(): boolean {
		for(let component of this._components) 
			if (!component.isDefault) return false;
		return true;
	}

	/** Indicates whether the value is undefined or not. */
	get isUndefined(): boolean {
		for(let component of this._components) 
			if (!component.isUndefined) return false;
		return true;
	}


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the complex class.
	 * @param name The name of the data item.
	 * @param parent The parent data item.
	 * @param data The initialization data. */
	constructor(name?: string, parent?: Item, data?: any) {

		// Call the parent class constructor
		super(name, parent, data);
		
		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}
}