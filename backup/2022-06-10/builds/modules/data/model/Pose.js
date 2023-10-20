import { Node } from "../Node.js";
import { NodeSet } from "../NodeSet.js";

/** Defines a Pose of an object. */
export class Pose extends Node {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Pose class.
	 * @param name The name(s) of the node.
	 * @param type The type of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name, type, parentNode, params = {}) {

		// Call the parent constructor
		super(name, type || "pose", parentNode, params);

		// Create the child nodes
		this._childPoses = new NodeSet("poses", this);

	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The position of the Pose. */
	get position() { return this._position; }

	/** The orientation of the Pose. */
	get orientation() { return this._orientation; }

	/** The parent Pose. */
	get parent() { return this._parentPose; }

	/** The child Poses. */
	get childPoses() { return this._childPoses; }
}
