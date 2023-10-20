import { Item } from "../../../data/Item";
import { Type } from "../../../data/Type";
import { Component } from "../Component";
import { Ellipsoid } from "../../../data/items/shapes/Ellipsoid";
import { BackgroundEntity } from "../../../logic/entities/BackgroundEntity";

/** Defines a planet component for a user interaction widget. */
export class BackgroundComponent extends Component {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the Component class. */
	public static type: Type = new Type("background-component", 
		BackgroundComponent, Component.type);


	// --------------------------------------------------------- PRIVATE FIELDS

	/** The shape of the component. */
	private _background: BackgroundEntity;

	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The shape of the component. */
	get shape (): Ellipsoid { return this._background.shape; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new PlanetComponent instance.
	 * @param name The name of the data item.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	 constructor(name?: string, parent?: Item, data?: any) { 
		
		// Call the base class constructor
		super(name, parent);

		// Create the terrain entity
		this._entity = this._background = 
			new BackgroundEntity(name, this._parentEntity, data);

		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	}
}