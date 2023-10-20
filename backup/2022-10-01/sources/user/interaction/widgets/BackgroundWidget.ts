import { Item } from "../../../data/Item";
import { Type } from "../../../data/Type";
import { Widget } from "../Widget";
import { BackgroundComponent } from "../components/BackgroundComponent";

/** Defines a widget for the background. */
export class BackgroundWidget extends Widget {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the Widget class. */
	public static type: Type = new Type("background-widget", BackgroundWidget, 
		Widget.type);



	// --------------------------------------------------------- PRIVATE FIELDS

	/** The component of the widget. */
	private _background: BackgroundComponent;


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** The component of the widget. */
	get background(): BackgroundComponent { return this._background; }
	

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new PlanetWidget instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name?: string, parent?: Item, data?: any) { 
		
		// Call the base class constructor
		super(name, parent);

		// Add the shape Component
		this._background = new BackgroundComponent("planet", this, data);
		this.components.add(this.background);
		
		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}
}