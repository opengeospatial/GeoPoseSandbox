import { Type } from "../../../data/Type.js";
import { Widget } from "../Widget.js";
import { TerrainEntity } from "../../../logic/entities/TerrainEntity.js";
import { AtmosphereEntity } from "../../../logic/entities/AtmosphereEntity.js";
import { GraticuleEntity } from "../../../logic/entities/GraticuleEntity.js";

/** Defines a widget for a planet. */
export class PlanetWidget extends Widget {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** The component of the widget. */
	get terrain() { return this._terrain; }

	/** The atmosphere of the planet. */
	get atmosphere() { return this._atmosphere; }

	/** The graticule of the planet. */
	get graticule() { return this._graticule; }

	/** The geographic frame of the planet. */
	get frame() { return this._frame; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new PlanetWidget instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data = {}) {

		// Call the base class constructor
		super(name, parent, data);

		// Create a link with the GeoFrame
		this._frame = data.frame;
		data.radiusX = this._frame.equatorialRadius.value;
		data.radiusY = this._frame.polarRadius.value;
		data.radiusZ = this._frame.equatorialRadius.value;
		this.frame.links.add(this);

		// Add the shape Component
		this._terrain = new TerrainEntity(name + "Terrain", this._entity, data);
		if (data.atmosphere)
			this._atmosphere = new AtmosphereEntity(name + "Atmosphere", this._entity, data);
		if (data.graticule)
			this._graticule = new GraticuleEntity(name + "Graticule", this._entity, data);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the PlanetWidget instance.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		// If the update is not forced, skip it when the item is already updated
		if (this.updated && !forced)
			return;

		// Update the properties of the camera
		if (!this._frame.updated) {
			this._frame.update();
			let radiusX = this._frame.equatorialRadius.value, radiusY = this._frame.polarRadius.value, radiusZ = this._frame.equatorialRadius.value;

			this._terrain.ellipsoid.radiusX.value = radiusX;
			this._terrain.ellipsoid.radiusY.value = radiusY;
			this._terrain.ellipsoid.radiusZ.value = radiusZ;

			if (this._atmosphere) {
				this._atmosphere.ellipsoid.radiusX.value = radiusX;
				this._atmosphere.ellipsoid.radiusY.value = radiusY;
				this._atmosphere.ellipsoid.radiusZ.value = radiusZ;
			}

			if (this._graticule) {
				this._graticule.ellipsoid.radiusX.value = radiusX;
				this._graticule.ellipsoid.radiusY.value = radiusY;
				this._graticule.ellipsoid.radiusZ.value = radiusZ;
			}
		}

		// Show a message on console
		// console.log("Updated: " + this.name);

		// Call the base class function
		super.update(deltaTime, forced);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Widget class. */
PlanetWidget.type = new Type("planet-widget", PlanetWidget, Widget.type);
//# sourceMappingURL=PlanetWidget.js.map