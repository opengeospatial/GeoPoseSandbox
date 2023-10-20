import * as THREE from "three"
import { Shape } from "../../data/types/Shape";
import { Entity } from "../Entity";
import { Ellipsoid } from "../../data/types/shapes/Ellipsoid";
import { String } from "../../data/types/String";

/** Defines a TerrainEntity Entity. */
export class TerrainEntity extends Entity {

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
	 * @param name The name of the component. 
	 * @param parentNode The parent component or widget.
	 * @param params The initialization parameters. */
	 constructor(name: string, parent?: Entity, params: any = {}) {

		// Call the base class constructor
		super(name, "terrain", parent);
		this._mesh = new THREE.Mesh(new THREE.SphereGeometry(1,64,64),
			new THREE.MeshPhongMaterial({color: 0xffff00}));

		this._representation.add(this._mesh);
		this._representation.rotateY(-Math.PI/2);
	
		this._shape = new Ellipsoid("shape", this, params);
		this._texture = new String("texture", this, params.texture);
	}

	
	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the TerrainEntity.
	* @param forced Indicates whether the update is forced or not.
	* @param deltaTime The update time. */
	update(forced:boolean = false, deltaTime: number = 0) {

		if (!this._shape.updated) {
			this._mesh.scale.set(this._shape.radiusX.value,
				this._shape.radiusY.value, this._shape.radiusZ.value);
		}

		if (!this._texture.updated) {
			let textureURL = this._texture.value;
			if (textureURL) {
				const texture = new THREE.TextureLoader().load(textureURL);
				this._mesh.material = new THREE.MeshPhongMaterial({map: texture});
			}
		}

		// Call the parent class update function
		super.update(forced, deltaTime);
	}
}