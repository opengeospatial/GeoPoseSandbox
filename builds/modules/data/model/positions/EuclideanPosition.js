import { Type } from "../../Type.js";
import { Position } from "../Position.js";
import { Distance } from "../../items/measures/Distance.js";


/** Defines a position in an euclidean coordinate system. */
export class EuclideanPosition extends Position {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the EuclideanPosition class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the children nodes
		this._x = new Distance("x", this);
		this._y = new Distance("y", this);
		this._z = new Distance("z", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The distance from the origin in the X axis. */
	get x() { return this._x; }

	/** The distance from the origin in the Y axis. */
	get y() { return this._y; }

	/** The distance from the origin in the Z axis. */
	get z() { return this._z; }

	/** Updates the Item instance.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		console.log("EuclideanPosition");
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the EuclideanPosition class. */
EuclideanPosition.type = new Type("euclidean-position", EuclideanPosition, Position.type);
