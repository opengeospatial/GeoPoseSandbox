// ----------------------------------------------------------- EXPORTS SEQUENCE

// Manage the exports of the entire framework to avoid circular references
// Note: The "js" file extensions are not correct, but they are necessary for 
// TSC to properly link the files without an additional build system/extension

export { Item } from "./data/Item.js";
export { Type } from "./data/Type.js";
export { Collection } from "./data/Collection.js";
export { Serialization, SerializationFormat } from "./data/Serialization.js";

export { Simple } from "./data/items/Simple.js";
export { Boolean } from "./data/items/simple/Boolean.js";
export { Number } from "./data/items/simple/Number.js";
export { String } from "./data/items/simple/String.js";
export { Measure, MeasurementUnit } from "./data/items/Measure.js";
export { Angle } from "./data/items/measures/Angle.js";
export { Distance } from "./data/items/measures/Distance.js";
export { Size } from "./data/items/measures/Size.js";
export { Time } from "./data/items/measures/Time.js";
export { Complex } from "./data/items/Complex.js";
export { Vector } from "./data/items/complex/Vector.js";
export { Color } from "./data/items/complex/Color.js";
export { Euler } from "./data/items/complex/Euler.js";
export { Quaternion } from "./data/items/complex/Quaternion.js";
export { Shape } from "./data/items/Shape.js";
export { Box } from "./data/items/shapes/Box.js";
export { Ellipsoid } from "./data/items/shapes/Ellipsoid.js";
export { Sphere } from "./data/items/shapes/Sphere.js";

export { Frame } from "./data/model/Frame.js"
export { EuclideanFrame } from "./data/model/frames/EuclideanFrame.js"
export { GeoFrame } from "./data/model/frames/GeoFrame.js"
export { Position } from "./data/model/Position.js"
export { EuclideanPosition } from "./data/model/positions/EuclideanPosition.js"
export { GeoPosition } from "./data/model/positions/GeoPosition.js"
export { OrbitalPosition } from "./data/model/positions/OrbitalPosition.js"
export { Orientation } from "./data/model/Orientation.js"
export { AxisAngleOrientation } from "./data/model/orientations/AxisAngleOrientation.js"
export { LookAtOrientation } from "./data/model/orientations/LookAtOrientation.js"
export { MatrixOrientation } from "./data/model/orientations/MatrixOrientation.js"
export { QuaternionOrientation } from "./data/model/orientations/QuaternionOrientation.js"
export { YawPitchRollOrientation } from "./data/model/orientations/YawPitchRollOrientation.js"
export { Pose } from "./data/model/Pose.js"
export { EuclideanPoseQuaternion } from "./data/model/poses/EuclideanPoseQuaternion.js"
export { EuclideanPoseYPR } from "./data/model/poses/EuclideanPoseYPR.js"
export { GeoPoseBasicQuaternion } from "./data/model/poses/GeoPoseBasicQuaternion.js"
export { GeoPoseBasicYPR } from "./data/model/poses/GeoPoseBasicYPR.js"
export { Extension } from "./data/model/Extension.js"
export { GeoPose } from "./data/model/GeoPose.js"

export { Event } from "./logic/Event.js"
export { Behavior } from "./logic/Behavior.js"
export { ViewPort } from "./logic/ViewPort.js"
export { Entity } from "./logic/Entity.js"
export { ArrowEntity } from "./logic/entities/ArrowEntity.js"
export { AtmosphereEntity } from "./logic/entities/AtmosphereEntity.js"
export { BackgroundEntity } from "./logic/entities/BackgroundEntity.js"
export { GraticuleEntity } from "./logic/entities/GraticuleEntity.js"
export { GridEntity } from "./logic/entities/GridEntity.js"
export { PresenceEntity } from "./logic/entities/PresenceEntity.js"
export { ShapeEntity } from "./logic/entities/ShapeEntity.js"
export { SpaceEntity } from "./logic/entities/SpaceEntity.js"
export { TerrainEntity } from "./logic/entities/TerrainEntity.js"

