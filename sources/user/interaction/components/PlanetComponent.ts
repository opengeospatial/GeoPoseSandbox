import { Item } from "../../../data/Item";
import { Type } from "../../../data/Type";
import { Component } from "../Component";
import { TerrainEntity } from "../../../logic/entities/TerrainEntity";
import { Ellipsoid } from "../../../data/items/shapes/Ellipsoid";

/** Defines a planet component for a user interaction widget. */
export class PlanetComponent extends Component {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the Component class. */
	public static type: Type = new Type("planet-component", Component, Component.type);


	// --------------------------------------------------------- PRIVATE FIELDS

	/** The shape of the component. */
	private _terrain: TerrainEntity;

	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The shape of the component. */
	get shape (): Ellipsoid { return this._terrain.shape; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new PlanetComponent instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	 constructor(name?: string, parent?: Item, data?: any) { 
		
		// Call the base class constructor
		super(name, parent);

		// Create the terrain entity
		this._entity = this._terrain = 
			new TerrainEntity(name, this._parentEntity, data);

		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}
}