import { Node } from "../Node";
import { NodeSet } from "../NodeSet";
import { Location } from "./Location";
import { Orientation } from "./Orientation";
import { Extension } from "./Extension";
import { EuclideanLocation } from "./locations/EuclideanLocation";
import { GlobalLocation } from "./locations/GlobalLocation";
import { OrbitalLocation } from "./locations/OrbitalLocation";
import { LookAtOrientation } from "./orientations/LookAtOrientation";
import { APAOrientation } from "./orientations/APAOrientation";
import { QuaternionOrientation } from "./orientations/QuaternionOrientation";
import { EulerOrientation } from "./orientations/EulerOrientation";

/** Defines a Pose of an object. */
export class Pose extends Node {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The location of the Pose. */
	private _location: Location;

	/** The orientation of the Pose. */
	private _orientation: Orientation;

	/** The extensions of the Pose. */
	private _extensions: NodeSet<Extension>;

	/** The parent Pose. */
	private _parent: Pose;

	/** The children Poses. */
	private _children: Pose[] = [];


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The location of the Pose. */
	get location(): Location { return this._location; }

	/** The orientation of the Pose. */
	get orientation(): Orientation { return this._orientation; }

	/** The extensions of the Pose. */
	get extensions(): NodeSet<Extension> { return this._extensions; }

	/** The parent of the Pose. */
	get parent(): Pose { return this._parent; }

	/** The children of the Pose. */
	get children(): Pose[] { return this._children; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Pose class.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name: any, parentNode?: Node, params: any = {}) {

		// Call the parent constructor
		super(name, "pose", parentNode, params);

		// Analyze the initialization parameters
		if (params.type && params.type.indexOf("Geopose") == 0) {
			this._location = new GlobalLocation("location", this, {
				longitude: params.longitude,
				latitude: params.latitude,
				altitude: params.height
			});
		}

		// Create the child nodes
		this._extensions = new NodeSet<Extension>("extensions", this,
			params.extensions, Extension);

		// Validate the location initialization parameters
		if (params.location) {
			let locationType;
			switch (params.location.type) {
				case "euclidean": locationType = EuclideanLocation; break;
				case "global": locationType = GlobalLocation; break;
				case "orbital": locationType = OrbitalLocation; break;
				default: locationType = EuclideanLocation; break;
			}
			this._location = new locationType(
				"location", this, params.location);
		}

		// Validate the orientation initialization parameters
		if (params.orientation) {
			let orientationType;
			switch (params.orientation.type) {
				case "apa": case "aircraft": orientationType = APAOrientation; break;
				case "euler": orientationType = EulerOrientation; break;
				case "quaternion": orientationType = QuaternionOrientation; break;
				case "lookat": orientationType = LookAtOrientation; break;
				default: orientationType = EuclideanLocation; break;
			}
			this._orientation = new orientationType(
				"orientation", this, params.orientation);
		}
	}
}