import { Node } from "../types/Node";
import { NodeSet } from "../types/NodeSet";
import { Entity } from "./Entity";
import { Pose } from "./Pose";

/** Defines the Root node of the data model. */
export class Root extends Node {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The entities of the Scene. */
	private _entities: NodeSet<Entity>;

	/** The poses of the Scene. */
	private _poses: NodeSet<Pose>;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** Gets the entities of the Scene. */
	get entities(): NodeSet<Entity> { return this._entities; }

	/** Gets the entities of the Scene. */
	get poses(): NodeSet<Pose> { return this._poses; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Node.
	 * @param name The name(s) of the node.
	 * @param params The initialization parameters. */
	constructor(name: any, params: any = {}) {

		// Call the base class constructor
		super(name, null, params);

		// Analyze the initialization parameters
		this._entities = new NodeSet<Entity>(
			"entities", this, params.entities, Entity);
		this._poses = new NodeSet<Pose>("poses", this, params.poses, Pose);
	}
}