import { Node } from "../Node";
import { NodeSet } from "../NodeSet";
import { Pose } from "./Pose";
import { Frame } from "./Frame";
import { Extension } from "./Extension";
import { GeoFrame } from "./frames/GeoFrame";

/** Defines the GeoPose of an object. */
export class GeoPose extends Pose {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The frame of the GeoPose. */
	private _frame: GeoFrame;

	/** The extensions of the Pose. */
	private _extensions: NodeSet<Extension>;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The parent of the Pose. */
	get frame(): Frame { return this._frame; }

	/** The extensions of the Pose. */
	get extensions(): NodeSet<Extension> { return this._extensions; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Pose class.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name: any, parentNode?: Node, params: any = {}) {

		// Call the parent constructor
		super(name, "geopose", parentNode);

		// Create the child nodes
		this._frame = new GeoFrame("frame", this);
		this._extensions = new NodeSet<Extension>("extensions", this,
			params.extensions, Extension);

	}
}