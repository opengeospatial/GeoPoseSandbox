import * as THREE from "three";
import { Type } from "../../data/Type.js";
import { Entity } from "../Entity.js";


/** Defines a Shape entity. */
export class ShapeEntity extends Entity {

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new ShapeEntity instance.
	 * @param name The name of the entity.
	 * @param parentNode The parent entity. */
	constructor(name, parent, radius = 1) {

		// Call the base class constructor
		super(name, parent);

		// Create a cone
		this.representation.add(new THREE.Mesh(new THREE.ConeGeometry(100000, 100000, 64, 64), new THREE.MeshLambertMaterial({ color: 0xffff00 })));

	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the ShapeEntity class. */
ShapeEntity.type = new Type("shape-entity", ShapeEntity, Entity.type);
//# sourceMappingURL=ShapeEntity.js.map