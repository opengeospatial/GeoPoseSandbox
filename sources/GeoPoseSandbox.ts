import { List } from "./data/collections/List";
import { Item } from "./data/Item";
import { Type } from "./data/Type";
import { Space } from "./user/interaction/Space";
import { User } from "./user/User";

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
	private _spaces: List<Space>;

	/** The users of the GeoPoseSandbox instance. */
	private _users: List<User>;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The name of the Geopose Sandbox. */
	static get id(): string { return "GeoPose Sandbox"; }

	/** The version number of the Geopose Sandbox. */
	static get version(): string { return "0.1"; }

	/** The list of GeoPoseSandbox instances. */
	static get instances(): GeoPoseSandbox[] { 
		return GeoPoseSandbox._instances;
	}

	/** The list of GeoPoseSandbox instances. */
	static get autoInit(): boolean { return GeoPoseSandbox._autoInit; }
	static set autoInit(value: boolean) { GeoPoseSandbox._autoInit = value; }

	/** The interaction spaces of the GeoPoseSandbox instance. */
	get spaces(): List<Space> { return this._spaces; }

	/** The interaction spaces of the GeoPoseSandbox instance. */
	get users(): List<User> { return this._users; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new GeoPoseSandbox instance.
	 * @param data The initialization data. */
	constructor(data?:any) {

		// Call the parent class constructor
		super("root");

		// Create the child items
		this._spaces = new List<Space>([Space.type], this);
		this._users = new List<User>([User.type], this);
		
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
