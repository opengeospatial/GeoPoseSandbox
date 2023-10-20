import * as THREE from "../../../externals/three.module.js";
import { Entity } from "../Entity.js";

/** Defines a Camera. */
export class Camera extends Entity {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Camera instance.
	 * @param name The name of the entity.
	 * @param parent The parent entity. */
	constructor(name, parent, params = {}) {

		// Call the base class constructor
		super(name, "camera", parent),
			console.log("Created camera");

		params = params || new Object();
		this._fieldOfView = params.fieldOfView || 45;
		this._aspectRatio = params.aspectRatio || 1;
		this._nearPlane = params.nearPlane || 1;
		this._farPlane = params.farPlane || Number.MAX_SAFE_INTEGER;
		this._representation = new THREE.PerspectiveCamera(this._fieldOfView, this._aspectRatio, this._nearPlane, this._farPlane);
		this._representation.position.z = 3;

	}


	// ------------------------------------------------------- PUBLIC ACCESSORS


	/** The aspect ratio of the Camera. */
	get aspectRatio() { return this._aspectRatio; }
	set aspectRatio(value) {
		if (value < 0)
			throw Error("Invalid Aspect Ratio");
		this._aspectRatio = value;
	}


	/** Updates the camera.
	 * @param forced Indicates whether the update is forced or not.
	 * @param deltaTime The update time. */
	update(forced = false, deltaTime = 0) {

		// If the update is not forced, skip it when the node is already updated
		if (this.updated && !forced)
			return;

		// Call the base class
		super.update(forced, deltaTime);

		let camera = this._representation;
		camera.aspect = this._aspectRatio;
		camera.updateProjectionMatrix();

		// console.log("camera");
	}
}
