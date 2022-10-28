import * as THREE from "three"
import { Item } from "../../data/Item";
import { Type } from "../../data/Type";
import { Entity } from "../Entity";
import { Ellipsoid } from "../../data/items/shapes/Ellipsoid";
import { String } from "../../data/items/simple/String";


/** Defines a Graticule Entity. */
export class GraticuleEntity extends Entity {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the GraticuleEntity class. */
	public static type: Type = new Type("graticule-entity", GraticuleEntity,
		Entity.type);


	// --------------------------------------------------------- PRIVATE FIELDS

	/** The lines of the graticule. */
	private _lines: THREE.LineSegments;

	/** The shape of the graticule. */
	private _ellipsoid: Ellipsoid;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The shape of the graticule. */
	get ellipsoid(): Ellipsoid { return this._ellipsoid; }
	
	
	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new GraticuleEntity instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	 constructor(name?: string, parent?: Item, data?: any) {

		// Call the base class constructor
		super(name, parent);
		
		// Create the child items
		this._ellipsoid = new Ellipsoid("shape", this, data);

		// Deserialize the initialization data
		if (data) this.deserialize(data);

		// Add the mesh geometry
		this._lines = new THREE.LineSegments(
			new THREE.EdgesGeometry(new THREE.SphereGeometry(1,36,18), 0.001),
			new THREE.LineBasicMaterial({color: 0xffffff}));
		this._representation.add(this._lines);
		
	}

	
	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the GraticuleEntity instance.
	 * @param deltaTime The update time. 
	 * @param forced Indicates whether the update is forced or not. */
	 update(deltaTime: number = 0, forced: boolean = false) {

		// Show a message on console
		// console.log("Updated GraticuleEntity")

		if (!this._ellipsoid.updated) {
			this._lines.scale.set(this._ellipsoid.radiusX.value * 1.005,
				this._ellipsoid.radiusY.value * 1.01, 
				this._ellipsoid.radiusZ.value * 1.01);
		}

		// Call the base class function
		super.update(deltaTime, forced);
	}
}