import { Type } from "../../../data/Type.js";
import { Widget } from "../Widget.js";
import { TerrainEntity } from "../../../logic/entities/TerrainEntity.js";
import { AtmosphereEntity } from "../../../logic/entities/AtmosphereEntity.js";
import { GraticuleEntity } from "../../../logic/entities/GraticuleEntity.js";

/** Defines a widget for a planet. */
export class PlanetWidget extends Widget {

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** The component of the widget. */
	// get planet(): PlanetComponent { return this._planet; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new PlanetWidget instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Add the shape Component
		this._terrain = new TerrainEntity(name + "Terrain", this._entity, data);
		this._atmosphere = new AtmosphereEntity(name + "Atmosphere", this._entity, data);
		this._graticule = new GraticuleEntity(name + "Graticule", this._entity, data);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Widget class. */
PlanetWidget.type = new Type("planet-widget", PlanetWidget, Widget.type);
