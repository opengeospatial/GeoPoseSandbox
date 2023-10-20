import * as THREE from "../../../externals/three.module.js";
import { Entity } from "../Entity.js";

/** Defines a Shape entity. */
export class ShapeEntity extends Entity {

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new ShapeEntity instance.
	 * @param name The name of the entity.
	 * @param parentNode The parent entity. */
	constructor(name, parent, radius = 1) {

		// Call the base class constructor
		super(name, "shape", parent, new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.2, 64, 64), new THREE.MeshLambertMaterial({ color: 0xffff00 })));
	}
}
