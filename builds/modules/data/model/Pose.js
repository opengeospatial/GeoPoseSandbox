import { Node } from "../Node.js";
import { NodeSet } from "../NodeSet.js";
import { Extension } from "./Extension.js";
import { LocalPosition } from "./positions/LocalPosition.js";
import { GlobalPosition } from "./positions/GlobalPosition.js";
import { OrbitalPosition } from "./positions/OrbitalPosition.js";
import { APAOrientation } from "./orientations/APAOrientation.js";
import { QuaternionOrientation } from "./orientations/QuaternionOrientation.js";
import { EulerOrientation } from "./orientations/EulerOrientation.js";

/** Defines a Pose of an object. */
export class Pose extends Node {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Pose class.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name, parentNode, params = {}) {

		// Call the parent constructor
		super(name, "pose", parentNode, params);

		/** The children Poses. */
		this._children = [];

		// Analyze the initialization parameters
		if (params.type && params.type.indexOf("Geopose") == 0) {
			this._position = new GlobalPosition("position", this, {
				longitude: params.longitude,
				latitude: params.latitude,
				altitude: params.height
			});
		}

		// Create the child nodes
		this._extensions = new NodeSet("extensions", this, params.extensions, Extension);

		// Validate the position initialization parameters
		if (params.position) {
			let positionType;
			switch (params.position.type) {
				case "local":
					positionType = LocalPosition;
					break;
				case "global":
					positionType = GlobalPosition;
					break;
				case "orbital":
					positionType = OrbitalPosition;
					break;
				default:
					positionType = LocalPosition;
					break;
			}
			this._position = new positionType("position", this, params.position);
		}

		// Validate the orientation initialization parameters
		if (params.orientation) {
			let orientationType;
			switch (params.orientation.type) {
				case "apa":
				case "aircraft":
					orientationType = APAOrientation;
					break;
				case "euler":
					orientationType = EulerOrientation;
					break;
				case "quaternion":
					orientationType = QuaternionOrientation;
					break;
				case "quaternion":
					orientationType = QuaternionOrientation;
					break;
				default:
					orientationType = LocalPosition;
					break;
			}
			this._orientation = new orientationType("orientation", this, params.orientation);
		}
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The position of the Pose. */
	get position() { return this._position; }

	/** The orientation of the Pose. */
	get orientation() { return this._orientation; }

	/** The extensions of the Pose. */
	get extensions() { return this._extensions; }

	/** The parent of the Pose. */
	get parent() { return this._parent; }

	/** The children of the Pose. */
	get children() { return this._children; }
}
