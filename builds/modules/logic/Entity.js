import * as THREE from "three";
import { Item } from "../data/Item.js";
import { Type } from "../data/Type.js";
import { Pose } from "../data/model/Pose.js";


/** Defines a logic entity. */
export class Entity extends Item {


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The representation of the entity. */
	get representation() { return this._representation; }

	/** The pose of the entity. */
	get pose() { return this._pose; }
	set pose(p) {
		if (this._pose)
			this._pose.destroy();
		this._pose = p;
		this.updated = false;
	}


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


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the Entity instance.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		// If the update is not forced, skip it when the item is already updated
		if (this.updated && !forced)
			return;

		// Update the properties of the camera
		if (!this._pose.updated && this._pose.position) {
			this._pose.update();

			let p = this._pose.position.relativeValues;
			this._representation.position.set(p.x.value, p.y.value, p.z.value);

			// The rotation of the obtain the ENU (East-North-Up) frame
			let v = this._pose.position.additionalRotation;
			let vertical = new THREE.Vector3(v.x.value, v.y.value, v.z.value);
			this._representation.rotation.setFromVector3(vertical, "ZYX");

			// Add another
			let DegreesToRads = Math.PI / 180;
			let o = this._pose.orientation;
			if (o.yaw != undefined)
				this.representation.rotateZ(o.yaw.value * DegreesToRads);
			if (o.pitch != undefined)
				this.representation.rotateY(o.pitch.value * DegreesToRads);
			if (o.roll != undefined)
				this.representation.rotateX(o.roll.value * DegreesToRads);
		}

		// Call the base class function
		super.update(deltaTime, forced);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Entity class. */
Entity.type = new Type("entity", Entity, Item.type);
//# sourceMappingURL=Entity.js.map