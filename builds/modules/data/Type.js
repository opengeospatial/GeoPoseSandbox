
/** Contains the metadata of a data type.
 * Provides a way to handle reflection and serialization in different contexts
 * (even after the code is transpiled to Javascript). */
export class Type {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Type class.
	 * @param name The name of the data type.
	 * @param innerType The Javascript type.
	 * @param parent The parent data type. */
	constructor(name, innerType, parent) {

		// Store the given name and add this instance to the global record
		this._name = name;
		if (!Type._record[name])
			Type._record[name] = this;
		else
			throw Error('Repeated data type name: "' + name + '"');

		// If there is a parent type, store the reference and create a link
		if (parent) {
			this._parent = parent;
			this._parent.children.push(this);
		}

		// Initialize the list of child types
		this._children = [];

		// Initialize the list of instances of the data type
		// this._instances = [];
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The global list of Type instances. */
	static get record() { return this._record; }

	/** The name of the data type. */
	get name() { return this._name; }

	/** The list of instances of the data type. */
	get instances() { return this._instances; }

	/** The parent data type. */
	get parent() { return this._parent; }

	/** The children data types. */
	get children() { return this._children; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Check if the type is (or inherits from) another.
	 * @param type The type to check against.
	 * @returns A boolean indicating whether the types are the same or not. */
	is(type) {
		let t = this;
		while (t) {
			if (t == type)
				return true;
			t = t._parent;
		}
		return false;
	}
}

// --------------------------------------------------------- PRIVATE FIELDS

/** The global list of Type instances. */
Type._record = {};

