import { Node } from "../types/Node";
import { Shape } from "../types/Shape";
import { Box } from "../types/shapes/Box";
import { Ellipsoid } from "../types/shapes/Ellipsoid";
import { Sphere } from "../types/shapes/Sphere";
import { Pose } from "./Pose";
import { NodeSet } from "../types/NodeSet";
import { String } from "../types/String";


/** Defines an Entity in a Scene. */
export class Entity extends Node {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The pose of the Entity. */
	private _pose: Pose;

	/** The representation of the Entity. */
	private _shape: Shape;

	/** The model of the Entity. */
	private _model: String;

	/** The entities of the Scene. */
	private _entities: NodeSet<Entity>;


	// --------------------------------------------------- PUBLIC STATIC FIELDS

	/** A dictionary of Entity instances. */
	public static instances = {};


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** Gets the pose of the Entity. */
	get pose(): Pose { return this._pose; }

	/** Gets the shape of the Entity. */
	get shape(): Shape { return this._shape; }

	/** Gets the model of the Entity. */
	get model(): String { return this._model; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Pose class.
	 * @param name The name(s) of the node.
	 * @param parentNode The parent node.
	 * @param params The initialization parameters. */
	constructor(name: any, parentNode?: Node, params: any = {}) {

		// Call the parent constructor
		super(name, parentNode, params);

		// Create the child nodes
		this._pose = new Pose("pose", this, params.pose);
		this._model = new String("model", this, params.model);
		this._entities = new NodeSet<Entity>("entities", this, params.entities,
			Entity);

		// Define the shape
		if (params.shape) {
			let shapeType;
			switch (params.shape.type) {
				case "sphere": shapeType = Sphere; break;
				case "ellipsoid": shapeType = Ellipsoid; break;
				case "box": shapeType = Box; break;
				default: throw Error("Invalid shape type"); break;
			}
			this._shape = new shapeType("shape", this, params.shape);
		}

		// Add the entity to the list of instances
		Entity.instances[name] = this;
		console.log("Entity created: " + this.name);
	}
}
