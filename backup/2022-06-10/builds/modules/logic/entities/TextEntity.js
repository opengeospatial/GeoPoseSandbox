import * as THREE from "../../../externals/three.module.js";
import { defaultFont } from "../../data/resources/FontResource.js";
import { Entity } from "../Entity.js";
import { String } from "../../data/types/String.js";


/** Defines a Text entity. */
export class TextEntity extends Entity {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new TextEntity instance.
	 * @param name The name of the entity.
	 * @param parent The parent entity. */
	constructor(name, parent, params = {}) {

		// Call the base class constructor
		super(name, "text", parent, new THREE.Mesh(new THREE.TextGeometry(params.characters, { font: defaultFont.representation, size: 0.1, height: 0.1 }), new THREE.MeshLambertMaterial({ color: 0xffff00 })));

		// Create the child nodes
		this._characters = new String("string", this, params.characters);
		this._font = new String("font", this, params.font);

		// Show a message on console
		console.log("Created Text: " + this.name);

		// Save the parameters

		// 
		// this.representation.position.z=-6;
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The string of characters of the text entity. */
	get characters() { return this._characters; }

	/** The font name of the text entity. */
	get font() { return this._font; }

	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the entity.
	 * @param forced Indicates whether the update is forced or not.
	 * @param deltaTime The update time. */
	update(forced = false, deltaTime = 0) {

		// If the update is not forced, skip it when the node is already updated
		if (this.updated && !forced)
			return;

		// Update the associated entity
		if (!this._characters.updated) {
			let mesh = this._representation;
			mesh.geometry = new THREE.TextGeometry(this._characters.value, { font: defaultFont.representation, size: 0.1, height: 1 });
			mesh.geometry.center();

			// Show a message on console
			console.log("Updated Text: " + this.name);
		}

		// Call the base class
		super.update(forced, deltaTime);

	}
}
