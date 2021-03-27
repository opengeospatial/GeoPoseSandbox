import { Node } from "../../data/Node";
import { NodeSet } from "../../data/NodeSet";
import { ResourceGroup } from "../../data/resources/ResourceGroup";
import { Scene } from "../../logic/entities/Scene";
import { Presence } from "./Presence";
import { Widget } from "./Widget";

/** Defines an Interaction Space. */
export class Space extends Node {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The scene of the space. */
	private _entity: Scene;

	/** The resources of the space. */
	private _resources: NodeSet<ResourceGroup>;

	/** The widget definitions of the space. */
	private _widgets: NodeSet<Widget>;

	/** The subspaces of the space. */
	private _spaces: NodeSet<Space>;

	/** The user presences in the space. */
	private _presences: NodeSet<Presence>;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The representation of the space. */
	get entity(): Scene { return this._entity; }

	/** The resources of the space. */
	get resources(): NodeSet<ResourceGroup> { return this._resources; }

	/** The widget definitions of the space. */
	get widgets(): NodeSet<Widget> { return this._widgets; }

	/** The subspaces of the space. */
	get spaces(): NodeSet<Space> { return this._spaces; }

	/** The user presences in the space. */
	get presences(): NodeSet<Presence> { return this._presences; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Space instance.
	 * @param name The name of the space.
	 * @param parentNode The parent node.
	 * @param params The initialization parameters. */
	constructor(name, parentNode?: Node, params: any = {}) {

		// Call the base class constructor
		super(name, "space", parentNode, params);

		// Create the child nodes
		this._spaces = new NodeSet<Space>("spaces", this);
		this._widgets = new NodeSet<Widget>("widgets", this);
		this._presences = new NodeSet<Presence>("presences", this);
		
		// Create the representation of the space
		this._entity = new Scene(this.name);
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the space.
	 * @param forced Indicates whether the update is forced or not.
	 * @param deltaTime The update time. */
	update(forced:boolean = false, deltaTime: number = 0) {
		
		// Call the parent class update function
		super.update(forced, deltaTime);
		
		// console.log("Space Updated");
	}
}