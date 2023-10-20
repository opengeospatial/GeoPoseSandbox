import { Widget } from "../Widget.js";
import { PlanetComponent } from "../components/PlanetComponent.js";

/** Defines a widget for a planet. */
export class PlanetWidget extends Widget {

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new PlanetWidget instance.
	 * @param name The name of the widget.
	 * @param parentNode The parent widget or space.
	 * @param params The initialization parameters. */
	constructor(name, parentNode, params = {}) {

		// Call the base class constructor
		super(name, "widget", parentNode, params);

		// Add the shape Component
		this._planet = new PlanetComponent("planet", this.components, params);
	}


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** The component of the widget. */
	get planet() { return this._planet; }
}
