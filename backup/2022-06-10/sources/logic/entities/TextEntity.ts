import * as THREE from "three";
import { FontResource, defaultFont } from "../../data/resources/FontResource";
import { Entity } from "../Entity";
import { String } from "../../data/types/String";
import { Time } from "../../data/types/measures/Time";
import { TextGeometry } from "three";


/** Defines a Text entity. */
export class TextEntity extends Entity {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The string of characters of the text entity. */
	private _characters: String;

	/** The font name of the text entity. */
	private _font: String;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The string of characters of the text entity. */
	get characters ():String { return this._characters; }

	/** The font name of the text entity. */
	get font ():String { return this._font; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new TextEntity instance.
	 * @param name The name of the entity. 
	 * @param parent The parent entity. */
	 constructor (name: string, parent?: Entity, params:any= {}) {
		
		// Call the base class constructor
		super(name,"text", parent, new THREE.Mesh(new THREE.TextGeometry(
			params.characters,
			{font: defaultFont.representation, size: 0.1, height:0.1}),
			new THREE.MeshLambertMaterial({color: 0xffff00})));
		
		// Create the child nodes
		this._characters = new String("string", this, params.characters);
		this._font = new String("font", this, params.font);

		// Show a message on console
		console.log("Created Text: " + this.name);

		// Save the parameters

		// 
		// this.representation.position.z=-6;
	}

	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the entity.
	 * @param forced Indicates whether the update is forced or not.
	 * @param deltaTime The update time. */
	 update(forced:boolean = false, deltaTime: number = 0) {

		// If the update is not forced, skip it when the node is already updated
		if (this.updated && !forced) return;

		// Update the associated entity
		if (!this._characters.updated) {
			let mesh = (this._representation as THREE.Mesh);
				mesh.geometry = new THREE.TextGeometry(this._characters.value
				,{font: defaultFont.representation, size: 0.1, height:1})
			mesh.geometry.center();

			// Show a message on console
			console.log("Updated Text: " + this.name);
		}

		// Call the base class
		super.update(forced, deltaTime);

	}
}