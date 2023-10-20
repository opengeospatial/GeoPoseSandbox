
/** Defines a data node (a element in a hierarchy). */
export class Node {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Node class.
	 * @param name The name(s) of the node.
	 * @param type The type of the node.
	 * @param parentNode The parent node.
	 * @param params The initialization parameters. */
	constructor(name, type, parentNode, params = {}) {

		/** The name of the data element. */
		this._updated = false;

		/** The type data of the Node. */
		this._type = {};

		if (!type)
			throw Error("Invalid type for Node '" + name + "'");
		if (typeof type == "string")
			this._type[""] = type;
		else {
			throw Error("Invalid node type");
			let keys = Object.keys(type);
			for (let keyIndex = 0; keyIndex < keys.length; keyIndex++) {
				const key = keys[keyIndex];
				console.log(key);
				if (typeof type[key] != "string")
					continue;
				this._type[key] = type[key];
			}
		}

		this._name = name || this._type[""];

		// Create the array of child nodes
		this._childNodes = [];

		// If there is a parent node, create a double connection
		if (parentNode) {
			this._parentNode = parentNode;
			parentNode._childNodes.push(this);
			// if (parentNode._type) parentNode._parentNode._childNodes.push(this);
		}

		// Propagate the need to update this node upwards in the hierarchy
		this.updated = false;
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The name of the node. */
	get name() { return this._name; }

	/** Gets the full name of the node. */
	get fullName() {
		return ((this._parentNode) ?
			this._parentNode.fullName + '.' : '') + this.name;
	}

	/** The parent of the node. */
	get parentNode() {
		// if (!this._parentNode) return undefined;
		// if (this._parentNode.type == "nodeset") this._parentNode._parentNode;
		return this._parentNode;
	}

	/** The children of the node. */
	get childNodes() { return this._childNodes; }

	/** A boolean indicating if the node has been updated or not. */
	get updated() { return this._updated; }
	set updated(value) {
		this._updated = value;
		// Propagate negative updated values upwards in the hierarchy
		let parent = this._parentNode;
		if (parent && parent._updated && !value)
			parent.updated = false;
	}

	/** The type data of the node. */
	get type() { return this._type[""]; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the Node.
	 * @param forced Indicates whether the update is forced or not.
	 * @param deltaTime The update time. */
	update(forced = false, deltaTime = 0) {

		// If the update is not forced, skip it when the node is already updated
		if (this._updated && !forced)
			return;

		// Call the event function
		if (Node.onPreUpdate)
			Node.onPreUpdate(this);

		// Update the children
		let childIndex, childCount = this._childNodes.length;
		for (childIndex = 0; childIndex < childCount; childIndex++) {
			this._childNodes[childIndex].update(forced, deltaTime);
		}

		// Call the event function
		if (Node.onPostUpdate)
			Node.onPostUpdate(this);

		// Mark this node as updated
		this._updated = true;
	}
}
