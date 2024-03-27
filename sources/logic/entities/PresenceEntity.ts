import * as THREE from "three"
import { Item } from "../../data/Item.js";
import { Type } from "../../data/Type.js";
import { Entity } from "../Entity.js";
import { Number } from "../../data/types/simple/Number.js";


/** Defines a user Presence entity. */
export class PresenceEntity extends Entity {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the PresenceEntity class. */
	public static type: Type = new Type("presence-entity", PresenceEntity,
		Entity.type);


	// --------------------------------------------------------- PRIVATE FIELDS

	/** The field of view of the Camera. */
	private _fieldOfView : Number;

	/** The aspect ratio of the Camera. */
	private _aspectRatio : Number;

	/** The near plane of the Camera frustum. */
	private _nearPlane: Number;

	/** The far plane of the Camera frustum. */
	private _farPlane : Number;

	private _light: THREE.DirectionalLight;

	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The field of view of the Camera. */
	get fieldOfView(): Number { return this._fieldOfView; }

	/** The aspect ratio of the Camera. */
	get aspectRatio(): Number { return this._aspectRatio; }

	/** The near plane of the Camera frustum. */
	get nearPlane(): Number { return this._nearPlane; }

	/** The far plane of the Camera frustum. */
	get farPlane(): Number { return this._farPlane; }

	
	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new PresenceEntity instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name?: string, parent?: Item, data: any = {}) {

		// Call the parent class constructor
		super(name, parent);

		// Create the child items
		this._fieldOfView = new Number("fov", this, {defaultValue: 45});
		this._aspectRatio = new Number("aspect", this, {defaultValue: 1});
		this._nearPlane = new Number("near", this, {defaultValue: 0.001});
		this._farPlane = new Number("far", this, {defaultValue: 100000000});

		// Deserialize the initialization data
		if (data !== undefined) this.deserialize(data);

		// Create the representation
		this._representation = new THREE.PerspectiveCamera(
			this._fieldOfView.value, this._aspectRatio.value,
			this._nearPlane.value, this._farPlane.value);

	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the Entity.
	 * @param deltaTime The update time. 
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime: number = 0, forced: boolean = false) {

		// If the update is not forced, skip it when the item is already updated
		if (this.updated && !forced) return;

		// Update the properties of the camera
		let camera = this._representation as THREE.PerspectiveCamera;
		let updateMatrix = false;

		if (!this._fieldOfView.updated) {
			camera.fov = this._fieldOfView.value; updateMatrix = true;
		}
		if (!this._aspectRatio.updated) {
			camera.aspect = this._aspectRatio.value; updateMatrix = true;
		}
		if (!this._nearPlane.updated) {
			camera.near = this._nearPlane.value; updateMatrix = true;
		}
		if (!this._farPlane.updated) { 
			camera.far = this._farPlane.value; updateMatrix = true;
		}

		// Update the projection matrix, if required
		if (updateMatrix) camera.updateProjectionMatrix();

		// Call the base class function
		super.update(deltaTime, forced);
	}
}