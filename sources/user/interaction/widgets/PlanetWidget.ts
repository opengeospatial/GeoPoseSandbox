import { Item } from "../../../data/Item";
import { Type } from "../../../data/Type";
import { Widget } from "../Widget";
import { PlanetComponent } from "../components/PlanetComponent";

/** Defines a widget for a planet. */
export class PlanetWidget extends Widget {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the GeoPoseWidget class. */
	public static type: Type = new Type("planet-widget", PlanetWidget, 
		Widget.type);


	// --------------------------------------------------------- PRIVATE FIELDS

	/** The component of the widget. */
	private _planet: PlanetComponent;


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** The component of the widget. */
	get planet(): PlanetComponent { return this._planet; }
	

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new PlanetWidget instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name?: string, parent?: Item, data?: any) { 
		
		// Call the base class constructor
		super(name, parent);

		// Add the shape Component
		this._planet = new PlanetComponent("planet", this, data);
		this.components.add(this.planet);
		
		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}
}