import { Node } from "../Node";
import { Vector3 } from "../types/complex/Vector3";

/** Defines a basic position within a reference frame. */
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

	/** The relative position. */
	get relativeValues() { return this._relativeValues; }

	/** The absolute position. */
	get absoluteValues() { return this._absoluteValues; }

	/** The vertical vector. */
	get verticalVector() { return this._verticalVector; }

	/** The forward vector. */
	get forwardVector() { return this._forwardVector; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Location class.
	 * @param name The name(s) of the node.
	 * @param type The type of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name: any, type: any, parentNode?: Node, params: any = {}) {

		// Call the parent constructor
		super(name, "position", parentNode, params);

		// Create the children nodes
		this._relativeValues = new Vector3("relativeValues", this);
		this._absoluteValues = new Vector3("absoluteValues", this);
		this._verticalVector = new Vector3("verticalVector", this);
		this._forwardVector = new Vector3("forwardVector", this);
	}
}