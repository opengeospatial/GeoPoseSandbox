import { Item } from "./Item";

/** Contains the metadata of a data type. 
 * Provides a way to handle reflection and serialization in different contexts
 * (even after the code is transpiled to Javascript). */
export class Type {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The global list of Type instances. */
	private static _record: Record<string, Type> = {};

	/** The name of the data type. */
	private _name: string;

	/** The inner type of the data type. */
	private _innerType: any;

	/** The list of instances of the data type. */
	private _instances: Item[];

	/** The parent data type. */
	private _parent: Type;

	/** The children data types. */
	private _children: Type[];


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The global list of Type instances. */
	static get record(): Record<string, Type> { return this._record; }

	/** The name of the data type. */
	get name(): string { return this._name; }

	/** The list of instances of the data type. */
	get instances(): Item[] { return this._instances; }

	/** The parent data type. */
	get parent(): Type { return this._parent; }

	/** The children data types. */
	get children(): Type[] { return this._children; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Type class.
	 * @param name The name of the data type.
	 * @param innerType The Javascript type.
	 * @param parent The parent data type. */
	constructor(name: string, innerType : CallableFunction, parent?: Type) {

		// Store the given name and add this instance to the global record
		this._name = name;
		if (!Type._record[name]) Type._record[name] = this;
		else throw Error ('Repeated data type name: "' + name + '"');

		// If there is a parent type, store the reference and create a link
		if (parent) { this._parent = parent; this._parent.children.push(this); }

		// Initialize the list of child types
		this._children = [];

		// Initialize the list of instances of the data type
		// this._instances = [];
	}

	
	// --------------------------------------------------------- PUBLIC METHODS

	/** Check if the type is (or inherits from) another.
	 * @param type The type to check against.
	 * @returns A boolean indicating whether the types are the same or not. */
	is(type: Type) : boolean {
		let t:Type = this;
		while(t) { if(t == type) return true; t = t._parent; }
		return false;
	}


	// /** Registers an instance of the type to the list.
	//  * @param instance The instance to register. */
	// register(instance: Item) { 
	// 	let type:Type = instance.type;
	// 	while(type) { type._instances.push(instance); type = type._parent; }
	// }


	// /** Unregisters an instance of the type to the list.
	//  * @param instance The instance to unregister. */
	// unregister (instance: Item) { 
	// 	let type:Type = instance.type;
	// 	// while(type) { type._instances(instance); type = type._parent; }
	// }
}
