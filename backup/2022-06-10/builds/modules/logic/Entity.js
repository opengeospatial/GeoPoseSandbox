import * as THREE from "../../externals/three.module.js";
import { Node } from "../data/Node.js";


/** Defines a logic Entity. */
export class Entity extends Node {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Entity instance.
	 * @param name The name of the entity.
	 * @param type The type of the entity.
	 * @param parent The parent entity. */
	constructor(name, type, parent, representation) {


		// Call the base class constructor
		super(name || type || "entity", type, parent);

		if (representation)
			this._representation = representation;
		else {
			this._representation = new THREE.Object3D();
			this._representation.name = this.name;
		}

		// Create the association with the parent object
		if (parent)
			parent._representation.add(this.representation);
		if (parent)
			console.log("Parenting: " +
				this._representation.name + " to " + parent._representation.name);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The representation of the entity. */
	get representation() { return this._representation; }

	/** The pose of the entity. */
	get pose() { return this._pose; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the entity.
	 * @param forced Indicates whether the update is forced or not.
	 * @param deltaTime The update time. */
	update(forced = false, deltaTime = 0) {

		// If the update is not forced, skip it when the node is already updated
		if (this.updated && !forced)
			return;

		// Call the base class function
		super.update(forced, deltaTime);

	}
}
