import { GeoPoseBasicYPR } from "../../../data/model/poses/GeoPoseBasicYPR.js";
import { Type } from "../../../data/Type.js";
import { Layer } from "../Layer.js";
import { Widget } from "../Widget.js";


/** Defines a widget to control the camera (the presence of the user). */
export class CameraWidget extends Widget {



	// ------------------------------------------------------ PUBLIC PROPERTIES

	/** The arrow of the widget. */
	get pose() { return this._entity.pose; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new GeoPoseWidget instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data = {}) {

		// Call the base class constructor
		super(name, parent, data);

		// Check the parent
		if (!parent || !parent.type.is(Layer.type))
			throw Error("Invalid parent");

		// Get the entity
		this._entity = parent.presence.entity;

		// Set the pose of the entity as a pose entity
		this._entity.pose = new GeoPoseBasicYPR("pose", this._entity, data);

		// Deserialize the initialization data
		if (data != undefined)
			this._entity.pose.deserialize(data);
	}
}
// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Widget class. */
CameraWidget.type = new Type("Camera-widget", CameraWidget, Widget.type);

