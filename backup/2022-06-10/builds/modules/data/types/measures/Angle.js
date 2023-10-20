import { Measure } from "../Measure.js";

/** Defines a angular measure. */
export class Angle extends Measure {

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Angle class.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a numeric value). */
	constructor(name, parentNode, params = {}) {

		// If the params is a numeric value, encapsulate it in an object
		if (typeof params == "number")
			params = { value: params };
		else if (typeof params == "string")
			params = { value: parseFloat(params) };

		// Set the default unit to degrees
		if (!params.units)
			params.units = "degrees";

		// Call the base constructor
		super(name, "angle", parentNode, params);
	}
}
