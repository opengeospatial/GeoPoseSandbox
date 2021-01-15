import { NodeSet } from "./NodeSet";

/** Defines a data node (a element in a hierarchy). */ 
export class Node {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The different names of the node. */
	private _names: Record<string, string> = {};

	/** The parent of the data node. */
	private _parentNode : Node;

	/** The child nodes of the data node. */
	private _childNodes : Node[];

	/** The name of the data element. */
	private _updated : boolean = false;

	/** The type data of the Node. */
	protected _nodeType;

	// ---------------------------------------------------------- PUBLIC FIELDS

	/** The representration of the node. */
	public representation;

	/** A function callback to be used before the node update. */
	public static onPreUpdate;

	/** A function callback to be used before the node update. */
	public static onPostUpdate;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** Gets the basic name of the node (null context). */
	get name(): string { return this._names[""]; }

	/** Gets the full name of the node (null context). */
	get fullName(): string { return ((this._parentNode)? 
		this._parentNode.fullName + '.' : '') + this.name;
	}

	/** Gets the parent of the node. */
	get parentNode() : Node { return this._parentNode; }

	/** Gets the children of the node. */
	get childNodes() : Node[] { return this._childNodes; }

	/** Gets a boolean indicating if the node has been updated or not. */
	get updated() : boolean { return this._updated; }

	/** Gets a boolean indicating if the node has been updated or not. */
	set updated(value: boolean) { 
		this._updated = value;
		// Propagate negative updated values upwards in the hierarchy
		let parent = this._parentNode; 
		if (parent && parent._updated && !value) parent.updated = false;
	} 


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR
	
	/** Initializes a new instance of the Node instance.
	 * @param name The name(s) of the node.
	 * @param parentNode The parent node.
	 * @param params The initialization parameters. */
	constructor(name : any, parentNode?: Node, params: any = {}){ 
		if (typeof name == "string") this._names[""] = name; 
		else {
			let keys = Object.keys(name);
			for (let keyIndex = 0; keyIndex < keys.length; keyIndex++) {
				const key = keys[keyIndex];
				console.log(key);
				if(typeof name[key] != "string") continue;
				this._names[key] = name[key];
			}
		}

		// Create the array of child nodes
		this._childNodes = [];

		// If there is a parent node, create a double connection
		if(parentNode) {
			this._parentNode = parentNode; 
			parentNode._childNodes.push(this);
			if (parentNode._nodeType) parentNode._parentNode._childNodes.push(this);
		}

		// Propagate the need to update this node upwards in the hierarchy
		this.updated = false;
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Gets the name of the node for a specific context.
	 * @param context The context for the alias.
	 * @returns The name of the node for the specific context. */
	alias (context: string = ""): string { return this._names[context]; }


	/** Updates the Node. 
	 * @param forced Indicates whether the update is forced or not. */
	update(forced = false) {

		// If the update is not forced, skip it when the node is already updated
		if (this.updated && !forced) return;

		// Call the event function
		if (Node.onPreUpdate) Node.onPreUpdate(this);

		// Update the children
		let childIndex, childCount = this._childNodes.length;
		for (childIndex = 0; childIndex < childCount; childIndex++) {
			this._childNodes[childIndex].update(forced);
		}

		// Call the event function
		if (Node.onPostUpdate) Node.onPostUpdate(this);
	
		// Mark this node as updated
		this._updated = true;
	}

}