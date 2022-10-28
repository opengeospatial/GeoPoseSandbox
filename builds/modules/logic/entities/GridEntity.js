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

		let size = 1000000;
		1;
		// Create the grid
		let grid = new THREE.GridHelper(size);
		this.representation.add(grid);

		let width = 1000;
		let red = new THREE.MeshPhongMaterial({ color: 0xff0000 });
		let green = new THREE.MeshPhongMaterial({ color: 0x00ff00 });

		let axis = new THREE.CylinderGeometry(size / 50, size / 50, size);

		let xAxis = new THREE.Mesh(axis, red);
		xAxis.rotateX(Math.PI / 2);
		grid.add(xAxis);

		let yAxis = new THREE.Mesh(axis, green);
		yAxis.rotateZ(Math.PI / 2);
		grid.add(yAxis);

	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the GridEntity class. */
GridEntity.type = new Type("grid-entity", GridEntity, Entity.type);
