import { Item } from "../../../data/Item";
import { Type } from "../../../data/Type";
import { Component } from "../Component";
import { TerrainEntity } from "../../../logic/entities/TerrainEntity";
import { Ellipsoid } from "../../../data/items/shapes/Ellipsoid";
import { AtmosphereEntity } from "../../../logic/entities/AtmosphereEntity";
import { GraticuleEntity } from "../../../logic/entities/GraticuleEntity";

/** Defines a planet component for a user interaction widget. */
export class PlanetComponent extends Component {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the Component class. */
	public static type: Type = new Type("planet-component", 
		PlanetComponent, Component.type);


	// --------------------------------------------------------- PRIVATE FIELDS

	/** The shape of the component. */
	private _terrain: TerrainEntity;
	
	private _atmosphere: AtmosphereEntity;

	private _graticule: GraticuleEntity;



	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new PlanetComponent instance.
	 * @param name The name of the data item.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	 constructor(name?: string, parent?: Item, data?: any) { 
		
		// Call the base class constructor
		super(name, parent);

		// Create the terrain entities
		this._entity = this._terrain = 
			new TerrainEntity(name, this._parentEntity, data);
		this._atmosphere = new AtmosphereEntity(name, this._entity , data);
		this._graticule = new GraticuleEntity(name, this._entity , data);

		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}
}