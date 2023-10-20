import { Item } from "../../../data/Item.js";
import { Type } from "../../../data/Type.js";
import { Widget } from "../Widget.js";
import { TerrainEntity } from "../../../logic/entities/TerrainEntity.js";
import { AtmosphereEntity } from "../../../logic/entities/AtmosphereEntity.js";
import { GraticuleEntity } from "../../../logic/entities/GraticuleEntity.js";
import { GeoFrame } from "../../../data/model/frames/GeoFrame.js";

/** Defines a widget for a planet. */
export class PlanetWidget extends Widget {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the Widget class. */
	public static type: Type = new Type("planet-widget",
		PlanetWidget, Widget.type);


	// --------------------------------------------------------- PRIVATE FIELDS

	/** The terrain of the planet. */
	private _terrain: TerrainEntity;
	
	/** The atmosphere of the planet. */
	private _atmosphere: AtmosphereEntity;

	/** The graticule of the planet. */
	private _graticule: GraticuleEntity;

	/** The geographic frame of the planet. */
	private _frame: GeoFrame;


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** The component of the widget. */
	get terrain(): TerrainEntity { return this._terrain; }

	/** The atmosphere of the planet. */
	get atmosphere(): AtmosphereEntity { return this._atmosphere; }

	/** The graticule of the planet. */
	get graticule(): GraticuleEntity { return this._graticule; }

	/** The geographic frame of the planet. */
	get frame(): GeoFrame { return this._frame; }
	

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new PlanetWidget instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name?: string, parent?: Item, data: any = {}) { 
		
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
		this._atmosphere = new AtmosphereEntity(name + "Atmosphere", this._entity , data);
		this._graticule = new GraticuleEntity(name + "Graticule", this._entity, data);

		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the PlanetWidget instance.
	 * @param deltaTime The update time. 
	 * @param forced Indicates whether the update is forced or not. */
	 update(deltaTime: number = 0, forced: boolean = false) {

		// If the update is not forced, skip it when the item is already updated
		if (this.updated && !forced) return;

		// Update the properties of the camera
		if (!this._frame.updated) {
			this._frame.update();
			let radiusX = this._frame.equatorialRadius.value,
				radiusY = this._frame.polarRadius.value,
				radiusZ = this._frame.equatorialRadius.value;
			
			this._terrain.ellipsoid.radiusX.value = radiusX;
			this._terrain.ellipsoid.radiusY.value = radiusY;
			this._terrain.ellipsoid.radiusZ.value = radiusZ;

			this._atmosphere.ellipsoid.radiusX.value = radiusX;
			this._atmosphere.ellipsoid.radiusY.value = radiusY;
			this._atmosphere.ellipsoid.radiusZ.value = radiusZ;

			this._graticule.ellipsoid.radiusX.value = radiusX;
			this._graticule.ellipsoid.radiusY.value = radiusY;
			this._graticule.ellipsoid.radiusZ.value = radiusZ;
		}

		// Show a message on console
		// console.log("Updated: " + this.name);

		// Call the base class function
		super.update(deltaTime, forced);
	}
}