// ----------------------------------------------------------- EXPORTS SEQUENCE

// Manage the exports of the entire framework to avoid circular references
// Note: The "js" file extensions are not correct, but they are necessary for 
// TSC to properly link the files without an additional build system/extension

export * from "./logic/Event.js";
export * from "./data/Type.js";
export * from "./data/Item.js";
export * from "./data/Collection.js";
export * from "./data/Serialization.js";

export * from "./data/types/Simple.js";
export * from "./data/types/simple/Boolean.js";
export * from "./data/types/simple/Number.js";
export * from "./data/types/simple/String.js";
export * from "./data/types/Measure.js";
export * from "./data/types/measures/Angle.js";
export * from "./data/types/measures/Distance.js";
export * from "./data/types/measures/Size.js";
export * from "./data/types/measures/Time.js";
export * from "./data/types/Complex.js";
export * from "./data/types/complex/Vector.js";
export * from "./data/types/complex/Color.js";
export * from "./data/types/complex/Euler.js";
export * from "./data/types/complex/Quaternion.js";
export * from "./data/types/Shape.js";
export * from "./data/types/shapes/Box.js";
export * from "./data/types/shapes/Ellipsoid.js";
export * from "./data/types/shapes/Sphere.js";

export * from "./data/model/Frame.js";
export * from "./data/model/frames/EuclideanFrame.js";
export * from "./data/model/frames/GeoFrame.js";
export * from "./data/model/Position.js";
export * from "./data/model/positions/EuclideanPosition.js";
export * from "./data/model/positions/GeoPosition.js";
export * from "./data/model/Orientation.js";
export * from "./data/model/orientations/AxisAngleOrientation.js";
export * from "./data/model/orientations/LookAtOrientation.js";
export * from "./data/model/orientations/MatrixOrientation.js";
export * from "./data/model/orientations/QuaternionOrientation.js";
export * from "./data/model/orientations/YawPitchRollOrientation.js";
export * from "./data/model/Extension.js";
export * from "./data/model/Pose.js";
export * from "./data/model/GeoPose.js";
export * from "./data/model/poses/EuclideanPoseQuaternion.js";
export * from "./data/model/poses/EuclideanPoseYPR.js";
export * from "./data/model/poses/GeoPoseBasicQuaternion.js";
export * from "./data/model/poses/GeoPoseBasicYPR.js";


export * from "./logic/Event.js";
export * from "./logic/Entity.js";
export * from "./logic/entities/ArrowEntity.js";
export * from "./logic/entities/AtmosphereEntity.js";
export * from "./logic/entities/BackgroundEntity.js";
export * from "./logic/entities/GraticuleEntity.js";
export * from "./logic/entities/GridEntity.js";
export * from "./logic/entities/PresenceEntity.js";
export * from "./logic/entities/ShapeEntity.js";
export * from "./logic/entities/SpaceEntity.js";
export * from "./logic/entities/TerrainEntity.js";

export * from "./user/User.js";
export * from "./user/interaction/View.js";
export * from "./user/interaction/ViewPort.js";
export * from "./user/interaction/Layer.js";
export * from "./user/interaction/Space.js";
export * from "./user/interaction/Presence.js";
export * from "./user/interaction/Widget.js";
export * from "./user/interaction/widgets/BackgroundWidget.js";
export * from "./user/interaction/widgets/CameraWidget.js";
export * from "./user/interaction/widgets/GeoPoseWidget.js";
export * from "./user/interaction/widgets/PlanetWidget.js";


// ----------------------------------------------------------------- MAIN CLASS

import { Item } from "./data/Item.js";
import { Type } from "./data/Type.js";
import { Collection } from "./data/Collection.js";
import { Space } from "./user/interaction/Space.js";
import { User } from "./user/User.js";


/** Manages the GeoPose Sandbox. */
export class GeoPoseSandbox extends Item {


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The name of the GeoPose Sandbox. */
	static get frameworkName() { return "GeoPose Sandbox"; }

	/** The version number of the GeoPose Sandbox. */
	static get frameworkVersion() { return "0.1"; }

	/** The list of GeoPoseSandbox instances. */
	static get instances() {
		return GeoPoseSandbox._instances;
	}

	/** Indicates if the GeoPose Sandbox should be automatically initialized. */
	static get autoInit() { return GeoPoseSandbox._autoInit; }
	static set autoInit(value) { GeoPoseSandbox._autoInit = value; }

	/** The interaction spaces of the GeoPoseSandbox instance. */
	get spaces() { return this._spaces; }

	/** The interaction spaces of the GeoPoseSandbox instance. */
	get users() { return this._users; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new GeoPoseSandbox instance.
	 * @param data The initialization data. */
	constructor(data) {

		// Call the parent class constructor
		super("root");

		// Create the child items
		this._spaces = new Collection([Space.type], this);
		this._users = new Collection([User.type], this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);

		// Add the instance to the list
		GeoPoseSandbox._instances.push(this);

		// Create the basic data items, if not defined
		if (this._spaces.count == 0)
			this._spaces.add(new Space("DefaultSpace", this));
		if (this._users.count == 0)
			this._users.add(new User("DefaultUser", this));

		// Show a initialization message on console
		console.log(GeoPoseSandbox.frameworkName + " " +
			GeoPoseSandbox.frameworkVersion + " Initialized");
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Initializes a new GeoPoseSandbox instance.
	 * @param params The initialization parameters.
	 * @returns The new GeoPoseSandbox instance. */
	static init(params = {}) { return new GeoPoseSandbox(params); }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the GeoPoseWidget class. */
GeoPoseSandbox.type = new Type("root", GeoPoseSandbox, Item.type);


// --------------------------------------------------------- PRIVATE FIELDS

/** The global list of GeoPoseSandbox instances. */
GeoPoseSandbox._instances = [];

/** Indicates if the GeoPose Sandbox should be automatically initialized.
 * This value is true by default to allow custom HTML elements. */
GeoPoseSandbox._autoInit = true;

//# sourceMappingURL=GeoPoseSandbox.js.map