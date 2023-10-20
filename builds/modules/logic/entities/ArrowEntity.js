import * as THREE from "../../../externals/three.module.js";
import { Type } from "../../data/Type.js";
import { Entity } from "../Entity.js";


/** Defines a Arrow entity. */
export class ArrowEntity extends Entity {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new ArrowEntity instance.
	 * @param name The name of the entity.
	 * @param parent The parent entity. */
	constructor(name, parent) {

		// Call the base class constructor
		super(name, parent);

		// Create the elements
		let radius = 100000, length = 500000;
		let material = new THREE.MeshLambertMaterial({ color: 0xffff00 });
		let center = new THREE.Mesh(new THREE.SphereGeometry(radius, 16, 16), material);
		let body = new THREE.Mesh(new THREE.CylinderGeometry(radius / 2, radius / 2, length), material);
		let point = new THREE.Mesh(new THREE.ConeGeometry(radius, radius * 2, 16, 16), material);
		body.position.x = length / 2;
		body.rotateZ(-Math.PI / 2);
		point.position.x = length;
		point.rotateZ(-Math.PI / 2);
		this._representation.renderOrder = 1000;

		// Add the entity
		this._representation.add(center, body, point);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the ShapeEntity class. */
ArrowEntity.type = new Type("arrow-entity", ArrowEntity, Entity.type);
