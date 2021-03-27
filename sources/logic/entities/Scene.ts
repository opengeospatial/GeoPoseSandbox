import * as THREE from "three";
import { Entity } from "../Entity";

/** Defines a Scene. */
export class Scene extends Entity {

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR
	
	/** Define a public constructor.
	* @param parent The parent entity. */
	public constructor(name: string, parent:Entity = null) {

		// Call the base class constructor
		super(name, "scene", parent, new THREE.Scene());
		console.log("Created scene");

		// TEMPORAL
		// let e = new THREE.Mesh(new THREE.SphereGeometry(1,64,64),
		// 	new THREE.MeshLambertMaterial({color: 0x00ff00}));
		// e.position.z=-10;
		// this.representation.add(e);

		// TODO: Add lights as entities
		this._representation.add(new THREE.AmbientLight(0x888888, 0.5));
		let light = new THREE.PointLight(0xffffff, 1);
		this._representation.add(light);
	}

}
