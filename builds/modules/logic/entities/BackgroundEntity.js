import * as THREE from "../../../externals/three.module.js";
import { Type } from "../../data/Type.js";
import { Entity } from "../Entity.js";
import { Ellipsoid } from "../../data/items/shapes/Ellipsoid.js";
import { String } from "../../data/items/simple/String.js";

/** Defines a Background Entity. */
export class BackgroundEntity extends Entity {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new BackgroundEntity instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._shape = new Ellipsoid("shape", this, data);
		this._texture = new String("texture", this);

		// Deserialize the initialization data
		if (data)
			this.deserialize(data);

		// Add the mesh geometry
		this._mesh = new THREE.Mesh(new THREE.SphereGeometry(1, 64, 64), new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.BackSide }));
		this._representation.add(this._mesh);
		this._mesh.renderOrder = -100;

	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The shape of the component. */
	get shape() { return this._shape; }

	/** The shape of the component. */
	get texture() { return this._texture; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the BackgroundEntity instance.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		if (!this._shape.updated) {
			this._mesh.scale.set(this._shape.radiusX.value, this._shape.radiusY.value, this._shape.radiusZ.value);
		}

		if (!this._texture.updated) {
			let textureURL = this._texture.value;
			if (textureURL) {
				const texture = new THREE.TextureLoader().load(textureURL);
				this._mesh.material = new THREE.MeshBasicMaterial({
					map: texture, side: THREE.BackSide
				});
			}
		}

		// Call the base class function
		super.update(deltaTime, forced);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the BackgroundEntity class. */
BackgroundEntity.type = new Type("background-entity", BackgroundEntity, Entity.type);
