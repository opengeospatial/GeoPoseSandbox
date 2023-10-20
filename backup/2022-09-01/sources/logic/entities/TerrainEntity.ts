import * as THREE from "three"
import { Item } from "../../data/Item";
import { Type } from "../../data/Type";
import { Entity } from "../Entity";
import { Ellipsoid } from "../../data/items/shapes/Ellipsoid";
import { String } from "../../data/items/simple/String";

/** Defines a TerrainEntity Entity. */
export class TerrainEntity extends Entity {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the TerrainEntity class. */
	public static type: Type = new Type("terrain-entity", TerrainEntity,
		Entity.type);


	// --------------------------------------------------------- PRIVATE FIELDS

	/** The mesh of the terrain. */
	private _mesh: THREE.Mesh;

	/** The shape of the terrain. */
	private _shape: Ellipsoid;

	/** The texture of the terrain. */
	private _texture: String;

	
	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The shape of the component. */
	get shape(): Ellipsoid { return this._shape; }
	
	/** The shape of the component. */
	get texture(): String { return this._texture; }

	
	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new TerrainEntity instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	 constructor(name?: string, parent?: Item, data?: any) {

		// Call the base class constructor
		super(name, parent);
		
		// Create the child items
		this._shape = new Ellipsoid("shape", this);
		this._texture = new String("texture", this);

		// Deserialize the initialization data
		if (data) this.deserialize(data);

		// Add the mesh geometry
		this._mesh = new THREE.Mesh(new THREE.SphereGeometry(1,64,64),
			new THREE.MeshPhongMaterial({color: 0xffff00}));
		this._representation.add(this._mesh);
		
	}

	
	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the TerrainEntity instance.
	 * @param deltaTime The update time. 
	 * @param forced Indicates whether the update is forced or not. */
	 update(deltaTime: number = 0, forced: boolean = false) {

		// Show a message on console
		console.log("Updated TerrainEntity")

		// if (!this._shape.updated) {
		// 	this._mesh.scale.set(this._shape.radiusX.value,
		// 		this._shape.radiusY.value, this._shape.radiusZ.value);
		// }

		if (!this._texture.updated) {
			let textureURL = this._texture.value;
			if (textureURL) {
				const texture = new THREE.TextureLoader().load(textureURL);
				this._mesh.material = new THREE.MeshPhongMaterial({map: texture});
			}
		}

		// Call the base class function
		super.update(deltaTime, forced);

		// TEMPORAL
		this._representation.rotateY(-Math.PI/2);
	}
}