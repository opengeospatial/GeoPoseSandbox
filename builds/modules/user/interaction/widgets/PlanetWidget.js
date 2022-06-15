import { Type } from "../../../data/Type.js";
import { Widget } from "../Widget.js";
import { PlanetComponent } from "../components/PlanetComponent.js";

/** Defines a widget for a planet. */
export class PlanetWidget extends Widget {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new PlanetWidget instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Add the shape Component
		this._planet = new PlanetComponent("planet", this, data);
		this.components.add(this.planet);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** The component of the widget. */
	get planet() { return this._planet; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the GeoPoseWidget class. */
PlanetWidget.type = new Type("planet-widget", PlanetWidget, Widget.type);
