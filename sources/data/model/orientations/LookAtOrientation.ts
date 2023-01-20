import { Item } from "../../Item";
import { Type } from "../../Type";
import { Orientation } from "../Orientation";
import { String } from "../../items/simple/String";
import { Vector } from "../../items/complex/Vector";


/** Defines an orientation with a target. */
export class LookAtOrientation extends Orientation {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the LookAtOrientation class. */
	public static type: Type = new Type("look-at-orientation", 
		LookAtOrientation, Orientation.type);

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The target to point towards. */
	private _targetName : String;

	/** The target position to point towards. */
	private _targetPosition : Vector;
	

	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The target to point towards. */
	get targetName(): String { return this._targetName; }

	/** The target position. */
	get targetPosition(): Vector { return this._targetPosition; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR
	
	/** Initializes a new instance of the YawPitchRollOrientation class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	 constructor(name?: string, parent?: Item, data?: any) { 
		
		// Call the base class constructor
		super(name, parent, data);

		// Create the child items
		this._targetName = new String("target", this);
		this._targetPosition = new Vector("position", this);

		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}

}