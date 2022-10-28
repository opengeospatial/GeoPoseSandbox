import * as THREE from "../../../externals/three.module.js";
import { Type } from "../../data/Type.js";
import { Entity } from "../Entity.js";
import { Number } from "../../data/items/simple/Number.js";

/** Defines a user Presence entity. */
export class PresenceEntity extends Entity {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new PresenceEntity instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent);

		// Create the child items
		this._fieldOfView = new Number("fov", this, { defaultValue: 45 });
		this._aspectRatio = new Number("aspect", this, { defaultValue: 1 });
		this._nearPlane = new Number("near", this, { defaultValue: 0.001 });
		this._farPlane = new Number("far", this, { defaultValue: 100000000 });

		// Deserialize the initialization data
		if (data !== undefined)
			this.deserialize(data);

		// Create the representation
		this._representation = new THREE.PerspectiveCamera(this._fieldOfView.value, this._aspectRatio.value, this._nearPlane.value, this._farPlane.value);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The field of view of the Camera. */
	get fieldOfView() { return this._fieldOfView; }

	/** The aspect ratio of the Camera. */
	get aspectRatio() { return this._aspectRatio; }

	/** The near plane of the Camera frustum. */
	get nearPlane() { return this._nearPlane; }

	/** The far plane of the Camera frustum. */
	get farPlane() { return this._farPlane; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the Entity.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		// Show a message on console
		console.log("Updated PresenceEntity");

		// If the update is not forced, skip it when the item is already updated
		if (this.updated && !forced)
			return;

		// Update the properties of the camera
		let camera = this._representation;
		let updateMatrix = false;

		if (!this._fieldOfView.updated) {
			camera.fov = this._fieldOfView.value;
			updateMatrix = true;
		}
		if (!this._aspectRatio.updated) {
			camera.aspect = this._aspectRatio.value;
			updateMatrix = true;
		}
		if (!this._nearPlane.updated) {
			camera.near = this._nearPlane.value;
			updateMatrix = true;
		}
		if (!this._farPlane.updated) {
			camera.far = this._farPlane.value;
			updateMatrix = true;
		}

		// Update the projection matrix, if required
		if (updateMatrix)
			camera.updateProjectionMatrix();


		// Call the base class function
		super.update(deltaTime, forced);

		// TEMPORAL
		// if (camera.position.z == 0) {
		// console.log("REPOSITIONED CAMERA");
		// camera.position.z = 100000000;
		camera.lookAt(0, 0, 0);
		// }

	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the PresenceEntity class. */
PresenceEntity.type = new Type("presence-entity", PresenceEntity, Entity.type);
