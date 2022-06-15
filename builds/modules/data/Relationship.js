
/** Defines a relationship between data items. */
export class Relationship {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Node class.
	 * @param name The name(s) of the relationship. */
	constructor(name) {

		this._name = name;
	}

	// /** The origin items of the relationship. */
	// private _origin: string;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The name of the relationship. */
	get name() { return this._name; }
}

