import { Item } from "../../../data/Item";
import { Type } from "../../../data/Type";
import { Widget } from "../Widget";
import { ShapeEntity as ArrowEntity } from "../../../logic/entities/ShapeEntity";
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

	/** The arrow of the widget. */
	private _arrow: ArrowEntity;

	/** The grid of the widget. */
	private _grid: GridEntity;


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** The arrow of the widget. */
	get arrow(): ArrowEntity { return this._arrow; }

	/** The grid of the widget. */
	get grid(): GridEntity { return this._arrow; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new PlanetWidget instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name?: string, parent?: Item, data?: any) {

		// Call the base class constructor
		super(name, parent);

		// Add the entities
		this._grid = new GridEntity(this._name + "Grid", this._entity);
		this._arrow = new ArrowEntity(this._name + "Arrow", this._entity);

		// Set the pose of the entity as a pose entity
		this._entity.pose = new GeoPoseBasicYPR("pose", this._entity);

		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}
}
