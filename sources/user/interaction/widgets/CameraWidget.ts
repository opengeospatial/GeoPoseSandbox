import { Item } from "../../../data/Item.js";
import { Pose } from "../../../data/model/Pose.js";
import { GeoPoseBasicYPR } from "../../../data/model/poses/GeoPoseBasicYPR.js";
import { Type } from "../../../data/Type.js";
import { PresenceEntity } from "../../../logic/entities/PresenceEntity.js";
import { Layer } from "../Layer.js";
import { Widget } from "../Widget.js";


/** Defines a widget to control the camera (the presence of the user). */
export class CameraWidget extends Widget {
	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the Widget class. */
	public static type: Type = new Type("Camera-widget", CameraWidget,
		Widget.type);


	
	// ------------------------------------------------------ PUBLIC PROPERTIES

	/** The arrow of the widget. */
	get pose(): Pose { return this._entity.pose; }

	
	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new GeoPoseWidget instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name?: string, parent?: Item, data: any = {}) {

		// Call the base class constructor
		super(name, parent, data);

		// Check the parent
		if (!parent || !parent.type.is(Layer.type))
			throw Error("Invalid parent");
		
		// Get the entity
		this._entity = (parent as Layer).presence.entity;

		// Set the pose of the entity as a pose entity
		this._entity.pose = new GeoPoseBasicYPR("pose", this._entity, data);

		// Deserialize the initialization data
		if (data != undefined) this._entity.pose.deserialize(data);
	}

}
