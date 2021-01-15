import { Node } from "../types/Node";
import { NodeSet } from "../types/NodeSet";
import { Position } from "./Position";
import { Orientation } from "./Orientation";
import { Extension } from "./Extension";
import { Entity } from "./Entity";
import { LocalPosition } from "./positions/LocalPosition";
import { GlobalPosition } from "./positions/GlobalPosition";
import { OrbitalPosition } from "./positions/OrbitalPosition";
import { LookAtOrientation } from "./orientations/LookAtOrientation";
import { APAOrientation } from "./orientations/APAOrientation";
import { QuaternionOrientation } from "./orientations/QuaternionOrientation";
import { EulerOrientation } from "./orientations/EulerOrientation";

/** Defines a Pose of an object. */
export class Pose extends Node {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The position of the Pose. */
	private _position: Position;

	/** The orientation of the Pose. */
	private _orientation: Orientation;

	/** The extensions of the Pose. */
	private _extensions: NodeSet<Extension>;

	/** The entities associated to the Pose. */
	private _entities: NodeSet<Entity>;

	/** The parent Pose. */
	private _parent: Pose;

	/** The children Poses. */
	private _children: Pose[] = [];


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** Gets the position of the Pose. */
	get position(): Position { return this._position; }

	/** Gets the orientation of the Pose. */
	get orientation(): Orientation { return this._orientation; }

	/** Gets the extensions of the Pose. */
	get extensions(): NodeSet<Extension> { return this._extensions; }

	/** Gets the parent of the Pose. */
	get parent(): Pose { return this._parent; }

	/** Gets the children of the Pose. */
	get children(): Pose[] { return this._children; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Pose class.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name: any, parentNode?: Node, params: any = {}) {

		// Call the parent constructor
		super(name, parentNode, params);

		// Analyze the initialization parameters
		if (params.type && params.type.indexOf("Geopose") == 0) {
			this._position = new GlobalPosition("position", this, {
				longitude: params.longitude,
				latitude: params.latitude,
				altitude: params.height
			});
		}

		// Create the child nodes
		this._extensions = new NodeSet<Extension>("extensions", this,
			params.extensions, Extension);
		this._entities = new NodeSet<Entity>("extensions", this, null, Entity);

		// Validate the position initialization parameters
		if (params.position) {
			let positionType;
			switch (params.position.type) {
				case "local": positionType = LocalPosition; break;
				case "global": positionType = GlobalPosition; break;
				case "orbital": positionType = OrbitalPosition; break;
				default: positionType = LocalPosition; break;
			}
			this._position = new positionType(
				"position", this, params.position);
		}

		// Validate the orientation initialization parameters
		if (params.orientation) {
			let orientationType;
			switch (params.orientation.type) {
				case "apa": case "aircraft": orientationType = APAOrientation; break;
				case "euler": orientationType = EulerOrientation; break;
				case "quaternion": orientationType = QuaternionOrientation; break;
				case "quaternion": orientationType = QuaternionOrientation; break;
				default: orientationType = LocalPosition; break;
			}
			this._orientation = new orientationType(
				"orientation", this, params.orientation);
		}
	}
}