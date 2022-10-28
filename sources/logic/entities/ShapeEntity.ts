import * as THREE from "three"
import { GridHelper } from "three";
import { Item } from "../../data/Item";
import { Type } from "../../data/Type";
import { Entity } from "../Entity";

/** Defines a Shape entity. */
export class ShapeEntity extends Entity {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the ShapeEntity class. */
	public static type: Type = new Type("shape-entity", ShapeEntity, 
		Entity.type);

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new ShapeEntity instance.
	 * @param name The name of the entity. 
	 * @param parentNode The parent entity. */
	constructor (name: string, parent?: Entity, radius: number = 1) {
		
		// Call the base class constructor
		super(name, parent)

		// Create 
		this.representation.add(new THREE.Mesh(
			new THREE.ConeGeometry(100000,100000,64,64),
			new THREE.MeshLambertMaterial({color: 0xffff00})));

	}
}