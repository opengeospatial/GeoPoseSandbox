import { NodeSet } from "../NodeSet.js";
import { Pose } from "./Pose.js";
import { Extension } from "./Extension.js";
import { GeoFrame } from "./frames/GeoFrame.js";

/** Defines the GeoPose of an object. */
export class GeoPose extends Pose {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Pose class.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name, parentNode, params = {}) {

		// Call the parent constructor
		super(name, "geopose", parentNode);

		// Create the child nodes
		this._frame = new GeoFrame("frame", this);
		this._extensions = new NodeSet("extensions", this, params.extensions, Extension);

	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The parent of the Pose. */
	get frame() { return this._frame; }

	/** The extensions of the Pose. */
	get extensions() { return this._extensions; }
}
