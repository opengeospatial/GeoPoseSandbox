import * as THREE from "three";
import { Type } from "../../data/Type.js";
import { Entity } from "../Entity.js";
import { Ellipsoid } from "../../data/types/shapes/Ellipsoid.js";
import { String } from "../../data/types/simple/String.js";
import { Number } from "../../data/types/simple/Number.js";


/** Defines a Terrain Entity. */
export class TerrainEntity extends Entity {

	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The shape of the terrain. */
	get ellipsoid() { return this._ellipsoid; }

	/** The diffuse texture of the terrain. */
	get diffuse() { return this._diffuse; }

	/** The specular texture of the terrain. */
	get specular() { return this._specular; }

	/** The normal texture of the terrain. */
	get normal() { return this._normal; }

	/** The normal texture of the terrain. */
	get normalScale() { return this._normalScale; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new TerrainEntity instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data = {}) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._ellipsoid = new Ellipsoid("shape", this, data);
		this._diffuse = new String("diffuse", this);
		this._specular = new String("specular", this);
		this._normal = new String("normal", this);
		this._normalScale = new Number("normalScale", this);

		// Deserialize the initialization data
		if (data)
			this.deserialize(data);

		// Add the mesh geometry
		this._mesh = new THREE.Mesh(new THREE.SphereGeometry(1, 64, 64), new THREE.MeshPhongMaterial({ color: 0xffffff }));
		this._representation.add(this._mesh);
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the TerrainEntity instance.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		if (!this._ellipsoid.updated) {
			this._mesh.scale.set(this._ellipsoid.radiusX.value, this._ellipsoid.radiusY.value, this._ellipsoid.radiusZ.value);
		}

		let material = this._mesh.material;
		if (!this._diffuse.updated && this._diffuse.value) {
			const texture = new THREE.TextureLoader().load(this._diffuse.value);
			material.map = texture;
		}

		if (!this._normal.updated && this._normal.value) {
			const texture = new THREE.TextureLoader().load(this._normal.value);
			material.normalMap = texture;
		}

		if (!this._specular.updated && this._specular.value) {
			const texture = new THREE.TextureLoader().load(this._specular.value);
			material.specularMap = texture;
		}
		if (!this._normalScale.updated) {
			material.normalScale = new THREE.Vector2(this._normalScale.value, this._normalScale.value);
		}

		// Call the base class function
		super.update(deltaTime, forced);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the TerrainEntity class. */
TerrainEntity.type = new Type("terrain-entity", TerrainEntity, Entity.type);
//# sourceMappingURL=TerrainEntity.js.map