import { Extension } from "../Extension.js";
import { Size } from "../../types/measures/Size.js";


/** Defines an Extension to specify the 3D dimensions of a Pose. */
export class DimensionsExtension extends Extension {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the LocalPosition class.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name, parentNode, params = {}) {

		// Call the parent constructor
		super(name, parentNode, params);

		// If the params is an array, convert it to an object
		if (Array.isArray(params)) {
			params = {
				width: (params.length > 0) ? params[0] : 0,
				depth: (params.length > 1) ? params[1] : 0,
				height: (params.length > 2) ? params[2] : 0
			};
		}

		// Create the children nodes
		this._width = new Size("width", this, params.x || 0);
		this._depth = new Size("depth", this, params.depth || 0);
		this._height = new Size("height", this, params.height || 0);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** Gets the Size in the X axis. */
	get width() { return this._width; }

	/** Gets the Size in the Y axis. */
	get depth() { return this._depth; }

	/** Gets the Size in the Z axis. */
	get height() { return this._height; }
}
