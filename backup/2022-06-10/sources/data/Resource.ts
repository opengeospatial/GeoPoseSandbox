import { Node } from "./Node";
import { String } from "./types/String";

/** Defines an external data resource. */
export abstract class Resource extends Node {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The URL of the Resource. */
	// private _url: String;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The URL of the Resource. */
	// get url(): String { return this._url; }

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR


	/** Initializes a new Resource instance.
	 * @param name The name of the resource. */
	 constructor(name: string) {
		
		// Call the base class constructor
		super(name, "resource");

		// Create the URL of the Resource
		// this._url = new String("url", this);
	}



	// --------------------------------------------------------- PUBLIC METHODS

	/** Loads the resource.
	 * @param url The URL of the Resource. */
	public load(url) {}


}