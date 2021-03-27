import { Component } from "../Component.js";
import { String } from "../../../data/types/String.js";
import { TextEntity } from "../../../logic/entities/TextEntity.js";

/** Defines a Text Interaction Component. */
export class TextComponent extends Component {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new TextComponent instance.
	 * @param name The name of the component.
	 * @param parentNode The parent component or widget.
	 * @param params The initialization parameters. */
	constructor(name, parent, params = {}) {

		// Call the base class constructor
		super(name, "text", parent);

		// Create the text entity
		this._entity = new TextEntity(name, this._parentEntity, { characters: params.characters });

		// Create the child nodes
		this._characters = new String("string", this, params.characters);
		this._font = new String("font", this, params.font);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The string of characters of the text component. */
	get characters() { return this._characters; }

	/** The font name of the text component. */
	get font() { return this._font; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the TextComponent.
	* @param forced Indicates whether the update is forced or not.
	* @param deltaTime The update time. */
	update(forced = false, deltaTime = 0) {

		// Text entity
		let text = this._entity;
		if (!this._characters.updated) {
			text.characters.value = this._characters.value;
		}

		// Call the parent class update function
		super.update(forced, deltaTime);
	}
}
