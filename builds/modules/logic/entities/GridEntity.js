import * as THREE from "../../../externals/three.module.js";
import { Type } from "../../data/Type.js";
import { Entity } from "../Entity.js";

/** Defines a Grid entity. */
export class GridEntity extends Entity {

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new GridEntity instance.
	 * @param name The name of the entity.
	 * @param parentNode The parent entity. */
	constructor(name, parent, radius = 1) {

		// Call the base class constructor
		super(name, parent);

		// Create the grid
		let grid = new THREE.GridHelper(1000000);
		grid.rotateZ(Math.PI / 2);
		this.representation.add(grid);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the GridEntity class. */
GridEntity.type = new Type("grid-entity", GridEntity, Entity.type);
