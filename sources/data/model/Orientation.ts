import { Node } from "../types/Node";
import { Quaternion } from "../types/complex/Quaternion";

/** Define the basic class of a three dimensional orientation. */
export class Orientation extends Node {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** Define the relative orientation. */
	private _relativeValues: Quaternion;

	/** Define the absolute orientation. */
	private _absoluteValues: Quaternion;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** Gets the relative orientation. */
	get relativeValues() { return this._relativeValues; }

	/** Gets the absolute orientation. */
	get absoluteValues() { return this._absoluteValues; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Orientation class.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name: any, parentNode?: Node, params?: number[]);
	constructor(name: any, parentNode?: Node, params?: object);
	constructor(name: any, parentNode?: Node, params: any = {}) {

		// Call the parent constructor
		super(name, parentNode, params);

		// Create the children nodes
		this._relativeValues = new Quaternion("relativeValues", this);
		this._absoluteValues = new Quaternion("absoluteValues", this);
	}
}