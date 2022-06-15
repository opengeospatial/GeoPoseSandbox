import { Component } from "../Component.js";
import { ShapeEntity } from "../../../logic/entities/ShapeEntity.js";

/** Defines a shape component for a user interaction widget. */
export class ShapeComponent extends Component {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new ShapeComponent instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the main entity
		this._entity = new ShapeEntity(this._name, this._parentEntity);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The shape of the component. */
	get shape() { return this._shape; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the ShapeComponent instance.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		// If the update is not forced, skip it when the item is already updated
		if (this._updated && !forced)
			return;

		// Call the parent class update function
		super.update(deltaTime, forced);
	}
}
