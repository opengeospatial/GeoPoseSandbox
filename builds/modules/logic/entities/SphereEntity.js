
import { Entity } from "../Entity.js";

/** Defines a Sphere entity. */
export class SphereEntity extends Entity {

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new SphereEntity instance.
	 * @param name The name of the entity.
	 * @param parentNode The parent entity. */
	constructor(name, parent = null, radius = 1) {

		// Call the base class constructor
		super(name, "sphere", parent, new THREE.Mesh(new THREE.SphereGeometry(radius, 64, 64), new THREE.MeshLambertMaterial({ color: 0xffff00 })));
	}
}
