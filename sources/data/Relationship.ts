import { Item } from "./Item";

/** Defines a relationship between data items. */
export class Relationship {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The name of the relationship. */
	private _name: string;

	/** The origin items of the relationship. */
	private _origin: Item[];

	// /** The origin items of the relationship. */
	// private _origin: string;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The name of the relationship. */
	get name(): string { return this._name; }

	
	// ----------------------------------------------------- PUBLIC CONSTRUCTOR
	
	/** Initializes a new instance of the Node class.
	 * @param name The name(s) of the relationship. */
	constructor(name: string) { 

		this._name = name;
	}
}
