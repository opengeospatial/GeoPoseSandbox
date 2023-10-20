import { Component } from "../Component";
import { Node } from "../../../data/Node";
import { Entity } from "../../../logic/Entity";
import { ShapeEntity } from "../../../logic/entities/ShapeEntity";
import { Shape } from "../../../data/types/Shape";

/** Defines a Shape Interaction Component. */
export class ShapeComponent extends Component {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The shape of the component. */
	private _shape: Shape;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The shape of the component. */
	get shape ():Shape { return this._shape; }

	
	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new ShapeComponent instance.
	 * @param name The name of the component. 
	 * @param parentNode The parent component or widget.
	 * @param params The initialization parameters. */
	 constructor(name: string, parent?: Node, params: any = {}) {

		// Call the base class constructor
		super(name, "shape", parent);

		// Create the text entity
		this._entity = new ShapeEntity(name, this._parentEntity);

	}

	
	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the ShapeComponent.
	* @param forced Indicates whether the update is forced or not.
	* @param deltaTime The update time. */
	update(forced:boolean = false, deltaTime: number = 0) {

		// Call the parent class update function
		super.update(forced, deltaTime);
	}
}