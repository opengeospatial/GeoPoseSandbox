

/** Manages the GeoPose Sandbox. */
export class GeoPoseSandbox {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new GeoPoseSandbox instance.
	 * @param params The initialization parameters. */
	constructor(params = {}) {

		/** The Viewports for user interaction. */
		this._viewports = [];

		// Add the instance to the list
		GeoPoseSandbox._instances.push(this);

		// Create a viewport
		this._viewports.push(new Viewport(params));

		// Show a message on console
		console.log(GeoPoseSandbox.appName + " " +
			GeoPoseSandbox.version + " Initialized");
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The application name of the Geopose Sandbox. */
	static get appName() { return "GeoPose Sandbox"; }

	/** The version number of the Geopose Sandbox. */
	static get version() { return "0.1"; }

	/** The list of GeoPoseSandbox instances. */
	static get instances() {
		return GeoPoseSandbox._instances;
	}

	/** The interaction space. */
	get space() { return this._space; }

	/** The Viewports for user interaction. */
	get viewports() { return this._viewports; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Initializes a new GeoPoseSandbox instance.
	 * @param params The initialization parameters.
	 * @returns The new GeoPoseSandbox instance. */
	static init(params = {}) { return new GeoPoseSandbox(params); }
}

// --------------------------------------------------------- PRIVATE FIELDS

/** The list of GeoPoseSandbox instances. */
GeoPoseSandbox._instances = [];



/** Defines a data node (a element in a hierarchy). */
export class Node {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Node instance.
	 * @param name The name(s) of the node.
	 * @param type The type of the node.
	 * @param parentNode The parent node.
	 * @param params The initialization parameters. */
	constructor(name, type, parentNode, params = {}) {

		/** The name of the data element. */
		this._updated = false;

		/** The type data of the Node. */
		this._type = {};

		if (!type)
			throw Error("Invalid type for Node '" + name + "'");
		if (typeof type == "string")
			this._type[""] = type;
		else {
			throw Error("Invalid node type");
			let keys = Object.keys(type);
			for (let keyIndex = 0; keyIndex < keys.length; keyIndex++) {
				const key = keys[keyIndex];
				console.log(key);
				if (typeof type[key] != "string")
					continue;
				this._type[key] = type[key];
			}
		}

		this._name = name || this._type[""];

		// Create the array of child nodes
		this._childNodes = [];

		// If there is a parent node, create a double connection
		if (parentNode) {
			this._parentNode = parentNode;
			parentNode._childNodes.push(this);
			// if (parentNode._type) parentNode._parentNode._childNodes.push(this);
		}

		// Propagate the need to update this node upwards in the hierarchy
		this.updated = false;
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The name of the node. */
	get name() { return this._name; }

	/** Gets the full name of the node. */
	get fullName() {
		return ((this._parentNode) ?
			this._parentNode.fullName + '.' : '') + this.name;
	}

	/** The parent of the node. */
	get parentNode() { return this._parentNode; }

	/** The children of the node. */
	get childNodes() { return this._childNodes; }

	/** A boolean indicating if the node has been updated or not. */
	get updated() { return this._updated; }
	set updated(value) {
		this._updated = value;
		// Propagate negative updated values upwards in the hierarchy
		let parent = this._parentNode;
		if (parent && parent._updated && !value)
			parent.updated = false;
	}

	/** The type data of the node. */
	get type() { return this._type[""]; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the Node.
	 * @param forced Indicates whether the update is forced or not.
	 * @param deltaTime The update time. */
	update(forced = false, deltaTime = 0) {

		// If the update is not forced, skip it when the node is already updated
		if (this._updated && !forced)
			return;

		// Call the event function
		if (Node.onPreUpdate)
			Node.onPreUpdate(this);

		// Update the children
		let childIndex, childCount = this._childNodes.length;
		for (childIndex = 0; childIndex < childCount; childIndex++) {
			this._childNodes[childIndex].update(forced, deltaTime);
		}

		// Call the event function
		if (Node.onPostUpdate)
			Node.onPostUpdate(this);

		// Mark this node as updated
		this._updated = true;
	}
}




/** Define the basic class of a Pose Extension. */
export class Extension extends Node {

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Extension class.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name, parentNode, params = {}) {

		// Call the parent constructor
		super(name, "extension", parentNode, params);
	}
}




/** Defines an Extension to specify the 3D boundary of a Pose.
 * (Useful for geofencing). */
export class BoundaryExtension extends Extension {
}






/** Defines an Extension to specify the 3D dimensions of a Pose. */
export class DimensionsExtension extends Extension {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the LocalPosition class.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name, parentNode, params = {}) {

		// Call the parent constructor
		super(name, parentNode, params);

		// If the params is an array, convert it to an object
		if (Array.isArray(params)) {
			params = {
				width: (params.length > 0) ? params[0] : 0,
				depth: (params.length > 1) ? params[1] : 0,
				height: (params.length > 2) ? params[2] : 0
			};
		}

		// Create the children nodes
		this._width = new Size("width", this, params.x || 0);
		this._depth = new Size("depth", this, params.depth || 0);
		this._height = new Size("height", this, params.height || 0);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** Gets the Size in the X axis. */
	get width() { return this._width; }

	/** Gets the Size in the Y axis. */
	get depth() { return this._depth; }

	/** Gets the Size in the Z axis. */
	get height() { return this._height; }
}




/** Defines an Extension to specify how a Pose is mirrored.  */
export class MirrorExtension extends Extension {
}





/** Define the basic class of a three dimensional orientation. */
export class Orientation extends Node {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Orientation class.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name, parentNode, params = {}) {

		// Call the parent constructor
		super(name, "orientation", parentNode, params);

		// Create the children nodes
		this._relativeValues = new Quaternion("relativeValues", this);
		this._absoluteValues = new Quaternion("absoluteValues", this);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The relative orientation. */
	get relativeValues() { return this._relativeValues; }

	/** The absolute orientation. */
	get absoluteValues() { return this._absoluteValues; }
}





/** Defines the Aircraft Principal Axes Orientation.
 * @see https://en.wikipedia.org/wiki/Aircraft_principal_axes */
export class APAOrientation extends Orientation {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the APAOrientation class.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name, parentNode, params = {}) {

		// Call the parent constructor
		super(name, parentNode, params);

		// If the params is an array, convert it to an object
		if (Array.isArray(params)) {
			let v = params, l = v.length;
			params = { yaw: (l > 0) ? v[0] : 0, pitch: (l > 1) ? v[1] : 0,
				roll: (l > 2) ? v[2] : 0 };
		}

		// Create the children nodes
		this._roll = new Angle("roll", this, params.roll || 0);
		this._pitch = new Angle("pitch", this, params.pitch || 0);
		this._yaw = new Angle("yaw", this, params.yaw || 0);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The Angle in the X axis. */
	get roll() { return this._roll; }

	/** The Angle in the Y axis. */
	get pitch() { return this.pitch; }

	/** The Angle in the Z axis. */
	get yaw() { return this._yaw; }
}






/** Defines the Euler Orientation.
 * @see https://en.wikipedia.org/wiki/Euler_angles */
export class EulerOrientation extends Orientation {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the APAOrientation class.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name, parentNode, params = {}) {

		// Call the parent constructor
		super(name, parentNode, params);

		// If the params is an array, convert it to an object
		if (Array.isArray(params)) {
			let v = params, l = v.length;
			params = { x: (l > 0) ? v[0] : 0, y: (l > 1) ? v[1] : 0, z: (l > 2) ? v[2] : 0 };
		}

		// Create the children nodes
		this._x = new Angle("x", this, params.x || 0);
		this._y = new Angle("y", this, params.y || 0);
		this._z = new Angle("z", this, params.z || 0);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The Angle in the X axis. */
	get x() { return this._x; }

	/** The Angle in the Y axis. */
	get y() { return this._y; }

	/** The Angle in the Z axis. */
	get z() { return this._z; }
}






/** Defines the Orientation based on an Pose to look at. */
export class LookAtOrientation extends Orientation {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the APAOrientation class.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name, parentNode, params = {}) {

		// Call the parent constructor
		super(name, parentNode, params);

		// Create the children nodes
		this._target = new Pose("target", this, params.target);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The target Entity to look at. */
	get target() { return this._target; }
}






/** Defines a Quaternion-based Orientation.
 * @see https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation */
export class QuaternionOrientation extends Orientation {



	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the APAOrientation class.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name, parentNode, params = {}) {

		// Call the parent constructor
		super(name, parentNode, params);

		// If the params is an array, convert it to an object
		if (Array.isArray(params)) {
			let v = params, l = v.length;
			params = { x: (l > 0) ? v[0] : 0, y: (l > 1) ? v[1] : 0, z: (l > 2) ? v[2] : 0,
				w: (l > 3) ? v[3] : 1 };
		}

		// Create the children nodes
		this._x = new Measure("x", "x", this, params.x || 0);
		this._y = new Measure("y", "y", this, params.y || 0);
		this._z = new Measure("z", "z", this, params.z || 0);
		this._w = new Measure("w", "w", this, params.w || 1);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The value of the quaternion vector in the X(i) axis. */
	get x() { return this._x; }

	/** The value of the quaternion vector in the Y(j) axis. */
	get y() { return this._y; }

	/** The value of the quaternion vector in the Z(k) axis. */
	get z() { return this._z; }

	/** The rotation half-angle around the quaternion vector. */
	get w() { return this._w; }
}













/** Defines a Pose of an object. */
export class Pose extends Node {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Pose class.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name, parentNode, params = {}) {

		// Call the parent constructor
		super(name, "pose", parentNode, params);

		/** The children Poses. */
		this._children = [];

		// Analyze the initialization parameters
		if (params.type && params.type.indexOf("Geopose") == 0) {
			this._position = new GlobalPosition("position", this, {
				longitude: params.longitude,
				latitude: params.latitude,
				altitude: params.height
			});
		}

		// Create the child nodes
		this._extensions = new NodeSet("extensions", this, params.extensions, Extension);

		// Validate the position initialization parameters
		if (params.position) {
			let positionType;
			switch (params.position.type) {
				case "local":
					positionType = LocalPosition;
					break;
				case "global":
					positionType = GlobalPosition;
					break;
				case "orbital":
					positionType = OrbitalPosition;
					break;
				default:
					positionType = LocalPosition;
					break;
			}
			this._position = new positionType("position", this, params.position);
		}

		// Validate the orientation initialization parameters
		if (params.orientation) {
			let orientationType;
			switch (params.orientation.type) {
				case "apa":
				case "aircraft":
					orientationType = APAOrientation;
					break;
				case "euler":
					orientationType = EulerOrientation;
					break;
				case "quaternion":
					orientationType = QuaternionOrientation;
					break;
				case "quaternion":
					orientationType = QuaternionOrientation;
					break;
				default:
					orientationType = LocalPosition;
					break;
			}
			this._orientation = new orientationType("orientation", this, params.orientation);
		}
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The position of the Pose. */
	get position() { return this._position; }

	/** The orientation of the Pose. */
	get orientation() { return this._orientation; }

	/** The extensions of the Pose. */
	get extensions() { return this._extensions; }

	/** The parent of the Pose. */
	get parent() { return this._parent; }

	/** The children of the Pose. */
	get children() { return this._children; }
}





/** Define the basic class of a three dimensional position within a reference frame. */
export class Position extends Node {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Position class.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name, parentNode, params = {}) {

		// Call the parent constructor
		super(name, "position", parentNode, params);

		// Create the children nodes
		this._relativeValues = new Vector3("relativeValues", this);
		this._absoluteValues = new Vector3("absoluteValues", this);
		this._verticalVector = new Vector3("verticalVector", this);
		this._forwardVector = new Vector3("forwardVector", this);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The relative position. */
	get relativeValues() { return this._relativeValues; }

	/** The absolute position. */
	get absoluteValues() { return this._absoluteValues; }

	/** The vertical vector. */
	get verticalVector() { return this._verticalVector; }

	/** The forward vector. */
	get forwardVector() { return this._forwardVector; }
}






/** Defines a position in global (elliptical) coordinate system.
* (Based on PICE and LPT-ENU). */
export class GlobalPosition extends Position {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the GlobalPosition class.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name, parentNode, params = {}) {

		// Call the parent constructor
		super(name, parentNode, params);

		/** The Shape of the globe. */
		this._globe = null;

		// If the params is an array, convert it to an object
		if (Array.isArray(params)) {
			let v = params, l = v.length;
			params = { longitude: (l > 0) ? v[0] : 0,
				latitude: (l > 1) ? v[1] : 0, altitude: (l > 2) ? v[2] : 0 };
		}

		// Create the children nodes
		this._longitude = new Angle("longitude", this, params.longitude || 0);
		this._latitude = new Angle("latitude", this, params.latitude || 0);
		this._altitude = new Distance("altitude", this, params.altitude || 0);

		// TODO Improve this
		let lng = -this._longitude.value * (Math.PI / 180), lat = this._latitude.value * (Math.PI / 180), alt = this._altitude.value + 6378137, lngSin = Math.sin(lng), lngCos = Math.cos(lng), latSin = Math.sin(lat), latCos = Math.cos(lat);

		// Calculate the relative position
		this.relativeValues.x.setValue(lngCos * latCos * alt);
		this.relativeValues.y.setValue(latSin * alt);
		this.relativeValues.z.setValue(lngSin * latCos * alt);

		// Calculate the vertical vector
		this.verticalVector.x.setValue(0);
		this.verticalVector.y.setValue(-lng);
		this.verticalVector.z.setValue(lat - Math.PI / 2);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The Angle in degrees around the equator of the globe. */
	get longitude() { return this._longitude; }

	/** The Angle in degrees around the prime meridian of the globe. */
	get latitude() { return this._latitude; }

	/** The vertical Distance relative to the surface to the globe. */
	get altitude() { return this._altitude; }

	/** The Shape of the globe. */
	get globe() { return this._globe; }
}






/** Defines a position in local (euclidean) coordinate system. */
export class LocalPosition extends Position {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the LocalPosition class.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name, parentNode, params = {}) {

		// Call the parent constructor
		super(name, parentNode, params);

		// If the params is an array, convert it to an object
		if (Array.isArray(params)) {
			let v = params, l = v.length;
			params = { x: (l > 0) ? v[0] : 0, y: (l > 1) ? v[1] : 0, z: (l > 2) ? v[2] : 0 };
		}

		// Create the children nodes
		this._x = new Distance("x", this, params.x || 0);
		this._y = new Distance("y", this, params.y || 0);
		this._z = new Distance("z", this, params.z || 0);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The Distance in the X axis. */
	get x() { return this._x; }

	/** The Distance in the Y axis. */
	get y() { return this._y; }

	/** The Distance in the Z axis. */
	get z() { return this._z; }
}






/** Defines a position in Orbital (Keplerian) coordinate system. */
export class OrbitalPosition extends Position {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the OrbitalPosition class.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name, parentNode, params = {}) {

		// Call the parent constructor
		super(name, parentNode, params);

		// If the params is an array, convert it to an object
		if (Array.isArray(params)) {
			let v = params, l = v.length;
			params = {};
		}

		// Create the children nodes
		this._eccentricity = new Distance("eccentricity", this, params.eccentricity || 1);
		this._semimajor_axis = new Distance("semimajor_axis", this, params.semimajor_axis || 0);
		this._inclination = new Distance("inclination", this, params.semimajor_axis || 0);

		// TODO Complete this
		this.relativeValues.x.setValue(-this._semimajor_axis.value / 2);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The eccentricity of the orbit. */
	get eccentricity() { return this._eccentricity; }
}




/** Define a set of Nodes. */
export class NodeSet extends Node {

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Node instance.
	 * @param name The name(s) of the node.
	 * @param parentNode The parent node.
	 * @param params The initialization parameters. */
	constructor(name, parentNode, params = {}, nodeType) {

		// Call the base class constructor
		super(name, "nodeset", parentNode, params);

		this._pointer = 0;

		// Save the node type
		// this._nodeType = nodeType;

		// If it is an array, copy the nodes
		if (Array.isArray(params)) {
			let nodes = params, nodeCount = nodes.length;
			for (let nodeIndex = 0; nodeIndex < nodeCount; nodeIndex++) {
				const node = nodes[nodeIndex];
				new nodeType(node.name, this, node);
			}
		}
	}



	// --------------------------------------------------------- PUBLIC METHODS

	/** Gets a node by index.
	 * @param index The index of the node to get.
	 * @returns The node with the given index. */
	getIndex(index) {
		return this.childNodes[index];
	}

	[Symbol.iterator]() {
		let pointer = 0;
		let components = this.childNodes;
		return {
			next() {
				if (pointer < components.length) {
					return { done: false, value: components[pointer++]
					};
				}
				else
					return { done: true, value: null };
			}
		};
	}
}




/** Defines an external data resource. */
export class Resource extends Node {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The URL of the Resource. */
	// private _url: String;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The URL of the Resource. */
	// get url(): String { return this._url; }

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR


	/** Initializes a new Resource instance.
	 * @param name The name of the resource. */
	constructor(name) {

		// Call the base class constructor
		super(name, "resource");

		// Create the URL of the Resource
		// this._url = new String("url", this);
	}



	// --------------------------------------------------------- PUBLIC METHODS

	/** Loads the resource.
	 * @param url The URL of the Resource. */
	load(url) { }
}




/** Defines a Audio Resource. */
export class AudioResource extends Resource {
}





/** Defines a Font Resource. */
export class FontResource extends Resource {


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The representation of the Font. */
	get representation() { return this._representation; }


	// --------------------------------------------------------- PUBLIC METHODS

	// /** */
	// static load(url): Font {
	// 	let loader = new THREE.FontLoader();
	// 	loader.parse(defaultFontData);
	// 	// loader.load()
	// }

	static parse(data) {
		let loader = new THREE.FontLoader();

		let fontResource = new FontResource("font");
		fontResource._representation = loader.parse(defaultFontData);
		return fontResource;
	}
}

// Use a default font data
let defaultFontData = {
	"familyName": "Open Sans",
	"original_font_information": {
		"format": 0,
		"copyright": "Digitized data copyright © 2010-2011, Google Corporation.",
		"fontFamily": "Open Sans",
		"fontSubfamily": "Regular",
		"uniqueID": "1.10;1ASC;OpenSans-Regular",
		"fullName": "Open Sans Regular",
		"version": "Version 1.10",
		"postScriptName": "OpenSans-Regular",
		"trademark": "Open Sans is a trademark of Google and may be registered in certain jurisdictions.",
		"manufacturer": "Ascender Corporation",
		"manufacturerURL": "http://www.ascendercorp.com/",
		"designerURL": "http://www.ascendercorp.com/typedesigners.html",
		"licence": "Licensed under the Apache License, Version 2.0",
		"licenceURL": "http://www.apache.org/licenses/LICENSE-2.0"
	},
	"ascender": 1485,
	"descender": -407,
	"underlinePosition": -104,
	"underlineThickness": 69,
	"boundingBox": {
		"yMin": -376,
		"xMin": -764,
		"yMax": 1455,
		"xMax": 1672
	},
	"resolution": 1000,
	"cssFontWeight": "normal",
	"cssFontStyle": "normal",
	"glyphs": {
		"0": { "ha": 794, "x_min": 69, "x_max": 725, "o": "m 725 497 q 644 113 725 240 q 396 -14 563 -14 q 153 116 236 -14 q 69 497 69 246 q 150 882 69 756 q 396 1007 231 1007 q 641 876 557 1007 q 725 497 725 745 m 183 497 q 234 182 183 281 q 396 83 285 83 q 559 183 509 83 q 610 497 610 283 q 559 810 610 711 q 396 909 509 909 q 234 811 285 909 q 183 497 183 713 z " },
		"1": { "ha": 794, "x_min": 127, "x_max": 485, "o": "m 485 0 l 375 0 l 375 707 q 380 873 375 795 q 349 844 366 859 q 187 711 331 828 l 127 789 l 390 991 l 485 991 l 485 0 z " },
		"2": { "ha": 794, "x_min": 68, "x_max": 720, "o": "m 720 0 l 68 0 l 68 97 l 329 359 q 486 532 448 480 q 543 632 524 583 q 562 737 562 681 q 514 863 562 817 q 380 909 466 909 q 263 889 319 909 q 140 815 208 869 l 81 892 q 379 1006 218 1006 q 598 934 519 1006 q 677 742 677 863 q 625 555 677 648 q 427 322 572 463 l 210 110 l 210 104 l 720 104 l 720 0 z " },
		"3": { "ha": 794, "x_min": 64, "x_max": 713, "o": "m 682 758 q 629 603 682 663 q 478 522 576 543 l 478 517 q 655 441 597 502 q 713 281 713 380 q 614 63 713 139 q 335 -14 516 -14 q 191 -2 256 -14 q 64 40 125 10 l 64 147 q 201 99 128 115 q 339 82 274 82 q 596 283 596 82 q 313 464 596 464 l 215 464 l 215 561 l 314 561 q 498 612 430 561 q 566 754 566 663 q 516 868 566 827 q 380 909 466 909 q 258 892 315 909 q 126 827 200 874 l 69 903 q 210 978 130 951 q 378 1006 290 1006 q 602 940 522 1006 q 682 758 682 873 z " },
		"4": { "ha": 794, "x_min": 29, "x_max": 766, "o": "m 766 228 l 619 228 l 619 0 l 511 0 l 511 228 l 29 228 l 29 326 l 500 997 l 619 997 l 619 330 l 766 330 l 766 228 m 511 330 l 511 660 q 518 879 511 757 l 513 879 q 452 771 480 814 l 142 330 l 511 330 z " },
		"5": { "ha": 794, "x_min": 90, "x_max": 714, "o": "m 378 606 q 624 528 534 606 q 714 315 714 450 q 616 74 714 161 q 346 -14 518 -14 q 90 40 178 -14 l 90 149 q 208 101 138 118 q 347 83 279 83 q 533 140 467 83 q 599 302 599 196 q 345 510 599 510 q 172 490 280 510 l 114 528 l 151 991 l 644 991 l 644 888 l 248 888 l 222 590 q 378 606 300 606 z " },
		"6": { "ha": 794, "x_min": 79, "x_max": 726, "o": "m 79 424 q 193 861 79 716 q 529 1006 307 1006 q 650 993 606 1006 l 650 896 q 530 913 597 913 q 287 813 371 913 q 195 501 203 714 l 203 501 q 439 618 277 618 q 649 537 572 618 q 726 318 726 456 q 642 75 726 163 q 414 -14 557 -14 q 170 102 260 -14 q 79 424 79 218 m 412 82 q 562 143 509 82 q 615 318 615 203 q 566 473 615 416 q 418 529 516 529 q 306 504 357 529 q 225 435 255 479 q 195 343 195 391 q 222 213 195 273 q 299 117 249 153 q 412 82 349 82 z " },
		"7": { "ha": 794, "x_min": 64, "x_max": 724, "o": "m 193 0 l 604 888 l 64 888 l 64 991 l 724 991 l 724 901 l 318 0 l 193 0 z " },
		"8": { "ha": 794, "x_min": 71, "x_max": 722, "o": "m 396 1006 q 611 943 532 1006 q 690 768 690 880 q 645 635 690 695 q 500 525 600 574 q 671 404 621 467 q 722 257 722 340 q 636 60 722 134 q 400 -14 550 -14 q 156 56 241 -14 q 71 253 71 125 q 278 518 71 423 q 144 632 184 571 q 103 770 103 694 q 183 942 103 878 q 396 1006 262 1006 m 182 250 q 238 123 182 169 q 397 78 295 78 q 555 125 498 78 q 611 256 611 173 q 558 373 611 321 q 374 472 505 424 q 227 376 273 429 q 182 250 182 323 m 395 914 q 262 873 310 914 q 214 765 214 833 q 254 658 214 703 q 401 568 294 613 q 539 656 498 609 q 579 765 579 703 q 530 874 579 833 q 395 914 481 914 z " },
		"9": { "ha": 794, "x_min": 72, "x_max": 720, "o": "m 720 568 q 269 -14 720 -14 q 144 0 191 -14 l 144 97 q 268 79 199 79 q 514 180 431 79 q 604 489 597 281 l 596 489 q 497 403 559 433 q 358 374 435 374 q 149 452 227 374 q 72 672 72 531 q 158 916 72 827 q 386 1006 245 1006 q 563 954 487 1006 q 679 803 638 902 q 720 568 720 703 m 386 909 q 236 847 289 909 q 183 673 183 785 q 232 520 183 576 q 380 464 281 464 q 494 489 442 464 q 576 557 546 514 q 606 648 606 601 q 578 780 606 720 q 500 875 550 840 q 386 909 450 909 z " },
		" ": { "ha": 361, "x_min": 0, "x_max": 0, "o": "" },
		"!": { "ha": 371, "x_min": 103, "x_max": 267, "o": "m 221 273 l 150 273 l 115 991 l 256 991 l 221 273 m 103 72 q 184 164 103 164 q 245 140 224 164 q 267 72 267 117 q 245 4 267 28 q 184 -20 223 -20 q 126 2 149 -20 q 103 72 103 23 z " },
		"\"": { "ha": 557, "x_min": 90, "x_max": 467, "o": "m 216 991 l 189 633 l 118 633 l 90 991 l 216 991 m 467 991 l 439 633 l 368 633 l 340 991 l 467 991 z " },
		"#": { "ha": 897, "x_min": 35, "x_max": 861, "o": "m 665 610 l 621 379 l 812 379 l 812 292 l 604 292 l 547 0 l 454 0 l 511 292 l 306 292 l 250 0 l 158 0 l 212 292 l 35 292 l 35 379 l 229 379 l 275 610 l 87 610 l 87 696 l 290 696 l 346 991 l 440 991 l 385 696 l 591 696 l 648 991 l 739 991 l 682 696 l 861 696 l 861 610 l 665 610 m 322 379 l 528 379 l 572 610 l 367 610 l 322 379 z " },
		"$": { "ha": 794, "x_min": 89, "x_max": 703, "o": "m 703 304 q 633 152 703 212 q 440 77 564 92 l 440 -81 l 353 -81 l 353 71 q 205 82 277 71 q 89 115 134 94 l 89 221 q 219 180 145 196 q 353 164 292 164 l 353 463 q 158 565 214 507 q 102 715 102 623 q 171 861 102 804 q 353 930 239 918 l 353 1054 l 440 1054 l 440 932 q 681 882 565 928 l 646 793 q 440 840 545 833 l 440 546 q 600 480 547 512 q 677 406 652 448 q 703 304 703 364 m 587 296 q 557 375 587 345 q 440 435 527 405 l 440 171 q 587 296 587 191 m 216 717 q 247 634 216 665 q 353 575 277 603 l 353 838 q 251 795 286 827 q 216 717 216 764 z " },
		"%": { "ha": 1143, "x_min": 71, "x_max": 1072, "o": "m 164 696 q 189 523 164 581 q 271 465 214 465 q 382 696 382 465 q 271 925 382 925 q 189 868 214 925 q 164 696 164 811 m 475 696 q 423 462 475 541 q 271 383 371 383 q 123 464 176 383 q 71 696 71 545 q 121 928 71 850 q 271 1006 172 1006 q 422 925 369 1006 q 475 696 475 844 m 761 298 q 786 125 761 182 q 868 68 811 68 q 952 124 925 68 q 979 298 979 181 q 952 470 979 414 q 868 526 925 526 q 786 470 811 526 q 761 298 761 414 m 1072 298 q 1020 65 1072 144 q 868 -14 968 -14 q 720 67 772 -14 q 668 298 668 148 q 719 530 668 452 q 868 608 769 608 q 1018 529 964 608 q 1072 298 1072 449 m 897 991 l 347 0 l 248 0 l 798 991 l 897 991 z " },
		"&": { "ha": 1014, "x_min": 77, "x_max": 1011, "o": "m 281 794 q 305 705 281 747 q 389 603 330 663 q 510 697 476 654 q 545 796 545 740 q 510 881 545 848 q 416 914 475 914 q 318 882 356 914 q 281 794 281 849 m 386 87 q 657 192 549 87 l 361 479 q 254 403 286 433 q 208 338 223 373 q 193 260 193 304 q 246 134 193 180 q 386 87 298 87 m 77 257 q 124 413 77 345 q 293 550 171 481 q 215 648 235 614 q 182 717 194 681 q 170 791 170 753 q 236 950 170 893 q 421 1007 302 1007 q 594 950 531 1007 q 657 793 657 894 q 611 659 657 720 q 458 534 565 597 l 734 269 q 795 368 772 311 q 833 492 818 425 l 947 492 q 808 197 901 298 l 1011 0 l 856 0 l 730 121 q 568 18 650 49 q 383 -14 485 -14 q 157 58 237 -14 q 77 257 77 130 z " },
		"'": { "ha": 307, "x_min": 90, "x_max": 216, "o": "m 216 991 l 189 633 l 118 633 l 90 991 l 216 991 z " },
		"(": { "ha": 411, "x_min": 56, "x_max": 370, "o": "m 56 380 q 108 717 56 560 q 260 991 161 873 l 370 991 q 223 704 272 861 q 174 382 174 547 q 224 64 174 219 q 368 -220 274 -92 l 260 -220 q 108 50 160 -104 q 56 380 56 203 z " },
		")": { "ha": 411, "x_min": 41, "x_max": 355, "o": "m 355 380 q 303 48 355 202 q 151 -220 250 -106 l 43 -220 q 187 63 137 -92 q 237 382 237 219 q 188 704 237 547 q 41 991 139 861 l 151 991 q 303 716 251 873 q 355 380 355 559 z " },
		"*": { "ha": 766, "x_min": 58, "x_max": 704, "o": "m 446 1055 l 416 787 l 686 863 l 704 739 l 446 718 l 614 497 l 497 433 l 378 679 l 269 433 l 150 497 l 314 718 l 58 739 l 78 863 l 343 787 l 314 1055 l 446 1055 z " },
		"+": { "ha": 794, "x_min": 71, "x_max": 722, "o": "m 443 536 l 722 536 l 722 443 l 443 443 l 443 154 l 349 154 l 349 443 l 71 443 l 71 536 l 349 536 l 349 827 l 443 827 l 443 536 z " },
		",": { "ha": 340, "x_min": 43, "x_max": 248, "o": "m 237 161 l 248 146 q 197 -12 230 78 q 127 -179 163 -102 l 43 -179 q 83 -5 61 -109 q 114 161 105 99 l 237 161 z " },
		"-": { "ha": 447, "x_min": 57, "x_max": 390, "o": "m 57 321 l 57 424 l 390 424 l 390 321 l 57 321 z " },
		".": { "ha": 370, "x_min": 103, "x_max": 267, "o": "m 103 72 q 124 141 103 117 q 183 164 144 164 q 244 141 222 164 q 267 72 267 117 q 244 4 267 28 q 183 -20 222 -20 q 126 2 149 -20 q 103 72 103 23 z " },
		"/": { "ha": 510, "x_min": 14, "x_max": 496, "o": "m 496 991 l 126 0 l 14 0 l 383 991 l 496 991 z " },
		":": { "ha": 370, "x_min": 103, "x_max": 267, "o": "m 103 72 q 124 141 103 117 q 183 164 144 164 q 244 141 222 164 q 267 72 267 117 q 244 4 267 28 q 183 -20 222 -20 q 126 2 149 -20 q 103 72 103 23 m 103 671 q 183 762 103 762 q 267 671 267 762 q 244 603 267 627 q 183 579 222 579 q 126 601 149 579 q 103 671 103 622 z " },
		";": { "ha": 370, "x_min": 43, "x_max": 264, "o": "m 237 161 l 248 146 q 197 -12 230 78 q 127 -179 163 -102 l 43 -179 q 83 -5 61 -109 q 114 161 105 99 l 237 161 m 100 671 q 180 762 100 762 q 264 671 264 762 q 241 603 264 627 q 180 579 219 579 q 120 603 141 579 q 100 671 100 627 z " },
		"<": { "ha": 794, "x_min": 71, "x_max": 722, "o": "m 722 164 l 71 450 l 71 517 l 722 842 l 722 741 l 192 489 l 722 267 l 722 164 z " },
		"=": { "ha": 794, "x_min": 81, "x_max": 711, "o": "m 81 582 l 81 675 l 711 675 l 711 582 l 81 582 m 81 304 l 81 397 l 711 397 l 711 304 l 81 304 z " },
		">": { "ha": 794, "x_min": 71, "x_max": 722, "o": "m 71 267 l 602 488 l 71 741 l 71 842 l 722 517 l 722 450 l 71 164 l 71 267 z " },
		"?": { "ha": 596, "x_min": 18, "x_max": 559, "o": "m 196 273 l 196 310 q 220 440 196 389 q 311 549 245 492 q 428 666 404 627 q 452 761 452 705 q 407 868 452 830 q 279 905 363 905 q 175 893 226 905 q 58 847 124 880 l 18 939 q 286 1006 146 1006 q 488 942 416 1006 q 559 762 559 878 q 546 675 559 713 q 507 604 533 637 q 396 496 481 570 q 306 399 328 437 q 283 296 283 360 l 283 273 l 196 273 m 163 72 q 244 164 163 164 q 305 140 283 164 q 326 72 326 117 q 304 4 326 28 q 244 -20 283 -20 q 186 2 209 -20 q 163 72 163 23 z " },
		"@": { "ha": 1249, "x_min": 82, "x_max": 1166, "o": "m 1166 494 q 1137 318 1166 398 q 1053 194 1107 238 q 928 150 998 150 q 829 185 869 150 q 782 275 789 220 l 777 275 q 699 183 749 216 q 579 150 648 150 q 420 219 477 150 q 363 408 363 289 q 443 633 363 547 q 653 720 523 720 q 758 711 699 720 q 863 688 816 703 l 846 369 l 846 354 q 936 233 846 233 q 1036 306 998 233 q 1075 496 1075 379 q 1025 711 1075 618 q 882 853 975 803 q 669 903 789 903 q 406 840 518 903 q 235 661 294 777 q 176 392 176 545 q 286 74 176 185 q 600 -37 395 -37 q 896 21 743 -37 l 896 -69 q 600 -126 766 -126 q 218 9 354 -126 q 82 387 82 144 q 155 701 82 564 q 361 915 227 839 q 669 990 496 990 q 929 929 815 990 q 1104 754 1042 867 q 1166 494 1166 642 m 465 406 q 597 233 465 233 q 750 446 738 233 l 760 623 q 653 636 711 636 q 515 575 565 636 q 465 406 465 514 z " },
		"A": { "ha": 879, "x_min": 0, "x_max": 879, "o": "m 760 0 l 636 315 l 239 315 l 117 0 l 0 0 l 392 996 l 489 996 l 879 0 l 760 0 m 600 419 l 485 726 q 439 869 463 785 q 396 726 424 804 l 279 419 l 600 419 z " },
		"B": { "ha": 900, "x_min": 136, "x_max": 823, "o": "m 136 991 l 416 991 q 702 932 614 991 q 790 746 790 873 q 741 601 790 658 q 597 526 692 543 l 597 519 q 823 282 823 481 q 733 75 823 149 q 482 0 644 0 l 136 0 l 136 991 m 252 567 l 441 567 q 617 605 564 567 q 671 734 671 644 q 611 855 671 818 q 421 892 551 892 l 252 892 l 252 567 m 252 469 l 252 98 l 458 98 q 639 145 578 98 q 700 290 700 191 q 638 426 700 382 q 449 469 576 469 l 252 469 z " },
		"C": { "ha": 876, "x_min": 85, "x_max": 835, "o": "m 561 903 q 303 794 397 903 q 208 496 208 685 q 299 195 208 301 q 559 89 391 89 q 796 126 663 89 l 796 25 q 542 -14 693 -14 q 204 119 323 -14 q 85 497 85 252 q 142 766 85 650 q 308 943 199 881 q 562 1006 416 1006 q 835 949 718 1006 l 786 850 q 561 903 673 903 z " },
		"D": { "ha": 1013, "x_min": 136, "x_max": 928, "o": "m 928 505 q 794 130 928 260 q 411 0 661 0 l 136 0 l 136 991 l 440 991 q 800 863 671 991 q 928 505 928 735 m 806 501 q 708 793 806 695 q 419 892 611 892 l 252 892 l 252 100 l 392 100 q 702 201 598 100 q 806 501 806 302 z " },
		"E": { "ha": 772, "x_min": 136, "x_max": 689, "o": "m 689 0 l 136 0 l 136 991 l 689 991 l 689 889 l 252 889 l 252 570 l 663 570 l 663 468 l 252 468 l 252 103 l 689 103 l 689 0 z " },
		"F": { "ha": 717, "x_min": 136, "x_max": 689, "o": "m 252 0 l 136 0 l 136 991 l 689 991 l 689 889 l 252 889 l 252 526 l 663 526 l 663 424 l 252 424 l 252 0 z " },
		"G": { "ha": 1011, "x_min": 85, "x_max": 909, "o": "m 572 519 l 909 519 l 909 37 q 749 -1 831 12 q 561 -14 668 -14 q 210 120 336 -14 q 85 496 85 254 q 147 767 85 650 q 326 944 209 883 q 599 1006 442 1006 q 895 947 758 1006 l 850 846 q 591 903 715 903 q 309 795 410 903 q 207 496 207 687 q 305 191 207 295 q 593 87 403 87 q 794 111 696 87 l 794 416 l 572 416 l 572 519 z " },
		"H": { "ha": 1025, "x_min": 136, "x_max": 889, "o": "m 889 0 l 774 0 l 774 467 l 252 467 l 252 0 l 136 0 l 136 991 l 252 991 l 252 570 l 774 570 l 774 991 l 889 991 l 889 0 z " },
		"J": { "ha": 371, "x_min": -109, "x_max": 244, "o": "m -8 -261 q -109 -243 -72 -261 l -109 -144 q -8 -158 -60 -158 q 94 -117 59 -158 q 129 0 129 -77 l 129 991 l 244 991 l 244 9 q 179 -190 244 -119 q -8 -261 114 -261 z " },
		"K": { "ha": 852, "x_min": 136, "x_max": 852, "o": "m 852 0 l 717 0 l 355 481 l 252 389 l 252 0 l 136 0 l 136 991 l 252 991 l 252 500 l 701 991 l 838 991 l 439 561 l 852 0 z " },
		"L": { "ha": 721, "x_min": 136, "x_max": 689, "o": "m 136 0 l 136 991 l 252 991 l 252 104 l 689 104 l 689 0 l 136 0 z " },
		"M": { "ha": 1254, "x_min": 136, "x_max": 1118, "o": "m 575 0 l 239 879 l 233 879 q 243 631 243 774 l 243 0 l 136 0 l 136 991 l 310 991 l 624 174 l 629 174 l 946 991 l 1118 991 l 1118 0 l 1003 0 l 1003 639 q 1013 878 1003 749 l 1007 878 l 668 0 l 575 0 z " },
		"N": { "ha": 1047, "x_min": 136, "x_max": 911, "o": "m 911 0 l 779 0 l 237 832 l 232 832 q 243 564 243 686 l 243 0 l 136 0 l 136 991 l 267 991 l 807 163 l 812 163 q 806 280 811 181 q 803 422 802 380 l 803 991 l 911 991 l 911 0 z " },
		"O": { "ha": 1082, "x_min": 85, "x_max": 997, "o": "m 997 497 q 877 123 997 259 q 542 -14 756 -14 q 204 120 323 -14 q 85 498 85 254 q 204 874 85 741 q 543 1007 323 1007 q 877 871 757 1007 q 997 497 997 736 m 207 497 q 293 192 207 296 q 542 87 378 87 q 791 191 707 87 q 875 497 875 295 q 791 801 875 697 q 543 904 707 904 q 293 800 378 904 q 207 497 207 696 z " },
		"P": { "ha": 836, "x_min": 136, "x_max": 765, "o": "m 765 703 q 662 471 765 552 q 368 390 559 390 l 252 390 l 252 0 l 136 0 l 136 991 l 393 991 q 765 703 765 991 m 252 489 l 355 489 q 577 538 509 489 q 646 697 646 588 q 581 844 646 795 q 380 892 517 892 l 252 892 l 252 489 z " },
		"Q": { "ha": 1082, "x_min": 85, "x_max": 997, "o": "m 997 497 q 920 180 997 307 q 704 9 844 54 l 940 -236 l 772 -236 l 579 -12 l 542 -14 q 204 120 323 -14 q 85 498 85 254 q 204 874 85 741 q 543 1007 323 1007 q 877 871 757 1007 q 997 497 997 736 m 207 497 q 293 192 207 296 q 542 87 378 87 q 791 191 707 87 q 875 497 875 295 q 791 801 875 697 q 543 904 707 904 q 293 800 378 904 q 207 497 207 696 z " },
		"R": { "ha": 859, "x_min": 136, "x_max": 835, "o": "m 252 412 l 252 0 l 136 0 l 136 991 l 408 991 q 678 922 591 991 q 765 711 765 852 q 566 446 765 515 l 835 0 l 699 0 l 458 412 l 252 412 m 252 511 l 410 511 q 589 560 532 511 q 646 705 646 608 q 588 847 646 804 q 401 890 530 890 l 252 890 l 252 511 z " },
		"S": { "ha": 762, "x_min": 72, "x_max": 696, "o": "m 696 264 q 601 60 696 133 q 343 -14 506 -14 q 72 32 167 -14 l 72 143 q 205 102 133 117 q 347 87 277 87 q 521 131 463 87 q 579 253 579 175 q 558 337 579 304 q 489 398 538 370 q 342 461 441 426 q 144 578 203 511 q 85 755 85 646 q 171 938 85 870 q 399 1006 257 1006 q 671 951 547 1006 l 635 851 q 396 903 512 903 q 253 863 304 903 q 201 754 201 824 q 220 670 201 703 q 284 609 239 637 q 422 549 330 582 q 637 429 578 493 q 696 264 696 366 z " },
		"T": { "ha": 768, "x_min": 12, "x_max": 755, "o": "m 441 0 l 326 0 l 326 889 l 12 889 l 12 991 l 755 991 l 755 889 l 441 889 l 441 0 z " },
		"U": { "ha": 1011, "x_min": 126, "x_max": 885, "o": "m 885 991 l 885 350 q 783 83 885 180 q 501 -14 680 -14 q 224 84 322 -14 q 126 353 126 182 l 126 991 l 241 991 l 241 345 q 309 154 241 220 q 509 87 377 87 q 702 154 634 87 q 770 346 770 221 l 770 991 l 885 991 z " },
		"V": { "ha": 827, "x_min": 0, "x_max": 827, "o": "m 703 991 l 827 991 l 469 0 l 355 0 l 0 991 l 122 991 l 350 350 q 412 135 389 239 q 476 354 437 245 l 703 991 z " },
		"W": { "ha": 1286, "x_min": 18, "x_max": 1267, "o": "m 1002 0 l 888 0 l 688 664 q 656 775 673 708 q 637 856 638 842 q 590 660 623 766 l 396 0 l 282 0 l 18 991 l 140 991 l 297 379 q 345 146 330 250 q 399 389 363 270 l 576 991 l 699 991 l 885 383 q 940 146 918 278 q 989 380 953 242 l 1145 991 l 1267 991 l 1002 0 z " },
		"X": { "ha": 802, "x_min": 5, "x_max": 796, "o": "m 796 0 l 665 0 l 399 436 l 127 0 l 5 0 l 335 518 l 28 991 l 155 991 l 401 599 l 650 991 l 772 991 l 465 522 l 796 0 z " },
		"Y": { "ha": 778, "x_min": 0, "x_max": 778, "o": "m 389 496 l 653 991 l 778 991 l 447 385 l 447 0 l 330 0 l 330 379 l 0 991 l 126 991 l 389 496 z " },
		"Z": { "ha": 793, "x_min": 56, "x_max": 737, "o": "m 737 0 l 56 0 l 56 90 l 582 888 l 72 888 l 72 991 l 722 991 l 722 901 l 196 104 l 737 104 l 737 0 z " },
		"[": { "ha": 457, "x_min": 113, "x_max": 422, "o": "m 422 -220 l 113 -220 l 113 991 l 422 991 l 422 896 l 227 896 l 227 -123 l 422 -123 l 422 -220 z " },
		// "\\": { "ha": 510, "x_min": 16, "x_max": 497, "o": "m 126 991 l 497 0 l 385 0 l 16 991 l 126 991 z " },
		"]": { "ha": 457, "x_min": 35, "x_max": 345, "o": "m 35 -123 l 231 -123 l 231 896 l 35 896 l 35 991 l 345 991 l 345 -220 l 35 -220 l 35 -123 z " },
		"^": { "ha": 753, "x_min": 33, "x_max": 718, "o": "m 33 374 l 328 999 l 395 999 l 718 374 l 615 374 l 363 879 l 136 374 l 33 374 z " },
		"_": { "ha": 623, "x_min": -3, "x_max": 625, "o": "m 625 -214 l -3 -214 l -3 -125 l 625 -125 l 625 -214 z " },
		"`": { "ha": 802, "x_min": 267, "x_max": 533, "o": "m 533 842 l 458 842 q 354 942 414 877 q 267 1050 294 1007 l 267 1064 l 404 1064 q 465 956 426 1017 q 533 859 503 895 l 533 842 z " },
		"a": { "ha": 772, "x_min": 64, "x_max": 660, "o": "m 576 0 l 554 106 l 549 106 q 438 11 493 36 q 300 -14 382 -14 q 126 43 189 -14 q 64 205 64 100 q 424 441 64 431 l 550 446 l 550 492 q 512 621 550 579 q 392 663 475 663 q 182 606 299 663 l 147 692 q 268 739 202 722 q 399 755 333 755 q 596 696 532 755 q 660 507 660 637 l 660 0 l 576 0 m 322 79 q 487 137 427 79 q 547 298 547 195 l 547 366 l 435 361 q 241 319 300 356 q 182 204 182 282 q 219 111 182 143 q 322 79 256 79 z " },
		"b": { "ha": 851, "x_min": 119, "x_max": 774, "o": "m 465 755 q 693 655 612 755 q 774 372 774 555 q 692 88 774 189 q 465 -14 610 -14 q 333 13 393 -14 q 232 96 273 40 l 224 96 l 200 0 l 119 0 l 119 1055 l 232 1055 l 232 799 q 227 644 232 713 l 232 644 q 465 755 311 755 m 449 661 q 283 595 334 661 q 232 372 232 529 q 284 148 232 216 q 452 81 336 81 q 606 156 555 81 q 657 374 657 232 q 606 590 657 519 q 449 661 555 661 z " },
		"c": { "ha": 661, "x_min": 78, "x_max": 615, "o": "m 416 -14 q 166 86 255 -14 q 78 367 78 185 q 168 655 78 553 q 424 757 258 757 q 531 745 477 757 q 615 718 585 734 l 581 623 q 499 647 543 637 q 421 657 455 657 q 195 368 195 657 q 250 158 195 231 q 414 85 305 85 q 604 125 507 85 l 604 25 q 416 -14 530 -14 z " },
		"d": { "ha": 851, "x_min": 78, "x_max": 732, "o": "m 625 100 l 619 100 q 386 -14 541 -14 q 159 86 240 -14 q 78 370 78 186 q 159 655 78 553 q 386 757 241 757 q 618 647 537 757 l 627 647 l 622 701 l 619 753 l 619 1055 l 732 1055 l 732 0 l 640 0 l 625 100 m 400 81 q 567 143 515 81 q 619 346 619 206 l 619 370 q 567 595 619 528 q 399 663 514 663 q 247 586 300 663 q 195 368 195 509 q 247 153 195 226 q 400 81 299 81 z " },
		"e": { "ha": 779, "x_min": 78, "x_max": 707, "o": "m 433 -14 q 173 87 269 -14 q 78 366 78 187 q 166 651 78 545 q 404 757 255 757 q 625 665 544 757 q 707 422 707 573 l 707 351 l 195 351 q 261 153 198 220 q 437 85 323 85 q 675 135 557 85 l 675 35 q 562 -2 615 9 q 433 -14 509 -14 m 403 663 q 260 604 313 663 q 197 443 207 546 l 586 443 q 538 606 586 549 q 403 663 491 663 z " },
		"f": { "ha": 471, "x_min": 20, "x_max": 530, "o": "m 454 656 l 265 656 l 265 0 l 153 0 l 153 656 l 20 656 l 20 707 l 153 747 l 153 789 q 392 1063 153 1063 q 530 1039 451 1063 l 501 949 q 390 970 436 970 q 296 927 326 970 q 265 791 265 885 l 265 743 l 454 743 l 454 656 z " },
		"g": { "ha": 761, "x_min": 26, "x_max": 728, "o": "m 728 743 l 728 672 l 590 656 q 624 594 609 632 q 639 507 639 555 q 564 333 639 398 q 359 268 490 268 q 297 273 326 268 q 225 178 225 235 q 250 133 225 147 q 336 118 275 118 l 468 118 q 653 67 589 118 q 718 -81 718 16 q 619 -269 718 -204 q 330 -334 520 -334 q 105 -279 184 -334 q 26 -126 26 -225 q 70 -9 26 -58 q 192 58 113 41 q 144 98 163 71 q 125 161 125 125 q 146 233 125 202 q 215 292 168 263 q 121 372 157 315 q 85 503 85 429 q 158 691 85 625 q 366 757 231 757 q 471 743 424 757 l 728 743 m 135 -125 q 186 -216 135 -185 q 332 -248 237 -248 q 542 -205 473 -248 q 610 -90 610 -163 q 572 -6 610 -30 q 432 17 535 17 l 297 17 q 178 -20 220 17 q 135 -125 135 -56 m 196 505 q 240 387 196 427 q 363 347 284 347 q 528 507 528 347 q 361 675 528 675 q 239 632 281 675 q 196 505 196 589 z " },
		"h": { "ha": 852, "x_min": 119, "x_max": 741, "o": "m 628 0 l 628 481 q 587 616 628 572 q 457 661 545 661 q 286 597 340 661 q 232 389 232 534 l 232 0 l 119 0 l 119 1055 l 232 1055 l 232 736 q 227 640 232 678 l 233 640 q 328 725 267 694 q 468 755 389 755 q 672 691 604 755 q 741 485 741 626 l 741 0 l 628 0 z " },
		"i": { "ha": 351, "x_min": 110, "x_max": 243, "o": "m 232 0 l 119 0 l 119 743 l 232 743 l 232 0 m 110 945 q 129 1001 110 983 q 176 1019 148 1019 q 223 1001 203 1019 q 243 945 243 983 q 223 888 243 907 q 176 869 203 869 q 129 888 148 869 q 110 945 110 907 z " },
		"j": { "ha": 351, "x_min": -75, "x_max": 243, "o": "m 29 -334 q -75 -317 -35 -334 l -75 -225 q 17 -239 -28 -239 q 95 -210 70 -239 q 119 -122 119 -181 l 119 743 l 232 743 l 232 -114 q 29 -334 232 -334 m 110 945 q 129 1001 110 983 q 176 1019 148 1019 q 223 1001 203 1019 q 243 945 243 983 q 223 888 243 907 q 176 869 203 869 q 129 888 148 869 q 110 945 110 907 z " },
		"k": { "ha": 729, "x_min": 119, "x_max": 714, "o": "m 231 380 q 319 489 260 422 l 559 743 l 693 743 l 392 427 l 714 0 l 578 0 l 315 351 l 231 278 l 231 0 l 119 0 l 119 1055 l 231 1055 l 231 496 q 225 380 231 458 l 231 380 z " },
		"l": { "ha": 351, "x_min": 119, "x_max": 232, "o": "m 232 0 l 119 0 l 119 1055 l 232 1055 l 232 0 z " },
		"m": { "ha": 1292, "x_min": 119, "x_max": 1179, "o": "m 1067 0 l 1067 484 q 1029 617 1067 572 q 911 661 991 661 q 755 601 806 661 q 705 415 705 541 l 705 0 l 593 0 l 593 484 q 555 617 593 572 q 436 661 517 661 q 281 598 330 661 q 232 390 232 534 l 232 0 l 119 0 l 119 743 l 211 743 l 229 642 l 235 642 q 325 726 267 696 q 454 757 382 757 q 682 631 629 757 l 688 631 q 784 723 721 689 q 928 757 847 757 q 1117 692 1054 757 q 1179 485 1179 627 l 1179 0 l 1067 0 z " },
		"n": { "ha": 852, "x_min": 119, "x_max": 741, "o": "m 628 0 l 628 481 q 587 616 628 572 q 457 661 545 661 q 286 598 340 661 q 232 390 232 535 l 232 0 l 119 0 l 119 743 l 211 743 l 229 642 l 235 642 q 332 727 269 696 q 471 757 394 757 q 673 692 605 757 q 741 485 741 627 l 741 0 l 628 0 z " },
		"o": { "ha": 839, "x_min": 78, "x_max": 761, "o": "m 761 372 q 669 89 761 191 q 416 -14 578 -14 q 239 33 317 -14 q 120 168 162 80 q 78 372 78 255 q 169 655 78 554 q 421 757 260 757 q 669 653 577 757 q 761 372 761 549 m 195 372 q 252 155 195 230 q 419 81 309 81 q 587 155 530 81 q 644 372 644 229 q 587 588 644 514 q 418 661 530 661 q 251 589 307 661 q 195 372 195 516 z " },
		"p": { "ha": 851, "x_min": 119, "x_max": 774, "o": "m 465 -14 q 333 13 393 -14 q 232 96 273 40 l 224 96 q 232 -28 232 31 l 232 -334 l 119 -334 l 119 743 l 211 743 l 227 642 l 232 642 q 333 730 275 703 q 465 757 391 757 q 693 656 613 757 q 774 372 774 555 q 692 88 774 189 q 465 -14 610 -14 m 449 661 q 284 598 335 661 q 232 397 233 535 l 232 372 q 284 148 232 216 q 452 81 336 81 q 603 159 548 81 q 657 374 657 237 q 603 587 657 513 q 449 661 548 661 z " },
		"q": { "ha": 851, "x_min": 78, "x_max": 732, "o": "m 400 81 q 564 141 513 81 q 619 345 616 201 l 619 370 q 566 594 619 526 q 399 663 513 663 q 247 586 300 663 q 195 368 195 509 q 247 154 195 228 q 400 81 298 81 m 383 -14 q 159 87 239 -14 q 78 370 78 189 q 159 654 78 552 q 386 757 241 757 q 621 642 538 757 l 627 642 l 643 743 l 732 743 l 732 -334 l 619 -334 l 619 -16 q 627 100 619 52 l 618 100 q 383 -14 540 -14 z " },
		"r": { "ha": 567, "x_min": 119, "x_max": 547, "o": "m 458 757 q 547 749 508 757 l 532 644 q 450 654 486 654 q 296 581 360 654 q 232 399 232 508 l 232 0 l 119 0 l 119 743 l 212 743 l 225 606 l 231 606 q 330 718 272 678 q 458 757 389 757 z " },
		"s": { "ha": 663, "x_min": 72, "x_max": 599, "o": "m 599 203 q 522 43 599 99 q 304 -14 444 -14 q 74 33 157 -14 l 74 138 q 189 95 127 111 q 307 79 250 79 q 443 107 395 79 q 490 193 490 136 q 453 268 490 237 q 306 340 415 298 q 158 408 202 379 q 93 473 115 437 q 72 561 72 510 q 146 704 72 652 q 349 757 220 757 q 583 708 469 757 l 543 616 q 340 663 431 663 q 220 637 260 663 q 179 568 179 612 q 194 517 179 538 q 243 477 210 496 q 374 422 277 458 q 552 326 506 374 q 599 203 599 277 z " },
		"t": { "ha": 490, "x_min": 21, "x_max": 461, "o": "m 359 79 q 417 84 389 79 q 461 93 445 88 l 461 7 q 407 -8 443 -2 q 343 -14 372 -14 q 127 214 127 -14 l 127 656 l 21 656 l 21 710 l 127 757 l 175 916 l 240 916 l 240 743 l 456 743 l 456 656 l 240 656 l 240 218 q 272 115 240 151 q 359 79 304 79 z " },
		"u": { "ha": 852, "x_min": 111, "x_max": 733, "o": "m 225 743 l 225 261 q 267 125 225 170 q 396 81 308 81 q 567 144 513 81 q 621 353 621 208 l 621 743 l 733 743 l 733 0 l 640 0 l 624 100 l 618 100 q 522 16 583 45 q 382 -14 460 -14 q 179 51 246 -14 q 111 257 111 115 l 111 743 l 225 743 z " },
		"v": { "ha": 696, "x_min": 0, "x_max": 696, "o": "m 282 0 l 0 743 l 121 743 l 281 302 q 345 102 335 148 l 350 102 q 397 251 357 138 q 575 743 437 363 l 696 743 l 414 0 l 282 0 z " },
		"w": { "ha": 1080, "x_min": 16, "x_max": 1065, "o": "m 726 0 l 590 436 q 542 618 577 476 l 536 618 q 489 435 509 499 l 349 0 l 218 0 l 16 743 l 134 743 q 243 317 205 463 q 286 119 281 170 l 292 119 q 316 219 299 158 q 345 317 332 281 l 481 743 l 603 743 l 736 317 q 787 121 774 200 l 793 121 q 807 196 795 145 q 949 743 819 247 l 1065 743 l 860 0 l 726 0 z " },
		"x": { "ha": 728, "x_min": 26, "x_max": 700, "o": "m 298 380 l 40 743 l 168 743 l 364 458 l 559 743 l 686 743 l 428 380 l 700 0 l 572 0 l 364 301 l 154 0 l 26 0 l 298 380 z " },
		"y": { "ha": 700, "x_min": 1, "x_max": 699, "o": "m 1 743 l 122 743 l 285 319 q 351 110 338 174 l 357 110 q 394 228 366 144 q 578 743 422 312 l 699 743 l 379 -103 q 268 -281 332 -229 q 113 -334 205 -334 q 11 -322 61 -334 l 11 -232 q 94 -240 48 -240 q 260 -110 210 -240 l 301 -4 l 1 743 z " },
		"z": { "ha": 650, "x_min": 56, "x_max": 595, "o": "m 595 0 l 56 0 l 56 77 l 461 656 l 81 656 l 81 743 l 585 743 l 585 656 l 184 87 l 595 87 l 595 0 z " },
		"{": { "ha": 526, "x_min": 41, "x_max": 478, "o": "m 322 8 q 362 -92 322 -61 q 478 -125 401 -123 l 478 -220 q 279 -161 349 -218 q 208 1 208 -103 l 208 207 q 165 308 208 277 q 41 338 123 338 l 41 433 q 169 466 130 435 q 208 562 208 497 l 208 770 q 281 933 208 875 q 478 991 355 991 l 478 897 q 322 762 322 893 l 322 562 q 171 390 322 416 l 171 382 q 322 210 322 355 l 322 8 z " },
		"|": { "ha": 765, "x_min": 335, "x_max": 431, "o": "m 335 1055 l 431 1055 l 431 -336 l 335 -336 l 335 1055 z " },
		"}": { "ha": 526, "x_min": 49, "x_max": 485, "o": "m 354 390 q 203 562 203 416 l 203 762 q 49 897 203 893 l 49 991 q 245 932 174 991 q 317 770 317 873 l 317 562 q 357 466 317 496 q 485 433 397 435 l 485 338 q 359 308 402 338 q 317 207 317 277 l 317 1 q 247 -160 317 -102 q 49 -220 178 -218 l 49 -125 q 163 -92 124 -123 q 203 8 203 -61 l 203 210 q 240 328 203 287 q 354 382 277 368 l 354 390 z " },
		"~": { "ha": 794, "x_min": 71, "x_max": 722, "o": "m 229 484 q 150 461 193 484 q 71 401 107 438 l 71 504 q 236 578 138 578 q 320 568 282 578 q 419 533 359 559 q 497 505 464 514 q 562 496 530 496 q 642 517 599 496 q 722 578 686 539 l 722 476 q 557 401 653 401 q 465 413 508 401 q 374 446 422 424 q 292 475 323 467 q 229 484 262 484 z " },
		" ": { "ha": 361, "x_min": 0, "x_max": 0, "o": "" },
		"¡": { "ha": 371, "x_min": 103, "x_max": 267, "o": "m 149 464 l 220 464 l 254 -253 l 114 -253 l 149 464 m 267 667 q 184 575 267 575 q 123 599 144 575 q 103 667 103 623 q 124 734 103 709 q 184 758 146 758 q 243 736 219 758 q 267 667 267 715 z " },
		"¢": { "ha": 794, "x_min": 129, "x_max": 669, "o": "m 659 163 q 488 122 587 126 l 488 -14 l 397 -14 l 397 126 q 194 240 260 148 q 129 503 129 333 q 397 889 129 847 l 397 1006 l 489 1006 l 489 895 q 588 881 540 892 q 669 854 636 870 l 636 760 q 472 794 546 794 q 300 723 355 794 q 245 504 245 651 q 299 291 245 360 q 467 222 353 222 q 659 262 562 222 l 659 163 z " },
		"£": { "ha": 794, "x_min": 43, "x_max": 741, "o": "m 463 1004 q 707 947 591 1004 l 665 857 q 464 909 561 909 q 338 867 380 909 q 296 730 296 825 l 296 530 l 582 530 l 582 444 l 296 444 l 296 294 q 274 180 296 227 q 201 104 252 134 l 741 104 l 741 0 l 43 0 l 43 96 q 182 293 182 127 l 182 444 l 47 444 l 47 530 l 182 530 l 182 745 q 258 935 182 865 q 463 1004 334 1004 z " },
		"¤": { "ha": 794, "x_min": 83, "x_max": 710, "o": "m 125 490 q 175 646 125 573 l 83 741 l 147 803 l 239 713 q 397 762 309 762 q 553 713 484 762 l 646 803 l 710 741 l 619 647 q 669 490 669 570 q 619 332 669 401 l 708 240 l 646 178 l 553 268 q 397 220 484 220 q 239 269 307 220 l 147 179 l 85 241 l 175 334 q 125 490 125 406 m 212 490 q 266 360 212 414 q 397 306 319 306 q 530 360 476 306 q 583 490 583 414 q 529 623 583 568 q 397 677 475 677 q 266 622 319 677 q 212 490 212 566 z " },
		"¥": { "ha": 794, "x_min": 21, "x_max": 771, "o": "m 396 498 l 653 991 l 771 991 l 489 469 l 667 469 l 667 383 l 452 383 l 452 268 l 667 268 l 667 182 l 452 182 l 452 0 l 340 0 l 340 182 l 126 182 l 126 268 l 340 268 l 340 383 l 126 383 l 126 469 l 300 469 l 21 991 l 142 991 l 396 498 z " },
		"¦": { "ha": 765, "x_min": 335, "x_max": 431, "o": "m 335 1055 l 431 1055 l 431 529 l 335 529 l 335 1055 m 335 191 l 431 191 l 431 -336 l 335 -336 l 335 191 z " },
		"§": { "ha": 717, "x_min": 83, "x_max": 623, "o": "m 94 549 q 123 653 94 607 q 205 725 153 700 q 127 790 155 752 q 98 885 98 827 q 169 1014 98 967 q 372 1061 239 1061 q 490 1052 436 1061 q 610 1015 544 1042 l 574 926 q 461 962 507 953 q 364 971 416 971 q 246 951 286 971 q 207 888 207 931 q 249 819 207 847 q 395 753 290 790 q 572 655 521 707 q 623 532 623 604 q 595 423 623 471 q 517 347 567 375 q 621 193 621 292 q 541 46 621 98 q 318 -5 462 -5 q 83 39 170 -5 l 83 139 q 202 99 136 114 q 323 83 268 83 q 462 109 414 83 q 510 183 510 135 q 494 234 510 214 q 441 273 477 254 q 326 322 404 293 q 184 388 230 357 q 117 457 139 418 q 94 549 94 496 m 193 562 q 238 474 193 510 q 396 397 283 439 l 429 385 q 522 514 522 439 q 472 608 522 570 q 297 685 422 646 q 222 638 251 672 q 193 562 193 604 z " },
		"¨": { "ha": 802, "x_min": 210, "x_max": 591, "o": "m 210 945 q 228 996 210 980 q 271 1011 245 1011 q 315 996 296 1011 q 334 945 334 980 q 315 894 334 911 q 271 878 296 878 q 228 894 245 878 q 210 945 210 911 m 468 945 q 486 996 468 980 q 529 1011 504 1011 q 573 996 554 1011 q 591 945 591 980 q 573 894 591 911 q 529 878 554 878 q 486 894 504 878 q 468 945 468 911 z " },
		"©": { "ha": 1156, "x_min": 68, "x_max": 1088, "o": "m 606 718 q 475 659 521 718 q 429 496 429 600 q 472 327 429 382 q 604 272 515 272 q 747 302 663 272 l 747 218 q 681 195 715 205 q 599 186 646 186 q 397 268 467 186 q 326 496 326 349 q 401 721 326 637 q 606 804 476 804 q 772 764 692 804 l 733 684 q 606 718 660 718 m 68 496 q 136 750 68 631 q 322 937 203 869 q 578 1006 441 1006 q 832 938 713 1006 q 1019 751 951 870 q 1088 496 1088 633 q 1022 245 1088 362 q 838 57 956 127 q 578 -14 719 -14 q 319 57 437 -14 q 134 244 200 127 q 68 496 68 361 m 139 496 q 198 276 139 378 q 359 116 257 174 q 578 57 461 57 q 797 116 696 57 q 957 276 898 175 q 1017 496 1017 376 q 958 715 1017 614 q 798 875 899 816 q 578 935 697 935 q 359 876 460 935 q 198 716 258 817 q 139 496 139 615 z " },
		"ª": { "ha": 492, "x_min": 47, "x_max": 424, "o": "m 361 543 l 345 600 q 187 534 282 534 q 85 568 123 534 q 47 671 47 602 q 100 775 47 740 q 264 815 152 811 l 343 818 l 343 844 q 243 935 343 935 q 104 900 175 935 l 75 965 q 243 1003 153 1003 q 377 967 331 1003 q 424 850 424 932 l 424 543 l 361 543 m 131 671 q 207 603 131 603 q 343 725 343 603 l 343 758 l 277 755 q 166 733 201 753 q 131 671 131 714 z " },
		"«": { "ha": 690, "x_min": 56, "x_max": 636, "o": "m 56 374 l 288 650 l 368 603 l 172 366 l 368 127 l 288 79 l 56 355 l 56 374 m 323 374 l 557 650 l 636 603 l 441 366 l 636 127 l 557 79 l 323 355 l 323 374 z " },
		"¬": { "ha": 794, "x_min": 71, "x_max": 722, "o": "m 722 536 l 722 179 l 629 179 l 629 443 l 71 443 l 71 536 l 722 536 z " },
		"­": { "ha": 447, "x_min": 57, "x_max": 390, "o": "m 57 321 l 57 424 l 390 424 l 390 321 l 57 321 z " },
		"®": { "ha": 1156, "x_min": 68, "x_max": 1088, "o": "m 490 517 l 564 517 q 651 545 618 517 q 684 616 684 573 q 654 689 684 667 q 562 711 625 711 l 490 711 l 490 517 m 785 619 q 756 523 785 565 q 675 461 727 481 l 836 193 l 722 193 l 582 433 l 490 433 l 490 193 l 390 193 l 390 798 l 567 798 q 732 753 680 798 q 785 619 785 709 m 68 496 q 136 750 68 631 q 322 937 203 869 q 578 1006 441 1006 q 832 938 713 1006 q 1019 751 951 870 q 1088 496 1088 633 q 1022 245 1088 362 q 838 57 956 127 q 578 -14 719 -14 q 319 57 437 -14 q 134 244 200 127 q 68 496 68 361 m 139 496 q 198 276 139 378 q 359 116 257 174 q 578 57 461 57 q 797 116 696 57 q 957 276 898 175 q 1017 496 1017 376 q 958 715 1017 614 q 798 875 899 816 q 578 935 697 935 q 359 876 460 935 q 198 716 258 817 q 139 496 139 615 z " },
		"¯": { "ha": 694, "x_min": -4, "x_max": 699, "o": "m 699 1055 l -4 1055 l -4 1141 l 699 1141 l 699 1055 z " },
		"°": { "ha": 595, "x_min": 86, "x_max": 509, "o": "m 86 794 q 148 944 86 882 q 297 1006 209 1006 q 447 944 385 1006 q 509 794 509 883 q 481 689 509 737 q 404 612 453 640 q 297 583 354 583 q 148 644 209 583 q 86 794 86 705 m 164 794 q 204 700 164 739 q 298 661 243 661 q 392 700 353 661 q 431 794 431 738 q 392 889 431 851 q 298 928 354 928 q 203 889 242 928 q 164 794 164 850 z " },
		"±": { "ha": 794, "x_min": 71, "x_max": 722, "o": "m 443 536 l 722 536 l 722 443 l 443 443 l 443 154 l 349 154 l 349 443 l 71 443 l 71 536 l 349 536 l 349 827 l 443 827 l 443 536 m 71 1 l 71 94 l 722 94 l 722 1 l 71 1 z " },
		"²": { "ha": 482, "x_min": 33, "x_max": 443, "o": "m 443 397 l 33 397 l 33 468 l 193 624 q 281 715 254 682 q 320 774 309 748 q 332 836 332 800 q 304 906 332 882 q 235 929 277 929 q 166 916 199 929 q 86 869 133 903 l 41 929 q 233 1004 130 1004 q 373 960 323 1004 q 422 840 422 916 q 392 735 422 786 q 262 590 362 684 l 144 478 l 443 478 l 443 397 z " },
		"³": { "ha": 482, "x_min": 22, "x_max": 443, "o": "m 425 851 q 397 762 425 797 q 323 711 370 727 q 443 570 443 680 q 380 434 443 483 q 204 386 318 386 q 22 424 101 386 l 22 507 q 205 461 122 461 q 349 571 349 461 q 192 669 349 669 l 113 669 l 113 742 l 193 742 q 297 769 263 742 q 330 842 330 795 q 303 906 330 883 q 231 929 276 929 q 148 915 186 929 q 72 876 110 900 l 25 937 q 115 986 68 968 q 227 1004 163 1004 q 372 964 319 1004 q 425 851 425 924 z " },
		"´": { "ha": 802, "x_min": 267, "x_max": 533, "o": "m 267 859 q 337 960 299 901 q 396 1064 374 1020 l 533 1064 l 533 1050 q 444 941 503 1006 q 342 842 385 877 l 267 842 l 267 859 z " },
		"µ": { "ha": 860, "x_min": 119, "x_max": 741, "o": "m 232 258 q 404 81 232 81 q 574 145 520 81 q 628 353 628 209 l 628 743 l 741 743 l 741 0 l 648 0 l 631 100 l 624 100 q 393 -14 549 -14 q 232 49 292 -14 l 225 49 q 232 -117 232 -8 l 232 -334 l 119 -334 l 119 743 l 232 743 l 232 258 z " },
		"¶": { "ha": 909, "x_min": 77, "x_max": 760, "o": "m 760 -176 l 682 -176 l 682 985 l 538 985 l 538 -176 l 460 -176 l 460 379 q 361 367 418 367 q 145 452 214 367 q 77 707 77 536 q 151 969 77 883 q 382 1055 224 1055 l 760 1055 l 760 -176 z " },
		"·": { "ha": 370, "x_min": 103, "x_max": 267, "o": "m 103 490 q 124 558 103 535 q 183 582 145 582 q 244 558 222 582 q 267 490 267 535 q 244 422 267 446 q 183 399 222 399 q 126 420 149 399 q 103 490 103 441 z " },
		"¸": { "ha": 315, "x_min": 25, "x_max": 296, "o": "m 296 -196 q 244 -298 296 -262 q 90 -334 192 -334 q 25 -328 56 -334 l 25 -256 q 96 -261 56 -261 q 177 -248 149 -261 q 204 -197 204 -234 q 177 -150 204 -168 q 77 -121 151 -132 l 136 0 l 211 0 l 174 -78 q 296 -196 296 -104 z " },
		"¹": { "ha": 482, "x_min": 52, "x_max": 326, "o": "m 229 991 l 326 991 l 326 397 l 236 397 l 236 790 q 240 913 236 852 q 207 883 225 898 q 97 803 189 867 l 52 868 l 229 991 z " },
		"º": { "ha": 521, "x_min": 45, "x_max": 476, "o": "m 476 770 q 418 596 476 659 q 258 534 360 534 q 102 597 159 534 q 45 770 45 661 q 102 942 45 880 q 261 1003 159 1003 q 420 941 364 1003 q 476 770 476 880 m 127 770 q 158 646 127 687 q 260 604 189 604 q 362 646 331 604 q 393 770 393 687 q 362 893 393 853 q 260 933 331 933 q 159 893 190 933 q 127 770 127 853 z " },
		"»": { "ha": 690, "x_min": 54, "x_max": 635, "o": "m 635 355 l 401 79 l 322 127 l 517 366 l 322 603 l 401 650 l 635 374 l 635 355 m 367 355 l 134 79 l 54 127 l 249 366 l 54 603 l 134 650 l 367 374 l 367 355 z " },
		"¼": { "ha": 1083, "x_min": 51, "x_max": 1010, "o": "m 880 991 l 268 0 l 171 0 l 783 991 l 880 991 m 229 991 l 326 991 l 326 397 l 235 397 l 235 790 q 239 913 235 852 q 206 883 224 898 q 96 803 188 867 l 51 868 l 229 991 m 1010 138 l 925 138 l 925 1 l 827 1 l 827 138 l 554 138 l 554 206 l 831 599 l 925 599 l 925 217 l 1010 217 l 1010 138 m 827 217 l 827 349 q 831 491 827 440 q 819 470 827 483 q 801 441 811 456 q 781 411 791 426 q 763 384 770 395 l 649 217 l 827 217 z " },
		"½": { "ha": 1083, "x_min": 31, "x_max": 1017, "o": "m 834 991 l 222 0 l 125 0 l 737 991 l 834 991 m 209 991 l 306 991 l 306 397 l 216 397 l 216 790 q 220 913 216 852 q 186 883 205 898 q 77 803 168 867 l 31 868 l 209 991 m 1017 1 l 607 1 l 607 71 l 767 227 q 855 318 827 286 q 894 377 883 351 q 905 439 905 403 q 878 509 905 486 q 808 532 851 532 q 740 519 773 532 q 660 473 707 507 l 615 532 q 807 608 704 608 q 946 564 897 608 q 996 444 996 519 q 966 338 996 389 q 836 193 936 287 l 718 81 l 1017 81 l 1017 1 z " },
		"¾": { "ha": 1083, "x_min": 18, "x_max": 1064, "o": "m 420 851 q 393 762 420 797 q 319 711 365 727 q 438 570 438 680 q 376 434 438 483 q 199 386 313 386 q 18 424 96 386 l 18 507 q 201 461 117 461 q 344 571 344 461 q 187 669 344 669 l 108 669 l 108 742 l 189 742 q 292 769 258 742 q 326 842 326 795 q 298 906 326 883 q 226 929 271 929 q 143 915 181 929 q 67 876 105 900 l 20 937 q 111 986 63 968 q 222 1004 158 1004 q 367 964 314 1004 q 420 851 420 924 m 943 991 l 330 0 l 233 0 l 846 991 l 943 991 m 1064 138 l 979 138 l 979 1 l 881 1 l 881 138 l 608 138 l 608 206 l 885 599 l 979 599 l 979 217 l 1064 217 l 1064 138 m 881 217 l 881 349 q 885 491 881 440 q 873 470 882 483 q 855 441 865 456 q 835 411 845 426 q 817 384 825 395 l 703 217 l 881 217 z " },
		"¿": { "ha": 596, "x_min": 35, "x_max": 578, "o": "m 400 464 l 400 429 q 375 296 400 347 q 283 189 349 246 q 181 92 201 117 q 152 40 160 66 q 143 -24 143 14 q 188 -130 143 -92 q 315 -168 233 -168 q 420 -155 370 -168 q 538 -110 471 -142 l 578 -201 q 310 -267 444 -267 q 108 -203 181 -267 q 35 -25 35 -140 q 46 58 35 22 q 80 124 58 94 q 132 182 102 154 q 199 241 162 210 q 289 340 267 301 q 311 443 311 380 l 311 464 l 400 464 m 433 667 q 351 575 433 575 q 290 598 311 575 q 269 667 269 622 q 292 734 269 710 q 351 758 314 758 q 410 736 386 758 q 433 667 433 715 z " },
		"À": { "ha": 879, "x_min": 0, "x_max": 879, "o": "m 760 0 l 636 315 l 239 315 l 117 0 l 0 0 l 392 996 l 489 996 l 879 0 l 760 0 m 600 419 l 485 726 q 439 869 463 785 q 396 726 424 804 l 279 419 l 600 419 m 491 1071 l 416 1071 q 312 1171 372 1106 q 224 1279 252 1236 l 224 1293 l 362 1293 q 422 1185 384 1246 q 491 1088 461 1124 l 491 1071 z " },
		"Á": { "ha": 879, "x_min": 0, "x_max": 879, "o": "m 760 0 l 636 315 l 239 315 l 117 0 l 0 0 l 392 996 l 489 996 l 879 0 l 760 0 m 600 419 l 485 726 q 439 869 463 785 q 396 726 424 804 l 279 419 l 600 419 m 357 1088 q 427 1190 389 1130 q 486 1293 465 1249 l 623 1293 l 623 1279 q 534 1171 593 1235 q 432 1071 475 1106 l 357 1071 l 357 1088 z " },
		"Â": { "ha": 879, "x_min": 0, "x_max": 879, "o": "m 760 0 l 636 315 l 239 315 l 117 0 l 0 0 l 392 996 l 489 996 l 879 0 l 760 0 m 600 419 l 485 726 q 439 869 463 785 q 396 726 424 804 l 279 419 l 600 419 m 205 1086 q 326 1222 292 1179 q 376 1293 361 1265 l 489 1293 q 541 1220 504 1265 q 663 1086 578 1175 l 663 1071 l 582 1071 q 432 1197 522 1108 q 283 1071 340 1106 l 205 1071 l 205 1086 z " },
		"Ã": { "ha": 879, "x_min": 0, "x_max": 879, "o": "m 760 0 l 636 315 l 239 315 l 117 0 l 0 0 l 392 996 l 489 996 l 879 0 l 760 0 m 600 419 l 485 726 q 439 869 463 785 q 396 726 424 804 l 279 419 l 600 419 m 537 1072 q 480 1085 508 1072 q 426 1113 452 1097 q 374 1140 399 1128 q 326 1153 349 1153 q 275 1133 292 1153 q 248 1071 258 1112 l 182 1071 q 230 1199 191 1153 q 330 1246 269 1246 q 391 1233 361 1246 q 446 1205 420 1221 q 497 1178 473 1190 q 543 1165 522 1165 q 593 1185 576 1165 q 619 1247 609 1205 l 686 1247 q 639 1119 677 1165 q 537 1072 601 1072 z " },
		"Ä": { "ha": 879, "x_min": 0, "x_max": 879, "o": "m 760 0 l 636 315 l 239 315 l 117 0 l 0 0 l 392 996 l 489 996 l 879 0 l 760 0 m 600 419 l 485 726 q 439 869 463 785 q 396 726 424 804 l 279 419 l 600 419 m 247 1174 q 265 1225 247 1209 q 308 1240 283 1240 q 352 1225 334 1240 q 371 1174 371 1209 q 352 1123 371 1140 q 308 1107 334 1107 q 265 1123 283 1107 q 247 1174 247 1140 m 505 1174 q 523 1225 505 1209 q 566 1240 541 1240 q 610 1225 591 1240 q 629 1174 629 1209 q 610 1123 629 1140 q 566 1107 591 1107 q 523 1123 541 1107 q 505 1174 505 1140 z " },
		"Å": { "ha": 879, "x_min": 0, "x_max": 879, "o": "m 760 0 l 636 315 l 239 315 l 117 0 l 0 0 l 392 996 l 489 996 l 879 0 l 760 0 m 600 419 l 485 726 q 439 869 463 785 q 396 726 424 804 l 279 419 l 600 419 m 590 1076 q 548 969 590 1010 q 437 929 507 929 q 328 969 369 929 q 288 1075 288 1008 q 329 1180 288 1141 q 437 1219 370 1219 q 548 1179 506 1219 q 590 1076 590 1139 m 517 1075 q 494 1134 517 1113 q 437 1154 472 1154 q 380 1134 403 1154 q 358 1075 358 1113 q 378 1016 358 1037 q 437 996 399 996 q 495 1016 473 996 q 517 1075 517 1037 z " },
		"Æ": { "ha": 1213, "x_min": -1, "x_max": 1129, "o": "m 1129 0 l 621 0 l 621 315 l 272 315 l 118 0 l -1 0 l 472 991 l 1129 991 l 1129 889 l 736 889 l 736 570 l 1103 570 l 1103 468 l 736 468 l 736 103 l 1129 103 l 1129 0 m 318 419 l 621 419 l 621 889 l 541 889 l 318 419 z " },
		"Ç": { "ha": 876, "x_min": 85, "x_max": 835, "o": "m 561 903 q 303 794 397 903 q 208 496 208 685 q 299 195 208 301 q 559 89 391 89 q 796 126 663 89 l 796 25 q 542 -14 693 -14 q 204 119 323 -14 q 85 497 85 252 q 142 766 85 650 q 308 943 199 881 q 562 1006 416 1006 q 835 949 718 1006 l 786 850 q 561 903 673 903 m 644 -196 q 592 -298 644 -262 q 439 -334 541 -334 q 374 -328 404 -334 l 374 -256 q 444 -261 404 -261 q 525 -248 498 -261 q 553 -197 553 -234 q 526 -150 553 -168 q 425 -121 499 -132 l 485 0 l 559 0 l 522 -78 q 644 -196 644 -104 z " },
		"È": { "ha": 772, "x_min": 136, "x_max": 689, "o": "m 689 0 l 136 0 l 136 991 l 689 991 l 689 889 l 252 889 l 252 570 l 663 570 l 663 468 l 252 468 l 252 103 l 689 103 l 689 0 m 484 1071 l 409 1071 q 304 1171 365 1106 q 217 1279 244 1236 l 217 1293 l 355 1293 q 415 1185 376 1246 q 484 1088 454 1124 l 484 1071 z " },
		"É": { "ha": 772, "x_min": 136, "x_max": 689, "o": "m 689 0 l 136 0 l 136 991 l 689 991 l 689 889 l 252 889 l 252 570 l 663 570 l 663 468 l 252 468 l 252 103 l 689 103 l 689 0 m 309 1088 q 379 1190 342 1130 q 439 1293 417 1249 l 576 1293 l 576 1279 q 487 1171 546 1235 q 385 1071 428 1106 l 309 1071 l 309 1088 z " },
		"Ê": { "ha": 772, "x_min": 136, "x_max": 689, "o": "m 689 0 l 136 0 l 136 991 l 689 991 l 689 889 l 252 889 l 252 570 l 663 570 l 663 468 l 252 468 l 252 103 l 689 103 l 689 0 m 178 1086 q 299 1222 264 1179 q 349 1293 334 1265 l 462 1293 q 514 1220 477 1265 q 635 1086 551 1175 l 635 1071 l 555 1071 q 405 1197 495 1108 q 256 1071 313 1106 l 178 1071 l 178 1086 z " },
		"Ë": { "ha": 772, "x_min": 136, "x_max": 689, "o": "m 689 0 l 136 0 l 136 991 l 689 991 l 689 889 l 252 889 l 252 570 l 663 570 l 663 468 l 252 468 l 252 103 l 689 103 l 689 0 m 222 1174 q 240 1225 222 1209 q 283 1240 258 1240 q 327 1225 309 1240 q 346 1174 346 1209 q 327 1123 346 1140 q 283 1107 309 1107 q 240 1123 258 1107 q 222 1174 222 1140 m 480 1174 q 498 1225 480 1209 q 541 1240 516 1240 q 585 1225 566 1240 q 604 1174 604 1209 q 585 1123 604 1140 q 541 1107 566 1107 q 498 1123 516 1107 q 480 1174 480 1140 z " },
		"Ð": { "ha": 1003, "x_min": 32, "x_max": 917, "o": "m 917 505 q 784 130 917 260 q 400 0 650 0 l 136 0 l 136 440 l 32 440 l 32 542 l 136 542 l 136 991 l 431 991 q 788 864 659 991 q 917 505 917 737 m 794 501 q 408 892 794 892 l 252 892 l 252 542 l 509 542 l 509 440 l 252 440 l 252 100 l 380 100 q 794 501 794 100 z " },
		"Ñ": { "ha": 1047, "x_min": 136, "x_max": 911, "o": "m 911 0 l 779 0 l 237 832 l 232 832 q 243 564 243 686 l 243 0 l 136 0 l 136 991 l 267 991 l 807 163 l 812 163 q 806 280 811 181 q 803 422 802 380 l 803 991 l 911 991 l 911 0 m 634 1072 q 577 1085 605 1072 q 523 1113 549 1097 q 471 1140 496 1128 q 423 1153 446 1153 q 372 1133 389 1153 q 345 1071 355 1112 l 279 1071 q 327 1199 288 1153 q 427 1246 366 1246 q 488 1233 458 1246 q 543 1205 517 1221 q 594 1178 570 1190 q 640 1165 618 1165 q 690 1185 673 1165 q 716 1247 706 1205 l 783 1247 q 736 1119 774 1165 q 634 1072 698 1072 z " },
		"Ò": { "ha": 1082, "x_min": 85, "x_max": 997, "o": "m 997 497 q 877 123 997 259 q 542 -14 756 -14 q 204 120 323 -14 q 85 498 85 254 q 204 874 85 741 q 543 1007 323 1007 q 877 871 757 1007 q 997 497 997 736 m 207 497 q 293 192 207 296 q 542 87 378 87 q 791 191 707 87 q 875 497 875 295 q 791 801 875 697 q 543 904 707 904 q 293 800 378 904 q 207 497 207 696 m 615 1071 l 541 1071 q 436 1171 496 1106 q 349 1279 376 1236 l 349 1293 l 486 1293 q 547 1185 508 1246 q 615 1088 585 1124 l 615 1071 z " },
		"Ó": { "ha": 1082, "x_min": 85, "x_max": 997, "o": "m 997 497 q 877 123 997 259 q 542 -14 756 -14 q 204 120 323 -14 q 85 498 85 254 q 204 874 85 741 q 543 1007 323 1007 q 877 871 757 1007 q 997 497 997 736 m 207 497 q 293 192 207 296 q 542 87 378 87 q 791 191 707 87 q 875 497 875 295 q 791 801 875 697 q 543 904 707 904 q 293 800 378 904 q 207 497 207 696 m 447 1088 q 517 1190 479 1130 q 576 1293 555 1249 l 713 1293 l 713 1279 q 625 1171 684 1235 q 522 1071 566 1106 l 447 1071 l 447 1088 z " },
		"Ô": { "ha": 1082, "x_min": 85, "x_max": 997, "o": "m 997 497 q 877 123 997 259 q 542 -14 756 -14 q 204 120 323 -14 q 85 498 85 254 q 204 874 85 741 q 543 1007 323 1007 q 877 871 757 1007 q 997 497 997 736 m 207 497 q 293 192 207 296 q 542 87 378 87 q 791 191 707 87 q 875 497 875 295 q 791 801 875 697 q 543 904 707 904 q 293 800 378 904 q 207 497 207 696 m 304 1086 q 425 1222 390 1179 q 475 1293 459 1265 l 587 1293 q 639 1220 602 1265 q 761 1086 676 1175 l 761 1071 l 680 1071 q 530 1197 621 1108 q 382 1071 438 1106 l 304 1071 l 304 1086 z " },
		"Õ": { "ha": 1082, "x_min": 85, "x_max": 997, "o": "m 997 497 q 877 123 997 259 q 542 -14 756 -14 q 204 120 323 -14 q 85 498 85 254 q 204 874 85 741 q 543 1007 323 1007 q 877 871 757 1007 q 997 497 997 736 m 207 497 q 293 192 207 296 q 542 87 378 87 q 791 191 707 87 q 875 497 875 295 q 791 801 875 697 q 543 904 707 904 q 293 800 378 904 q 207 497 207 696 m 639 1072 q 582 1085 610 1072 q 527 1113 554 1097 q 476 1140 500 1128 q 428 1153 451 1153 q 377 1133 394 1153 q 350 1071 359 1112 l 283 1071 q 331 1199 292 1153 q 432 1246 370 1246 q 492 1233 463 1246 q 548 1205 522 1221 q 599 1178 574 1190 q 645 1165 623 1165 q 694 1185 678 1165 q 721 1247 711 1205 l 788 1247 q 741 1119 779 1165 q 639 1072 703 1072 z " },
		"Ö": { "ha": 1082, "x_min": 85, "x_max": 997, "o": "m 997 497 q 877 123 997 259 q 542 -14 756 -14 q 204 120 323 -14 q 85 498 85 254 q 204 874 85 741 q 543 1007 323 1007 q 877 871 757 1007 q 997 497 997 736 m 207 497 q 293 192 207 296 q 542 87 378 87 q 791 191 707 87 q 875 497 875 295 q 791 801 875 697 q 543 904 707 904 q 293 800 378 904 q 207 497 207 696 m 354 1174 q 372 1225 354 1209 q 415 1240 390 1240 q 459 1225 441 1240 q 478 1174 478 1209 q 459 1123 478 1140 q 415 1107 441 1107 q 372 1123 390 1107 q 354 1174 354 1140 m 612 1174 q 630 1225 612 1209 q 673 1240 648 1240 q 717 1225 699 1240 q 736 1174 736 1209 q 717 1123 736 1140 q 673 1107 699 1107 q 630 1123 648 1107 q 612 1174 612 1140 z " },
		"×": { "ha": 794, "x_min": 90, "x_max": 703, "o": "m 637 798 l 703 730 l 464 490 l 701 252 l 636 184 l 396 422 l 160 184 l 92 252 l 329 490 l 90 729 l 158 798 l 397 557 l 637 798 z " },
		"Ø": { "ha": 1082, "x_min": 85, "x_max": 997, "o": "m 997 497 q 877 123 997 259 q 542 -14 756 -14 q 282 54 382 -14 l 214 -41 l 132 12 l 205 117 q 85 498 85 251 q 204 874 85 741 q 543 1007 323 1007 q 791 943 685 1007 l 857 1035 l 939 981 l 867 880 q 997 497 997 743 m 875 497 q 800 786 875 682 l 345 143 q 542 87 422 87 q 791 191 707 87 q 875 497 875 295 m 207 497 q 275 215 207 319 l 729 854 q 543 904 657 904 q 293 800 378 904 q 207 497 207 696 z " },
		"Ù": { "ha": 1011, "x_min": 126, "x_max": 885, "o": "m 885 991 l 885 350 q 783 83 885 180 q 501 -14 680 -14 q 224 84 322 -14 q 126 353 126 182 l 126 991 l 241 991 l 241 345 q 309 154 241 220 q 509 87 377 87 q 702 154 634 87 q 770 346 770 221 l 770 991 l 885 991 m 581 1071 l 506 1071 q 401 1171 462 1106 q 314 1279 341 1236 l 314 1293 l 452 1293 q 512 1185 473 1246 q 581 1088 551 1124 l 581 1071 z " },
		"Ú": { "ha": 1011, "x_min": 126, "x_max": 885, "o": "m 885 991 l 885 350 q 783 83 885 180 q 501 -14 680 -14 q 224 84 322 -14 q 126 353 126 182 l 126 991 l 241 991 l 241 345 q 309 154 241 220 q 509 87 377 87 q 702 154 634 87 q 770 346 770 221 l 770 991 l 885 991 m 407 1088 q 477 1190 439 1130 q 536 1293 515 1249 l 673 1293 l 673 1279 q 585 1171 644 1235 q 482 1071 526 1106 l 407 1071 l 407 1088 z " },
		"Û": { "ha": 1011, "x_min": 126, "x_max": 885, "o": "m 885 991 l 885 350 q 783 83 885 180 q 501 -14 680 -14 q 224 84 322 -14 q 126 353 126 182 l 126 991 l 241 991 l 241 345 q 309 154 241 220 q 509 87 377 87 q 702 154 634 87 q 770 346 770 221 l 770 991 l 885 991 m 267 1086 q 387 1222 353 1179 q 437 1293 422 1265 l 550 1293 q 602 1220 565 1265 q 724 1086 639 1175 l 724 1071 l 643 1071 q 493 1197 583 1108 q 345 1071 401 1106 l 267 1071 l 267 1086 z " },
		"Ü": { "ha": 1011, "x_min": 126, "x_max": 885, "o": "m 885 991 l 885 350 q 783 83 885 180 q 501 -14 680 -14 q 224 84 322 -14 q 126 353 126 182 l 126 991 l 241 991 l 241 345 q 309 154 241 220 q 509 87 377 87 q 702 154 634 87 q 770 346 770 221 l 770 991 l 885 991 m 313 1174 q 331 1225 313 1209 q 374 1240 349 1240 q 418 1225 399 1240 q 437 1174 437 1209 q 418 1123 437 1140 q 374 1107 399 1107 q 331 1123 349 1107 q 313 1174 313 1140 m 571 1174 q 589 1225 571 1209 q 632 1240 607 1240 q 676 1225 657 1240 q 694 1174 694 1209 q 676 1123 694 1140 q 632 1107 657 1107 q 589 1123 607 1107 q 571 1174 571 1140 z " },
		"Ý": { "ha": 778, "x_min": 0, "x_max": 778, "o": "m 389 496 l 653 991 l 778 991 l 447 385 l 447 0 l 330 0 l 330 379 l 0 991 l 126 991 l 389 496 m 300 1088 q 370 1190 332 1130 q 429 1293 408 1249 l 566 1293 l 566 1279 q 477 1171 536 1235 q 375 1071 418 1106 l 300 1071 l 300 1088 z " },
		"Þ": { "ha": 848, "x_min": 136, "x_max": 777, "o": "m 777 532 q 674 297 777 378 q 376 216 571 216 l 252 216 l 252 0 l 136 0 l 136 991 l 252 991 l 252 818 l 397 818 q 682 748 588 818 q 777 532 777 677 m 252 315 l 366 315 q 587 364 519 315 q 656 524 656 412 q 591 671 656 625 q 390 718 527 718 l 252 718 l 252 315 z " },
		"ß": { "ha": 864, "x_min": 119, "x_max": 800, "o": "m 711 859 q 614 689 711 767 q 536 619 555 642 q 517 574 517 596 q 526 538 517 552 q 559 504 535 524 q 636 450 583 485 q 766 333 731 386 q 800 211 800 279 q 734 44 800 102 q 547 -14 669 -14 q 347 33 420 -14 l 347 138 q 443 95 390 111 q 545 79 496 79 q 690 203 690 79 q 662 290 690 254 q 559 374 634 326 q 441 471 473 429 q 408 570 408 513 q 432 648 408 612 q 503 720 455 684 q 576 789 554 759 q 597 856 597 820 q 551 939 597 910 q 419 968 505 968 q 232 817 232 968 l 232 0 l 119 0 l 119 815 q 194 999 119 936 q 419 1063 269 1063 q 635 1009 559 1063 q 711 859 711 956 z " },
		"à": { "ha": 772, "x_min": 64, "x_max": 660, "o": "m 576 0 l 554 106 l 549 106 q 438 11 493 36 q 300 -14 382 -14 q 126 43 189 -14 q 64 205 64 100 q 424 441 64 431 l 550 446 l 550 492 q 512 621 550 579 q 392 663 475 663 q 182 606 299 663 l 147 692 q 268 739 202 722 q 399 755 333 755 q 596 696 532 755 q 660 507 660 637 l 660 0 l 576 0 m 322 79 q 487 137 427 79 q 547 298 547 195 l 547 366 l 435 361 q 241 319 300 356 q 182 204 182 282 q 219 111 182 143 q 322 79 256 79 m 456 842 l 381 842 q 277 942 337 877 q 189 1050 216 1007 l 189 1064 l 327 1064 q 387 956 349 1017 q 456 859 426 895 l 456 842 z " },
		"á": { "ha": 772, "x_min": 64, "x_max": 660, "o": "m 576 0 l 554 106 l 549 106 q 438 11 493 36 q 300 -14 382 -14 q 126 43 189 -14 q 64 205 64 100 q 424 441 64 431 l 550 446 l 550 492 q 512 621 550 579 q 392 663 475 663 q 182 606 299 663 l 147 692 q 268 739 202 722 q 399 755 333 755 q 596 696 532 755 q 660 507 660 637 l 660 0 l 576 0 m 322 79 q 487 137 427 79 q 547 298 547 195 l 547 366 l 435 361 q 241 319 300 356 q 182 204 182 282 q 219 111 182 143 q 322 79 256 79 m 296 859 q 366 960 328 901 q 425 1064 404 1020 l 562 1064 l 562 1050 q 473 941 532 1006 q 371 842 414 877 l 296 842 l 296 859 z " },
		"â": { "ha": 772, "x_min": 64, "x_max": 660, "o": "m 576 0 l 554 106 l 549 106 q 438 11 493 36 q 300 -14 382 -14 q 126 43 189 -14 q 64 205 64 100 q 424 441 64 431 l 550 446 l 550 492 q 512 621 550 579 q 392 663 475 663 q 182 606 299 663 l 147 692 q 268 739 202 722 q 399 755 333 755 q 596 696 532 755 q 660 507 660 637 l 660 0 l 576 0 m 322 79 q 487 137 427 79 q 547 298 547 195 l 547 366 l 435 361 q 241 319 300 356 q 182 204 182 282 q 219 111 182 143 q 322 79 256 79 m 155 857 q 275 993 241 949 q 326 1064 310 1036 l 438 1064 q 490 990 453 1036 q 612 857 527 945 l 612 842 l 531 842 q 381 968 471 879 q 233 842 289 877 l 155 842 l 155 857 z " },
		"ã": { "ha": 772, "x_min": 64, "x_max": 660, "o": "m 576 0 l 554 106 l 549 106 q 438 11 493 36 q 300 -14 382 -14 q 126 43 189 -14 q 64 205 64 100 q 424 441 64 431 l 550 446 l 550 492 q 512 621 550 579 q 392 663 475 663 q 182 606 299 663 l 147 692 q 268 739 202 722 q 399 755 333 755 q 596 696 532 755 q 660 507 660 637 l 660 0 l 576 0 m 322 79 q 487 137 427 79 q 547 298 547 195 l 547 366 l 435 361 q 241 319 300 356 q 182 204 182 282 q 219 111 182 143 q 322 79 256 79 m 489 843 q 432 856 460 843 q 377 883 404 868 q 326 911 351 899 q 278 924 301 924 q 227 903 244 924 q 200 842 210 883 l 134 842 q 181 970 142 924 q 282 1017 220 1017 q 342 1004 313 1017 q 398 976 372 991 q 449 948 425 961 q 495 936 473 936 q 545 956 528 936 q 571 1018 561 976 l 638 1018 q 591 889 629 936 q 489 843 553 843 z " },
		"ä": { "ha": 772, "x_min": 64, "x_max": 660, "o": "m 576 0 l 554 106 l 549 106 q 438 11 493 36 q 300 -14 382 -14 q 126 43 189 -14 q 64 205 64 100 q 424 441 64 431 l 550 446 l 550 492 q 512 621 550 579 q 392 663 475 663 q 182 606 299 663 l 147 692 q 268 739 202 722 q 399 755 333 755 q 596 696 532 755 q 660 507 660 637 l 660 0 l 576 0 m 322 79 q 487 137 427 79 q 547 298 547 195 l 547 366 l 435 361 q 241 319 300 356 q 182 204 182 282 q 219 111 182 143 q 322 79 256 79 m 189 945 q 207 996 189 980 q 250 1011 225 1011 q 295 996 276 1011 q 313 945 313 980 q 295 894 313 911 q 250 878 276 878 q 207 894 225 878 q 189 945 189 911 m 448 945 q 466 996 448 980 q 509 1011 484 1011 q 552 996 534 1011 q 571 945 571 980 q 552 894 571 911 q 509 878 534 878 q 466 894 484 878 q 448 945 448 911 z " },
		"å": { "ha": 772, "x_min": 64, "x_max": 660, "o": "m 576 0 l 554 106 l 549 106 q 438 11 493 36 q 300 -14 382 -14 q 126 43 189 -14 q 64 205 64 100 q 424 441 64 431 l 550 446 l 550 492 q 512 621 550 579 q 392 663 475 663 q 182 606 299 663 l 147 692 q 268 739 202 722 q 399 755 333 755 q 596 696 532 755 q 660 507 660 637 l 660 0 l 576 0 m 322 79 q 487 137 427 79 q 547 298 547 195 l 547 366 l 435 361 q 241 319 300 356 q 182 204 182 282 q 219 111 182 143 q 322 79 256 79 m 545 989 q 504 882 545 922 q 393 842 462 842 q 283 881 324 842 q 243 987 243 921 q 284 1093 243 1054 q 393 1132 325 1132 q 503 1092 461 1132 q 545 989 545 1051 m 472 987 q 450 1046 472 1025 q 393 1067 427 1067 q 336 1046 358 1067 q 313 987 313 1025 q 334 929 313 949 q 393 908 354 908 q 450 929 428 908 q 472 987 472 949 z " },
		"æ": { "ha": 1192, "x_min": 64, "x_max": 1120, "o": "m 64 205 q 148 375 64 315 q 404 441 232 436 l 529 446 l 529 492 q 490 621 529 579 q 370 663 450 663 q 161 606 272 663 l 126 692 q 244 738 176 720 q 378 755 311 755 q 522 726 466 755 q 606 632 578 696 q 700 724 642 692 q 832 757 758 757 q 1041 666 962 757 q 1120 425 1120 576 l 1120 353 l 644 353 q 863 85 650 85 q 978 97 924 85 q 1088 135 1031 109 l 1088 35 q 979 -2 1029 9 q 860 -14 928 -14 q 579 144 664 -14 q 457 22 524 58 q 300 -14 391 -14 q 126 44 189 -14 q 64 205 64 102 m 182 204 q 218 110 182 140 q 314 79 254 79 q 469 137 412 79 q 526 298 526 194 l 526 366 l 419 361 q 237 318 293 355 q 182 204 182 281 m 831 663 q 702 606 749 663 q 647 443 654 550 l 999 443 q 956 606 999 549 q 831 663 912 663 z " },
		"ç": { "ha": 661, "x_min": 78, "x_max": 615, "o": "m 416 -14 q 166 86 255 -14 q 78 367 78 185 q 168 655 78 553 q 424 757 258 757 q 531 745 477 757 q 615 718 585 734 l 581 623 q 499 647 543 637 q 421 657 455 657 q 195 368 195 657 q 250 158 195 231 q 414 85 305 85 q 604 125 507 85 l 604 25 q 416 -14 530 -14 m 517 -196 q 465 -298 517 -262 q 311 -334 413 -334 q 246 -328 277 -334 l 246 -256 q 317 -261 277 -261 q 398 -248 370 -261 q 425 -197 425 -234 q 398 -150 425 -168 q 298 -121 372 -132 l 357 0 l 432 0 l 395 -78 q 517 -196 517 -104 z " },
		"è": { "ha": 779, "x_min": 78, "x_max": 707, "o": "m 433 -14 q 173 87 269 -14 q 78 366 78 187 q 166 651 78 545 q 404 757 255 757 q 625 665 544 757 q 707 422 707 573 l 707 351 l 195 351 q 261 153 198 220 q 437 85 323 85 q 675 135 557 85 l 675 35 q 562 -2 615 9 q 433 -14 509 -14 m 403 663 q 260 604 313 663 q 197 443 207 546 l 586 443 q 538 606 586 549 q 403 663 491 663 m 482 842 l 408 842 q 303 942 363 877 q 216 1050 243 1007 l 216 1064 l 353 1064 q 414 956 375 1017 q 482 859 452 895 l 482 842 z " },
		"é": { "ha": 779, "x_min": 78, "x_max": 707, "o": "m 433 -14 q 173 87 269 -14 q 78 366 78 187 q 166 651 78 545 q 404 757 255 757 q 625 665 544 757 q 707 422 707 573 l 707 351 l 195 351 q 261 153 198 220 q 437 85 323 85 q 675 135 557 85 l 675 35 q 562 -2 615 9 q 433 -14 509 -14 m 403 663 q 260 604 313 663 q 197 443 207 546 l 586 443 q 538 606 586 549 q 403 663 491 663 m 319 859 q 390 960 352 901 q 449 1064 427 1020 l 586 1064 l 586 1050 q 497 941 556 1006 q 395 842 438 877 l 319 842 l 319 859 z " },
		"ê": { "ha": 779, "x_min": 78, "x_max": 707, "o": "m 433 -14 q 173 87 269 -14 q 78 366 78 187 q 166 651 78 545 q 404 757 255 757 q 625 665 544 757 q 707 422 707 573 l 707 351 l 195 351 q 261 153 198 220 q 437 85 323 85 q 675 135 557 85 l 675 35 q 562 -2 615 9 q 433 -14 509 -14 m 403 663 q 260 604 313 663 q 197 443 207 546 l 586 443 q 538 606 586 549 q 403 663 491 663 m 176 857 q 296 993 262 949 q 347 1064 331 1036 l 459 1064 q 511 990 474 1036 q 633 857 548 945 l 633 842 l 552 842 q 402 968 492 879 q 254 842 310 877 l 176 842 l 176 857 z " },
		"ë": { "ha": 779, "x_min": 78, "x_max": 707, "o": "m 433 -14 q 173 87 269 -14 q 78 366 78 187 q 166 651 78 545 q 404 757 255 757 q 625 665 544 757 q 707 422 707 573 l 707 351 l 195 351 q 261 153 198 220 q 437 85 323 85 q 675 135 557 85 l 675 35 q 562 -2 615 9 q 433 -14 509 -14 m 403 663 q 260 604 313 663 q 197 443 207 546 l 586 443 q 538 606 586 549 q 403 663 491 663 m 216 945 q 234 996 216 980 q 277 1011 252 1011 q 322 996 303 1011 q 340 945 340 980 q 322 894 340 911 q 277 878 303 878 q 234 894 252 878 q 216 945 216 911 m 475 945 q 493 996 475 980 q 536 1011 511 1011 q 579 996 561 1011 q 598 945 598 980 q 579 894 598 911 q 536 878 561 878 q 493 894 511 878 q 475 945 475 911 z " },
		"ì": { "ha": 351, "x_min": -26, "x_max": 241, "o": "m 232 0 l 119 0 l 119 743 l 232 743 l 232 0 m 241 842 l 166 842 q 62 942 122 877 q -26 1050 1 1007 l -26 1064 l 112 1064 q 172 956 134 1017 q 241 859 211 895 l 241 842 z " },
		"í": { "ha": 351, "x_min": 115, "x_max": 381, "o": "m 232 0 l 119 0 l 119 743 l 232 743 l 232 0 m 115 859 q 185 960 147 901 q 244 1064 222 1020 l 381 1064 l 381 1050 q 292 941 351 1006 q 190 842 233 877 l 115 842 l 115 859 z " },
		"î": { "ha": 351, "x_min": -52, "x_max": 405, "o": "m 232 0 l 119 0 l 119 743 l 232 743 l 232 0 m -52 857 q 68 993 34 949 q 119 1064 103 1036 l 231 1064 q 283 990 246 1036 q 405 857 320 945 l 405 842 l 324 842 q 174 968 264 879 q 26 842 82 877 l -52 842 l -52 857 z " },
		"ï": { "ha": 351, "x_min": -14, "x_max": 368, "o": "m 232 0 l 119 0 l 119 743 l 232 743 l 232 0 m -14 945 q 4 996 -14 980 q 47 1011 22 1011 q 92 996 73 1011 q 111 945 111 980 q 92 894 111 911 q 47 878 73 878 q 4 894 22 878 q -14 945 -14 911 m 245 945 q 263 996 245 980 q 306 1011 281 1011 q 350 996 331 1011 q 368 945 368 980 q 350 894 368 911 q 306 878 331 878 q 263 894 281 878 q 245 945 245 911 z " },
		"ð": { "ha": 828, "x_min": 77, "x_max": 761, "o": "m 761 382 q 672 89 761 191 q 416 -14 584 -14 q 171 78 266 -14 q 77 322 77 169 q 166 567 77 478 q 404 656 255 656 q 625 574 557 656 l 631 576 q 453 851 592 722 l 269 746 l 220 819 l 378 909 q 252 985 315 951 l 298 1064 q 473 964 404 1015 l 635 1057 l 686 985 l 546 904 q 705 672 649 807 q 761 382 761 537 m 647 347 q 586 505 647 447 q 419 562 525 562 q 191 318 191 562 q 250 143 191 205 q 419 81 309 81 q 592 149 538 81 q 647 347 647 217 z " },
		"ñ": { "ha": 852, "x_min": 119, "x_max": 741, "o": "m 628 0 l 628 481 q 587 616 628 572 q 457 661 545 661 q 286 598 340 661 q 232 390 232 535 l 232 0 l 119 0 l 119 743 l 211 743 l 229 642 l 235 642 q 332 727 269 696 q 471 757 394 757 q 673 692 605 757 q 741 485 741 627 l 741 0 l 628 0 m 544 843 q 487 856 515 843 q 432 883 459 868 q 381 911 406 899 q 333 924 356 924 q 282 903 299 924 q 255 842 264 883 l 189 842 q 236 970 197 924 q 337 1017 275 1017 q 397 1004 368 1017 q 453 976 427 991 q 504 948 479 961 q 550 936 528 936 q 600 956 583 936 q 626 1018 616 976 l 693 1018 q 646 889 684 936 q 544 843 608 843 z " },
		"ò": { "ha": 839, "x_min": 78, "x_max": 761, "o": "m 761 372 q 669 89 761 191 q 416 -14 578 -14 q 239 33 317 -14 q 120 168 162 80 q 78 372 78 255 q 169 655 78 554 q 421 757 260 757 q 669 653 577 757 q 761 372 761 549 m 195 372 q 252 155 195 230 q 419 81 309 81 q 587 155 530 81 q 644 372 644 229 q 587 588 644 514 q 418 661 530 661 q 251 589 307 661 q 195 372 195 516 m 503 842 l 429 842 q 324 942 385 877 q 237 1050 264 1007 l 237 1064 l 374 1064 q 435 956 396 1017 q 503 859 473 895 l 503 842 z " },
		"ó": { "ha": 839, "x_min": 78, "x_max": 761, "o": "m 761 372 q 669 89 761 191 q 416 -14 578 -14 q 239 33 317 -14 q 120 168 162 80 q 78 372 78 255 q 169 655 78 554 q 421 757 260 757 q 669 653 577 757 q 761 372 761 549 m 195 372 q 252 155 195 230 q 419 81 309 81 q 587 155 530 81 q 644 372 644 229 q 587 588 644 514 q 418 661 530 661 q 251 589 307 661 q 195 372 195 516 m 325 859 q 395 960 357 901 q 454 1064 433 1020 l 591 1064 l 591 1050 q 503 941 562 1006 q 400 842 444 877 l 325 842 l 325 859 z " },
		"ô": { "ha": 839, "x_min": 78, "x_max": 761, "o": "m 761 372 q 669 89 761 191 q 416 -14 578 -14 q 239 33 317 -14 q 120 168 162 80 q 78 372 78 255 q 169 655 78 554 q 421 757 260 757 q 669 653 577 757 q 761 372 761 549 m 195 372 q 252 155 195 230 q 419 81 309 81 q 587 155 530 81 q 644 372 644 229 q 587 588 644 514 q 418 661 530 661 q 251 589 307 661 q 195 372 195 516 m 191 857 q 312 993 277 949 q 362 1064 347 1036 l 475 1064 q 527 990 490 1036 q 648 857 564 945 l 648 842 l 568 842 q 418 968 508 879 q 269 842 326 877 l 191 842 l 191 857 z " },
		"õ": { "ha": 839, "x_min": 78, "x_max": 761, "o": "m 761 372 q 669 89 761 191 q 416 -14 578 -14 q 239 33 317 -14 q 120 168 162 80 q 78 372 78 255 q 169 655 78 554 q 421 757 260 757 q 669 653 577 757 q 761 372 761 549 m 195 372 q 252 155 195 230 q 419 81 309 81 q 587 155 530 81 q 644 372 644 229 q 587 588 644 514 q 418 661 530 661 q 251 589 307 661 q 195 372 195 516 m 524 843 q 467 856 495 843 q 413 883 439 868 q 361 911 386 899 q 313 924 336 924 q 262 903 279 924 q 235 842 245 883 l 169 842 q 217 970 178 924 q 317 1017 256 1017 q 378 1004 349 1017 q 433 976 407 991 q 484 948 460 961 q 530 936 509 936 q 580 956 564 936 q 606 1018 596 976 l 673 1018 q 626 889 665 936 q 524 843 588 843 z " },
		"ö": { "ha": 839, "x_min": 78, "x_max": 761, "o": "m 761 372 q 669 89 761 191 q 416 -14 578 -14 q 239 33 317 -14 q 120 168 162 80 q 78 372 78 255 q 169 655 78 554 q 421 757 260 757 q 669 653 577 757 q 761 372 761 549 m 195 372 q 252 155 195 230 q 419 81 309 81 q 587 155 530 81 q 644 372 644 229 q 587 588 644 514 q 418 661 530 661 q 251 589 307 661 q 195 372 195 516 m 228 945 q 246 996 228 980 q 289 1011 264 1011 q 333 996 315 1011 q 352 945 352 980 q 333 894 352 911 q 289 878 315 878 q 246 894 264 878 q 228 945 228 911 m 486 945 q 504 996 486 980 q 547 1011 522 1011 q 591 996 572 1011 q 610 945 610 980 q 591 894 610 911 q 547 878 572 878 q 504 894 522 878 q 486 945 486 911 z " },
		"÷": { "ha": 794, "x_min": 71, "x_max": 722, "o": "m 71 443 l 71 536 l 722 536 l 722 443 l 71 443 m 319 253 q 339 314 319 294 q 396 335 359 335 q 451 314 431 335 q 471 253 471 292 q 451 193 471 214 q 396 171 431 171 q 340 192 361 171 q 319 253 319 214 m 319 726 q 339 788 319 767 q 396 808 359 808 q 451 787 431 808 q 471 726 471 766 q 451 666 471 688 q 396 644 431 644 q 340 666 361 644 q 319 726 319 687 z " },
		"ø": { "ha": 839, "x_min": 78, "x_max": 761, "o": "m 761 372 q 669 89 761 191 q 416 -14 578 -14 q 236 33 312 -14 l 179 -46 l 102 7 l 165 96 q 78 372 78 199 q 169 655 78 554 q 421 757 260 757 q 604 705 526 757 l 661 786 l 741 734 l 675 644 q 761 372 761 541 m 195 372 q 231 187 195 256 l 546 625 q 418 661 495 661 q 251 589 307 661 q 195 372 195 516 m 644 372 q 610 551 644 484 l 294 115 q 419 81 342 81 q 587 155 530 81 q 644 372 644 229 z " },
		"ù": { "ha": 852, "x_min": 111, "x_max": 733, "o": "m 225 743 l 225 261 q 267 125 225 170 q 396 81 308 81 q 567 144 513 81 q 621 353 621 208 l 621 743 l 733 743 l 733 0 l 640 0 l 624 100 l 618 100 q 522 16 583 45 q 382 -14 460 -14 q 179 51 246 -14 q 111 257 111 115 l 111 743 l 225 743 m 492 842 l 418 842 q 313 942 374 877 q 226 1050 253 1007 l 226 1064 l 363 1064 q 424 956 385 1017 q 492 859 463 895 l 492 842 z " },
		"ú": { "ha": 852, "x_min": 111, "x_max": 733, "o": "m 225 743 l 225 261 q 267 125 225 170 q 396 81 308 81 q 567 144 513 81 q 621 353 621 208 l 621 743 l 733 743 l 733 0 l 640 0 l 624 100 l 618 100 q 522 16 583 45 q 382 -14 460 -14 q 179 51 246 -14 q 111 257 111 115 l 111 743 l 225 743 m 343 859 q 413 960 376 901 q 473 1064 451 1020 l 610 1064 l 610 1050 q 521 941 580 1006 q 418 842 462 877 l 343 842 l 343 859 z " },
		"û": { "ha": 852, "x_min": 111, "x_max": 733, "o": "m 225 743 l 225 261 q 267 125 225 170 q 396 81 308 81 q 567 144 513 81 q 621 353 621 208 l 621 743 l 733 743 l 733 0 l 640 0 l 624 100 l 618 100 q 522 16 583 45 q 382 -14 460 -14 q 179 51 246 -14 q 111 257 111 115 l 111 743 l 225 743 m 194 857 q 315 993 280 949 q 365 1064 349 1036 l 477 1064 q 529 990 492 1036 q 651 857 566 945 l 651 842 l 570 842 q 420 968 511 879 q 272 842 328 877 l 194 842 l 194 857 z " },
		"ü": { "ha": 852, "x_min": 111, "x_max": 733, "o": "m 225 743 l 225 261 q 267 125 225 170 q 396 81 308 81 q 567 144 513 81 q 621 353 621 208 l 621 743 l 733 743 l 733 0 l 640 0 l 624 100 l 618 100 q 522 16 583 45 q 382 -14 460 -14 q 179 51 246 -14 q 111 257 111 115 l 111 743 l 225 743 m 232 945 q 250 996 232 980 q 293 1011 268 1011 q 337 996 319 1011 q 356 945 356 980 q 337 894 356 911 q 293 878 319 878 q 250 894 268 878 q 232 945 232 911 m 490 945 q 508 996 490 980 q 551 1011 526 1011 q 595 996 576 1011 q 614 945 614 980 q 595 894 614 911 q 551 878 576 878 q 508 894 526 878 q 490 945 490 911 z " },
		"ý": { "ha": 700, "x_min": 1, "x_max": 699, "o": "m 1 743 l 122 743 l 285 319 q 351 110 338 174 l 357 110 q 394 228 366 144 q 578 743 422 312 l 699 743 l 379 -103 q 268 -281 332 -229 q 113 -334 205 -334 q 11 -322 61 -334 l 11 -232 q 94 -240 48 -240 q 260 -110 210 -240 l 301 -4 l 1 743 m 279 859 q 349 960 311 901 q 408 1064 387 1020 l 545 1064 l 545 1050 q 456 941 515 1006 q 354 842 397 877 l 279 842 l 279 859 z " },
		"þ": { "ha": 851, "x_min": 119, "x_max": 774, "o": "m 233 643 q 336 730 278 703 q 465 757 393 757 q 692 655 611 757 q 774 372 774 553 q 692 89 774 191 q 465 -14 610 -14 q 232 96 315 -14 l 224 96 l 227 73 q 232 -22 232 20 l 232 -334 l 119 -334 l 119 1055 l 232 1055 l 232 739 q 228 643 232 704 l 233 643 m 450 661 q 285 599 336 661 q 232 400 233 536 l 232 372 q 284 148 232 216 q 452 81 336 81 q 657 374 657 81 q 607 590 657 519 q 450 661 557 661 z " },
		"ÿ": { "ha": 700, "x_min": 1, "x_max": 699, "o": "m 1 743 l 122 743 l 285 319 q 351 110 338 174 l 357 110 q 394 228 366 144 q 578 743 422 312 l 699 743 l 379 -103 q 268 -281 332 -229 q 113 -334 205 -334 q 11 -322 61 -334 l 11 -232 q 94 -240 48 -240 q 260 -110 210 -240 l 301 -4 l 1 743 m 159 945 q 177 996 159 980 q 220 1011 195 1011 q 264 996 245 1011 q 283 945 283 980 q 264 894 283 911 q 220 878 245 878 q 177 894 195 878 q 159 945 159 911 m 417 945 q 435 996 417 980 q 478 1011 453 1011 q 522 996 503 1011 q 541 945 541 980 q 522 894 541 911 q 478 878 503 878 q 435 894 453 878 q 417 945 417 911 z " },
		"Ā": { "ha": 879, "x_min": 0, "x_max": 879, "o": "m 760 0 l 636 315 l 239 315 l 117 0 l 0 0 l 392 996 l 489 996 l 879 0 l 760 0 m 600 419 l 485 726 q 439 869 463 785 q 396 726 424 804 l 279 419 l 600 419 m 247 1164 l 654 1164 l 654 1071 l 247 1071 l 247 1164 z " },
		"I": { "ha": 387, "x_min": 136, "x_max": 252, "o": "m 136 0 l 136 991 l 252 991 l 252 0 l 136 0 z " },
		"Ì": { "ha": 387, "x_min": 3, "x_max": 270, "o": "m 136 0 l 136 991 l 252 991 l 252 0 l 136 0 m 270 1071 l 195 1071 q 91 1171 151 1106 q 3 1279 31 1236 l 3 1293 l 141 1293 q 201 1185 163 1246 q 270 1088 240 1124 l 270 1071 z " },
		"Í": { "ha": 387, "x_min": 121, "x_max": 388, "o": "m 136 0 l 136 991 l 252 991 l 252 0 l 136 0 m 121 1088 q 192 1190 154 1130 q 251 1293 229 1249 l 388 1293 l 388 1279 q 299 1171 358 1235 q 197 1071 240 1106 l 121 1071 l 121 1088 z " },
		"Î": { "ha": 387, "x_min": -39, "x_max": 418, "o": "m 136 0 l 136 991 l 252 991 l 252 0 l 136 0 m -39 1086 q 82 1222 47 1179 q 132 1293 117 1265 l 245 1293 q 297 1220 260 1265 q 418 1086 334 1175 l 418 1071 l 338 1071 q 188 1197 278 1108 q 39 1071 96 1106 l -39 1071 l -39 1086 z " },
		"Ï": { "ha": 387, "x_min": 3, "x_max": 385, "o": "m 136 0 l 136 991 l 252 991 l 252 0 l 136 0 m 3 1174 q 21 1225 3 1209 q 64 1240 39 1240 q 109 1225 90 1240 q 127 1174 127 1209 q 109 1123 127 1140 q 64 1107 90 1107 q 21 1123 39 1107 q 3 1174 3 1140 m 262 1174 q 280 1225 262 1209 q 323 1240 298 1240 q 367 1225 348 1240 q 385 1174 385 1209 q 367 1123 385 1140 q 323 1107 348 1107 q 280 1123 298 1107 q 262 1174 262 1140 z " }
	}
};

export let defaultFont = FontResource.parse(defaultFontData);




/** Defines a Model Resource. */
export class ModelResource extends Resource {
}






/** Provides a way to group resources. */
export class ResourceGroup extends Node {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new ResourceManager instance.
	 * @param name The name of the interaction space. */
	constructor(name) {

		// Call the base class constructor
		super(name, "resourceGroup");

		// Create the node sets
		this._models = new NodeSet("models", this);
		this._fonts = new NodeSet("fonts", this);
		this._audios = new NodeSet("audios", this);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The model resources. */
	get models() { return this._models; }

	/** The font resources. */
	get fonts() { return this._fonts; }

	/** The audio resources. */
	get audios() { return this._audios; }
}





/** Defines a four-dimensional complex number to describe rotations. */
export class Quaternion extends Node {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Quaternion class.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name, parentNode, params = {}) {

		// Call the parent constructor
		super(name, parentNode, params);

		// If the params is an array, convert it to an object
		if (Array.isArray(params)) {
			params = {
				x: (params.length > 0) ? params[0] : 0,
				y: (params.length > 1) ? params[1] : 0,
				z: (params.length > 2) ? params[2] : 0,
				w: (params.length > 3) ? params[3] : 1
			};
		}

		// Create the children nodes
		this._x = new Measure("x", "x", this, params.x || 0);
		this._y = new Measure("y", "y", this, params.y || 0);
		this._z = new Measure("z", "z", this, params.z || 0);
		this._w = new Measure("w", "w", this, params.w || 1);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The value of the quaternion vector in the X(i) axis. */
	get x() { return this._x; }

	/** The value of the quaternion vector in the Y(j) axis. */
	get y() { return this._y; }

	/** The value of the quaternion vector in the Z(k) axis. */
	get z() { return this._z; }

	/** The rotation half-angle around the quaternion vector. */
	get w() { return this._w; }
}





/** Defines a three-dimensional vector. */
export class Vector3 extends Node {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Vector3 class.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a number array). */
	constructor(name, parentNode, params = {}) {

		// Call the parent constructor
		super(name, parentNode, params);

		// If the params is an array, convert it to an object
		if (Array.isArray(params)) {
			params = {
				x: (params.length > 0) ? params[0] : 1,
				y: (params.length > 1) ? params[1] : 1,
				z: (params.length > 2) ? params[2] : 1
			};
		}

		// Create the children nodes
		this._x = new Measure("x", "x", this, params.x || 0);
		this._y = new Measure("y", "y", this, params.y || 0);
		this._z = new Measure("z", "z", this, params.z || 0);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The value in the X axis. */
	get x() { return this._x; }

	/** The value in the Y axis. */
	get y() { return this._y; }

	/** The value in the Z axis. */
	get z() { return this._z; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Converts the Vector3 instance into an array representation. */
	toArray() {
		return [this._x.value, this._y.value, this._z.value];
	}

	/** Sets the values of the Vector3 from an array.
	* @param values An array with the numerical values. */
	fromArray(values) {
		this.x.setValue((values.length > 0) ? values[0] : 0);
		this.y.setValue((values.length > 1) ? values[1] : 0);
		this.z.setValue((values.length > 2) ? values[2] : 0);
	}
}




/** Defines a numeric measure. */
export class Measure extends Node {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Measure class.
	 * @param name The name of the Measure.
	 * @param type The type of the Measure.
	 * @param parentNode The parent Measure.
	 * @param params The initialization parameters (or a numeric value). */
	constructor(name, type, parentNode, params = {}) {

		// Call the parent constructor
		super(name, type, parentNode, params);

		// --------------------------------------------------------- PRIVATE FIELDS

		/** The current value of the Measure.*/
		this._value = 0;

		/** The minimum possible value of Measure. */
		this._min = Number.NEGATIVE_INFINITY;

		/** The maximum possible value of the Measure. */
		this._max = Number.POSITIVE_INFINITY;

		/** The default value of the Measure. .*/
		this._default = 0;

		/** The accuracy of the Measure. */
		this._accuracy = 0;

		// Set the values
		if (params)
			this.setValue(params);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** Gets the current value of the Measure. */
	get value() { return this._value; }

	/** Sets the current value of the Measure. */
	set value(newValue) {
		// TODO Include Warnings messages when the value is not in range
		if (newValue < this._min)
			this._value = this._min;
		else if (newValue > this._max)
			this._value = this._max;
		else
			this._value = newValue;
		this.updated = false;
	}


	/** Gets the minimum possible value of the Measure. */
	get min() { return this._min; }

	/** Sets the minimum possible value of the Measure. */
	set min(newMin) {
		if (newMin > this._max)
			this._max = newMin;
		if (newMin > this._value)
			this.value = newMin;
		this._min = newMin;
		this.updated = false;
	}


	/** Gets the maximum possible value of the Measure. */
	get max() { return this._max; }

	/** Sets the maximum possible value of the Measure. */
	set max(newMax) {
		if (newMax < this._min)
			this._min = newMax;
		if (newMax < this._value)
			this.value = newMax;
		this._max = newMax;
		this.updated = false;
	}


	/** Gets the default value of the Measure. */
	get default() { return this._default; }

	/** Sets the default value of the Measure. */
	set default(newDefault) {
		this._default = newDefault;
		this.updated = false;
	}


	/** Gets the value accuracy of the Measure. */
	get accuracy() { return this._accuracy; }

	/** Sets the value accuracy of the Measure. */
	set accuracy(newAccuracy) {
		this._accuracy = newAccuracy;
		this.updated = false;
	}


	/** Gets the measurement unit of the Measure. */
	get unit() { return this._unit; }

	/** Sets the measurement unit of the Measure. */
	set unit(newUnit) {
		// TODO create conversion between units
		this._unit = newUnit;
		this.updated = false;
	}
	setValue(params = {}) {
		if (typeof params == "number")
			this.value = params;
		else {
			this.min = params.min;
			this.max = params.max;
			this.value = params.value;
			this.accuracy = params.accuracy;
		}
	}

	/** Gets the value of the Number.
	 *  The value of the Number. */
	getValue() { return this._value; }
}




/** Defines a angular measure. */
export class Angle extends Measure {

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Angle class.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a numeric value). */
	constructor(name, parentNode, params = {}) {

		// If the params is a numeric value, encapsulate it in an object
		if (typeof params == "number")
			params = { value: params };
		else if (typeof params == "string")
			params = { value: parseFloat(params) };

		// Set the default unit to degrees
		if (!params.units)
			params.units = "degrees";

		// Call the base constructor
		super(name, "angle", parentNode, params);
	}
}




/** Defines a distance (relative dimensional magnitude) measure. */
export class Distance extends Measure {

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Distance class.
	 * @param name The name(s) of the node.
	 * @param parentNode The parent node.
	 * @param params The initialization parameters (or a numeric value). */
	constructor(name, parentNode, params = {}) {

		// If the params is a numeric value, encapsulate it in an object
		if (typeof params == "number")
			params = { value: params };
		else if (typeof params == "string")
			params = { value: parseFloat(params) };

		// Set the default unit to meters
		if (!params.units)
			params.units = "meters";

		// Call the base constructor
		super(name, "distance", parentNode, params);
	}
}




/** Defines a size (dimensional magnitude) measure. */
export class Size extends Measure {

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Size class.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters (or a numeric value). */
	constructor(name, parentNode, params = {}) {

		// If the params is a numeric value, encapsulate it in an object
		if (typeof params == "number")
			params = { value: params };
		else if (typeof params == "string")
			params = { value: parseFloat(params) };

		// Set the minimum value to 0 (no negative sizes allowed).
		params.min = 0;

		// Set the default unit to meters
		if (!params.units)
			params.units = "meters";

		// Call the base constructor
		super(name, "size", parentNode, params);
	}
}




/** Defines a time (dimensional magnitude) measure. */
export class Time extends Measure {

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Time class.
	 * @param name The name(s) of the node.
	 * @param parentNode The parent node.
	 * @param params The initialization parameters (or a numeric value). */
	constructor(name, parentNode, params = {}) {

		// If the params is a numeric value, encapsulate it in an object
		if (typeof params == "number")
			params = { value: params };
		else if (typeof params == "string")
			params = { value: parseFloat(params) };

		// Set the minimum value to 0 (no negative sizes allowed).
		params.min = 0;

		// Set the default unit to meters
		if (!params.units)
			params.units = "seconds";

		// Call the base constructor
		super(name, "time", parentNode, params);
	}
}





/** Defines a three dimensional shape. */
export class Shape extends Node {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes the Shape instance.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters. */
	constructor(name, parentNode, params = {}) {

		// Call the parent constructor
		super(name, parentNode, params);

		// Create the children nodes
		this._shaded = new String("shaded", this, params.shaded);
		this._color = new String("color", this, params.color);
		this._texture = new String("texture", this, params.texture);
		this._emissive = new String("color", this, params.color);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** Indicates if the Shape should be shaded or not. */
	get shaded() { return this._shaded; }

	/** The color of the Shape. */
	get color() { return this._color; }

	/** The diffuse texture of the Shape. */
	get texture() { return this._texture; }

	/** The emissive texture of the Shape. */
	get emissive() { return this._emissive; }
}






/** Defines a three-dimensional box Shape (global). */
export class Box extends Shape {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes the Box instance.
	 * @param name The name(s) of the node.
	 * @param parentNode The parent node.
	 * @param params The initialization parameters. */
	constructor(name, parentNode, params = {}) {
		super(name, parentNode, params);
		if (Array.isArray(params)) {
			params = {
				width: (params.length > 0) ? params[0] : 1,
				depth: (params.length > 1) ? params[1] : 1,
				height: (params.length > 2) ? params[2] : 1
			};
		}
		let defaultValue = params.size || params.width || 1;
		this._width = new Size("Width", this, params.width || defaultValue);
		this._depth = new Size("Depth", this, this._depth || defaultValue);
		this._height = new Size("Height", this, this._height || defaultValue);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The Size of in the X axis. */
	get width() { return this._width; }

	/** The Size of in the Z axis. */
	get depth() { return this._depth; }

	/** The Size of in the Y axis. */
	get height() { return this._height; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Converts the Box instance into an array representation. */
	toArray() {
		return [this._width.value, this._depth.value, this._height.value];
	}

	/** Sets the values of the Box from an array.
	* @param values An array with the numerical values. */
	fromArray(values) {
		this._width.setValue((values.length > 0) ? values[0] : 0);
		this._depth.setValue((values.length > 1) ? values[1] : values[0]);
		this._height.setValue((values.length > 2) ? values[2] : values[0]);
	}
}





/** Defines a three-dimensional ellipsoid Shape. */
export class Ellipsoid extends Shape {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes the Ellipsoid instance.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters. */
	constructor(name, parentNode, params = {}) {
		super(name, parentNode, params);
		if (Array.isArray(params)) {
			params = {
				radiusX: (params.length > 0) ? params[0] : 1,
				radiusY: (params.length > 1) ? params[1] : 1,
				radiusZ: (params.length > 2) ? params[2] : 1
			};
		}
		let radius = params.radius || params.radiusX || 1;
		this._radiusX = new Size("radiusX", this, params.radiusX || radius);
		this._radiusY = new Size("radiusY", this, params.radiusY || radius);
		this._radiusZ = new Size("radiusZ", this, params.radiusZ || radius);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The Size of the radius in the X axis. */
	get radiusX() { return this._radiusX; }

	/** The Size of the radius in the Y axis. */
	get radiusY() { return this._radiusY; }

	/** The Size of the radius in the Z axis. */
	get radiusZ() { return this._radiusZ; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Converts the Ellipsoid instance into an array representation. */
	toArray() {
		return [this._radiusX.value, this._radiusY.value, this._radiusZ.value];
	}

	/** Sets the values of the Ellipsoid from an array.
	* @param values An array with the numerical values. */
	fromArray(values) {
		this._radiusX.setValue((values.length > 0) ? values[0] : 0);
		this._radiusY.setValue((values.length > 1) ? values[1] : values[0]);
		this._radiusZ.setValue((values.length > 2) ? values[2] : values[0]);
	}
}





/** Defines a three-dimensional spherical Shape. */
export class Sphere extends Shape {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes the Sphere instance.
	 * @param name The name(s) of the node.
	 * @param parent The parent node.
	 * @param params The initialization parameters. */
	constructor(name, parentNode, params = {}) {
		super(name, parentNode, params);
		this._radius = new Size("radius", this, params.radius || 1);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The Size of the radius in all axes. */
	get radius() { return this._radius; }
}





/** Defines a numeric measure. */
export class String extends Node {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Measure class.
	 * @param name The name of the Measure.
	 * @param parentNode The parent Measure.
	 * @param params The initialization parameters (or a string value). */
	constructor(name, parentNode, params = {}) {

		// Call the parent constructor
		super(name, "string", parentNode, params);

		// --------------------------------------------------------- PRIVATE FIELDS

		/** The current value of the Measure.*/
		this._value = null;

		/** The default value of the Measure. .*/
		this._default = null;

		// Set the values
		if (params)
			this.setValue(params);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** Gets the current value of the Measure. */
	get value() { return this._value; }

	/** Sets the current value of the Measure. */
	set value(newValue) { this._value = newValue; this.updated = false; }

	/** Gets the default value of the Measure. */
	get default() { return this._default; }

	/** Sets the default value of the Measure. */
	set default(newDefault) { this._default = newDefault; }
	setValue(params = {}) {
		if (typeof params == "string")
			this.value = params;
		else {
			this.value = params.value;
			this.default = params.default;
		}
	}

	/** Gets the value of the Number.
	 *  @returns The value of the Number. */
	getValue() { return this._value; }
}





/** Defines an logic Behavior */
export class Behavior extends Node {

	// --------------------------------------------------------- PRIVATE FIELDS




	// ------------------------------------------------------- PUBLIC ACCESSORS



	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new logic behavior.
	 * @param name The name of the logic behavior.
	 * @param type The type of the logic behavior.
	 * @param parentNode The parent node.*/
	constructor(name, type, parentNode) {

		// Call the base class constructor
		super(name, type, parentNode);

	}
}






/** Defines a logic Entity. */
export class Entity extends Node {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Entity instance.
	 * @param name The name of the entity.
	 * @param type The type of the entity.
	 * @param parent The parent entity. */
	constructor(name, type, parent, representation) {


		// Call the base class constructor
		if (!name)
			name = type;
		super(name, type, parent);

		// let e = new THREE.Mesh(new THREE.SphereGeometry(1,64,64),
		// 	new THREE.MeshLambertMaterial({color: 0x00ff00}));

		// this.representation.add(e);
		this._representation = representation || new THREE.Mesh(new THREE.SphereGeometry(0.01, 64, 64), new THREE.MeshLambertMaterial({ color: 0x00ff00 }));
		// e.position.z=-10;
		this._representation.name = this.name;

		// Create the association with the parent object
		if (parent)
			parent._representation.add(this.representation);
		if (parent)
			console.log("Parenting: " +
				this._representation.name + " to " + parent._representation.name);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The representation of the entity. */
	get representation() { return this._representation; }

	/** The pose of the entity. */
	get pose() { return this._pose; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the entity.
	 * @param forced Indicates whether the update is forced or not.
	 * @param deltaTime The update time. */
	update(forced = false, deltaTime = 0) {

		// If the update is not forced, skip it when the node is already updated
		if (this.updated && !forced)
			return;

		// Call the base class function
		super.update(forced, deltaTime);

	}
}





/** Defines a Camera. */
export class Camera extends Entity {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Camera instance.
	 * @param name The name of the entity.
	 * @param parent The parent entity. */
	constructor(name, parent = null, params = {}) {

		// Call the base class constructor
		super(name, "camera", parent),
			console.log("Created camera");

		params = params || new Object();
		this._fieldOfView = params.fieldOfView || 45;
		this._aspectRatio = params.aspectRatio || 1;
		this._nearPlane = params.nearPlane || 1;
		this._farPlane = params.farPlane || Number.MAX_SAFE_INTEGER;
		this._representation = new THREE.PerspectiveCamera(this._fieldOfView, this._aspectRatio, this._nearPlane, this._farPlane);

		this.representation.position.z = 3;
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS


	/** The aspect ratio of the Camera. */
	get aspectRatio() { return this._aspectRatio; }
	set aspectRatio(value) {
		if (value < 0)
			throw Error("Invalid Aspect Ratio");
		this._aspectRatio = value;
	}


	/** Updates the camera.
	 * @param forced Indicates whether the update is forced or not.
	 * @param deltaTime The update time. */
	update(forced = false, deltaTime = 0) {

		// If the update is not forced, skip it when the node is already updated
		if (this.updated && !forced)
			return;

		// Call the base class
		super.update(forced, deltaTime);

		let camera = this._representation;
		camera.aspect = this._aspectRatio;
		camera.updateProjectionMatrix();

		// console.log("camera");
	}
}





/** Defines a Scene. */
export class Scene extends Entity {

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Define a public constructor.
	* @param parent The parent entity. */
	constructor(name, parent = null) {

		// Call the base class constructor
		super(name, "scene", parent, new THREE.Scene());
		console.log("Created scene");

		// TEMPORAL
		// let e = new THREE.Mesh(new THREE.SphereGeometry(1,64,64),
		// 	new THREE.MeshLambertMaterial({color: 0x00ff00}));
		// e.position.z=-10;
		// this.representation.add(e);

		// TODO: Add lights as entities
		this._representation.add(new THREE.AmbientLight(0x888888, 0.5));
		let light = new THREE.PointLight(0xffffff, 1);
		this._representation.add(light);
	}
}






/** Defines a Sphere entity. */
export class SphereEntity extends Entity {

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new SphereEntity instance.
	 * @param name The name of the entity.
	 * @param parentNode The parent entity. */
	constructor(name, parent = null, radius = 1) {

		// Call the base class constructor
		super(name, "sphere", parent, new THREE.Mesh(new THREE.SphereGeometry(radius, 64, 64), new THREE.MeshLambertMaterial({ color: 0xffff00 })));
	}
}








/** Defines a Text entity. */
export class TextEntity extends Entity {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new TextEntity instance.
	 * @param name The name of the entity.
	 * @param parent The parent entity. */
	constructor(name, parent = null, params = {}) {

		// Call the base class constructor
		super(name, "text", parent, new THREE.Mesh(new THREE.TextGeometry(params.characters, { font: defaultFont.representation, size: 0.1, height: 0.1 }), new THREE.MeshLambertMaterial({ color: 0xffff00 })));

		// Create the child nodes
		this._characters = new String("string", this, params.characters);
		this._font = new String("font", this, params.font);

		// Show a message on console
		console.log("Created Text: " + this.name);

		// Save the parameters

		// 
		// this.representation.position.z=-6;
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The string of characters of the text entity. */
	get characters() { return this._characters; }

	/** The font name of the text entity. */
	get font() { return this._font; }

	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the entity.
	 * @param forced Indicates whether the update is forced or not.
	 * @param deltaTime The update time. */
	update(forced = false, deltaTime = 0) {

		// If the update is not forced, skip it when the node is already updated
		if (this.updated && !forced)
			return;

		// Update the associated entity
		if (!this._characters.updated) {
			let mesh = this._representation;
			mesh.geometry = new THREE.TextGeometry(this._characters.value, { font: defaultFont.representation, size: 0.1, height: 1 });
			mesh.geometry.center();

			// Show a message on console
			console.log("Updated Text: " + this.name);
		}

		// Call the base class
		super.update(forced, deltaTime);

	}
}




/** Defines an interaction Component */
export class Component extends Node {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Component instance.
	 * @param name The name of the component.
	 * @param type The type of component.
	 * @param parentNode The parent component or widget.
	 * @param params The initialization parameters. */
	constructor(name, type, parentNode, params = {}) {

		// Call the base class constructor
		super(name, type, parentNode);

		// Check the parent node and get the parent entity
		let p = parentNode.parentNode;
		if (!p || !(p.type == "widget" || p.type == "component"))
			throw Error("Invalid parent for Component");
		this._parentEntity = p.entity;
	}

	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The entity of the component. */
	get entity() { return this._entity; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the Component.
	* @param forced Indicates whether the update is forced or not.
	* @param deltaTime The update time. */
	update(forced = false, deltaTime = 0) {

		// Call the parent class update function
		super.update(forced, deltaTime);

		// Update the associated entity
		this._entity.update(forced, deltaTime);
		// console.log("Component Updated");

	}
}





/** Defines a Camera Interaction Component. */
export class CameraComponent extends Component {

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new CameraComponent instance.
	 * @param name The name of the component.
	 * @param parentNode The parent component or widget.
	 * @param params The initialization parameters. */
	constructor(name, parent, params = {}) {

		// Call the base class constructor
		super(name, "camera", parent);

		// Create the text entity
		// this._entity = new TextEntity(name, this._parentEntity, "TESTING");

	}


	// --------------------------------------------------------- PUBLIC METHODS

	/* Updates the CameraComponent.
	* @param forced Indicates whether the update is forced or not.
	* @param deltaTime The update time. */
	update(forced = false, deltaTime = 0) {

		// Call the parent class update function
		super.update(forced, deltaTime);

		let space = this.parentNode;
		while (space.type != "space")
			space = space.parentNode;
		let camera = space.presences.getIndex(0).camera;

		camera.pose.orientation;

		// Update the associated entity
		// this._entity.update(forced, deltaTime);
		// console.log("Component Updated");
	}
}






/** Defines a Text Interaction Component. */
export class TextComponent extends Component {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new TextComponent instance.
	 * @param name The name of the component.
	 * @param parentNode The parent component or widget.
	 * @param params The initialization parameters. */
	constructor(name, parent, params = {}) {

		// Call the base class constructor
		super(name, "text", parent);

		// Create the text entity
		this._entity = new TextEntity(name, this._parentEntity, { characters: params.characters });

		// Create the child nodes
		this._characters = new String("string", this, params.characters);
		this._font = new String("font", this, params.font);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The string of characters of the text component. */
	get characters() { return this._characters; }

	/** The font name of the text component. */
	get font() { return this._font; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the TextComponent.
	* @param forced Indicates whether the update is forced or not.
	* @param deltaTime The update time. */
	update(forced = false, deltaTime = 0) {

		// Text entity
		let text = this._entity;
		if (!this._characters.updated) {
			text.characters.value = this._characters.value;
		}

		// Call the parent class update function
		super.update(forced, deltaTime);
	}
}






/** Defines the user Presence in an interaction space. */
export class Presence extends Node {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Presence instance.
	 * @param name The name of the presence.
	 * @param viewport The viewport associated to the user presence.
	 * @param camera The camera associated to the user presence.*/
	constructor(name, parentNode, viewport, camera) {

		// Call the base class constructor
		super(name, "presence", parentNode);


		this._viewport = viewport;
		this._camera = camera || new Camera("camera");
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The viewport associated to the user presence. */
	get viewport() { return this._viewport; }

	/** The camera associated to the user presence. */
	get camera() { return this._camera; }
}






/** Defines an Interaction Space. */
export class Space extends Node {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Space instance.
	 * @param name The name of the space.
	 * @param parentNode The parent node.
	 * @param params The initialization parameters. */
	constructor(name, parentNode, params = {}) {

		// Call the base class constructor
		super(name, "space", parentNode, params);

		// Create the child nodes
		this._spaces = new NodeSet("spaces", this);
		this._widgets = new NodeSet("widgets", this);
		this._presences = new NodeSet("presences", this);

		// Create the representation of the space
		this._entity = new Scene(this.name);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The representation of the space. */
	get entity() { return this._entity; }

	/** The resources of the space. */
	get resources() { return this._resources; }

	/** The widget definitions of the space. */
	get widgets() { return this._widgets; }

	/** The subspaces of the space. */
	get spaces() { return this._spaces; }

	/** The user presences in the space. */
	get presences() { return this._presences; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the space.
	 * @param forced Indicates whether the update is forced or not.
	 * @param deltaTime The update time. */
	update(forced = false, deltaTime = 0) {

		// Call the parent class update function
		super.update(forced, deltaTime);

		// console.log("Space Updated");
	}
}






/** Defines an User Interaction Viewport. */
export class Viewport {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Viewport instance.
	 * @param parentElement The parent HTML element. */
	constructor(params = {}) {

		/** The state of the viewport. */
		this._state = "maximized";

		/** The focus state of the viewport. */
		this._focused = false;

		/** The spaces of the viewport. */
		this._spaces = [];

		// Store the scene manager associated to this viewport
		// this._scene = scene;
		params = params || {};


		addCssRule('html,body', '{width:100%; height:100%; margin:0;}');
		addCssRule('.GeoPoseSandbox-Viewport, GeoPoseSandbox-Canvas', '{width:100%; height:100%; color:white; background:black;}');

		// Create the viewport WebGL renderer
		this._element = createDomElement("div", "GeoPose", 'GeoPoseSandbox-Viewport', params.parentElement);

		// Create the renderer
		this._renderer = new THREE.WebGLRenderer();
		this._renderer.xr.enabled = true;
		this._renderer.setAnimationLoop(this.update.bind(this));
		this._canvas = this._renderer.domElement;
		this._element.appendChild(this._canvas);

		// Create the debug panel
		// this._debugPanel = new DebugPanel(this);

		// Set a connection to the resize event
		window.onresize = (e) => { this.resize(); };

		// Update the viewport
		this.resize();
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The main element of the viewport. */
	get element() { return this._element; }

	/** The canvas element of the viewport. */
	get canvas() { return this._canvas; }

	/** The renderer of the viewport. */
	get renderer() { return this._renderer; }

	/** The spaces of the viewport. */
	get spaces() { return this._spaces; }

	/** The width of the viewport. */
	get width() { return this._width; }
	set width(value) { this._width = value; }

	/** The height of the viewport. */
	get height() { return this._height; }
	set height(value) { this._height = value; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the Viewport.
	 * @param time The current update time. */
	update(time = 0) {

		this._renderer.setClearColor(0xff0000);
		this._renderer.clear();

		// Update the delta time
		this._deltaTime = time - this._lastTime;
		this._lastTime = time;

		// Update the interaction layers and render it
		for (let space of this._spaces) {
			space.update(true);
			let camera = space.presences.getIndex(0).camera;
			camera.aspectRatio = this.width / this.height;
			camera.update(true, this._deltaTime);
			this._renderer.render(space.entity.representation, space.presences.getIndex(0).camera.representation);
		}
	}


	/** Resizes the viewport. */
	resize() {
		switch (this._state) {
			case "maximized":
				this._element.style.width = "100%";
				this._element.style.height = "100%";
				this.width = this._element.clientWidth;
				this.height = this._element.clientHeight;
				break;
		}

		// Set the size of the renderer
		this.renderer.setSize(this.width, this.height);

		// Update the camera properties of the associated presences
		for (let space of this._spaces) {
			for (let presence of space.presences) {
				if (presence.viewport != this)
					continue;
				presence.camera.aspectRatio = this.width / this.height;
				presence.camera.update(true);
			}
		}
	}


	/** Connects this viewport to a interaction Space.
	 * @param space The space to connect.*/
	link(space) {

		// Checks if the interaction space is already connected
		if (this._spaces.indexOf(space) >= 0)
			throw Error('Space: "' + space.name + '" is already connected');

		// Create a new presence
		new Presence("presence", space.presences, this);

		// Connect the space
		this._spaces.push(space);

		// Link the subspaces
		for (let subspace of space.spaces.childNodes)
			this.link(subspace);

	}


	/** Disconnects an interaction Space from the viewport.
	 * @param space The space to disconnect. */
	unlink(space) {
		let spaceIndex = this._spaces.indexOf(space);
		if (spaceIndex >= 0)
			this._spaces = this._spaces.splice(spaceIndex, 1);
		else
			throw Error('Space: "' + space.name + '" was not connected');
	}
}


/** Creates a DOM element
 * @param type The type of the element (its tag name)
 * @param id The id of the element.
 * @param classes The classes of the element.
 * @param parent The parent of the element.
 * @param content The HTML content of the element.
 * @param style The style of the element.
 * @returns The generated element. */
export function createDomElement(type, id, classes, parent, content, style) {

	// Create the element
	let element = document.createElement(type);

	// Set the properties of the element
	if (id)
		element.id = id;
	if (classes)
		element.className = classes;
	if (style)
		element.style.cssText = style;
	if (content)
		element.innerHTML = content;

	// Set the parent of element
	((parent) ? parent : document.body).appendChild(element);

	// Return the generated element
	return element;
}


/** Creates a CSS rule.
 * @param selector The CSS selector
 * @param rule The css rule
 * @param override Indicates whether to override rules or not. */
export function addCssRule(selector, rule, override = false) {

	// If there is no stylesheet, create it
	if (document.styleSheets.length == 0)
		document.head.append(document.createElement('style'));
	let stylesheet = document.styleSheets[0];

	// Check if the rule exists
	let rules = stylesheet.cssRules, ruleIndex, ruleCount = rules.length;
	for (let ruleIndex = 0; ruleIndex < ruleCount; ruleIndex++) {
		if (rules[ruleIndex].cssText.startsWith(selector)) {
			if (override)
				rules[ruleIndex].cssText = selector + " " + rule;
			else
				return;
		}
	}

	// If no rule was fond, create i and add it at the end
	stylesheet.insertRule(selector + " " + rule, ruleCount);
}







/** Defines an Interaction Widget. */
export class Widget extends Node {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Widget instance.
	 * @param name The name of the widget.
	 * @param type The type of widget.
	 * @param parentNode The parent widget or space.
	 * @param params The initialization parameters. */
	constructor(name, type, parentNode, params = {}) {

		// Call the base class constructor
		super(name || type, type, parentNode);

		// Create the child nodes
		this._widgets = new NodeSet("widgets", this);
		this._components = new NodeSet("components", this);

		// Check the parent node and get the parent entity
		let parent = parentNode.parentNode;
		if (!parent || !(parent.type == "widget" || parent.type == "space"))
			throw Error("Invalid parent for Widget");
		this._parentEntity = parent.entity;

		// Create the entity
		this._entity = new Entity(this.name, "widget", this._parentEntity);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The entity of the space. */
	get entity() { return this._entity; }

	/** The list of child widgets. */
	get widgets() { return this._widgets; }

	/** The components of the widget. */
	get components() { return this._components; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the widget.
	 * @param forced Indicates whether the update is forced or not.
	 * @param deltaTime The update time. */
	update(forced = false, deltaTime = 0) {

		// Call the parent class update function
		super.update(forced, deltaTime);

		// Update the associated entity
		this._entity.update(forced, deltaTime);

		// console.log("Widget Updated");

	}
}











export default GeoPoseSandbox;