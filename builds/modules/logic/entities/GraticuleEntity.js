import * as THREE from "../../../externals/three.module.js";
import { Type } from "../../data/Type.js";
import { Entity } from "../Entity.js";
import { Ellipsoid } from "../../data/items/shapes/Ellipsoid.js";


/** Defines a Graticule Entity. */
export class GraticuleEntity extends Entity {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new GraticuleEntity instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._ellipsoid = new Ellipsoid("shape", this, data);

		// Deserialize the initialization data
		if (data)
			this.deserialize(data);

		// Add the mesh geometry
		this._lines = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.SphereGeometry(1, 36, 18), 0.001), new THREE.LineBasicMaterial({ color: 0xffffff }));
		// this._representation.add(this._lines);1

		let DEG2RAD = (Math.PI / 180), width = 0.001;
		let red = new THREE.MeshBasicMaterial({ color: 0x880000 });
		let green = new THREE.MeshBasicMaterial({ color: 0x008800 });
		let white = new THREE.MeshBasicMaterial({ color: 0xffffff });

		let torus = new THREE.TorusGeometry(1, width, 8, 36);
		let equator = new THREE.Mesh(torus, red);
		equator.rotateX(Math.PI / 2);
		this._representation.add(equator);
		let greenwich = new THREE.Mesh(torus, green);
		this._representation.add(greenwich);

		// Create the meridian lines
		for (let lat = 10; lat < 90; lat += 10) {
			let a = lat * DEG2RAD, sin = Math.sin(a), cos = Math.cos(a);
			let meridian = new THREE.TorusGeometry(cos, width, 8, 36);
			let meridianP = new THREE.Mesh(meridian, white), meridianN = new THREE.Mesh(meridian, white);
			meridianP.rotateX(Math.PI / 2);
			meridianN.rotateX(Math.PI / 2);
			meridianP.position.y = sin;
			meridianN.position.y = -sin;
			this._representation.add(meridianP, meridianN);
		}

		// Create the parallel lines
		for (let lng = 10; lng < 180; lng += 10) {
			let parallel = new THREE.Mesh(torus, white);
			parallel.rotateY(lng * DEG2RAD);
			this._representation.add(parallel);
		}

	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The shape of the graticule. */
	get ellipsoid() { return this._ellipsoid; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the GraticuleEntity instance.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		// Show a message on console
		// console.log("Updated GraticuleEntity")

		if (!this._ellipsoid.updated) {
			this._representation.scale.set(this._ellipsoid.radiusX.value * 1.005, this._ellipsoid.radiusY.value * 1.01, this._ellipsoid.radiusZ.value * 1.01);
		}

		// Call the base class function
		super.update(deltaTime, forced);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the GraticuleEntity class. */
GraticuleEntity.type = new Type("graticule-entity", GraticuleEntity, Entity.type);
