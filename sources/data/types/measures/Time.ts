import { Node } from '../../Node'
import { Measure } from "../Measure";

/** Defines a time (dimensional magnitude) measure. */
export class Time extends Measure {

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Time class.
	 * @param name The name(s) of the node.
	 * @param parentNode The parent node.
	 * @param params The initialization parameters (or a numeric value). */
	constructor(name: any, parentNode?: Node, params: any = {}) {

		// If the params is a numeric value, encapsulate it in an object
		if (typeof params == "number") params = { value: params };
		else if (typeof params == "string")
			params = { value: parseFloat(params) };

		// Set the minimum value to 0 (no negative sizes allowed).
		params.min = 0;

		// Set the default unit to meters
		if (!params.units) params.units = "seconds";

		// Call the base constructor
		super(name, "time", parentNode, params);
	}
}