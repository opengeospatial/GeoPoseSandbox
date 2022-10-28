import { Item } from "../../../data/Item";
import { Type } from "../../../data/Type";
import { Widget } from "../Widget";
import { ShapeEntity } from "../../../logic/entities/ShapeEntity";
import { GeoPoseBasicYPR } from "../../../data/model/poses/GeoPoseBasicYPR";
import { Layer } from "../Layer";
import { GridEntity } from "../../../logic/entities/GridEntity";

/** Defines a widget for a GeoPose. */
export class GeoPoseWidget extends Widget {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the Widget class. */
	public static type: Type = new Type("GeoPose-widget", GeoPoseWidget,
		Widget.type);


	// --------------------------------------------------------- PRIVATE FIELDS

	/** The marker of the widget. */
	private _marker: ShapeEntity;

	/** The grid of the widget. */
	private _grid: GridEntity;


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** The marker of the widget. */
	get marker(): ShapeEntity { return this._marker; }

	/** The grid of the widget. */
	get grid(): GridEntity { return this._marker; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new PlanetWidget instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name?: string, parent?: Item, data?: any) {

		// Call the base class constructor
		super(name, parent);

		// Add the entities
		this._grid = new GridEntity(this._name + "Grid", this._entity, data);
		this._marker = new ShapeEntity(this._name + "Marker", this._entity, data);

		// Set the pose of the entity as a pose entity
		this._entity.pose = new GeoPoseBasicYPR("pose", this._entity);

		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}
}
