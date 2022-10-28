import * as THREE from "three"
import { GridHelper } from "three";
import { Item } from "../../data/Item";
import { Type } from "../../data/Type";
import { Entity } from "../Entity";

/** Defines a Arrow entity. */
export class ArrowEntity extends Entity {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the ShapeEntity class. */
	public static type: Type = new Type("arrow-entity", ArrowEntity, 
		Entity.type);

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new ArrowEntity instance.
	 * @param name The name of the entity. 
	 * @param parentNode The parent entity. */
	constructor (name: string, parent?: Entity) {
		
		// Call the base class constructor
		super(name, parent)

		// Create 
		let radius = 100000, length = 500000;
		let material = new THREE.MeshLambertMaterial({color: 0xffff00});
		let center = new THREE.Mesh(new THREE.SphereGeometry(radius, 16,16), material);
		let body = new THREE.Mesh(new THREE.CylinderGeometry(radius/2, radius/2, length), material);
		let point = new THREE.Mesh(new THREE.ConeGeometry(radius,radius*2,16,16), material);

		body.position.x = length/2; body.rotateZ(-Math.PI/2);
		point.position.x = length; point.rotateZ(-Math.PI/2);

		this._representation.add(center, body, point);

	}
}