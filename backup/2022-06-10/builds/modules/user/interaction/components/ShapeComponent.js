import { Component } from "../Component.js";
import { ShapeEntity } from "../../../logic/entities/ShapeEntity.js";

/** Defines a Shape Interaction Component. */
export class ShapeComponent extends Component {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new ShapeComponent instance.
	 * @param name The name of the component.
	 * @param parentNode The parent component or widget.
	 * @param params The initialization parameters. */
	constructor(name, parent, params = {}) {

		// Call the base class constructor
		super(name, "shape", parent);

		// Create the text entity
		this._entity = new ShapeEntity(name, this._parentEntity);

	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The shape of the component. */
	get shape() { return this._shape; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the ShapeComponent.
	* @param forced Indicates whether the update is forced or not.
	* @param deltaTime The update time. */
	update(forced = false, deltaTime = 0) {

		// Call the parent class update function
		super.update(forced, deltaTime);
	}
}
