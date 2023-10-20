import { Node } from "../../data/Node";
import { Entity } from "../../logic/Entity";
import { Widget } from "./Widget";

/** Defines an interaction Component */
export class Component extends Node {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The entity of the component. */
	protected _entity: Entity;

	/** The parent entity of the component. */
	protected _parentEntity: Entity;

	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The entity of the component. */
	get entity(): Entity { return this._entity; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Component instance.
	 * @param name The name of the component.
	 * @param type The type of component.
	 * @param parentNode The parent component or widget.
	 * @param params The initialization parameters. */
	 constructor(name: string, type: string, parentNode?: Node, params: any = {}) {
		
		// Call the base class constructor
		super(name, type, parentNode);

		// Check the parent node and get the parent entity
		if(parentNode) {
			let p = parentNode.parentNode;
			if(!p || !(p.type == "widget" || p.type == "component")) 
				throw Error("Invalid parent for Component " + name);
			this._parentEntity = (p as any).entity;
		}
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the Component.
	* @param forced Indicates whether the update is forced or not.
	* @param deltaTime The update time. */
	update(forced:boolean = false, deltaTime: number = 0) {
	
		// Call the parent class update function
		super.update(forced, deltaTime);

		// Update the associated entity
		this._entity.update(forced, deltaTime);
	}
}