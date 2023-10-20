import * as THREE from "../../../externals/three.module.js";
import { Entity } from "../Entity.js";
import { Ellipsoid } from "../../data/types/shapes/Ellipsoid.js";
import { String } from "../../data/types/String.js";

/** Defines a TerrainEntity Entity. */
export class TerrainEntity extends Entity {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new TerrainEntity instance.
	 * @param name The name of the component.
	 * @param parentNode The parent component or widget.
	 * @param params The initialization parameters. */
	constructor(name, parent, params = {}) {

		// Call the base class constructor
		super(name, "terrain", parent);
		this._mesh = new THREE.Mesh(new THREE.SphereGeometry(1, 64, 64), new THREE.MeshPhongMaterial({ color: 0xffff00 }));

		this._representation.add(this._mesh);
		this._representation.rotateY(-Math.PI / 2);

		this._shape = new Ellipsoid("shape", this, params);
		this._texture = new String("texture", this, params.texture);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The shape of the component. */
	get shape() { return this._shape; }

	/** The shape of the component. */
	get texture() { return this._texture; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the TerrainEntity.
	* @param forced Indicates whether the update is forced or not.
	* @param deltaTime The update time. */
	update(forced = false, deltaTime = 0) {

		if (!this._shape.updated) {
			this._mesh.scale.set(this._shape.radiusX.value, this._shape.radiusY.value, this._shape.radiusZ.value);
		}

		if (!this._texture.updated) {
			let textureURL = this._texture.value;
			if (textureURL) {
				const texture = new THREE.TextureLoader().load(textureURL);
				this._mesh.material = new THREE.MeshPhongMaterial({ map: texture });
			}
		}

		// Call the parent class update function
		super.update(forced, deltaTime);
	}
}
