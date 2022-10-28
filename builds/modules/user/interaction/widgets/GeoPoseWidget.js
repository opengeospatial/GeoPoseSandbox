import { Type } from "../../../data/Type.js";
import { Widget } from "../Widget.js";
import { ShapeEntity as ArrowEntity } from "../../../logic/entities/ShapeEntity.js";
import { GeoPoseBasicYPR } from "../../../data/model/poses/GeoPoseBasicYPR.js";
import { GridEntity } from "../../../logic/entities/GridEntity.js";

/** Defines a widget for a GeoPose. */
export class GeoPoseWidget extends Widget {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new PlanetWidget instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Add the entities
		this._grid = new GridEntity(this._name + "Grid", this._entity);
		this._arrow = new ArrowEntity(this._name + "Arrow", this._entity);

		// Set the pose of the entity as a pose entity
		this._entity.pose = new GeoPoseBasicYPR("pose", this._entity);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** The arrow of the widget. */
	get arrow() { return this._arrow; }

	/** The grid of the widget. */
	get grid() { return this._arrow; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Widget class. */
GeoPoseWidget.type = new Type("GeoPose-widget", GeoPoseWidget, Widget.type);

