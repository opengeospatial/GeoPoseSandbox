import * as THREE from "three"
import { Item } from "../../data/Item.js";
import { Type } from "../../data/Type.js";
import { Entity } from "../Entity.js";
import { Ellipsoid } from "../../data/types/shapes/Ellipsoid.js";
import { String } from "../../data/types/simple/String.js";


/** Defines an Atmosphere Entity. */
export class AtmosphereEntity extends Entity {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the AtmosphereEntity class. */
	public static type: Type = new Type("atmosphere-entity", AtmosphereEntity,
		Entity.type);


	// --------------------------------------------------------- PRIVATE FIELDS

	/** The mesh of the terrain. */
	private _mesh: THREE.Mesh;

	/** The shape of the terrain. */
	private _ellipsoid: Ellipsoid;

	/** The normal texture of the terrain. */
	private _clouds: String;
	
	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The shape of the terrain. */
	get ellipsoid(): Ellipsoid { return this._ellipsoid; }
	
	/** The normal texture of the terrain. */
	get clouds(): String { return this._clouds; }

	
	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new AtmosphereEntity instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	 constructor(name?: string, parent?: Item, data: any = {}) {

		// Call the base class constructor
		super(name, parent);
		
		// Create the child items
		this._ellipsoid = new Ellipsoid("shape", this, data);
		this._clouds = new String("clouds", this);

		// Deserialize the initialization data
		if (data) this.deserialize(data);

		// Add the mesh geometry
		this._mesh = new THREE.Mesh(new THREE.SphereGeometry(1,64,64),
			new THREE.MeshPhongMaterial({color: 0xffffff, transparent: true}));
		this._representation.add(this._mesh);
	}

	
	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the AtmosphereEntity instance.
	 * @param deltaTime The update time. 
	 * @param forced Indicates whether the update is forced or not. */
	 update(deltaTime: number = 0, forced: boolean = false) {

		if (!this._ellipsoid.updated) {
			this._mesh.scale.set(this._ellipsoid.radiusX.value * 1.001,
				this._ellipsoid.radiusY.value * 1.001, 
				this._ellipsoid.radiusZ.value * 1.001);
		}

		// Apply the cloud texture
		if (!this._clouds.updated && this._clouds.value) {
			const texture = new THREE.TextureLoader().load(this._clouds.value);
			(this._mesh.material as THREE.MeshPhongMaterial).alphaMap = texture;
		}

		// Call the base class function
		super.update(deltaTime, forced);
	}
}