/** Defines a Logic Event */
       class Event {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Event instance.
	 * @param type The event type.
	 * @param owner The event owner.
	 * @param data The event data. */
	constructor(type, owner, data) {


		// ---------------------------------------------------------- PUBLIC FIELDS

		/** Marks the object as an Event. */
		this.isEvent = true;
		this._type = type;
		this._owner = owner;
		this._data = data;
		this._listeners = [];
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The event type. */
	get type() { return this._type; }

	/** The event owner. */
	get owner() { return this._owner; }

	/** The event data. */
	get data() { return this._data; }

	/** The event listeners. */
	get listeners() { return this._listeners; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Adds a listener for the event.
	 * @param listener The listener function to add. */
	add(listener) {
		if (!this._listeners.includes(listener))
			this._listeners.push(listener);
	}


	/** Removes a listener for the event.
	 * @param listener The listener function to add. */
	removes(listener) {
		this._listeners = this._listeners.filter((l) => { return l != listener; });
	}


	/** Triggers the event.
	 * @param target The object that triggers the event.
	 * @param data Additional event data. */
	trigger(target, data) {
		for (let listener of this._listeners) {
			let captured = listener(this, target, data);
			if (captured)
				break; // If captured, stop broadcasting the event
		}
	}
}



/** Contains the metadata of a data type.
 * Provides a way to handle reflection and serialization in different contexts
 * (even after the code is transpiled to Javascript). */
       class Type {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Type class.
	 * @param name The name of the data type.
	 * @param innerType The Javascript type.
	 * @param parent The parent data type. */
	constructor(name, innerType, parent) {

		// Store the given name and add this instance to the global record
		this._name = name;
		if (!Type._record[name])
			Type._record[name] = this;
		else
			throw Error('Repeated data type name: "' + name + '"');

		// If there is a parent type, store the reference and create a link
		if (parent) {
			this._parent = parent;
			this._parent.children.push(this);
		}

		// Initialize the list of child types
		this._children = [];

		// Initialize the list of instances of the data type
		// this._instances = [];
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The global list of Type instances. */
	static get record() { return this._record; }

	/** The name of the data type. */
	get name() { return this._name; }

	/** The list of instances of the data type. */
	get instances() { return this._instances; }

	/** The parent data type. */
	get parent() { return this._parent; }

	/** The children data types. */
	get children() { return this._children; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Check if the type is (or inherits from) another.
	 * @param type The type to check against.
	 * @returns A boolean indicating whether the types are the same or not. */
	is(type) {
		let t = this;
		while (t) {
			if (t == type)
				return true;
			t = t._parent;
		}
		return false;
	}
}

// --------------------------------------------------------- PRIVATE FIELDS

/** The global list of Type instances. */
Type._record = {};








/** Defines a data item (often called a datum) in a graph structure .
 * Provides a way to store information in a complex way. */
       class Item {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Item class.
	 * @param name The name of the data item.
	 * @param parent The parent data item. */
	constructor(name, parent) {

		// Obtain the type of item from the static property
		let type = this.constructor["type"], className = this.constructor.name;
		if (type && type instanceof Type)
			this._type = type;
		else
			throw Error("No type data defined for class '" + className +
				"'. Remember to add it through the 'type' static property.");

		// Check the name of the item
		if (name && typeof (name) && name.length > 0)
			this._name = name;
		else
			name = type.name;

		// If there is a parent type, store the reference and create a link
		if (parent && parent instanceof Item) {
			this._parent = parent;
			parent._children.add(this);
		}

		// Initialize the list of children and of linked items
		this._children = new Collection([Item.type], this);
		this._links = new Collection([Item.type], this);

		// Create the events
		this._onModified = new Event("modified", this);
		this._onPreUpdate = new Event("pre-update", this);
		this._onPostUpdate = new Event("post-update", this);

		// Set the update state to false and set the update time
		this.updated = false;
		this._updateTime = Date.now();

		// Register this instance in the list of instances of the data type
		// this._type.register(this);

		// Trigger the onCreation event
		Item.onCreation.trigger(this);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The type of the data item. */
	get type() { return this._type; }

	/** The name of the data item. */
	get name() { return this._name; }

	/** The parent of the data item. */
	get parent() { return this._parent; }

	/** The child data items. */
	get children() { return this._children; }

	/** The linked data items. */
	get links() { return this._links; }

	/** The update state of the item. */
	get updated() { return this._updated; }
	set updated(value) {

		// If the value is the same as the current update state
		if (this._updated == value)
			return;

		// Set the update state and update the time
		this._updated = value;
		this._updateTime = Date.now();

		// Trigger the "modified" event
		this.onModified.trigger(this, value);
		Item.onModified.trigger(this, value);

		// Show a message on console
		// console.log("Needs update: " + this._name);

		// Propagate the event upwards in the hierarchy and to the links
		if (value == false) {
			if (this._parent)
				this._parent.updated = false;
			for (let link of this._links)
				link.updated = false;
		}
	}

	/** The last update time. */
	get updateTime() { return this._updateTime; }

	/** A global event triggered when the item is modified. */
	get onModified() { return this._onModified; }

	/** An event triggered before the item is updated. */
	get onPreUpdate() { return this._onPreUpdate; }

	/** An event triggered after the item is updated. */
	get onPostUpdate() { return this._onPostUpdate; }

	/** A global event triggered when a item is modified. */
	static get onModified() { return Item._onModified; }

	/** An event triggered before a item is updated. */
	static get onPreUpdate() { return Item._onPreUpdate; }

	/** An event triggered after a item is updated. */
	static get onPostUpdate() { return Item._onPostUpdate; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the Item instance.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		// If the update is not forced, skip it when the item is already updated
		if (this._updated && !forced)
			return;

		// Trigger the pre-update event 
		this._onPreUpdate.trigger(this);
		Item._onPreUpdate.trigger(this);

		// Update the children
		for (let child of this._children)
			child.update(deltaTime, forced);

		// Mark this item as updated
		this._updated = true;

		// Trigger the post-update event 
		this._onPostUpdate.trigger(this);
		Item._onPostUpdate.trigger(this);
	}


	destroy() {
		if (this._parent)
			this._parent._children.remove(this);
		while (this.children.count > 0)
			this._children[0].destroy();
	}

	/** Serializes the Item instance.
	 * @param format The serialization format.
	 * @return The serialized data. */
	serialize(format) {
		return Serialization.serialize(this, format);
	}


	/** Deserializes the Item instance.
	 * @param data The data to deserialize. */
	deserialize(data = {}) { Serialization.deserialize(this, data); }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Item class. */
Item.type = new Type("item", Item);

/** A global event triggered when a data item is modified. */
Item._onModified = new Event("modified");

/** A global event triggered before a data item is updated. */
Item._onPreUpdate = new Event("pre-update");

/** A global event triggered when a data item is updated. */
Item._onPostUpdate = new Event("post-update");


// ---------------------------------------------------------- PUBLIC EVENTS

/** A global event triggered when a data item is created. */
Item.onCreation = new Event("creation");








/** Manages the GeoPose Sandbox. */
       class GeoPoseSandbox extends Item {


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
		console.log(GeoPoseSandbox.id + " " +
			GeoPoseSandbox.version + " Initialized");
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The name of the GeoPose Sandbox. */
	static get id() { return "GeoPose Sandbox"; }

	/** The version number of the GeoPose Sandbox. */
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




/** Defines a collection of data items. */
       class Collection {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Collection instance.
	 * @param types The types of items in the collection.
	 * @param owner The owner the data collection. */
	constructor(types, owner) {

		// Check the 
		this._types = types;

		// Store the owner of the data collection
		this._owner = owner;

		// Initialize the array of items
		this._items = [];
		this._count = 0;
	}


	// ------------------------------------------------------ PUBLIC PROPERTIES

	/** The number of items of the data collection. */
	get count() { return this._count; }

	/** The owner of the data collection. */
	get owner() { return this._owner; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Gets a data item by index.
	 * @param index The index of the item to get.
	 * @returns The item with the specified index. */
	getByIndex(index) {
		if (index >= 0 && index < this._items.length)
			return this._items[index];
		return undefined;
	}


	/** Gets a data item by name.
	 * @param index The name of the item to get.
	 * @returns The item with the specified name. */
	getByName(name) {
		for (let item of this._items)
			if (item.name == name)
				return item;
		return undefined;
	}


	/** Adds a new item to the end of the list.
	 * @param item The item to add.
	 * @param position The position where to add the item (by default, at the
	 * end). Negative values imply counting from the end of the list.
	 * @returns The added item.  */
	add(item, position) {

		// If no position is defined, just add it to the end of the array
		if (position == undefined)
			this._items.push(item);
		else { // Otherwise, calculate the index from the position
			let index = 0, size = this._items.length;
			if (position > 0) {
				index = position;
				if (index > size)
					index = size; // Prevent out_of_bounds errors
			}
			else { // Negative values imply counting backwards
				index = size - position;
				if (index < 0)
					index = 0; // Prevent out_of_bounds errors
			}

			// Insert the item in the right position
			this._items.splice(index, 0, item);
		}

		// Remember to increase the counter 
		this._count++;
	}


	/** Removes an item from the list.
	 * @param item The item to remove. */
	remove(item) {
		for (let itemIndex = 0; itemIndex < this._count; itemIndex++) {
			if (this._items[itemIndex] == item) {
				this._items.splice(itemIndex, 1);
				itemIndex--;
				this._count--;
			}
		}
	}


	[Symbol.iterator]() {
		let pointer = 0, items = this._items;
		return {
			next() {
				if (pointer < items.length)
					return { done: false, value: items[pointer++] };
				else
					return { done: true, value: null };
			}
		};
	}
}



/** Provides multiple methods to serialize and deserialize data items. */
       class Serialization {

	/** Serializes a Item instance into an object.
	 * @param item The item to serialize.
	 * @param item The format to use in the serialization.
	 * @return The serialized data. */
	static serialize(item, format) {
		let data = {};

		return data;
	}


	/** Deserializes generic data into a data Item.
	 * @param item The data item to store the data.
	 * @param data The data to deserialize. */
	static deserialize(item, data) {

		// If the data is a string, check if it is JSON or CSV data
		if (typeof data == "string") {

			// Start parsing it as a CSV string
			let parsed;
			try {
				parsed = Serialization.fromCSV(data);
			}
			catch (_a) { }
			if (!parsed)
				try {
					parsed = Serialization.fromCSV(data);
				}
				catch (_b) { }
			if (!parsed)
				try {
					parsed = Serialization.fromJSON(data);
				}
				catch (_c) { }
			if (!parsed)
				return; // If no system has been successful
			data = parsed;
		}

		// If the data is an array, try to parse it value by value
		if (Array.isArray(data)) {
			for (let [index, dataPart] of data) {
				if (index >= item.children.count)
					return;
				item.children[index].deserialize(dataPart);
			}
		}

		// If the data is an object, analyze it key by key
		else
			for (let key in data) {
				let dataPart = data[key];
				if (dataPart == undefined)
					continue;
				let child = item.children.getByName(key);
				if (child)
					child.deserialize(dataPart);
			}
	}

	/** Parses a string.
	* @param s The string to parse.
	* @returns The CSV data. */
	static fromWords(s, separator = ' ') {
		let data = [];

		return data;
	}

	/** Parses a CSV (Comma-Separated-Values) string.
	 * @param s The string to parse.
	 * @returns The parsed data. */
	static fromCSV(s) {
		let data = [];

		return data;
	}



	/** Parses a JSON (JavaScript-Object-Notation) string.
	 * @param s The string to parse.
	 * @returns The parsed data. */
	static fromJSON(s) { return JSON.parse(s); }


	/** Converts an object into a CSV (Comma-Separated-Values) string.
	 * @param data The data object to convert.
	 * @returns The CSV representation of the object. */
	static toCSV(data) {

		// Returns the resulting string
		let string = "";

		// Returns the resulting string
		return string;
	}


	/** Converts an object into a JSON (JavaScript-Object-Notation) string.
	 * @param data The data object to convert.
	 * @returns The JSON representation of the object. */
	static toJSON(data, maxIndentation = 0) {

		// Returns the resulting string
		let string = "";

		// Returns the resulting string
		return string;
	}


	/** Serializes a data item into a string.
	 * @param item The data item to serialize to a string.
	 * @return The resulting string. */
	static toString(item) {
		let s = "";

		return s;
	}
}

       var SerializationFormat;
(function (SerializationFormat) {
	SerializationFormat[SerializationFormat["CSV"] = 0] = "CSV";
	SerializationFormat[SerializationFormat["JSON"] = 1] = "JSON";
	SerializationFormat[SerializationFormat["XML"] = 2] = "XML";
})(SerializationFormat || (SerializationFormat = {}));





/** Defines a complex data item. */
       class Complex extends Item {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the complex class.
	 * @param name The name of the data item.
	 * @param parent The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** Indicates whether all the the values are the default or not. */
	get isDefault() {
		for (let component of this._components)
			if (!component.isDefault)
				return false;
		return true;
	}

	/** Indicates whether the value is undefined or not. */
	get isUndefined() {
		for (let component of this._components)
			if (!component.isUndefined)
				return false;
		return true;
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Complex class. */
Complex.type = new Type("complex", Complex, Item.type);






/** Defines a simple data item. */
       class Simple extends Item {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Simple class.
	 * @param name The name of the data item.
	 * @param parent The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent);

		/** The valid values of the simple data item. */
		this._validValues = undefined;

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------ PUBLIC PROPERTIES

	/** The current value of the Simple data type.*/
	get value() {
		if (this._value == undefined)
			return this._defaultValue;
		return this._value;
	}
	set value(newValue) {
		if (this._value == newValue)
			return;
		if (!this.checkValue(newValue))
			throw Error('Invalid value "' + newValue + '" for: ' + this.name);
		this._value = newValue;
		this.updated = false;

		// Show a message on console
		// console.log("Value: " + this._name + " = " + this._value);
	}

	/** The default value of the Simple data type. */
	get defaultValue() { return this._defaultValue; }
	set defaultValue(newDefaultValue) {
		if (this._defaultValue == newDefaultValue)
			return;
		if (!this.checkValue(newDefaultValue))
			throw Error('Invalid default value "' + newDefaultValue +
				'" for: ' + this._name);
		this._defaultValue = newDefaultValue;
		this.updated = false;
	}

	/** The valid values of the Simple data type.*/
	get validValues() { return this._validValues; }
	set validValues(newValidValues) {
		this._validValues = newValidValues;
		if (!this.checkValue(this._value))
			throw Error('Invalid value "' +
				this._value + '" for: ' + this._name);
	}

	/** The index of the value in the valid Simple data type. */
	get validValueIndex() {
		if (this.validValues != undefined && this.value != undefined)
			return this.validValues.indexOf(this.value);
		return undefined;
	}

	/** Indicates whether the value is the default or not. */
	get isDefault() { return (this._value == this._defaultValue); }

	/** Indicates whether the value is undefined or not. */
	get isUndefined() { return (this._value == undefined); }

	/** An event triggered if the value is modified. */
	get onModified() { return this._onModified; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Obtains the value of the Simple data type
	 * @return The value of the Type. */
	valueOf() { return this.value; }


	/** Checks if the value is valid for the Simple data type,
	 * @param value The value to check.
	 * @returns A boolean value indicating whether the value is valid or not. */
	checkValue(value) {

		// Accept undefined values
		if (value == undefined)
			return true;

		// Check the list of valid values
		if (this._validValues && !this._validValues.includes(value))
			return false;

		// If the value has not been rejected, return true
		return true;
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Simple class. */
Simple.type = new Type("simple", Simple, Item.type);






/** Defines a Numeric data item. */
       class Number extends Simple {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Number class.
	 * @param name The name of the data item.
	 * @param parent The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent);

		// Set the values of the properties
		this._value = undefined;
		this._defaultValue = 0;

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The minimum possible value of Number. */
	get min() { return this._min; }
	set min(newMin) {
		if (newMin == undefined) {
			this._min = newMin;
			return;
		}
		if (this._max != undefined && newMin > this._max)
			this._max = newMin;
		if (this._value != undefined && this._value < newMin)
			this._value = newMin;
		this._min = newMin;
		this.updated = false;
	}

	/** The maximum possible value of the Number. */
	get max() { return this._max; }
	set max(newMax) {
		if (newMax == undefined) {
			this._max = newMax;
			return;
		}
		if (this._min != undefined && newMax < this._min)
			this._min = newMax;
		if (this._value != undefined && this._value > newMax)
			this._value = newMax;
		this._max = newMax;
		this.updated = false;
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Serializes the Number instance.
	 * @return The serialized data. */
	serialize() { return this._value; }


	/** Deserializes the Number instance.
	 * @param data The data to deserialize. */
	deserialize(data) {
		if (typeof data == "object") {
			this.min = data.min;
			this.max = data.max;
			this.defaultValue = data.defaultValue;
			this.value = data.value;
		}
		else if (typeof data !== "number")
			this.value = parseFloat(data);
		else
			this.value = data;
	}


	/** Checks if the value is valid for this Number instance.
	 * @param value The value to check.
	 * @returns A boolean value indicating whether the value is valid or not. */
	checkValue(value) {

		// Check the range 
		if (this._min != undefined && value < this._min)
			return false;
		if (this._max != undefined && value > this._max)
			return false;

		// If the value has not been rejected, check the 
		return super.checkValue(value);
	}


	/** Obtains the string representation of the Number instance.
	 * @returns The string representation of the Number instance. */
	toString() { return this.value.toFixed() || ""; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Number class. */
Number.type = new Type("number", Number, Simple.type);






/** Defines an RGBA color. */
       class Color extends Complex {


	// ------------------------------------------------------------ CONSTRUCTOR

	/** Initializes a new instance of the Color class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._r = new Number("r", this, { min: 0, max: 1, defaultValue: 0 });
		this._g = new Number("g", this, { min: 0, max: 1, defaultValue: 0 });
		this._b = new Number("b", this, { min: 0, max: 1, defaultValue: 0 });
		this._a = new Number("a", this, { min: 0, max: 1, defaultValue: 1 });

		// Define the components of the Complex type
		this._components = [this._r, this._g, this._b, this._a];

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------ PUBLIC PROPERTIES

	/** The red component of the color. */
	get r() { return this._r; }

	/** The green component of the color. */
	get g() { return this._g; }

	/** The blue component of the color. */
	get b() { return this._b; }

	/** The alpha component of the color. */
	get a() { return this._a; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Gets the values of the Color instance.
	* @returns An object with the values of the Color instance. */
	getValues() {
		return { r: this._r.value, g: this._g.value, b: this._b.value,
			a: this._a.value };
	}


	/** Sets the values of the Color instance.
	 * @param r The value of the Red component.
	 * @param g The value of the Green component.
	 * @param b The value of the Blue component.
	 * @param a The value of the Alpha component. */
	setValues(r = 0, g = 0, b = 0, a = 1) {
		this._r.value = r;
		this._g.value = g;
		this._b.value = b;
		this._a.value = a;
	}


	/** Obtains the string representation of the Color instance.
	 * @returns The string representation of the Color instance. */
	toString() {
		return "rgb(" + this._r + ", " + this._g + ", " + this._b + ")";
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Color class. */
Color.type = new Type("color", Color, Complex.type);








/** Defines the Euler orientation.
 * @see https://en.wikipedia.org/wiki/Euler_angles */
       class Euler extends Complex {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Euler class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent constructor
		super(name, parent);

		// Create the child items
		this._x = new Angle("x", this, 0);
		this._y = new Angle("y", this, 0);
		this._z = new Angle("z", this, 0);
		this._order = new String("order", this, "XYZ");

		// Define the components of the Complex type
		this._components = [this._x, this._y, this._z];

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The Angle in the X axis. */
	get x() { return this._x; }

	/** The Angle in the Y axis. */
	get y() { return this._y; }

	/** The Angle in the Z axis. */
	get z() { return this._z; }

	/** The order of application of axis rotation. */
	get order() { return this._order; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Gets the values of the Euler instance.
	* @returns An object with the values of the Euler instance. */
	getValues() {
		return { x: this._x.value, y: this._y.value, z: this._z.value };
	}


	/** Sets the values of the Euler instance.
	 * @param x The value in the X axis.
	 * @param y The value in the Y axis.
	 * @param z The value in the Z axis. */
	setValues(x = 0, y = 0, z = 0) {
		this._x.value = x;
		this._y.value = y;
		this._z.value = z;
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Euler class. */
Euler.type = new Type("euler", Euler, Complex.type);






/** Defines a String data item. */
       class String extends Simple {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the String class.
	 * @param name The name of the data item.
	 * @param parent The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The regular expression values of the string.*/
	get validRegEx() { return this._validRegEx; }
	set validRegEx(newValidRegEx) {
		this._validRegEx = newValidRegEx;
		if (!this._value)
			return;
		if (!this.checkValue(this._value))
			throw Error('Invalid value "' + this._value + '" for: ' + this.name);
		this._onModified.trigger(this);
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Deserializes the String instance.
	 * @param data The data to deserialize. */
	deserialize(data) {
		if (typeof data == "object") {
			this._validValues = data.validValues;
			this._validRegEx = data.validRegEx;
			this._defaultValue = data.default; // Check the default value
			data = this.value = data.value;
		}
		if (typeof data !== "string")
			data = JSON.stringify(data);
		this.value = data;
	}


	/** Checks if the value is valid for this String instance.
	 * @param value The value to check.
	 * @returns A boolean value indicating whether the value is valid or not. */
	checkValue(value) {

		// Check the regular expression
		if (this._validRegEx && !this._validRegEx.test(value))
			return false;

		// If the value has not been rejected, check the 
		return super.checkValue(value);
	}


	/** Obtains the string representation of the Number instance.
	 * @returns The string representation of the Number instance. */
	toString() { return this.value || ""; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the String class. */
String.type = new Type("string", String, Simple.type);






/** Defines a numeric Measure item. */
       class Measure extends Number {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Type class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent);

		// Store the units of the Measure
		let units = this.constructor["units"], className = this.constructor.name;
		if (units)
			this._units = units;
		else
			throw Error("No units defined for class '" + className + "'.");
		this._unitIndex = 0;

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The current unit of the measure. */
	get unit() { return this._units[this._unitIndex]; }

	/** The units of the measure. */
	get units() { return this._units; }

	/** The value of the measure in the selected unit.*/
	get unitIndex() { return this._unitIndex; }
	set unitIndex(u) {
		this._unitIndex = u;
		this._onModified.trigger(this);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Measure class. */
Measure.type = new Type("measure", Measure, Number.type);


/** Defines a Measurement Unit. */
       class MeasurementUnit {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the MeasurementUnit class.
	 * @param id The id of the Measurement Unit.
	 * @param abbrevs The abbreviations of the Measurement Unit.
	 * @param factor The relative conversion factor of the Measurement Unit.
	 * @param default The default value of the Measurement Unit.
	 * @param min The minimum possible value of the Measurement Unit.
	 * @param max The maximum possible value of the Measurement Unit. */
	constructor(id, abbrevs, factor = 1, defaultValue, min, max) {
		this._id = id;
		this._abbrevs = abbrevs;
		this._factor = factor;
		this._default = defaultValue;
		this._min = min;
		this._max = max;
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The name of the Measurement Unit. */
	get id() { return this._id; }

	/** The list of abbreviations of the Measurement Unit. */
	get abbrevs() { return this._abbrevs; }

	/** The relative conversion factor of the Measurement Unit. */
	get factor() { return this._factor; }

	/** The default value of the Measurement Unit. */
	get default() { return this._default; }

	/** The minimum possible value of the Measurement Unit. */
	get min() { return this._min; }

	/** The maximum possible value of the Measurement Unit. */
	get max() { return this._max; }
}






/** Defines a angular measurement. */
       class Angle extends Measure {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Angle class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Angle class. */
Angle.type = new Type("angle", Angle, Measure.type);

/** The measurement units associated to the Angle class. */
Angle.units = [
	new MeasurementUnit("degrees", ["deg", "d", "º"], 1),
	new MeasurementUnit("radians", ["rad", "RAD"], Math.PI / 180)
];






/** Defines a four-dimensional complex number to describe rotations. */
       class Quaternion extends Complex {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Quaternion class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent constructor
		super(name, parent);

		// Create the children items
		this._x = new Number("x", this, 0);
		this._y = new Number("y", this, 0);
		this._z = new Number("z", this, 0);
		this._w = new Number("w", this, 1);

		// Define the components of the Complex type
		this._components = [this._x, this._y, this._z, this._w];

		// Deserialize the initialization data
		if (data)
			this.deserialize(data);
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


	// --------------------------------------------------------- PUBLIC METHODS

	/** Gets the values of the Quaternion instance.
	 * @returns An object with the values of the Quaternion instance. */
	getValues() {
		return { x: this._x.value, y: this._y.value, z: this._z.value,
			w: this._w.value };
	}


	/** Sets the values of the Quaternion instance.
	 * @param x The value of the quaternion vector in the X(i) axis.
	 * @param y The value of the quaternion vector in the Y(j) axis.
	 * @param z The value of the quaternion vector in the Z(k) axis.
	 * @param w The rotation half-angle around the quaternion vector. */
	setValues(x = 0, y = 0, z = 0, w = 1) {
		this._x.value = x;
		this._y.value = y;
		this._y.value = z;
		this._w.value = w;
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Quaternion class. */
Quaternion.type = new Type("quaternion", Quaternion, Complex.type);






/** Defines a three-dimensional vector. */
       class Vector extends Complex {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Vector3 class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent);

		// Create the child items
		this._x = new Distance("x", this);
		this._y = new Distance("y", this);
		this._z = new Distance("z", this);

		// Define the components of the Complex type
		this._components = [this._x, this._y, this._z];

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The vector component in the X axis. */
	get x() { return this._x; }

	/** The vector component in the Y axis. */
	get y() { return this._y; }

	/** The vector component in the Z axis. */
	get z() { return this._z; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Gets the values of the Vector instance.
	* @returns An object with the values of the Vector instance. */
	getValues() {
		return { x: this._x.value, y: this._y.value, z: this._z.value };
	}


	/** Sets the values of the Vector instance.
	 * @param x The vector component in the X axis.
	 * @param y The vector component in the Y axis.
	 * @param z The vector component in the Z axis. */
	setValues(x = 0, y = 0, z = 0) {
		this._x.value = x;
		this._y.value = y;
		this._z.value = z;
	}


	/** Obtains the string representation of the Vector instance.
	 * @returns The string representation of the Vector instance. */
	toString() { return this._components.join(", "); }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Vector class. */
Vector.type = new Type("vector", Vector, Complex.type);





/** Defines a length measurement. */
       class Distance extends Measure {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Distance class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Distance class. */
Distance.type = new Type("distance", Distance, Measure.type);

/** The measurement units associated to the Distance class. */
Distance.units = [
	new MeasurementUnit("meters", ["m", "ms"], 1),
	new MeasurementUnit("centimeters", ["cm", "cms"], 0.01),
	new MeasurementUnit("millimeters", ["mm", "mms"], 0.001),
	new MeasurementUnit("kilometers", ["km", "kms"], 1000)
];





/** Defines a dimensional measurement. */
       class Size extends Measure {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Size class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent);

		// Sizes can not have negative values
		this._value = 0;
		this._min = 0;

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Size class. */
Size.type = new Type("size", Size, Measure.type);

/** The measurement units associated to the Size class. */
Size.units = [
	new MeasurementUnit("meters", ["m", "ms"], 1),
	new MeasurementUnit("centimeters", ["cm", "cms"], 0.01),
	new MeasurementUnit("millimeters", ["mm", "mms"], 0.001),
	new MeasurementUnit("kilometers", ["km", "kms"], 1000)
];





/** Defines a temporal measurement. */
       class Time extends Measure {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Time class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the time class. */
Time.type = new Type("Time", Time, Measure.type);

/** The measurement units associated to the Time class. */
Time.units = [
	new MeasurementUnit("seconds", ["s", "sec"], 1),
	new MeasurementUnit("minutes", ["m", "mins"], 1 / 60),
	new MeasurementUnit("hours", ["h"], 1 / 3600),
	new MeasurementUnit("milliseconds", ["ms", "millisecs"], 1000),
];






/** Defines a three dimensional shape. */
       class Shape extends Item {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes the Shape instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._shaded = new String("shaded", this);
		this._color = new String("color", this);
		this._texture = new String("texture", this);
		this._emissive = new String("color", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
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

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Shape class. */
Shape.type = new Type("shape", Shape, Item.type);







/** Defines a three-dimensional box Shape (global). */
       class Box extends Shape {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes the Box instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent);

		// Create the child items
		this._width = new Size("width", this);
		this._depth = new Size("depth", this);
		this._height = new Size("height", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The size of the box the X axis. */
	get width() { return this._width; }

	/** The size of the box in the Y axis. */
	get height() { return this._height; }

	/** The size of the box the Z axis. */
	get depth() { return this._depth; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Box class. */
Box.type = new Type("box", Box, Shape.type);






/** Defines a three-dimensional ellipsoid shape. */
       class Ellipsoid extends Shape {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes the Ellipsoid instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent);

		// Create the child items
		this._radiusX = new Size("radiusX", this);
		this._radiusY = new Size("radiusY", this);
		this._radiusZ = new Size("radiusZ", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The radius in the X axis. */
	get radiusX() { return this._radiusX; }

	/** The radius in the Y axis. */
	get radiusY() { return this._radiusY; }

	/** The radius in the Z axis. */
	get radiusZ() { return this._radiusZ; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Ellipsoid class. */
Ellipsoid.type = new Type("ellipsoid", Ellipsoid, Shape.type);






/** Defines a three-dimensional spherical Shape. */
       class Sphere extends Shape {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes the Sphere instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent);

		// Create the child items
		this._radius = new Size("radius", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The Size of the radius in all axes. */
	get radius() { return this._radius; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Sphere class. */
Sphere.type = new Type("sphere", Sphere, Shape.type);






/** Defines a boolean data item. */
       class Boolean extends Simple {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Boolean class.
	 * @param name The name of the data type.
	 * @param parent The parent data type.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent);

		// Set the values of the properties
		this._value = undefined;
		this._defaultValue = false;

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Serializes the Boolean instance.
	 * @return The serialized data. */
	serialize() { return this._value; }


	/** Deserializes the Boolean instance.
	 * @param data The data to deserialize. */
	deserialize(data) {
		if (typeof data == "object") {
			this.defaultValue = data.default;
			this.value = data.value;
		}
		else if (typeof data !== "boolean")
			this.value = (data == "false" || data == 0) ? false : true;
		else
			this.value = data;
	}


	/** Obtains the string representation of the Boolean instance.
	 * @returns The string representation of the Boolean instance. */
	toString() { return this.value ? "true" : "false"; }


	/** Obtains the primitive value of the Boolean instance.
	 * @returns The primitive value of the Boolean instance. */
	valueOf() { return this.value; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Boolean class. */
Boolean.type = new Type("boolean", Boolean, Simple.type);





/** Defines the basic class of a Pose Extension. */
       class Extension extends Item {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Extension class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Extension class. */
Extension.type = new Type("extension", Extension, Item.type);






/** Defines a reference frame. */
       class Frame extends Item {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Frame class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._shape = new Shape("shape", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}

	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The shape of the reference frame. */
	get shape() { return this._shape; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Frame class. */
Frame.type = new Type("frame", Frame, Item.type);








/** Defines a geodetic (elliptical) frame. */
       class GeodeticFrame extends Frame {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the GeodeticFrame class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data = {}) {

		// Call the base class constructor
		super(name, parent);

		// Create the children nodes
		this._equatorialRadius = new Distance("equatorialRadius", this, data.equatorialRadius || 6378137.0);
		this._polarRadius = new Distance("polarRadius", this, data.equatorialRadius || 6356752.314245);
		this._flattening = new Number("flattening", this, data.z || 0);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);

		// TODO Map projections
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The equatorial radius (the semi-major axis). */
	get equatorialRadius() { return this._equatorialRadius; }

	/** The polar radius (the semi-minor axis). */
	get polarRadius() { return this._polarRadius; }

	/** The flattening factor. */
	get flattening() { return this._flattening; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the GeodeticFrame class. */
GeodeticFrame.type = new Type("geodetic-frame", GeodeticFrame, Frame.type);


GeodeticFrame.defaultFrame = new GeodeticFrame("Earth", undefined);








/** Defines a Pose of an object. */
       class Pose extends Item {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Pose class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		// this._position = new Position("position", this);
		// this._orientation = new Orientation("orientation", this);
		this._childPoses = new Collection([Pose.type], this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The position of the Pose. */
	get position() { return this._position; }

	/** The orientation of the Pose. */
	get orientation() { return this._orientation; }

	/** The parent Pose. */
	get parent() { return this._parentPose; }

	/** The child Poses. */
	get childPoses() { return this._childPoses; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Pose class. */
Pose.type = new Type("pose", Pose, Item.type);






/** Defines a basic position within a reference frame. */
       class Position extends Item {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Location class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._relativeValues = new Vector("relativeValues", this);
		this._absoluteValues = new Vector("absoluteValues", this);
		this._verticalVector = new Vector("verticalVector", this);
		this._forwardVector = new Vector("forwardVector", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
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

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Position class. */
Position.type = new Type("position", Position, Item.type);






/** Define the basic class of a three dimensional orientation. */
       class Orientation extends Item {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Orientation class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._relativeValues = new Quaternion("relativeValues", this);
		this._absoluteValues = new Quaternion("absoluteValues", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The relative orientation. */
	get relativeValues() { return this._relativeValues; }

	/** The absolute orientation. */
	get absoluteValues() { return this._absoluteValues; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Orientation class. */
Orientation.type = new Type("orientation", Orientation, Item.type);








/** Defines the GeoPose of an object. */
       class GeoPose extends Pose {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the GeoPose class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent, data);

		// Create the child nodes
		this._frame = new GeodeticFrame("frame", this);
		this._extensions = new Collection([Extension.type], this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);

	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The geodetic frame of the GeoPose. */
	get frame() { return this._frame; }

	/** The extensions of the GeoPose. */
	get extensions() { return this._extensions; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Pose class. */
GeoPose.type = new Type("geopose", GeoPose, Pose.type);








/** Defines an orientation based on an axis vector and an angle. */
       class AxisAngleOrientation extends Orientation {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the AxisAngleOrientation class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._axis = new Vector("axis", this, data);
		this._angle = new Angle("angle", this, data);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The axis vector. */
	get axis() { return this._axis; }

	/** The angle around the axis. */
	get angle() { return this._angle; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the AxisAngleOrientation class. */
AxisAngleOrientation.type = new Type("axis-angle-orientation", AxisAngleOrientation, Orientation.type);








/** Defines an orientation with a target. */
       class LookAtOrientation extends Orientation {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the YawPitchRollOrientation class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._targetName = new String("target", this);
		this._targetPosition = new Vector("position", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The target to point towards. */
	get targetName() { return this._targetName; }

	/** The target position. */
	get targetPosition() { return this._targetPosition; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the LookAtOrientation class. */
LookAtOrientation.type = new Type("look-at-orientation", LookAtOrientation, Orientation.type);







/** Defines an orientation based on a 3x3 rotation matrix. */
       class MatrixOrientation extends Orientation {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the MatrixOrientation class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._values = new Number("values", this, data);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The numeric values of the rotation matrix. */
	get values() { return this._values; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the MatrixOrientation class. */
MatrixOrientation.type = new Type("matrix-orientation", MatrixOrientation, Orientation.type);







/** Defines an orientation with a quaternion. */
       class QuaternionOrientation extends Orientation {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the QuaternionOrientation class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._x = new Number("x", this);
		this._y = new Number("y", this);
		this._z = new Number("z", this);
		this._w = new Number("w", this, { value: 1, defaultValue: 1 });

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
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

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the QuaternionOrientation class. */
QuaternionOrientation.type = new Type("quaternion-orientation", QuaternionOrientation, Orientation.type);






/** Defines a Tait-Bryan orientation with Yaw, Pitch and Roll angles. */
       class TaitBryanOrientation extends Orientation {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR
	/** Initializes a new instance of the TaitBryanOrientation class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._yaw = new Angle("yaw", this);
		this._pitch = new Angle("pitch", this);
		this._roll = new Angle("roll", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The Angle in degrees around the equator of the globe. */
	get yaw() { return this._yaw; }

	/** The Angle in degrees around the prime meridian of the globe. */
	get pitch() { return this._pitch; }

	/** The vertical distance relative to the surface to the globe. */
	get roll() { return this._roll; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the TaitBryanOrientation class. */
TaitBryanOrientation.type = new Type("Tait-Bryan-orientation", TaitBryanOrientation, Orientation.type);









/** Defines a Euclidean pose with a quaternion orientation. */
       class EuclideanPoseQuaternion extends Pose {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the EuclideanPoseQuaternion class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._position = new EuclideanPosition("position", this, null);
		this._orientation = new QuaternionOrientation("orientation", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The position of the Euclidean Pose. */
	get position() {
		return this._position;
	}

	/** The orientation of the Euclidean Pose. */
	get orientation() {
		return this._orientation;
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the EuclideanPoseQuaternion class. */
EuclideanPoseQuaternion.type = new Type("euclidean-pose-quaternion", EuclideanPoseQuaternion, Pose.type);







/** Defines a position in an euclidean coordinate system. */
       class EuclideanPosition extends Position {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the EuclideanPosition class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the children nodes
		this._x = new Distance("x", this);
		this._y = new Distance("y", this);
		this._z = new Distance("z", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The distance from the origin in the X axis. */
	get x() { return this._x; }

	/** The distance from the origin in the Y axis. */
	get y() { return this._y; }

	/** The distance from the origin in the Z axis. */
	get z() { return this._z; }

	/** Updates the Item instance.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		console.log("EuclideanPosition");
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the EuclideanPosition class. */
EuclideanPosition.type = new Type("euclidean-position", EuclideanPosition, Position.type);







/** Defines a Euclidean pose with Yaw-Pitch-Roll orientation. */
       class EuclideanPoseYPR extends Pose {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the EuclideanPoseYPR class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._position = new EuclideanPosition("position", this, null);
		this._orientation = new TaitBryanOrientation("orientation", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The position of the Euclidean Pose. */
	get position() {
		return this._position;
	}

	/** The orientation of the Euclidean Pose. */
	get orientation() {
		return this._orientation;
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the EuclideanPoseYPR class. */
EuclideanPoseYPR.type = new Type("euclidean-basic-ypr", EuclideanPoseYPR, Pose.type);







/** Defines a basic GeoPose with Quaternion-based orientation. */
       class GeoPoseBasicQuaternion extends GeoPose {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the GeoPoseBasicQuaternion class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._position = new GeodeticPosition("position", this);
		this._orientation = new QuaternionOrientation("orientation", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The position of the GeoPose. */
	get position() { return this._position; }

	/** The orientation of the GeoPose. */
	get orientation() { return this._orientation; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the GeoPoseBasicQuaternion class. */
GeoPoseBasicQuaternion.type = new Type("geopose-basic-quaternion", GeoPoseBasicQuaternion, GeoPose.type);









/** Defines a position in geodetic (elliptical) coordinate system.
* (Based on SPICE and Local Tangent Plane - East North Up). */
       class GeodeticPosition extends Position {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the GeoPosition class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the children nodes
		this._longitude = new Angle("longitude", this);
		this._latitude = new Angle("latitude", this);
		this._altitude = new Distance("h", this);

		// Store the frame
		if (!data)
			data = {};
		this._frame = data.frame || GeodeticFrame.defaultFrame;
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The vertical distance relative to the surface to the ellipsoid. */
	get frame() { return this._frame; }

	/** The angle around the equator of the ellipsoid. */
	get longitude() { return this._longitude; }

	/** The angle around the prime meridian of the ellipsoid. */
	get latitude() { return this._latitude; }

	/** The vertical distance relative to the surface to the ellipsoid. */
	get altitude() { return this._altitude; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the GeoPosition.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		// If the update is not forced, skip it when the item is already updated
		if (this._updated && !forced)
			return;

		// Call the base class function
		super.update(deltaTime, forced);

		// Calculate the relative location
		let lng = -this._longitude.value * (Math.PI / 180), lat = this._latitude.value * (Math.PI / 180), alt = this._altitude.value + this._frame.equatorialRadius.value, lngSin = Math.sin(lng), lngCos = Math.cos(lng), latSin = Math.sin(lat), latCos = Math.cos(lat);

		this.relativeValues.x.value = (lngCos * latCos * alt);
		this.relativeValues.y.value = (latSin * alt);
		this.relativeValues.z.value = (lngSin * latCos * alt);

		// Calculate the vertical vector
		this.verticalVector.x.value = (0);
		this.verticalVector.y.value = (-lng);
		this.verticalVector.z.value = (lat - Math.PI / 2);


	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the GeodeticPosition class. */
GeodeticPosition.type = new Type("geodetic-position", GeodeticPosition, Position.type);







/** Defines a basic GeoPose with Tait-Bryan (Yaw-Pitch-Roll) orientation. */
       class GeoPoseBasicYPR extends GeoPose {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the YawPitchRollOrientation class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._position = new GeodeticPosition("position", this);
		this._orientation = new TaitBryanOrientation("orientation", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The position of the GeoPose. */
	get position() { return this._position; }

	/** The orientation of the GeoPose. */
	get orientation() { return this._orientation; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the GeoPoseBasicYPR class. */
GeoPoseBasicYPR.type = new Type("geopose-basic-ypr", GeoPoseBasicYPR, GeoPose.type);






/** Defines a position in an orbital coordinate system. */
       class OrbitalPosition extends Position {

	// --------------------------------------------------------- PRIVATE FIELDS

	// TODO


	// ------------------------------------------------------- PUBLIC ACCESSORS

	// TODO


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the OrbitalPosition class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the children nodes
		// TODO

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the OrbitalPosition class. */
OrbitalPosition.type = new Type("orbital-position", OrbitalPosition, Position.type);









/** Defines an Interaction Space. */
       class Space extends Item {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Space instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent);

		// Create the child nodes
		this._entity = new SpaceEntity(this.name);
		this._subspaces = new Collection([Space.type], this);
		this._presences = new Collection([Presence.type], this);
		this._widgets = new Collection([Widget.type], this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The entity of the space. */
	get entity() { return this._entity; }

	/** The subspaces of the space. */
	get subspaces() { return this._subspaces; }

	/** The user presences in the space. */
	get presences() { return this._presences; }

	/** The widgets of the space. */
	get widgets() { return this._widgets; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the space.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		// If the update is not forced, skip it when the item is already updated
		if (this._updated && !forced)
			return;

		// Call the parent class update function
		super.update(deltaTime, forced);

		// Show a message on console
		// console.log("Space Updated");
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Space class. */
Space.type = new Type("space", Space, Item.type);








/** Defines a logic entity. */
       class Entity extends Item {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Entity instance.
	 * @param name The name of the item.
	 * @param parent The parent item.
	 * @param representation The representation of the entity. */
	constructor(name, parent, representation) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._pose = new Pose("pose", this);

		// Check the representation
		if (representation)
			this._representation = representation;
		else
			this._representation = new THREE.Object3D();
		this._representation.name = this.name;

		// Create the association with the parent entity
		if (parent && parent.representation) {
			let parentEntity = parent;
			parentEntity._representation.add(this._representation);
			console.log("Parenting: " + this.name + " to " + parentEntity.name);
		}
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The representation of the entity. */
	get representation() { return this._representation; }

	/** The pose of the entity. */
	get pose() { return this._pose; }
	set pose(p) {
		if (this._pose)
			this._pose.destroy();
		this._pose = p;
		this.updated = false;
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the Entity.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		// If the update is not forced, skip it when the item is already updated
		if (this.updated && !forced)
			return;

		// Update the properties of the camera
		if (this._pose.position && !this._pose.position.updated) {
			this._pose.position.update();
			let p = this._pose.position.relativeValues;
			this._representation.position.set(p.x.value, p.y.value, p.z.value);
			console.log("Positioning " + this._name + ": " +
				p.x.value + ", " + p.y.value + ", " + p.z.value);

			let v = this._pose.position.verticalVector;
			this.representation.rotation.setFromVector3(new THREE.Vector3(-v.x.value, 0, 0));
		}
		if (this._pose.orientation && !this._pose.orientation.updated) {
			this._pose.orientation.update();
			let r = this._pose.orientation.relativeValues;
			this._representation.rotation.set(r.x.value, r.y.value, r.z.value);
		}

		// 
		console.log("Updated: " + this.name);

		// Call the base class function
		super.update(deltaTime, forced);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Entity class. */
Entity.type = new Type("entity", Entity, Item.type);






/** Defines a Space entity. */
       class SpaceEntity extends Entity {

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new SpaceEntity instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent, new THREE.Scene());

		// Deserialize the initialization data
		if (data)
			this.deserialize(data);

		// Add a light
		this._representation.add(new THREE.AmbientLight(0x888888, 0.5));

		// TEMPORAL
		let light = new THREE.DirectionalLight(0xffffff);
		light.position.z = 3;
		this._representation.add(light);
		this._representation.add(new THREE.Mesh(new THREE.SphereGeometry(100000, 64, 64), new THREE.MeshPhongMaterial({ color: 0x00ff00 })));

	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the SpaceEntity class. */
SpaceEntity.type = new Type("space-entity", SpaceEntity, Entity.type);








/** Defines the user Presence in an interaction space. */
       class Presence extends Item {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Presence instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent);

		// Create the child items
		this._entity = new PresenceEntity(name + "Entity", this);
		// The space node is not initialized here because it is actually a link

		// Deserialize the initialization data
		if (data)
			this.deserialize(data);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The entity associated with this presence. */
	get entity() { return this._entity; }

	/** The space associated with the presence. */
	get space() { return this._space; }
	set space(space) { this._space = space; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Presence class. */
Presence.type = new Type("presence", Presence, Item.type);







/** Defines a user Presence entity. */
       class PresenceEntity extends Entity {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new PresenceEntity instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent);

		// Create the child items
		this._fieldOfView = new Number("fov", this, { defaultValue: 45 });
		this._aspectRatio = new Number("aspect", this, { defaultValue: 1 });
		this._nearPlane = new Number("near", this, { defaultValue: 0.001 });
		this._farPlane = new Number("far", this, { defaultValue: 100000000 });

		// Deserialize the initialization data
		if (data !== undefined)
			this.deserialize(data);

		// Create the representation
		this._representation = new THREE.PerspectiveCamera(this._fieldOfView.value, this._aspectRatio.value, this._nearPlane.value, this._farPlane.value);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The field of view of the Camera. */
	get fieldOfView() { return this._fieldOfView; }

	/** The aspect ratio of the Camera. */
	get aspectRatio() { return this._aspectRatio; }

	/** The near plane of the Camera frustum. */
	get nearPlane() { return this._nearPlane; }

	/** The far plane of the Camera frustum. */
	get farPlane() { return this._farPlane; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the Entity.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		// Show a message on console
		console.log("Updated PresenceEntity");

		// If the update is not forced, skip it when the item is already updated
		if (this.updated && !forced)
			return;

		// Update the properties of the camera
		let camera = this._representation;
		let updateMatrix = false;

		if (!this._fieldOfView.updated) {
			camera.fov = this._fieldOfView.value;
			updateMatrix = true;
		}
		if (!this._aspectRatio.updated) {
			camera.aspect = this._aspectRatio.value;
			updateMatrix = true;
		}
		if (!this._nearPlane.updated) {
			camera.near = this._nearPlane.value;
			updateMatrix = true;
		}
		if (!this._farPlane.updated) {
			camera.far = this._farPlane.value;
			updateMatrix = true;
		}

		// Update the projection matrix, if required
		if (updateMatrix)
			camera.updateProjectionMatrix();


		// Call the base class function
		super.update(deltaTime, forced);

		// TEMPORAL
		// if (camera.position.z == 0) {
		// console.log("REPOSITIONED CAMERA");
		// camera.position.z = 100000000;
		camera.lookAt(0, 0, 0);
		// }

	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the PresenceEntity class. */
PresenceEntity.type = new Type("presence-entity", PresenceEntity, Entity.type);








/** Defines an user interaction widget. */
       class Widget extends Item {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Widget instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent);

		// Create the child items
		this._widgets = new Collection([Widget.type], this);

		// Check the parent node and get the parent entity
		if (!parent || !(parent.type.is(Layer.type)
			|| parent.type.is(Widget.type)))
			throw Error("Invalid parent for Widget " + name);
		this._parentEntity = parent.entity;

		// Create the entity
		this._entity = new Entity(this.name, this._parentEntity);
		this._entity.links.add(this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}



	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The entity of the space. */
	get entity() { return this._entity; }

	/** The list of child widgets. */
	get widgets() { return this._widgets; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the Widget instance.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		// If the update is not forced, skip it when the item is already updated
		if (this._updated && !forced)
			return;

		// Call the parent class update function
		super.update(deltaTime, forced);

		// Update the associated entity
		this._entity.update(deltaTime, forced);

		// Show a message on console
		console.log("Widget Updated");
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Widget class. */
Widget.type = new Type("widget", Widget, Item.type);







/** Defines an user interaction (view) layer . */
       class Layer extends Item {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Layer instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param presence The user presence associated with the layer. */
	constructor(name, parent, presence) {

		// Call the parent class constructor
		super(name, parent);

		// Create the child items
		this._widgets = new Collection([Widget.type], this);
		this._presence = presence;
		this._space = presence.space;
		this._presence.links.add(this);
		this._space.links.add(this);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The widgets of the layer. */
	get widgets() { return this._widgets; }

	/** The Interaction Space associated to the layer. */
	get space() { return this._space; }

	/** The user Presence in the layer. */
	get presence() { return this._presence; }

	/** The entity associated to the layer. */
	get entity() { return this._space.entity; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the layer.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		// If the update is not forced, skip it when the item is already updated
		if (this._updated && !forced)
			return;

		// Update the space	and the presence of the user within it
		this.space.update(deltaTime, forced);
		this.presence.update(deltaTime, forced);

		// Update the widgets, the space and the user presence
		for (let widget of this.widgets)
			widget.update(deltaTime, forced);

		// Call the parent class update function
		super.update(deltaTime, forced);

		// Show a message on console
		console.log("Layer Updated");
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Layer class. */
Layer.type = new Type("layer", Layer, Item.type);










/** Defines a user. */
       class User extends Item {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new User class instance.
	 * @param name The name of the data item.
	 * @param parent The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent);

		// Create the child items
		this._presences = new Collection([Presence.type], this);
		this._views = new Collection([View.type], this);

		// Deserialize the initialization data
		if (data !== undefined)
			this.deserialize(data);

		// Create the defaults presences and views
		if (this._presences.count == 0) {
			let spaces = this.parent.spaces;
			for (let space of spaces) {
				let presence = new Presence("DefaultPresence", this);
				presence.space = space;
				this.presences.add(presence);
			}
		}
		if (this._views.count == 0)
			this._views.add(new View("DefaultView", this));
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The presences of the user in the interaction spaces. */
	get presences() { return this._presences; }

	/** The point of views of the user. */
	get views() { return this._views; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the User class. */
User.type = new Type("user", User, Item.type);













/** Defines a User Interaction View. */
       class View extends Item {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new View instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent);

		/** The time between updates. */
		this._deltaTime = 0;

		/** The last update time. */
		this._lastTime = 0;

		/** The Frames Per Second counter. */
		this._fpsCounter = 0;

		/** The Frames Per Second timer. */
		this._fpsTimer = 0;

		/** The current Frames Per Second value. */
		this._fpsValue = 0;

		/** The list of Frames Per Second values. */
		this._fpsValues = [];

		/** The maximum size of the array of Frames Per Second values. */
		this._fpsValuesMaxSize = 100;

		// Create the sub nodes
		this._width = new Number("width", this, { default: 100, min: 0 });
		this._height = new Number("height", this, { default: 100, min: 0 });
		this._state = new String("state", this, { default: "Maximized",
			validValues: "Normal, Maximized, FullScreen, VR, AR" });
		this._layers = new Collection([Layer.type], this);


		// Create the viewport WebGL renderer
		this._element = View.createDomElement("div", this.name + "View", undefined, 'CoEditAR-View');
		this._canvas = View.createDomElement("canvas", this.name + "Canvas", this._element, 'CoEditAR-Canvas', 'width:100%; height:100%;');
		this._viewport = new ViewPort(this._canvas, this.update.bind(this));

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);

		// If there is no layer, create a default ones
		if (this._layers.count == 0) {
			let presences = this.parent.presences;
			for (let presence of presences) {
				this.layers.add(new Layer("Layer", this, presence));
			}
		}

		// Set a connection to the resize event
		this.resize();
		window.onresize = (e) => { this.resize(); };
		this._state.onModified.add(() => { this.resize(); });

		// TEMPORAL Switch to fullscreen with a double click
		this._element.addEventListener("dblclick", () => {
			this._state.value = "FullScreen";
		});
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The main element of the view. */
	get element() { return this._element; }

	/** The canvas element of the view. */
	get canvas() { return this._canvas; }

	/** The state of the view. */
	get state() { return this._state; }

	/** The width of the view. */
	get width() { return this._width; }

	/** The height of the view. */
	get height() { return this._height; }

	/** The layers of the view. */
	get layers() { return this._layers; }

	/** The current Frames Per Second value. */
	get fpsValue() { return this._fpsValue; }

	/** The list of Frames Per Second values. */
	get fpsValues() { return this._fpsValues; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the view instance.
	 * @param time The time (in milliseconds) since the last call. */
	update(time = 0) {

		// Update the delta time and Frames Per Second counter
		time /= 1000; // Convert the time to seconds
		this._deltaTime = time - this._lastTime;
		this._lastTime = time;
		this._fpsTimer += this._deltaTime;
		this._fpsCounter++;
		if (this._fpsTimer >= 1) {
			this._fpsValue = this._fpsCounter;
			if (this._fpsValues.length >= this._fpsValuesMaxSize)
				this._fpsValues.shift();
			this._fpsValues.push(this._fpsValue);
			this._fpsTimer %= 1;
			this._fpsCounter = 0;

			// Show a message on console
			// console.log("FPS: " + this._fpsValue);
		}



		// Update and render the layers
		for (let layer of this._layers) {
			layer.update(this._deltaTime);
			this._viewport.render(layer.presence);
		}
	}


	/** Resizes the view. */
	resize() {

		// If the user has left the FullScreen mode, switch to the previous value
		if (this._state.updated && this._state.value == "FullScreen")
			if (!document.fullscreenElement)
				this._state.value = "Maximized";

		// Update the state of the view
		if (!this._state.updated) {
			switch (this._state.value) {
				case "Normal":
					this._element.style.position = "initial";
					break;
				case "Maximized":
					this._element.style.position = "fixed";
					this._element.style.top = "0";
					this._element.style.left = "0";
					this._element.style.width = "100vw";
					this._element.style.height = "100vh";
					break;
				case "FullScreen":
					if (!document.fullscreenElement)
						this._element.requestFullscreen();
					this._element.style.width = "100vw";
					this._element.style.height = "100vh";
					break;
			}

			// Mark the state item as updated
			this._state.updated = true;
		}

		// Set the size of the viewport
		this._width.value = this._element.clientWidth;
		this._height.value = this._element.clientHeight;
		this._viewport.resize(this._width.value, this._height.value);
		let aspectRatio = this._width.value / this._height.value;

		// Update the camera properties of the associated presences
		for (let layer of this._layers) {
			layer.presence.entity.aspectRatio.value = aspectRatio;
			layer.presence.entity.update();
		}
	}


	/** Creates a DOM element
	 * @param type The type of the element (its tag name)
	 * @param id The id of the element.
	 * @param parent The parent of the element.
	 * @param classes The classes of the element.
	 * @param style The style of the element.
	 * @param content The HTML content of the element.
	 * @returns The generated element. */
	static createDomElement(type, id, parent, classes, style, content) {

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
	static addCssRule(selector, rule, override = false) {

		// If there is no stylesheet, create it
		if (document.styleSheets.length == 0)
			document.head.append(document.createElement('style'));
		let stylesheet = document.styleSheets[0];

		// Check if the rule exists
		let rules = stylesheet.cssRules, ruleIndex, ruleCount = rules.length;
		for (ruleIndex = 0; ruleIndex < ruleCount; ruleIndex++) {
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
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the View class. */
View.type = new Type("view", View, Item.type);




/** Defines a Viewport. */
       class ViewPort {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new ViewPort instance.
	 * @param canvas The canvas of the viewport.
	 * @param updateFunction The callback for the. */
	constructor(canvas, updateFunction) {

		// Store the canvas instance
		this._canvas = canvas;

		// Create the renderer
		this._renderer = new THREE.WebGLRenderer({ canvas: this._canvas,
			antialias: true, logarithmicDepthBuffer: true });
		this._renderer.setPixelRatio(window.devicePixelRatio);
		this._renderer.xr.enabled = true;
		this._renderer.setAnimationLoop(updateFunction);
	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The canvas element of the viewport. */
	get canvas() { return this._canvas; }

	/** The renderer of the viewport. */
	get renderer() { return this._renderer; }

	/** The width of the viewport. */
	get width() { return this._width; }

	/** The height of the viewport. */
	get height() { return this._height; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Resizes the viewport.
	 * @param width The new width of the viewport.
	 * @param height The new height of the viewport. */
	resize(width, height) {
		this._width = width;
		this._height = height;
		this._renderer.setSize(width, height);
	}


	/** Renders the viewport.
	 * @param presence The presence of a user in a interaction space */
	render(presence) {

		// Clear the renderer
		this._renderer.setClearColor(0xff0000);
		this._renderer.clear();

		// Render the
		this._renderer.render(presence.space.entity.representation, presence.entity.representation);
	}
}





/** Defines an logic behavior, */
       class Behavior extends Item {


	// ------------------------------------------------------- PROTECTED FIELDS

	// ------------------------------------------------------- PUBLIC ACCESSORS

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Behavior instance.
	 * @param name The name of the logic behavior.
	 * @param parent The parent item.*/
	constructor(name, parent) {

		// Call the base class constructor
		super(name, parent);

	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Behavior class. */
Behavior.type = new Type("behavior", Behavior, Item.type);









/** Defines a Atmosphere Entity. */
       class AtmosphereEntity extends Entity {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new AtmosphereEntity instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._ellipsoid = new Ellipsoid("shape", this, data);
		this._clouds = new String("clouds", this);

		// Deserialize the initialization data
		if (data)
			this.deserialize(data);

		// Add the mesh geometry
		this._mesh = new THREE.Mesh(new THREE.SphereGeometry(10000000, 64, 64), new THREE.MeshPhongMaterial({ color: 0xffffff, transparent: true }));
		this._representation.add(this._mesh);

	}

	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The shape of the terrain. */
	get ellipsoid() { return this._ellipsoid; }

	/** The normal texture of the terrain. */
	get clouds() { return this._clouds; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the AtmosphereEntity instance.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		// Show a message on console
		console.log("Updated AtmosphereEntity");

		if (!this._ellipsoid.updated) {
			this._mesh.scale.set(this._ellipsoid.radiusX.value * 1.01, this._ellipsoid.radiusY.value * 1.01, this._ellipsoid.radiusZ.value * 1.01);
		}

		if (!this._clouds.updated && this._clouds.value) {
			console.log("clouds");
			const texture = new THREE.TextureLoader().load(this._clouds.value);
			this._mesh.material.alphaMap = texture;
		}

		// Call the base class function
		super.update(deltaTime, forced);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the AtmosphereEntity class. */
AtmosphereEntity.type = new Type("atmosphere-entity", AtmosphereEntity, Entity.type);








/** Defines a Background Entity. */
       class BackgroundEntity extends Entity {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new BackgroundEntity instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._shape = new Ellipsoid("shape", this, data);
		this._texture = new String("texture", this);

		// Deserialize the initialization data
		if (data)
			this.deserialize(data);

		// Add the mesh geometry
		this._mesh = new THREE.Mesh(new THREE.SphereGeometry(1, 64, 64), new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.BackSide }));
		this._representation.add(this._mesh);
		this._mesh.renderOrder = -100;

	}


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The shape of the component. */
	get shape() { return this._shape; }

	/** The shape of the component. */
	get texture() { return this._texture; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the BackgroundEntity instance.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		if (!this._shape.updated) {
			this._mesh.scale.set(this._shape.radiusX.value, this._shape.radiusY.value, this._shape.radiusZ.value);
		}

		if (!this._texture.updated) {
			let textureURL = this._texture.value;
			if (textureURL) {
				const texture = new THREE.TextureLoader().load(textureURL);
				this._mesh.material = new THREE.MeshBasicMaterial({
					map: texture, side: THREE.BackSide
				});
			}
		}

		// Call the base class function
		super.update(deltaTime, forced);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the BackgroundEntity class. */
BackgroundEntity.type = new Type("background-entity", BackgroundEntity, Entity.type);








/** Defines a Graticule Entity. */
       class GraticuleEntity extends Entity {


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
		this._representation.add(this._lines);

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
			this._lines.scale.set(this._ellipsoid.radiusX.value * 1.005, this._ellipsoid.radiusY.value * 1.01, this._ellipsoid.radiusZ.value * 1.01);
		}

		// Call the base class function
		super.update(deltaTime, forced);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the GraticuleEntity class. */
GraticuleEntity.type = new Type("graticule-entity", GraticuleEntity, Entity.type);






/** Defines a Grid entity. */
       class GridEntity extends Entity {

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new GridEntity instance.
	 * @param name The name of the entity.
	 * @param parentNode The parent entity. */
	constructor(name, parent, radius = 1) {

		// Call the base class constructor
		super(name, parent);

		// Create the grid
		let grid = new THREE.GridHelper(1000000);
		grid.rotateZ(Math.PI / 2);
		this.representation.add(grid);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the GridEntity class. */
GridEntity.type = new Type("grid-entity", GridEntity, Entity.type);






/** Defines a Shape entity. */
       class ShapeEntity extends Entity {

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new ShapeEntity instance.
	 * @param name The name of the entity.
	 * @param parentNode The parent entity. */
	constructor(name, parent, radius = 1) {

		// Call the base class constructor
		super(name, parent);

		// Create 
		this.representation.add(new THREE.Mesh(new THREE.ConeGeometry(100000, 100000, 64, 64), new THREE.MeshLambertMaterial({ color: 0xffff00 })));

	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the ShapeEntity class. */
ShapeEntity.type = new Type("shape-entity", ShapeEntity, Entity.type);









/** Defines a Terrain Entity. */
       class TerrainEntity extends Entity {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new TerrainEntity instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._ellipsoid = new Ellipsoid("shape", this, data);
		this._diffuse = new String("diffuse", this);
		this._normal = new String("normal", this);

		// Deserialize the initialization data
		if (data)
			this.deserialize(data);

		// Add the mesh geometry
		this._mesh = new THREE.Mesh(new THREE.SphereGeometry(1, 64, 64), new THREE.MeshPhongMaterial({ color: 0xffffff }));
		this._representation.add(this._mesh);

	}

	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The shape of the terrain. */
	get ellipsoid() { return this._ellipsoid; }

	/** The diffuse texture of the terrain. */
	get diffuse() { return this._diffuse; }

	/** The normal texture of the terrain. */
	get normal() { return this._normal; }


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the TerrainEntity instance.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		// Show a message on console
		// console.log("Updated TerrainEntity")

		if (!this._ellipsoid.updated) {
			this._mesh.scale.set(this._ellipsoid.radiusX.value, this._ellipsoid.radiusY.value, this._ellipsoid.radiusZ.value);
		}

		if (!this._diffuse.updated && this._diffuse.value) {
			const texture = new THREE.TextureLoader().load(this._diffuse.value);
			this._mesh.material.map = texture;
		}

		if (!this._normal.updated && this._normal.value) {
			const texture = new THREE.TextureLoader().load(this._normal.value);
			this._mesh.material.normalMap = texture;
		}

		// Call the base class function
		super.update(deltaTime, forced);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the TerrainEntity class. */
TerrainEntity.type = new Type("terrain-entity", TerrainEntity, Entity.type);






/** Defines a widget for the background. */
       class BackgroundWidget extends Widget {



	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new PlanetWidget instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		if (data.radius) {
			data.radiusX = data.radius;
			data.radiusY = data.radius;
			data.radiusZ = data.radius;
		}

		// Add the shape Component
		let mesh = new BackgroundEntity(name + "Mesh", this._entity, data);

		console.log(mesh);
		// = new ShapeEntity(this._name, this._parentEntity);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Widget class. */
BackgroundWidget.type = new Type("background-widget", BackgroundWidget, Widget.type);








/** Defines a widget for a GeoPose. */
       class GeoPoseWidget extends Widget {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new PlanetWidget instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Add the entities
		this._grid = new GridEntity(this._name + "Grid", this._entity, data);
		this._marker = new ShapeEntity(this._name + "Marker", this._entity, data);

		// Set the pose of the entity as a pose entity
		this._entity.pose = new GeoPoseBasicYPR("pose", this._entity);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** The marker of the widget. */
	get marker() { return this._marker; }

	/** The grid of the widget. */
	get grid() { return this._marker; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Widget class. */
GeoPoseWidget.type = new Type("GeoPose-widget", GeoPoseWidget, Widget.type);









/** Defines a widget for a planet. */
       class PlanetWidget extends Widget {

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** The component of the widget. */
	// get planet(): PlanetComponent { return this._planet; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new PlanetWidget instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent);

		// Add the shape Component
		this._terrain = new TerrainEntity(name + "Terrain", this._entity, data);
		this._atmosphere = new AtmosphereEntity(name + "Atmosphere", this._entity, data);
		this._graticule = new GraticuleEntity(name + "Graticule", this._entity, data);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Widget class. */
PlanetWidget.type = new Type("planet-widget", PlanetWidget, Widget.type);
