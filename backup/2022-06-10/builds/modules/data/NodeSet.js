import { Node } from "./Node.js";

/** Define a set of Nodes. */
export class NodeSet extends Node {

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Node instance.
	 * @param name The name(s) of the node.
	 * @param parentNode The parent node.
	 * @param params The initialization parameters. */
	constructor(name, parentNode, params = {}, nodeType) {

		// Call the base class constructor
		super(name, "nodeset", parentNode, params);

		this._pointer = 0;

		// Save the node type
		// this._nodeType = nodeType;

		// If it is an array, copy the nodes
		if (Array.isArray(params)) {
			let nodes = params, nodeCount = nodes.length;
			for (let nodeIndex = 0; nodeIndex < nodeCount; nodeIndex++) {
				const node = nodes[nodeIndex];
				new nodeType(node.name, this, node);
			}
		}
	}



	// --------------------------------------------------------- PUBLIC METHODS

	/** Gets a node by index.
	 * @param index The index of the node to get.
	 * @returns The node with the given index. */
	getIndex(index) {
		return this.childNodes[index];
	}

	[Symbol.iterator]() {
		let pointer = 0;
		let components = this.childNodes;
		return {
			next() {
				if (pointer < components.length) {
					return { done: false,
						value: components[pointer++]
					};
				}
				else
					return { done: true, value: null };
			}
		};
	}
}
