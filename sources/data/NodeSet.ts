import { Node } from "./Node";

/** Define a set of Nodes. */
export class NodeSet<NodeType> extends Node implements Iterable<NodeType> {

	private _pointer = 0;

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Node instance.
	 * @param name The name(s) of the node.
	 * @param parentNode The parent node.
	 * @param params The initialization parameters. */
	constructor(name, parentNode, params: any = {}, nodeType?: any) {

		// Call the base class constructor
		super(name, "nodeset", parentNode, params);

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
	getIndex(index: number): NodeType { 
		return this.childNodes[index] as unknown as NodeType;
	}

	[Symbol.iterator]() {
		let pointer = 0;
		let components = this.childNodes;
		return {
			next(): IteratorResult<NodeType> {
				if (pointer < components.length) {
					return { done: false,
						value: components[pointer++] as unknown as NodeType
				}} else return { done: true, value: null };
			}
		}
	}
}