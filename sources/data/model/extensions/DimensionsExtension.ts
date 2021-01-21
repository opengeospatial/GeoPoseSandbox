import { Node } from "../../types/Node";
import { Extension } from "../Extension";
import { Distance } from "../../types/measures/Distance";


/** Defines an Extension to specify the 3D dimensions of a Pose. */
export class DimensionsExtension extends Extension {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The dimension in the X axis. */
	private _width : Distance;

	/** The dimension in the Y axis. */
	private _depth : Distance;

	/** The dimension in the Z axis. */
	private _height : Distance;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** Gets the dimension in the X axis. */
	get width() { return this._width; }

	/** Gets the dimension in the Y axis. */
	get depth() { return this._depth; }

	/** Gets the dimension in the Z axis. */
	get height() { return this._height; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR
	
	/** Initializes a new instance of the LocalPosition class.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name : any, parentNode?: Node, params?: number[]);
	constructor(name : any, parentNode?: Node, params?: object);
	constructor(name : any, parentNode?: Node, params: any = {}){ 

		// Call the parent constructor
		super (name, parentNode, params);

		// If the params is an array, convert it to an object
		if (Array.isArray(params)) {
			let v = params, l = v.length; 
			params = {
				width: (l > 0)? v[0]: 0,
				depth: (l > 1)? v[1]: 0,
				height: (l > 2)? v[2]: 0};
		}

		// Create the children nodes
		this._width = new Distance("width", this, params.x || 0);
		this._depth = new Distance("depth", this, params.depth || 0);
		this._height = new Distance("height", this, params.height || 0);
	}
}