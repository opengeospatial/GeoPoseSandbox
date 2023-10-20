import * as THREE from "three"
import { Item } from "../../data/Item";
import { Type } from "../../data/Type";
import { Entity } from "../Entity";
import { Ellipsoid } from "../../data/items/shapes/Ellipsoid";
import { String } from "../../data/items/simple/String";


/** Defines a Terrain Entity. */
export class TerrainEntity extends Entity {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the TerrainEntity class. */
	public static type: Type = new Type("terrain-entity", TerrainEntity,
		Entity.type);


	// --------------------------------------------------------- PRIVATE FIELDS

	/** The mesh of the terrain. */
	private _mesh: THREE.Mesh;

	/** The shape of the terrain. */
	private _ellipsoid: Ellipsoid;

	/** The diffuse texture of the terrain. */
	private _diffuse: String;

	/** The normal texture of the terrain. */
	private _normal: String;
	
	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The shape of the terrain. */
	get ellipsoid(): Ellipsoid { return this._ellipsoid; }
	
	/** The diffuse texture of the terrain. */
	get diffuse(): String { return this._diffuse; }

	/** The normal texture of the terrain. */
	get normal(): String { return this._normal; }

	
	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new TerrainEntity instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	 constructor(name?: string, parent?: Item, data?: any) {

		// Call the base class constructor
		super(name, parent);
		
		// Create the child items
		this._ellipsoid = new Ellipsoid("shape", this, data);
		this._diffuse = new String("diffuse", this);
		this._normal = new String("normal", this);

		// Deserialize the initialization data
		if (data) this.deserialize(data);

		// Add the mesh geometry
		this._mesh = new THREE.Mesh(new THREE.SphereGeometry(1,64,64),
			new THREE.MeshPhongMaterial({color: 0xffffff}));
		this._representation.add(this._mesh);
		
	}

	
	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the TerrainEntity instance.
	 * @param deltaTime The update time. 
	 * @param forced Indicates whether the update is forced or not. */
	 update(deltaTime: number = 0, forced: boolean = false) {

		// Show a message on console
		// console.log("Updated TerrainEntity")

		if (!this._ellipsoid.updated) {
			this._mesh.scale.set(this._ellipsoid.radiusX.value,
				this._ellipsoid.radiusY.value, this._ellipsoid.radiusZ.value);
		}

		if (!this._diffuse.updated && this._diffuse.value) {
			const texture = new THREE.TextureLoader().load(this._diffuse.value);
			(this._mesh.material as THREE.MeshPhongMaterial).map = texture;
		}

		if (!this._normal.updated && this._normal.value) {
			const texture = new THREE.TextureLoader().load(this._normal.value);
			(this._mesh.material as THREE.MeshPhongMaterial).normalMap = texture;
		}

		// Call the base class function
		super.update(deltaTime, forced);
	}
}