import { Widget } from "../Widget.js";
import { ShapeComponent } from "../components/ShapeComponent.js";
import { GeoPosition } from "../../../data/model/positions/GeoPosition.js";

/** Defines a widget for a geopose. */
export class GeoPoseWidget extends Widget {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new PlanetWidget instance.
	 * @param name The name of the widget.
	 * @param parentNode The parent widget or space.
	 * @param params The initialization parameters. */
	constructor(name, parentNode, params = {}) {

		// Call the base class constructor
		super(name, "widget", parentNode, params);

		this._position = new GeoPosition("position", this, params.position);
		// this._orientation = new YawPitchRollOrientation("orientation", this,
		// 	params.orientation)

		// Add the planet Component
		this._shape = new ShapeComponent("GeoPose", this.components, params);
	}


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** The component of the widget. */
	get planetComponent() { return this._shape; }

	/** The position of the GeoPose. */
	get position() { return this._position; }

	/** The orientation of the GeoPose. */
	get orientation() { return this._orientation; }



	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the TextComponent.
	* @param forced Indicates whether the update is forced or not.
	* @param deltaTime The update time. */
	update(forced = false, deltaTime = 0) {

		let p = this._position, o = this._orientation;

		// 
		if (!this._position.updated) {
			let x = 0, y = 0, z = 0, toRadians = Math.PI / 2;
			let lat = p.latitude.value * toRadians, lng = p.longitude.value * toRadians, alt = p.altitude.value * toRadians;

			x = Math.sin(lat);
			z = Math.cos(lat);

			this._shape.entity.representation.position.set(x, y, z);
		}

		// Call the parent class update function
		super.update(forced, deltaTime);
	}
}
