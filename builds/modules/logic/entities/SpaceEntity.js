import * as THREE from "three";
import { Type } from "../../data/Type.js";
import { Entity } from "../Entity.js";


/** Defines a Space entity. */
export class SpaceEntity extends Entity {

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new SpaceEntity instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data = {}) {

		// Call the base class constructor
		super(name, parent, new THREE.Scene());

		// Deserialize the initialization data
		if (data)
			this.deserialize(data);

		// Set the lights
		this._representation.add(new THREE.AmbientLight(0x888888, 0.5));
		this.light = new THREE.DirectionalLight(0xffffff);
		this.light.position.z = 30000;
		this._representation.add(this.light);

		// DEBUG
		// this._representation.add(new THREE.Mesh(
		// 	new THREE.SphereGeometry(100000,64,64),
		// 	new THREE.MeshPhongMaterial({color: 0x00ff00})));

	}



	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the Entity.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		// Call the base class function
		super.update(deltaTime, forced);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the SpaceEntity class. */
SpaceEntity.type = new Type("space-entity", SpaceEntity, Entity.type);

//# sourceMappingURL=SpaceEntity.js.map