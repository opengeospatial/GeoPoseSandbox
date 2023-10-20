import { Node } from "../../../data/Node";
import { Widget } from "../Widget";
import { PlanetComponent } from "../components/PlanetComponent";

/** Defines a widget for a planet. */
export class PlanetWidget extends Widget {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The component of the widget. */
	private _planet: PlanetComponent;


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** The component of the widget. */
	get planet(): PlanetComponent { return this._planet; }

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new PlanetWidget instance.
	 * @param name The name of the widget.
	 * @param parentNode The parent widget or space.
	 * @param params The initialization parameters. */
	 constructor(name: string, parentNode?: Node, params: any = {}) {
		
		// Call the base class constructor
		super(name, "widget", parentNode, params);

		// Add the shape Component
		this._planet = new PlanetComponent("planet", this.components, params);
	}
}