import { Position } from "../Position.js";
import { Distance } from "../../types/measures/Distance.js";


/** Defines a position in Orbital (Keplerian) coordinate system. */
export class OrbitalPosition extends Position {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the OrbitalPosition class.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name, parentNode, params = {}) {

		// Call the parent constructor
		super(name, parentNode, params);

		// If the params is an array, convert it to an object
		if (Array.isArray(params)) {
			let v = params, l = v.length;
			params = {};
		}

		// Create the children nodes
		this._eccentricity = new Distance("eccentricity", this, params.eccentricity || 1);
		this._semimajor_axis = new Distance("semimajor_axis", this, params.semimajor_axis || 0);
		this._inclination = new Distance("inclination", this, params.semimajor_axis || 0);

		// TODO Complete this
		this.relativeValues.x.setValue(-this._semimajor_axis.value / 2);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The eccentricity of the orbit. */
	get eccentricity() { return this._eccentricity; }
}