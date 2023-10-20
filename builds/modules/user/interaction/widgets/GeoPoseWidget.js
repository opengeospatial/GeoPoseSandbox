import { Type } from "../../../data/Type.js";
import { Widget } from "../Widget.js";
import { ArrowEntity } from "../../../logic/entities/ArrowEntity.js";
import { GeoPoseBasicYPR } from "../../../data/model/poses/GeoPoseBasicYPR.js";
import { GridEntity } from "../../../logic/entities/GridEntity.js";
import { EuclideanPoseYPR } from "../../../data/model/poses/EuclideanPoseYPR.js";

/** Defines a widget for a GeoPose. */
export class GeoPoseWidget extends Widget {


	// ------------------------------------------------------ PUBLIC PROPERTIES

	/** The arrow of the widget. */
	get arrow() { return this._arrow; }

	/** The grid of the widget. */
	get grid() { return this._arrow; }

	/** The geographic frame of the widget. */
	get frame() { return this._frame; }

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new GeoPoseWidget instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data = {}) {

		// Call the base class constructor
		super(name, parent, data);

		// Create a link with the GeoFrame
		if (data.frame) {
			this._frame = data.frame;
			this._frame.links.add(this);
		}

		// Set the pose of the entity as a pose entity
		this._entity.pose = new GeoPoseBasicYPR("pose", this._entity, data);

		// Add the entities
		this._grid = new GridEntity(this._name + "Grid", this._entity);
		this._arrow = new ArrowEntity(this._name + "Arrow", this._grid);
		this._arrow.pose = new EuclideanPoseYPR("pose", this._arrow, data);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the GeoPoseWidget instance.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		// If the update is not forced, skip it when the item is already updated
		if (this.updated && !forced)
			return;

		// Update the properties of the camera
		if (!this._frame.updated) {
			this._frame.update();
		}

		// Show a message on console
		console.log("Updated: " + this.name);


		// Call the base class function
		super.update(deltaTime, forced);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Widget class. */
GeoPoseWidget.type = new Type("GeoPose-widget", GeoPoseWidget, Widget.type);

