
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
		if (!name)
			name = type;
		super(name, type, parent);

		// let e = new THREE.Mesh(new THREE.SphereGeometry(1,64,64),
		// 	new THREE.MeshLambertMaterial({color: 0x00ff00}));

		// this.representation.add(e);
		this._representation = representation || new THREE.Mesh(new THREE.SphereGeometry(0.01, 64, 64), new THREE.MeshLambertMaterial({ color: 0x00ff00 }));
		// e.position.z=-10;
		this._representation.name = this.name;

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
