import { Node } from "../Node";
import { NodeSet } from "../NodeSet";
import { Frame } from "./Frame";
import { Position } from "./Position";
import { Orientation } from "./Orientation";
import { Extension } from "./Extension";

/** Defines a Pose of an object. */
export class Pose extends Node {

	// --------------------------------------------------------- PRIVATE FIELDS
	/** The position of the Pose. */
	private _position: Position;

	/** The orientation of the Pose. */
	private _orientation: Orientation;

	/** The parent Pose. */
	private _parentPose: Pose;

	/** The children Poses. */
	private _childPoses: NodeSet<Pose>;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The position of the Pose. */
	get position(): Position { return this._position; }

	/** The orientation of the Pose. */
	get orientation(): Orientation { return this._orientation; }

	/** The parent Pose. */
	get parent(): Pose { return this._parentPose; }

	/** The child Poses. */
	get childPoses(): NodeSet<Pose> { return this._childPoses; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Pose class.
	 * @param name The name(s) of the node.
	 * @param type The type of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name: any, type: any, parentNode?: Node, params: any = {}) {

		// Call the parent constructor
		super(name, type || "pose", parentNode, params);

		// Create the child nodes
		this._childPoses = new NodeSet<Pose>("poses", this);

	}
}