import { NodeSet } from "./NodeSet";

/** Defines a data node (a element in a hierarchy). */ 
export class Node {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The name of the node. */
	private _name: string;

	/** The parent of the data node. */
	private _parentNode : Node;

	/** The child nodes of the data node. */
	private _childNodes : Node[];

	/** The name of the data element. */
	private _updated : boolean = false;

	/** The type data of the Node. */
	protected _type: Record<string, string> = {};


	// ---------------------------------------------------------- PUBLIC FIELDS

	/** A function callback to be used before the node update. */
	public static onPreUpdate;

	/** A function callback to be used before the node update. */
	public static onPostUpdate;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The name of the node. */
	get name(): string { return this._name; }

	/** Gets the full name of the node. */
	get fullName(): string { return ((this._parentNode)? 
		this._parentNode.fullName + '.' : '') + this.name;
	}

	/** The parent of the node. */
	get parentNode() : Node { return this._parentNode; }

	/** The children of the node. */
	get childNodes() : Node[] { return this._childNodes; }

	/** A boolean indicating if the node has been updated or not. */
	get updated() : boolean { return this._updated; }
	set updated(value: boolean) { 
		this._updated = value;
		// Propagate negative updated values upwards in the hierarchy
		let parent = this._parentNode; 
		if (parent && parent._updated && !value) parent.updated = false;
	} 

	/** The type data of the node. */
	get type(): string { return this._type[""]; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR
	
	/** Initializes a new instance of the Node instance.
	 * @param name The name(s) of the node.
	 * @param type The type of the node.
	 * @param parentNode The parent node.
	 * @param params The initialization parameters. */
	constructor(name: string, type: any, parentNode?: Node, params: any = {}) { 

		if(!type) throw Error("Invalid type for Node '" + name + "'");
		if (typeof type == "string") this._type[""] = type; 
		else {
			throw Error("Invalid node type");
			let keys = Object.keys(type);
			for (let keyIndex = 0; keyIndex < keys.length; keyIndex++) {
				const key = keys[keyIndex];
				console.log(key);
				if(typeof type[key] != "string") continue;
				this._type[key] = type[key];
			}
		}

		this._name = name || this._type[""];

		// Create the array of child nodes
		this._childNodes = [];

		// If there is a parent node, create a double connection
		if(parentNode) {
			this._parentNode = parentNode; 
			parentNode._childNodes.push(this);
			// if (parentNode._type) parentNode._parentNode._childNodes.push(this);
		}

		// Propagate the need to update this node upwards in the hierarchy
		this.updated = false;
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the Node. 
	 * @param forced Indicates whether the update is forced or not.
	 * @param deltaTime The update time. */
	update(forced = false, deltaTime: number = 0) {

		// If the update is not forced, skip it when the node is already updated
		if (this._updated && !forced) return;

		// Call the event function
		if (Node.onPreUpdate) Node.onPreUpdate(this);

		// Update the children
		let childIndex, childCount = this._childNodes.length;
		for (childIndex = 0; childIndex < childCount; childIndex++) {
			this._childNodes[childIndex].update(forced, deltaTime);
		}

		// Call the event function
		if (Node.onPostUpdate) Node.onPostUpdate(this);
	
		// Mark this node as updated
		this._updated = true;
	}

}