import * as THREE from "three";
import { Entity } from "../Entity";

/** Defines a Scene. */
export class SceneEntity extends Entity {

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR
	
	/** Define a public constructor.
	* @param parent The parent entity. */
	public constructor(name: string, parent?: Entity) {

		// Call the base class constructor
		super(name, "scene", parent, new THREE.Scene());

		// Add a light
		this._representation.add(new THREE.AmbientLight(0x888888, 0.5));

		// TEMPORAL
		let light = new THREE.DirectionalLight(0xffffff);
		light.position.z = 3;
		this._representation.add(light);
		
	}

}
