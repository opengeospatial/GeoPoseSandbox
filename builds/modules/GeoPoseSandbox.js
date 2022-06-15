import { List } from "./data/collections/List.js";
import { Item } from "./data/Item.js";
import { Type } from "./data/Type.js";
import { Space } from "./user/interaction/Space.js";
import { User } from "./user/User.js";

/** Manages the GeoPose Sandbox. */
export class GeoPoseSandbox extends Item {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new GeoPoseSandbox instance.
	 * @param data The initialization data. */
	constructor(data) {

		// Call the parent class constructor
		super("root");

		// Create the child items
		this._spaces = new List([Space.type], this);
		this._users = new List([User.type], this);

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
		console.log(GeoPoseSandbox.id + " " +
			GeoPoseSandbox.version + " Initialized");
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The name of the Geopose Sandbox. */
	static get id() { return "GeoPose Sandbox"; }

	/** The version number of the Geopose Sandbox. */
	static get version() { return "0.1"; }

	/** The list of GeoPoseSandbox instances. */
	static get instances() {
		return GeoPoseSandbox._instances;
	}

	/** The list of GeoPoseSandbox instances. */
	static get autoInit() { return GeoPoseSandbox._autoInit; }
	static set autoInit(value) { GeoPoseSandbox._autoInit = value; }

	/** The interaction spaces of the GeoPoseSandbox instance. */
	get spaces() { return this._spaces; }

	/** The interaction spaces of the GeoPoseSandbox instance. */
	get users() { return this._users; }


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


// When the page is completely loaded, unless otherwise specified otherwise, 
// automatically initialize the Sandbox (to allow the use of custom 
// HTML elements).
window.addEventListener("load", () => {
	if (GeoPoseSandbox.autoInit && GeoPoseSandbox.instances.length == 0)
		GeoPoseSandbox.init();
});

