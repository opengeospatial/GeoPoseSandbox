import { Item } from "../Item";
import { Type } from "../Type";
import { Collection } from "../Collection";
import { Frame } from "./Frame";
import { Position } from "./Position";
import { Orientation } from "./Orientation";
import { Extension } from "./Extension";

/** Defines a Pose of an object. */
export class Pose extends Item {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the Pose class. */
	public static type: Type = new Type("pose", Pose, Item.type);


	// ------------------------------------------------------- PROTECTED FIELDS
	
	/** The position of the Pose. */
	protected _position: Position;

	/** The orientation of the Pose. */
	protected _orientation: Orientation;

	/** The parent Pose. */
	protected _parentPose: Pose;

	/** The children Poses. */
	protected _childPoses: Collection<Pose>;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The position of the Pose. */
	get position(): Position { return this._position; }

	/** The orientation of the Pose. */
	get orientation(): Orientation { return this._orientation; }

	/** The parent Pose. */
	get parent(): Pose { return this._parentPose; }

	/** The child Poses. */
	get childPoses(): Collection<Pose> { return this._childPoses; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Pose class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name?: string, parent?: Item, data?: any) { 
		
		// Call the base class constructor
		super(name, parent);

		// Create the child items
		// this._position = new Position("position", this);
		// this._orientation = new Orientation("orientation", this);
		this._childPoses = new Collection<Pose>([Pose.type], this);

		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}
}