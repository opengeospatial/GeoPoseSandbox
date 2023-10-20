import { Component } from "../Component.js";
import { TerrainEntity } from "../../../logic/entities/TerrainEntity.js";

/** Defines a Planet Interaction Component. */
export class PlanetComponent extends Component {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new PlanetComponent instance.
	 * @param name The name of the component.
	 * @param parentNode The parent component or widget.
	 * @param params The initialization parameters. */
	constructor(name, parent, params = {}) {

		// Call the base class constructor
		super(name, "shape", parent);

		// Create the terrain entity
		this._entity = this._terrain = new TerrainEntity(name, this._parentEntity, params);
	}

	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The shape of the component. */
	get shape() { return this._terrain.shape; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the ShapeComponent.
	* @param forced Indicates whether the update is forced or not.
	* @param deltaTime The update time. */
	update(forced = false, deltaTime = 0) {

		// Call the parent class update function
		super.update(forced, deltaTime);
	}
}
