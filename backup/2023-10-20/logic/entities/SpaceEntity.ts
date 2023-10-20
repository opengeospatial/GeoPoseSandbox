import * as THREE from "three";
import { Item } from "../../data/Item.js";
import { Type } from "../../data/Type.js";
import { Entity } from "../Entity.js";

/** Defines a Space entity. */
export class SpaceEntity extends Entity {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the SpaceEntity class. */
	public static type: Type = new Type("space-entity", SpaceEntity, 
		Entity.type);

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR
	
	/** Initializes a new SpaceEntity instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	 constructor(name?: string, parent?: Item, data: any = {}) {

		// Call the base class constructor
		super(name, parent, new THREE.Scene());

		// Deserialize the initialization data
		if (data) this.deserialize(data);

		// Add a light
		this._representation.add(new THREE.AmbientLight(0x888888, 0.5));

		// TEMPORAL
		let light = new THREE.DirectionalLight(0xffffff);
		light.position.z = 3;
		this._representation.add(light);
		this._representation.add(new THREE.Mesh(
			new THREE.SphereGeometry(100000,64,64),
			new THREE.MeshPhongMaterial({color: 0x00ff00})));
	
	}

}
