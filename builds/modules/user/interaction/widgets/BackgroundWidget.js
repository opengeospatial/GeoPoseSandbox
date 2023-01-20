import { Type } from "../../../data/Type.js";
import { BackgroundEntity } from "../../../logic/entities/BackgroundEntity.js";
import { Widget } from "../Widget.js";

/** Defines a widget for the background. */
export class BackgroundWidget extends Widget {



	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new PlanetWidget instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data = {}) {

		// Call the base class constructor
		super(name, parent, data);

		if (data.radius) {
			data.radiusX = data.radius;
			data.radiusY = data.radius;
			data.radiusZ = data.radius;
		}

		// Add the shape Component
		let mesh = new BackgroundEntity(name + "Mesh", this._entity, data);

		console.log(mesh);
		// = new ShapeEntity(this._name, this._parentEntity);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Widget class. */
BackgroundWidget.type = new Type("background-widget", BackgroundWidget, Widget.type);
