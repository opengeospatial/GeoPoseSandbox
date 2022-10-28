import * as THREE from "three"
import { Item } from "../../data/Item";
import { Type } from "../../data/Type";
import { Entity } from "../Entity";

/** Defines a Grid entity. */
export class GridEntity extends Entity {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the GridEntity class. */
	public static type: Type = new Type("grid-entity", GridEntity, Entity.type);

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new GridEntity instance.
	 * @param name The name of the entity. 
	 * @param parentNode The parent entity. */
	constructor (name: string, parent?: Entity, radius: number = 1) {
		
		// Call the base class constructor
		super(name, parent)

		// Create the grid
		let grid = new THREE.GridHelper(1000000);
		grid.rotateZ(Math.PI/2);
		this.representation.add(grid);
	}
}