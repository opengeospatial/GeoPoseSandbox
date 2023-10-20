import { Component } from "../Component";
import { Node } from "../../../data/Node";
import { TerrainEntity } from "../../../logic/entities/TerrainEntity";
import { Ellipsoid } from "../../../data/types/shapes/Ellipsoid";

/** Defines a Planet Interaction Component. */
export class PlanetComponent extends Component {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The shape of the component. */
	private _terrain: TerrainEntity;

	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The shape of the component. */
	get shape (): Ellipsoid { return this._terrain.shape; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new PlanetComponent instance.
	 * @param name The name of the component. 
	 * @param parentNode The parent component or widget.
	 * @param params The initialization parameters. */
	 constructor(name: string, parent?: Node, params: any = {}) {

		// Call the base class constructor
		super(name, "shape", parent);

		// Create the terrain entity
		this._entity = this._terrain = new TerrainEntity(
			name, this._parentEntity, params);
	}

	
	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the ShapeComponent.
	* @param forced Indicates whether the update is forced or not.
	* @param deltaTime The update time. */
	update(forced:boolean = false, deltaTime: number = 0) {

		// Call the parent class update function
		super.update(forced, deltaTime);
	}
}