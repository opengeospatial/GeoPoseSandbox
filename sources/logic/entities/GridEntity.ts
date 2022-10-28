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

		let size = 1000000;
		1
		// Create the grid
		let grid = new THREE.GridHelper(size);
		this.representation.add(grid);

		let width = 1000;
		let red = new THREE.MeshPhongMaterial({color: 0xff0000})
		let green = new THREE.MeshPhongMaterial({color: 0x00ff00})

		let axis = new THREE.CylinderGeometry(size/50, size/50, size)

		let xAxis = new THREE.Mesh(axis, red);
		xAxis.rotateX(Math.PI/2);
		grid.add(xAxis);

		let yAxis = new THREE.Mesh(axis, green);
		yAxis.rotateZ(Math.PI/2);
		grid.add(yAxis);

	}
}