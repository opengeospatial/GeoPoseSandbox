import { Component } from "../Component.js";


/** Defines a Camera Interaction Component. */
export class CameraComponent extends Component {

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new CameraComponent instance.
	 * @param name The name of the component.
	 * @param parentNode The parent component or widget.
	 * @param params The initialization parameters. */
	constructor(name, parent, params = {}) {

		// Call the base class constructor
		super(name, "camera", parent);

		// Create the text entity
		// this._entity = new TextEntity(name, this._parentEntity, "TESTING");

	}


	// --------------------------------------------------------- PUBLIC METHODS

	/* Updates the CameraComponent.
	* @param forced Indicates whether the update is forced or not.
	* @param deltaTime The update time. */
	update(forced = false, deltaTime = 0) {

		// Call the parent class update function
		super.update(forced, deltaTime);

		let space = this.parentNode;
		while (space.type != "space")
			space = space.parentNode;
		let camera = space.presences.getIndex(0).camera;

		camera.pose.orientation;

		// Update the associated entity
		// this._entity.update(forced, deltaTime);
		// console.log("Component Updated");
	}
}
