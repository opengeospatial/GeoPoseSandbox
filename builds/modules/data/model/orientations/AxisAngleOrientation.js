import { Type } from "../../Type.js";
import { Orientation } from "../Orientation.js";
import { Angle } from "../../items/measures/Angle.js";
import { Vector } from "../../items/complex/Vector.js";


/** Defines an orientation based on an axis vector and an angle. */
export class AxisAngleOrientation extends Orientation {


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The axis vector. */
	get axis() { return this._axis; }

	/** The angle around the axis. */
	get angle() { return this._angle; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the AxisAngleOrientation class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent, data);

		// Create the child items
		this._axis = new Vector("axis", this, data);
		this._angle = new Angle("angle", this, data);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the AxisAngleOrientation class. */
AxisAngleOrientation.type = new Type("axis-angle-orientation", AxisAngleOrientation, Orientation.type);
