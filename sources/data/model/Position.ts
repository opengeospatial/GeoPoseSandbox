import { Vector3 } from "../types/complex/Vector3";
import { Node } from "../types/Node";

/** Define the basic class of a three dimensional position within a reference frame. */
export class Position extends Node {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** Define the relative position. */
	private _relativeValues: Vector3;

	/** Define the absolute position. */
	private _absoluteValues: Vector3;

	/** Define the vertical vector. */
	private _verticalVector: Vector3;

	/** Define the forward vector. */
	private _forwardVector: Vector3;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** Gets the relative position. */
	get relativeValues() { return this._relativeValues; }

	/** Gets the absolute position. */
	get absoluteValues() { return this._absoluteValues; }

	/** Gets the vertical vector. */
	get verticalVector() { return this._verticalVector; }

	/** Gets the forward vector. */
	get forwardVector() { return this._forwardVector; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Position class.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name: any, parentNode?: Node, params?: number[]);
	constructor(name: any, parentNode?: Node, params?: object);
	constructor(name: any, parentNode?: Node, params: any = {}) {

		// Call the parent constructor
		super(name, parentNode, params);

		// Create the children nodes
		this._relativeValues = new Vector3("relativeValues", this);
		this._absoluteValues = new Vector3("absoluteValues", this);
		this._verticalVector = new Vector3("verticalVector", this);
		this._forwardVector = new Vector3("forwardVector", this);
	}
}