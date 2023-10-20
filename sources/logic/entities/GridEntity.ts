import * as THREE from "three"
import { Item } from "../../data/Item.js";
import { GeoPosition } from "../../data/model/positions/GeoPosition.js";
import { Type } from "../../data/Type.js";
import { Entity } from "../Entity.js";


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

		let size = 1000000, halfSize = size/2;
		let segments = 16;

		// Create the grid
		let grid = new THREE.GridHelper(size);
		grid.rotateX(-Math.PI/2);
		this.representation.add(grid);

		if (parent) {
			let geopose = parent.pose.position as GeoPosition
			if (geopose.tangentVector) {
				let t: any = geopose.tangentVector.getValues();
				let p: any = geopose.relativeValues.getValues();
				let tangent = new THREE.ArrowHelper(
					new THREE.Vector3(t.x,t.y,t.z),
					new THREE.Vector3(p.x,p.y,p.z), 100000);
				this.representation.add(tangent);
			}
		}

		// Create the axes
		let red = new THREE.MeshPhongMaterial({color: 0xff0000}),
			green = new THREE.MeshPhongMaterial({color: 0x00ff00}),
			blue = new THREE.MeshPhongMaterial({color: 0x0000ff}),
			axis = new THREE.CylinderGeometry(size/50, size/50, size, segments),
			arrow = new THREE.ConeGeometry(size/20, size/10, segments),
			ball = new THREE.SphereGeometry(size/20, segments, segments),
			xAxis = new THREE.Mesh(axis, red),
			xBall = new THREE.Mesh(ball, red),
			xArrow = new THREE.Mesh(arrow, red),
			yAxis = new THREE.Mesh(axis, green),
			yBall = new THREE.Mesh(ball, green),
			yArrow = new THREE.Mesh(arrow, green),
			zAxis = new THREE.Mesh(axis, blue),
			zBall = new THREE.Mesh(ball, blue),
			zArrow = new THREE.Mesh(arrow, blue);
	

		xAxis.rotateZ(-Math.PI/2); xArrow.rotateZ(-Math.PI/2); 
		xArrow.position.x = halfSize; xBall.position.x = -halfSize;
		this.representation.add(xAxis, xBall, xArrow);

		yArrow.position.y = halfSize; yBall.position.y = -halfSize;
		this.representation.add(yAxis, yBall, yArrow);

		zAxis.rotateX(Math.PI/2); zArrow.rotateX(Math.PI/2); 
		zArrow.position.z = halfSize; zBall.position.z = -halfSize;
		this.representation.add(zAxis, zBall, zArrow);

	}
}