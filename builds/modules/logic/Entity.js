import * as THREE from "../../externals/three.module.js";
import { Item } from "../data/Item.js";
import { Type } from "../data/Type.js";
import { Pose } from "../data/model/Pose.js";


/** Defines a logic entity. */
export class Entity extends Item {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Entity instance.
	 * @param name The name of the item.
	 * @param parent The parent item.
	 * @param representation The representation of the entity. */
	constructor(name, parent, representation) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._pose = new Pose("pose", this);

		// Check the representation
		if (representation)
			this._representation = representation;
		else
			this._representation = new THREE.Object3D();
		this._representation.name = this.name;

		// Create the association with the parent entity
		if (parent && parent.representation) {
			let parentEntity = parent;
			parentEntity._representation.add(this._representation);
			console.log("Parenting: " + this.name + " to " + parentEntity.name);
		}
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The representation of the entity. */
	get representation() { return this._representation; }

	/** The pose of the entity. */
	get pose() { return this._pose; }



	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the Entity.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		// If the update is not forced, skip it when the item is already updated
		if (this.updated && !forced)
			return;

		// Update the properties of the camera
		if (!this._pose.position.updated) {
			let p = this._pose.position.relativeValues;
			this._representation.position.set(p.x.value, p.y.value, p.z.value);
		}
		if (!this._pose.orientation.updated) {
			let r = this._pose.orientation.relativeValues;
			this._representation.rotation.set(r.x.value, r.y.value, r.z.value);
		}

		// Call the base class function
		super.update(deltaTime, forced);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Entity class. */
Entity.type = new Type("entity", Entity, Item.type);