export { User } from "./user/User.js"
export { View } from "./user/interaction/View.js"
export { Layer } from "./user/interaction/Layer.js"
export { Space } from "./user/interaction/Space.js"
export { Presence } from "./user/interaction/Presence.js"
export { Widget } from "./user/interaction/Widget.js"
export { BackgroundWidget } from "./user/interaction/widgets/BackgroundWidget.js"
export { CameraWidget } from "./user/interaction/widgets/CameraWidget.js"
export { GeoPoseWidget } from "./user/interaction/widgets/GeoPoseWidget.js"
export { PlanetWidget } from "./user/interaction/widgets/PlanetWidget.js"


// ----------------------------------------------------------------- MAIN CLASS

import { Item } from "./data/Item.js";
import { Type } from "./data/Type.js";
import { Collection } from "./data/Collection.js";
import { Space } from "./user/interaction/Space.js";
import { User } from "./user/User.js";


/** Manages the GeoPose Sandbox. */
export class GeoPoseSandbox extends Item {

	// -------------------------------------------------------- PUBLIC METADATA

	/** The data type associated to the GeoPoseWidget class. */
	public static type: Type = new Type("root", GeoPoseSandbox, Item.type);

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The global list of GeoPoseSandbox instances. */
	private static _instances: GeoPoseSandbox[] = [];

	/** Indicates if the GeoPose Sandbox should be automatically initialized. 
	 * This value is true by default to allow custom HTML elements. */
	private static _autoInit: boolean = true;

	/** The interaction spaces of the GeoPoseSandbox instance. */
	private _spaces: Collection<Space>;

	/** The users of the GeoPoseSandbox instance. */
	private _users: Collection<User>;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The name of the GeoPose Sandbox. */
	static get id(): string { return "GeoPose Sandbox"; }

	/** The version number of the GeoPose Sandbox. */
	static get version(): string { return "0.1"; }

	/** The list of GeoPoseSandbox instances. */
	static get instances(): GeoPoseSandbox[] { 
		return GeoPoseSandbox._instances;
	}

	/** Indicates if the GeoPose Sandbox should be automatically initialized. */
	static get autoInit(): boolean { return GeoPoseSandbox._autoInit; }
	static set autoInit(value: boolean) { GeoPoseSandbox._autoInit = value; }

	/** The interaction spaces of the GeoPoseSandbox instance. */
	get spaces(): Collection<Space> { return this._spaces; }

	/** The interaction spaces of the GeoPoseSandbox instance. */
	get users(): Collection<User> { return this._users; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new GeoPoseSandbox instance.
	 * @param data The initialization data. */
	constructor(data?:any) {

		// Call the parent class constructor
		super("root");

		// Create the child items
		this._spaces = new Collection<Space>([Space.type], this);
		this._users = new Collection<User>([User.type], this);
		
		// Deserialize the initialization data
		if (data != undefined) this.deserialize(data);
	
		// Add the instance to the list
		GeoPoseSandbox._instances.push(this);

		// Create the basic data items, if not defined
		if (this._spaces.count == 0) 
			this._spaces.add(new Space("DefaultSpace", this));
		if (this._users.count == 0) 
			this._users.add(new User("DefaultUser", this));

		// Show a initialization message on console
		console.log(GeoPoseSandbox.id + " " + 
			GeoPoseSandbox.version + " Initialized")
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Initializes a new GeoPoseSandbox instance.
	 * @param params The initialization parameters. 
	 * @returns The new GeoPoseSandbox instance. */
	static init(params = {}) { return new GeoPoseSandbox(params); }
}


// When the page is completely loaded, unless otherwise specified otherwise, 
// automatically initialize the Sandbox (to allow the use of custom 
// HTML elements).
window.addEventListener("load", () => {
	if (GeoPoseSandbox.autoInit && GeoPoseSandbox.instances.length == 0) 
		GeoPoseSandbox.init();
});
