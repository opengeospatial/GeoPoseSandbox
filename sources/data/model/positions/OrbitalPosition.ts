import { Node } from "../../Node";
import { Position } from "../Position";
import { Measure } from "../../types/Measure";
import { Distance } from "../../types/measures/Distance";
import { Angle } from "../../types/measures/Angle";


/** Defines a position in Orbital (Keplerian) coordinate system. */
export class OrbitalPosition extends Position {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The eccentricity of the orbit (the amount by which its orbit around 
	 * another body deviates from a perfect circle). */
	private _eccentricity: Measure;

	/** The periapsis of the orbit. */
	private _semimajor_axis: Distance;

	/** The vertical tilt of the ellipse with respect to the reference plane. */
	private _inclination: Angle;

	/** The longitude of the ascending node. */
	private _longitude: Angle;

	/** The period of the orbit. */
	private _period: Distance;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The eccentricity of the orbit. */
	get eccentricity() { return this._eccentricity; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the OrbitalPosition class.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name: any, parentNode?: Node, params: any = {}) {

		// Call the parent constructor
		super(name, parentNode, params);

		// If the params is an array, convert it to an object
		if (Array.isArray(params)) {
			let v = params, l = v.length;
			params = {};
		}

		// Create the children nodes
		this._eccentricity = new Distance("eccentricity", this,
			params.eccentricity || 1);
		this._semimajor_axis = new Distance("semimajor_axis", this,
			params.semimajor_axis || 0);
		this._inclination = new Distance("inclination", this,
			params.semimajor_axis || 0);

		// TODO Complete this
		this.relativeValues.x.setValue(-this._semimajor_axis.value / 2);
	}
}