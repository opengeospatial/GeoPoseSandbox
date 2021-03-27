import { Node } from "../../Node";
import { Orientation } from "../Orientation";
import { Pose } from "../Pose";

/** Defines the Orientation based on an Pose to look at. */
export class LookAtOrientation extends Orientation {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The target Pose to look at. */
	private _target : Pose;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The target Entity to look at. */
	get target(): Pose { return this._target; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR
	
	/** Initializes a new instance of the APAOrientation class.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name : any, parentNode?: Node, params: any = {}){ 

		// Call the parent constructor
		super (name, parentNode, params);

		// Create the children nodes
		this._target = new Pose("target", this, params.target);
	}
}
