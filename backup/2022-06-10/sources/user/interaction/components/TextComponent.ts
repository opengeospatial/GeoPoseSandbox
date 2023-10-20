import { Component } from "../Component";
import { Node } from "../../../data/Node";
import { String } from "../../../data/types/String";
import { Entity } from "../../../logic/Entity";
import { TextEntity } from "../../../logic/entities/TextEntity";

/** Defines a Text Interaction Component. */
export class TextComponent extends Component {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The string of characters of the text component. */
	private _text: String;

	/** The font name of the text component. */
	private _font: String;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The string of characters of the text component. */
	get text (): String { return this._text; }

	/** The font name of the text component. */
	get font (): String { return this._font; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new TextComponent instance.
	 * @param name The name of the component. 
	 * @param parentNode The parent component or widget.
	 * @param params The initialization parameters. */
	 constructor(name: string, parent?: Node, params: any = {}) {

		// Call the base class constructor
		super(name, "text", parent);

		// Create the text entity
		this._entity = new TextEntity(name, this._parentEntity, 
			{characters: (params.characters as string)});

		// Create the child nodes
		this._text = new String("string", this, params.text);
		this._font = new String("font", this, params.font);
	}

	
	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the TextComponent.
	* @param forced Indicates whether the update is forced or not.
	* @param deltaTime The update time. */
	update(forced:boolean = false, deltaTime: number = 0) {

		// Text entity
		let text = this._entity as TextEntity;
		if (!this.text.updated) text.characters.value = this.text.value;

		// Call the parent class update function
		super.update(forced, deltaTime);
	}
}