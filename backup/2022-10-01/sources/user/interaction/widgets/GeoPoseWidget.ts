import { Item } from "../../../data/Item";
import { Type } from "../../../data/Type";
import { Widget } from "../Widget";
import { ShapeComponent } from "../components/ShapeComponent";

/** Defines a widget for a GeoPose. */
export class GeoPoseWidget extends Widget {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the Widget class. */
	public static type: Type = new Type("GeoPose-widget", GeoPoseWidget,
		Widget.type);


	// --------------------------------------------------------- PRIVATE FIELDS

	/** The marker of the widget. */
	private _marker: ShapeComponent;


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** The marker of the widget. */
	get marker(): ShapeComponent { return this._marker; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new PlanetWidget instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name?: string, parent?: Item, data?: any) {

		// Call the base class constructor
		super(name, parent);

		// Add the shape Component
		this._marker = new ShapeComponent("marker", this, data);
		this.components.add(this._marker);

		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}
}
