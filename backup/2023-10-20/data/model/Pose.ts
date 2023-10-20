import { Item } from "../Item.js"
import { Type } from "../Type.js"
import { Collection } from "../Collection.js"
import { Frame } from "./Frame.js"
import { Position } from "./Position.js"
import { Orientation } from "./Orientation.js"
import { Extension } from "./Extension.js"
import { Vector } from "../items/complex/Vector.js"

/** Defines a Pose of an object. */
export class Pose extends Item {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the Pose class. */
	public static type: Type = new Type("pose", Pose, Item.type);


	// ------------------------------------------------------- PROTECTED FIELDS
	
	/** The geodetic frame of the Pose. */
	protected _frame: Frame;

	/** The position of the Pose. */
	protected _position: Position;

	/** The orientation of the Pose. */
	protected _orientation: Orientation;

	/** The parent Pose. */
	protected _parentPose: Pose;

	/** The children Poses. */
	protected _childPoses: Collection<Pose>;

	/** The extensions of the Pose. */
	protected _extensions: Collection<Extension>;

	/** The relative position of the Pose. */
	private _relativePosition: Vector;

	/** The absolute position of the Pose. */
	private _absolutePosition: Vector;

	/** The relative orientation of the Pose. */
	private _relativeOrientation: Vector;

	/** The vertical vector of the Pose. */
	private _verticalVector: Vector;

	/** The forward vector of the Pose. */
	private _forwardVector: Vector;

	
	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The geodetic frame of the Pose. */
	get frame(): Frame { return this._frame; }

	/** The position of the Pose. */
	get position(): Position { return this._position; }

	/** The orientation of the Pose. */
	get orientation(): Orientation { return this._orientation; }

	/** The parent Pose. */
	get parent(): Pose { return this._parentPose; }

	/** The child Poses. */
	get childPoses(): Collection<Pose> { return this._childPoses; }

	/** The extensions of the Pose. */
	get extensions(): Collection<Extension> { return this._extensions; }

	/** The relative position of the Pose. */
	get relativePosition() { return this._relativePosition; }

	/** The absolute position of the Pose. */
	get absolutePosition() { return this._absolutePosition; }

	/** The relative orientation of the Pose. */
	get relativeOrientation() { return this._relativeOrientation; }

	/** The vertical vector of the Pose. */
	get verticalVector() { return this._verticalVector; }

	/** The forward vector of the Pose. */
	get forwardVector() { return this._forwardVector; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Pose class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name?: string, parent?: Item, data?: any) { 
		
		// Call the base class constructor
		super(name, parent, data);

		// Create the child items
		this._position = new Position("position", this);
		this._orientation = new Orientation("orientation", this);
		this._childPoses = new Collection<Pose>([Pose.type], this);
		this._extensions = new Collection<Extension>([Extension.type], this);
		this._relativePosition = new Vector("relativePosition", this);
		this._absolutePosition = new Vector("absolutePosition", this);
		this._relativeOrientation = new Vector("relativeOrientation", this);
		this._verticalVector = new Vector("verticalVector", this);
		this._forwardVector = new Vector("forwardVector", this);
		this._verticalVector = new Vector("verticalVector", this);

		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}
}