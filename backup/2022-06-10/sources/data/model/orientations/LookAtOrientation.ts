import { Vector3 } from "../../types/complex/Vector3";
import { String } from "../../types/String";
import { Orientation } from "../Orientation";

/** Defines an orientation with a target. */
export class LookAtOrientation extends Orientation {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The target to point towards. */
	private _targetName : String;

	/** The target position to point towards. */
	private _targetPosition : Vector3;
	

	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The target to point towards. */
	get targetName(): String { return this._targetName; }

	/** The target position. */
	get targetPosition(): Vector3 { return this._targetPosition; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR
	
	/** Initializes a new instance of the YawPitchRollOrientation class.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	 constructor(name : any, parentNode?: Node, params: any = {}){ 

		// Call the parent constructor
		super(name, parentNode, params);

		// Create the children nodes
		this._targetName = new String("target", this, params.name);
		this._targetPosition = new Vector3("position", this, params.position);
	}

}