import * as THREE from "three";
import { Pose } from "../data/model/Pose";
import { Node } from "../data/Node";


/** Defines a logic Entity. */
export class Entity extends Node {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The representation of the entity. */
	protected _representation: THREE.Object3D;

	/** The pose of the entity. */
	private _pose: Pose;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The representation of the entity. */
	get representation(): THREE.Object3D { return this._representation; }

	/** The pose of the entity. */
	get pose(): Pose { return this._pose; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Entity instance.
	 * @param name The name of the entity. 
	 * @param type The type of the entity. 
	 * @param parent The parent entity. */
	constructor(name?: string, type?: string, parent?: Entity, 
			representation?: THREE.Object3D) {
		

		// Call the base class constructor
		super(name || type || "entity", type, parent);
		
		if (representation) this._representation = representation;
		else {
			this._representation = new THREE.Object3D();
			this._representation.name = this.name;
		}

		// Create the association with the parent object
		if (parent) parent._representation.add(this.representation);
		if (parent) console.log("Parenting: " +
		 	this._representation.name + " to " + parent._representation.name);
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the entity.
 	 * @param forced Indicates whether the update is forced or not.
	 * @param deltaTime The update time. */
	update(forced:boolean = false, deltaTime: number = 0) {

		// If the update is not forced, skip it when the node is already updated
		if (this.updated && !forced) return;

		// Call the base class function
		super.update(forced, deltaTime);

	}
}