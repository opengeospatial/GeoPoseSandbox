import { Node } from "./Node";

/** Define a set of Nodes. */
export class NodeSet<NodeType> extends Node {

// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Node instance.
	 * @param name The name(s) of the node.
	 * @param parentNode The parent node.
	 * @param params The initialization parameters. */
	constructor(name, parentNode, params: any = {}, nodeType?) {
		
		// Call the base class constructor
		super(name, parentNode, params);

		// Save the node type
		this._nodeType = nodeType;

		// If it is an array, copy the nodes
		if(Array.isArray(params)) {
			let nodes = params, nodeCount = nodes.length;
			for (let nodeIndex = 0; nodeIndex < nodeCount; nodeIndex++) {
				const node = nodes[nodeIndex];
				new nodeType(node.name, this, node);
			}
		}
	}
}