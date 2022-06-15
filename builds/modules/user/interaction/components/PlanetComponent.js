import { Type } from "../../../data/Type.js";
import { Component } from "../Component.js";
import { TerrainEntity } from "../../../logic/entities/TerrainEntity.js";

/** Defines a planet component for a user interaction widget. */
export class PlanetComponent extends Component {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new PlanetComponent instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the terrain entity
		this._entity = this._terrain =
			new TerrainEntity(name, this._parentEntity, data);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}

	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The shape of the component. */
	get shape() { return this._terrain.shape; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Component class. */
PlanetComponent.type = new Type("planet-component", Component, Component.type);
