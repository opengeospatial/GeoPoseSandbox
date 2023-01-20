import { Item } from "../../../data/Item";
import { Type } from "../../../data/Type";
import { BackgroundEntity } from "../../../logic/entities/BackgroundEntity";
import { ShapeEntity } from "../../../logic/entities/ShapeEntity";
import { Widget } from "../Widget";

/** Defines a widget for the background. */
export class BackgroundWidget extends Widget {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the Widget class. */
	public static type: Type = new Type("background-widget", BackgroundWidget, 
		Widget.type);



	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new PlanetWidget instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name?: string, parent?: Item, data: any = {}) { 
		
		// Call the base class constructor
		super(name, parent, data);

		if (data.radius) {
			data.radiusX = data.radius; 
			data.radiusY = data.radius; 
			data.radiusZ = data.radius; 
		}
		
		// Add the shape Component
		let mesh = new BackgroundEntity(name + "Mesh", this._entity, data);

		console.log(mesh)
		// = new ShapeEntity(this._name, this._parentEntity);

		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}
}