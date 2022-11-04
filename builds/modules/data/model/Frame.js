import { Item } from "../Item.js";
import { Type } from "../Type.js";
import { String } from "../items/Simple/String.js";

/** Defines a reference frame. */
export class Frame extends Item {



	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Frame class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		this._handedness = new String("handedness", this, { validValues: ["right", "left"], defaultValue: "right" });

		this._verticalAxis = new String("verticalAxis", this, { validValues: ["X", "Y", "Z"], defaultValue: "Z" });

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The handedness of the reference frame ("right" by default). */
	get handedness() { return this._handedness; }

	/** The vertical axis of the reference frame ("Z" by default). */
	get verticalAxis() { return this._verticalAxis; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Frame class. */
Frame.type = new Type("frame", Frame, Item.type);
