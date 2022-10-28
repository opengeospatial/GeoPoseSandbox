import { Item } from "../../../data/Item";
import { Type } from "../../../data/Type";
import { Widget } from "../Widget";
import { TerrainEntity } from "../../../logic/entities/TerrainEntity";
import { AtmosphereEntity } from "../../../logic/entities/AtmosphereEntity";
import { GraticuleEntity } from "../../../logic/entities/GraticuleEntity";

/** Defines a widget for a planet. */
export class PlanetWidget extends Widget {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the Widget class. */
	public static type: Type = new Type("planet-widget",
		PlanetWidget, Widget.type);


	// --------------------------------------------------------- PRIVATE FIELDS

	/** The component of the widget. */
	// private _planet: PlanetComponent;

	private _terrain: TerrainEntity;
	
	private _atmosphere: AtmosphereEntity;

	private _graticule: GraticuleEntity;

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** The component of the widget. */
	// get planet(): PlanetComponent { return this._planet; }
	

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new PlanetWidget instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name?: string, parent?: Item, data?: any) { 
		
		// Call the base class constructor
		super(name, parent);

		// Add the shape Component
		this._terrain = new TerrainEntity(name + "Terrain", this._entity, data);
		this._atmosphere = new AtmosphereEntity(name + "Atmosphere", this._entity , data);
		this._graticule = new GraticuleEntity(name + "Graticule", this._entity , data);
		
		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}
}