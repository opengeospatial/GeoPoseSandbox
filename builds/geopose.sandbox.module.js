import * as THREE from "./externals/three.module.js";






/** Defines a data item (often called a datum) in a graph structure .
 * Provides a way to store information in a mainly hierarchical way. */
export class Item {


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


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Item class.
	 * @param name The name of the data item.
	 * @param parent The parent data item. */
	constructor(name, parent, data) {

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

		// Trigger the onCreation event
		Item.onCreation.trigger(this);
	}


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


	/** Destroys the Item instance. */
	destroy() {
		if (this._parent)
			this._parent._children.remove(this);
		if (this._children.count > 0)
			this._children.clear();
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




/** Defines a collection of data items. */
export class Collection {


	// ------------------------------------------------------ PUBLIC PROPERTIES

	/** The number of items of the data collection. */
	get count() { return this._count; }

	/** The owner of the data collection. */
	get owner() { return this._owner; }


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


	/** Adds a new item to the end of the collection.
	 * @param item The item to add.
	 * @param position The position where to add the item (by default, at the
	 * end). Negative values imply counting from the end of the collection.
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


	/** Removes an item from the collection.
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

	/** Removes all items from the collection. */
	clear() {
		while (this._count > 0) {
			this._items[0].destroy();
			this._items.splice(0, 1);
			this._count--;
		}
	}


	/** Iteration through the collection. */
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





/** Defines a complex data item. */
export class Complex extends Item {


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


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the complex class.
	 * @param name The name of the data item.
	 * @param parent The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent, data);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Complex class. */
Complex.type = new Type("complex", Complex, Item.type);







/** Defines an RGBA color. */
export class Color extends Complex {


	// ------------------------------------------------------ PUBLIC PROPERTIES

	/** The red component of the color. */
	get r() { return this._r; }

	/** The green component of the color. */
	get g() { return this._g; }

	/** The blue component of the color. */
	get b() { return this._b; }

	/** The alpha component of the color. */
	get a() { return this._a; }


	// ------------------------------------------------------------ CONSTRUCTOR

	/** Initializes a new instance of the Color class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent, data);

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
export class Euler extends Complex {


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The Angle in the X axis. */
	get x() { return this._x; }

	/** The Angle in the Y axis. */
	get y() { return this._y; }

	/** The Angle in the Z axis. */
	get z() { return this._z; }

	/** The order of application of axis rotation. */
	get order() { return this._order; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Euler class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent constructor
		super(name, parent, data);

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








/** Defines a four-dimensional complex number to describe rotations. */
export class Quaternion extends Complex {


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The value of the quaternion vector in the X(i) axis. */
	get x() { return this._x; }

	/** The value of the quaternion vector in the Y(j) axis. */
	get y() { return this._y; }

	/** The value of the quaternion vector in the Z(k) axis. */
	get z() { return this._z; }

	/** The rotation half-angle around the quaternion vector. */
	get w() { return this._w; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Quaternion class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent constructor
		super(name, parent, data);

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
export class Vector extends Complex {


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The vector component in the X axis. */
	get x() { return this._x; }

	/** The vector component in the Y axis. */
	get y() { return this._y; }

	/** The vector component in the Z axis. */
	get z() { return this._z; }

	/** The length of the vector. */
	get length() {
		let x = this._x.value, y = this._y.value, z = this._z.value;
		return new Size(this.name + "length", undefined, { value: Math.sqrt((x * x) + (y * y) + (z * z)) });
	}
	set length(size) {
		if (typeof (size) != "number")
			size = size.value;
		let x = this._x.value, y = this._y.value, z = this._z.value;
		let length = Math.sqrt((x * x) + (y * y) + (z * z)), factor = size / length;
		this._x.value = x * factor;
		this._y.value = y * factor;
		this._z.value = z * factor;
	}


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Vector3 class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent, data);

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


	/** Normalizes the vector (by setting its length to 1). */
	normalize() { this.length = 1; }


	/** Obtains the string representation of the Vector instance.
	 * @returns The string representation of the Vector instance. */
	toString() { return this._components.join(", "); }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Vector class. */
Vector.type = new Type("vector", Vector, Complex.type);






/** Defines a simple data item. */
export class Simple extends Item {


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


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Simple class.
	 * @param name The name of the data item.
	 * @param parent The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent, data);

		/** The valid values of the simple data item. */
		this._validValues = undefined;

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


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
export class Number extends Simple {


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


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Number class.
	 * @param name The name of the data item.
	 * @param parent The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent, data);

		// Set the values of the properties
		this._value = undefined;
		this._defaultValue = 0;

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Serializes the Number instance.
	 * @return The serialized data. */
	serialize() { return this.value; }


	/** Deserializes the Number instance.
	 * @param data The data to deserialize. */
	deserialize(data) {
		if (typeof data == "object") {
			this.min = data.min;
			this.max = data.max;
			this.defaultValue = data.defaultValue;
			data = this.value = data.value;
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
	toString() { return this.value.toFixed(2) || ""; }
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Number class. */
Number.type = new Type("number", Number, Simple.type);






/** Defines a numeric Measure item. */
export class Measure extends Number {


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


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Type class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent, data);

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
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Measure class. */
Measure.type = new Type("measure", Measure, Number.type);


/** Defines a Measurement Unit. */
export class MeasurementUnit {


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
}







/** Defines a angular measurement. */
export class Angle extends Measure {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Angle class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent, data);

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






/** Defines a length measurement. */
export class Distance extends Measure {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Distance class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent, data);

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
export class Size extends Measure {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Size class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent, data);

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
export class Time extends Measure {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Time class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent, data);

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
export class Shape extends Item {


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** Indicates if the Shape should be shaded or not. */
	get shaded() { return this._shaded; }

	/** The color of the Shape. */
	get color() { return this._color; }

	/** The diffuse texture of the Shape. */
	get texture() { return this._texture; }

	/** The emissive texture of the Shape. */
	get emissive() { return this._emissive; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes the Shape instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent, data);

		// Create the child items
		this._shaded = new String("shaded", this);
		this._color = new String("color", this);
		this._texture = new String("texture", this);
		this._emissive = new String("color", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Shape class. */
Shape.type = new Type("shape", Shape, Item.type);







/** Defines a three-dimensional box Shape (global). */
export class Box extends Shape {


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The size of the box the X axis. */
	get width() { return this._width; }

	/** The size of the box in the Y axis. */
	get height() { return this._height; }

	/** The size of the box the Z axis. */
	get depth() { return this._depth; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes the Box instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent, data);

		// Create the child items
		this._width = new Size("width", this);
		this._depth = new Size("depth", this);
		this._height = new Size("height", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Box class. */
Box.type = new Type("box", Box, Shape.type);






/** Defines a three-dimensional ellipsoid shape. */
export class Ellipsoid extends Shape {


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The radius in the X axis. */
	get radiusX() { return this._radiusX; }

	/** The radius in the Y axis. */
	get radiusY() { return this._radiusY; }

	/** The radius in the Z axis. */
	get radiusZ() { return this._radiusZ; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes the Ellipsoid instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent, data);

		// Create the child items
		this._radiusX = new Size("radiusX", this);
		this._radiusY = new Size("radiusY", this);
		this._radiusZ = new Size("radiusZ", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Ellipsoid class. */
Ellipsoid.type = new Type("ellipsoid", Ellipsoid, Shape.type);






/** Defines a three-dimensional spherical Shape. */
export class Sphere extends Shape {


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The Size of the radius in all axes. */
	get radius() { return this._radius; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes the Sphere instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent, data);

		// Create the child items
		this._radius = new Size("radius", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Sphere class. */
Sphere.type = new Type("sphere", Sphere, Shape.type);






/** Defines a boolean data item. */
export class Boolean extends Simple {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Boolean class.
	 * @param name The name of the data type.
	 * @param parent The parent data type.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent, data);

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
	serialize() { return this.value; }


	/** Deserializes the Boolean instance.
	 * @param data The data to deserialize. */
	deserialize(data) {
		if (typeof data == "object") {
			this._defaultValue = data.defaultValue;
			data = this.value = data.value;
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





/** Defines a String data item. */
export class String extends Simple {


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


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the String class.
	 * @param name The name of the data item.
	 * @param parent The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the parent class constructor
		super(name, parent, data);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Serializes the String instance.
	 * @return The serialized data. */
	serialize() { return this.value; }


	/** Deserializes the String instance.
	 * @param data The data to deserialize. */
	deserialize(data) {
		if (typeof data == "object") {
			this._validValues = data.validValues;
			this._validRegEx = data.validRegEx;
			this._defaultValue = data.defaultValue;
			data = this.value = data.value;
		}
		else if (typeof data !== "string")
			data = JSON.stringify(data);
		else
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






/** Defines the basic class of a Pose Extension. */
export class Extension extends Item {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Extension class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent, data);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Extension class. */
Extension.type = new Type("extension", Extension, Item.type);







/** Defines a reference frame. */
export class Frame extends Item {


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The handedness of the reference frame ("right" by default). */
	get handedness() { return this._handedness; }

	/** The vertical axis of the reference frame ("Z" by default). */
	get verticalAxis() { return this._verticalAxis; }



	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Frame class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent, data);

		this._handedness = new String("handedness", this, { validValues: ["right", "left"], defaultValue: "right" });

		this._verticalAxis = new String("verticalAxis", this, { validValues: ["X", "Y", "Z"], defaultValue: "Z" });

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Frame class. */
Frame.type = new Type("frame", Frame, Item.type);




/** Defines an euclidean (Flat-Earth) frame. */
export class EuclideanFrame extends Frame {
}








/** Defines a geodetic (elliptical) frame. */
export class GeoFrame extends Frame {


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The equatorial radius (the semi-major axis). */
	get equatorialRadius() { return this._equatorialRadius; }

	/** The polar radius (the semi-minor axis). */
	get polarRadius() { return this._polarRadius; }



	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the GeodeticFrame class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data = {}) {

		// Call the base class constructor
		super(name, parent, data);

		// Create the children nodes
		this._equatorialRadius = new Distance("equatorialRadius", this, data.equatorialRadius || 6378137.0);
		this._polarRadius = new Distance("polarRadius", this, data.equatorialRadius || 6356752.314245);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);

		// TODO Map projections
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the GeodeticFrame class. */
GeoFrame.type = new Type("geo-frame", GeoFrame, Frame.type);

/** The default GeoFrame instance */
GeoFrame.defaultFrame = new GeoFrame("Earth", undefined);













/** Defines a Pose of an object. */
export class Pose extends Item {


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The geodetic frame of the Pose. */
	get frame() { return this._frame; }

	/** The position of the Pose. */
	get position() { return this._position; }

	/** The orientation of the Pose. */
	get orientation() { return this._orientation; }

	/** The parent Pose. */
	get parent() { return this._parentPose; }

	/** The child Poses. */
	get childPoses() { return this._childPoses; }

	/** The extensions of the Pose. */
	get extensions() { return this._extensions; }

	/** The relative position of the Pose. */
	get relativePosition() { return this._relativePosition; }

	/** The absolute position of the Pose. */
	get absolutePosition() { return this._absolutePosition; }

	/** The relative orientation of the Pose. */
	get relativeOrientation() { return this._relativeOrientation; }

	/** The vertical vector of the Pose. */
	get verticalVector() { return this._verticalVector; }

	/** The forward vector of the Pose. */
	get forwardVector() { return this._forwardVector; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Pose class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent, data);

		// Create the child items
		this._position = new Position("position", this);
		this._orientation = new Orientation("orientation", this);
		this._childPoses = new Collection([Pose.type], this);
		this._extensions = new Collection([Extension.type], this);
		this._relativePosition = new Vector("relativePosition", this);
		this._absolutePosition = new Vector("absolutePosition", this);
		this._relativeOrientation = new Vector("relativeOrientation", this);
		this._verticalVector = new Vector("verticalVector", this);
		this._forwardVector = new Vector("forwardVector", this);
		this._verticalVector = new Vector("verticalVector", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Pose class. */
Pose.type = new Type("pose", Pose, Item.type);








/** Defines the GeoPose of an object. */
export class GeoPose extends Pose {


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The geodetic frame of the GeoPose. */
	get frame() { return this._frame; }

	/** The position of the GeoPose. */
	get position() { return this._position; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the GeoPose class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data = {}) {

		// Call the base class constructor
		super(name, parent, data);

		// Create the child nodes
		this._frame = data.frame || new GeoFrame("frame", this);
		this._position = new GeoPosition("position", this);

		if (data.frame)
			data.frame.links.add(this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}



	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the GeoPose instance.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		// If the update is not forced, skip it when the item is already updated
		if (this._updated && !forced)
			return;

		// Call the base class function
		super.update(deltaTime, forced);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Pose class. */
GeoPose.type = new Type("geopose", GeoPose, Pose.type);







/** Define the basic class of a three dimensional orientation. */
export class Orientation extends Item {


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The relative orientation. */
	get relativeValues() { return this._relativeValues; }

	/** The absolute orientation. */
	get absoluteValues() { return this._absoluteValues; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Orientation class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent, data);

		// Create the child items
		this._relativeValues = new Quaternion("relativeValues", this);
		this._absoluteValues = new Quaternion("absoluteValues", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Orientation class. */
Orientation.type = new Type("orientation", Orientation, Item.type);








/** Defines an orientation based on an axis vector and an angle. */
export class AxisAngleOrientation extends Orientation {


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The axis vector. */
	get axis() { return this._axis; }

	/** The angle around the axis. */
	get angle() { return this._angle; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the AxisAngleOrientation class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent, data);

		// Create the child items
		this._axis = new Vector("axis", this, data);
		this._angle = new Angle("angle", this, data);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the AxisAngleOrientation class. */
AxisAngleOrientation.type = new Type("axis-angle-orientation", AxisAngleOrientation, Orientation.type);








/** Defines an orientation with a target. */
export class LookAtOrientation extends Orientation {


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The target to point towards. */
	get targetName() { return this._targetName; }

	/** The target position. */
	get targetPosition() { return this._targetPosition; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the YawPitchRollOrientation class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent, data);

		// Create the child items
		this._targetName = new String("target", this);
		this._targetPosition = new Vector("position", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the LookAtOrientation class. */
LookAtOrientation.type = new Type("look-at-orientation", LookAtOrientation, Orientation.type);







/** Defines an orientation based on a 3x3 rotation matrix. */
export class MatrixOrientation extends Orientation {


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The numeric values of the rotation matrix. */
	get values() { return this._values; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the MatrixOrientation class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent, data);

		// Create the child items
		this._values = new Number("values", this, data);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the MatrixOrientation class. */
MatrixOrientation.type = new Type("matrix-orientation", MatrixOrientation, Orientation.type);







/** Defines an orientation with a quaternion. */
export class QuaternionOrientation extends Orientation {


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The value of the quaternion vector in the X(i) axis. */
	get x() { return this._x; }

	/** The value of the quaternion vector in the Y(j) axis. */
	get y() { return this._y; }

	/** The value of the quaternion vector in the Z(k) axis. */
	get z() { return this._z; }

	/** The rotation half-angle around the quaternion vector. */
	get w() { return this._w; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the QuaternionOrientation class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent, data);

		// Create the child items
		this._x = new Number("x", this);
		this._y = new Number("y", this);
		this._z = new Number("z", this);
		this._w = new Number("w", this, { value: 1, defaultValue: 1 });

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the QuaternionOrientation class. */
QuaternionOrientation.type = new Type("quaternion-orientation", QuaternionOrientation, Orientation.type);






/** Defines a Tait-Bryan orientation with Yaw, Pitch and Roll angles. */
export class YawPitchRollOrientation extends Orientation {


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The Angle in degrees around the equator of the globe. */
	get yaw() { return this._yaw; }

	/** The Angle in degrees around the prime meridian of the globe. */
	get pitch() { return this._pitch; }

	/** The vertical distance relative to the surface to the globe. */
	get roll() { return this._roll; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR
	/** Initializes a new instance of the YawPitchRollOrientation class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent, data);

		// Create the child items
		this._yaw = new Angle("yaw", this);
		this._pitch = new Angle("pitch", this);
		this._roll = new Angle("roll", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the YawPitchRollOrientation class. */
YawPitchRollOrientation.type = new Type("yaw-pitch-roll-orientation", YawPitchRollOrientation, Orientation.type);









/** Defines a Euclidean pose with a quaternion orientation. */
export class EuclideanPoseQuaternion extends Pose {


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The position of the Euclidean Pose. */
	get position() {
		return this._position;
	}

	/** The orientation of the Euclidean Pose. */
	get orientation() {
		return this._orientation;
	}


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the EuclideanPoseQuaternion class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent, data);

		// Create the child items
		this._position = new EuclideanPosition("position", this, null);
		this._orientation = new QuaternionOrientation("orientation", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the EuclideanPoseQuaternion class. */
EuclideanPoseQuaternion.type = new Type("euclidean-pose-quaternion", EuclideanPoseQuaternion, Pose.type);







/** Defines a Euclidean pose with Yaw-Pitch-Roll orientation. */
export class EuclideanPoseYPR extends Pose {


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The position of the Euclidean Pose. */
	get position() {
		return this._position;
	}

	/** The orientation of the Euclidean Pose. */
	get orientation() {
		return this._orientation;
	}


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the EuclideanPoseYPR class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent, data);

		// Create the child items
		this._position = new EuclideanPosition("position", this, null);
		this._orientation = new YawPitchRollOrientation("orientation", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the EuclideanPoseYPR class. */
EuclideanPoseYPR.type = new Type("euclidean-basic-ypr", EuclideanPoseYPR, Pose.type);






/** Defines a basic GeoPose with Quaternion-based orientation. */
export class GeoPoseBasicQuaternion extends GeoPose {


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The orientation of the GeoPose. */
	get orientation() { return this._orientation; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the GeoPoseBasicQuaternion class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent, data);

		// Create the child items
		this._orientation = new QuaternionOrientation("orientation", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the GeoPoseBasicQuaternion class. */
GeoPoseBasicQuaternion.type = new Type("geopose-basic-quaternion", GeoPoseBasicQuaternion, GeoPose.type);






/** Defines a basic GeoPose with Yaw-Pitch-Roll (Tait-Bryan) orientation. */
export class GeoPoseBasicYPR extends GeoPose {


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The orientation of the GeoPose. */
	get orientation() {
		return this._orientation;
	}


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the GeoPoseBasicYPR class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent, data);

		// Create the child items
		this._orientation = new YawPitchRollOrientation("orientation", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the GeoPoseBasicYPR instance.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		// If the update is not forced, skip it when the item is already updated
		if (this._updated && !forced)
			return;

		// Call the base class function
		super.update(deltaTime, forced);

	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the GeoPoseBasicYPR class. */
GeoPoseBasicYPR.type = new Type("geopose-basic-ypr", GeoPoseBasicYPR, GeoPose.type);







/** Defines a basic position within a reference frame. */
export class Position extends Item {


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The relative position of the Pose. */
	get relativeValues() { return this._relativeValues; }

	/** The absolute position of the Pose. */
	get absoluteValues() { return this._absoluteValues; }

	/** The absolute position of the Pose. */
	get additionalRotation() { return this._additionalRotation; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Location class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent, data);

		// Create the child items
		this._relativeValues = new Vector("relativeValues", this);
		this._absoluteValues = new Vector("absoluteValues", this);
		this._additionalRotation = new Vector("additionalRotation", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Position class. */
Position.type = new Type("position", Position, Item.type);







/** Defines a position in an euclidean coordinate system. */
export class EuclideanPosition extends Position {


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The distance from the origin in the X axis. */
	get x() { return this._x; }

	/** The distance from the origin in the Y axis. */
	get y() { return this._y; }

	/** The distance from the origin in the Z axis. */
	get z() { return this._z; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the EuclideanPosition class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent, data);

		// Create the children nodes
		this._x = new Distance("x", this);
		this._y = new Distance("y", this);
		this._z = new Distance("z", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the EuclideanPosition class. */
EuclideanPosition.type = new Type("euclidean-position", EuclideanPosition, Position.type);









/** Defines a position in geodetic (elliptical) coordinate system.
* (Based on SPICE and Local Tangent Plane - East North Up). */
export class GeoPosition extends Position {


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The angle around the equator of the ellipsoid. */
	get longitude() { return this._longitude; }

	/** The angle around the prime meridian of the ellipsoid. */
	get latitude() { return this._latitude; }

	/** The vertical distance relative to the surface to the ellipsoid. */
	get altitude() { return this._altitude; }

	/** The tangent vector of the GeoPosition. */
	get tangentVector() { return this._tangentVector; }

	/** The tangent vector of the GeoPosition. */
	get verticalVector() { return this._verticalVector; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the GeoPosition class.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data) {

		// Call the base class constructor
		super(name, parent, data);

		// Create the children nodes
		this._longitude = new Angle("longitude", this);
		this._latitude = new Angle("latitude", this);
		this._altitude = new Distance("h", this);
		this._tangentVector = new Vector("tangentVector", this);
		this._verticalVector = new Vector("verticalVector", this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the GeoPosition instance.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		// If the update is not forced, skip it when the item is already updated
		if (this._updated && !forced)
			return;

		// Get the frame from the parent geopose
		let geoFrame = this.parent.frame, equatorRadius = geoFrame.equatorialRadius.value, polarRadius = geoFrame.polarRadius.value, flatteningFactor = polarRadius / equatorRadius;

		// Perform some basic trigonometric calculations
		let lng = -this.longitude.value * (Math.PI / 180), lat = this.latitude.value * (Math.PI / 180), lngSin = Math.sin(lng), lngCos = Math.cos(lng), latSin = Math.sin(lat), latCos = Math.cos(lat), alt = this.altitude.value, geoX = lngCos * latCos, geoY = latSin, geoZ = lngSin * latCos;

		// Calculate the relative location on the surface of the GeoFrame
		let x = geoX * equatorRadius, y = geoY * equatorRadius *
			flatteningFactor, z = geoZ * equatorRadius;

		// Create the vertical vector
		this._verticalVector.setValues(geoX, geoY / flatteningFactor, geoZ);
		this._verticalVector.normalize();
		let v = this._verticalVector.getValues();

		// Calculate the tangent vector
		this.relativeValues.setValues(x + v.x * alt, y + v.y * alt, z + v.z * alt);

		// Calculate the tangent vector
		let x0 = latSin * equatorRadius, x1 = latSin * (equatorRadius + 1), y0 = latCos * equatorRadius * flatteningFactor, y1 = latCos * (equatorRadius + 1) * flatteningFactor, dx = x1 - x0, dy = y1 - y0, l = Math.sqrt((dx * dx) + (dy * dy));
		this.additionalRotation.x.value = -Math.PI / 2 + Math.acos(dx / l);
		this.additionalRotation.y.value = Math.PI / 2 - lng;
		this.additionalRotation.z.value = 0;

		// Call the base class function
		super.update(deltaTime, forced);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the GeodeticPosition class. */
GeoPosition.type = new Type("geo-position", GeoPosition, Position.type);



/** Provides multiple methods to serialize and deserialize data items. */
export class Serialization {

	/** Serializes a Item instance into an object.
	 * @param item The item to serialize.
	 * @param item The format to use in the serialization.
	 * @return The serialized data. */
	static serialize(item, format) {
		let data = {};
		for (let child of item.children)
			data[child.name] = child.serialize(format);
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

/** Enumerates the different serialization formats. */
export var SerializationFormat;
(function (SerializationFormat) {
	SerializationFormat[SerializationFormat["CSV"] = 0] = "CSV";
	SerializationFormat[SerializationFormat["JSON"] = 1] = "JSON";
	SerializationFormat[SerializationFormat["XML"] = 2] = "XML";
})(SerializationFormat || (SerializationFormat = {}));




/** Contains the metadata of a data type.
 * Provides a way to handle reflection and serialization in different contexts
 * (even after the code is transpiled to Javascript). */
export class Type {


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
		// else throw Error ('Repeated data type name: "' + name + '"');

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


	/** Registers an instance of the type to the list.
	 * @param instance The instance to register. */
	register(instance) {
		let type = instance.type;
		while (type) {
			type._instances.push(instance);
			type = type._parent;
		}
	}
}

// --------------------------------------------------------- PRIVATE FIELDS

/** The global list of Type instances. */
Type._record = {};



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

export { Frame } from "./data/model/Frame.js";
export { EuclideanFrame } from "./data/model/frames/EuclideanFrame.js";
export { GeoFrame } from "./data/model/frames/GeoFrame.js";
export { Position } from "./data/model/Position.js";
export { EuclideanPosition } from "./data/model/positions/EuclideanPosition.js";
export { GeoPosition } from "./data/model/positions/GeoPosition.js";
export { Orientation } from "./data/model/Orientation.js";
export { AxisAngleOrientation } from "./data/model/orientations/AxisAngleOrientation.js";
export { LookAtOrientation } from "./data/model/orientations/LookAtOrientation.js";
export { MatrixOrientation } from "./data/model/orientations/MatrixOrientation.js";
export { QuaternionOrientation } from "./data/model/orientations/QuaternionOrientation.js";
export { YawPitchRollOrientation } from "./data/model/orientations/YawPitchRollOrientation.js";
export { Pose } from "./data/model/Pose.js";
export { EuclideanPoseQuaternion } from "./data/model/poses/EuclideanPoseQuaternion.js";
export { EuclideanPoseYPR } from "./data/model/poses/EuclideanPoseYPR.js";
export { GeoPoseBasicQuaternion } from "./data/model/poses/GeoPoseBasicQuaternion.js";
export { GeoPoseBasicYPR } from "./data/model/poses/GeoPoseBasicYPR.js";
export { Extension } from "./data/model/Extension.js";
export { GeoPose } from "./data/model/GeoPose.js";

export { Event } from "./logic/Event.js";
export { Entity } from "./logic/Entity.js";
export { ArrowEntity } from "./logic/entities/ArrowEntity.js";
export { AtmosphereEntity } from "./logic/entities/AtmosphereEntity.js";
export { BackgroundEntity } from "./logic/entities/BackgroundEntity.js";
export { GraticuleEntity } from "./logic/entities/GraticuleEntity.js";
export { GridEntity } from "./logic/entities/GridEntity.js";
export { PresenceEntity } from "./logic/entities/PresenceEntity.js";
export { ShapeEntity } from "./logic/entities/ShapeEntity.js";
export { SpaceEntity } from "./logic/entities/SpaceEntity.js";
export { TerrainEntity } from "./logic/entities/TerrainEntity.js";

export { User } from "./user/User.js";
export { View } from "./user/interaction/View.js";
export { Layer } from "./user/interaction/Layer.js";
export { Space } from "./user/interaction/Space.js";
export { Presence } from "./user/interaction/Presence.js";
export { Widget } from "./user/interaction/Widget.js";
export { BackgroundWidget } from "./user/interaction/widgets/BackgroundWidget.js";
export { CameraWidget } from "./user/interaction/widgets/CameraWidget.js";
export { GeoPoseWidget } from "./user/interaction/widgets/GeoPoseWidget.js";
export { PlanetWidget } from "./user/interaction/widgets/PlanetWidget.js";


// ----------------------------------------------------------------- MAIN CLASS








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









/** Defines a logic entity. */
export class Entity extends Item {


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


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the Entity instance.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		// If the update is not forced, skip it when the item is already updated
		if (this.updated && !forced)
			return;

		// Update the properties of the camera
		if (!this._pose.updated && this._pose.position) {
			this._pose.update();

			let p = this._pose.position.relativeValues;
			this._representation.position.set(p.x.value, p.y.value, p.z.value);

			// The rotation of the obtain the ENU (East-North-Up) frame
			let v = this._pose.position.additionalRotation;
			let vertical = new THREE.Vector3(v.x.value, v.y.value, v.z.value);
			this._representation.rotation.setFromVector3(vertical, "ZYX");

			// Add another
			let DegreesToRads = Math.PI / 180;
			let o = this._pose.orientation;
			if (o.yaw != undefined)
				this.representation.rotateZ(o.yaw.value * DegreesToRads);
			if (o.pitch != undefined)
				this.representation.rotateY(o.pitch.value * DegreesToRads);
			if (o.roll != undefined)
				this.representation.rotateX(o.roll.value * DegreesToRads);
		}

		// Call the base class function
		super.update(deltaTime, forced);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Entity class. */
Entity.type = new Type("entity", Entity, Item.type);







/** Defines a Arrow entity. */
export class ArrowEntity extends Entity {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new ArrowEntity instance.
	 * @param name The name of the entity.
	 * @param parent The parent entity. */
	constructor(name, parent) {

		// Call the base class constructor
		super(name, parent);

		// Create the elements
		let radius = 100000, length = 500000;
		let material = new THREE.MeshLambertMaterial({ color: 0xffff00 });
		let center = new THREE.Mesh(new THREE.SphereGeometry(radius, 16, 16), material);
		let body = new THREE.Mesh(new THREE.CylinderGeometry(radius / 2, radius / 2, length), material);
		let point = new THREE.Mesh(new THREE.ConeGeometry(radius, radius * 2, 16, 16), material);
		body.position.x = length / 2;
		body.rotateZ(-Math.PI / 2);
		point.position.x = length;
		point.rotateZ(-Math.PI / 2);
		this._representation.renderOrder = 1000;

		// Add the entity
		this._representation.add(center, body, point);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the ShapeEntity class. */
ArrowEntity.type = new Type("arrow-entity", ArrowEntity, Entity.type);









/** Defines a Atmosphere Entity. */
export class AtmosphereEntity extends Entity {

	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The shape of the terrain. */
	get ellipsoid() { return this._ellipsoid; }

	/** The normal texture of the terrain. */
	get clouds() { return this._clouds; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new AtmosphereEntity instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data = {}) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._ellipsoid = new Ellipsoid("shape", this, data);
		this._clouds = new String("clouds", this);

		// Deserialize the initialization data
		if (data)
			this.deserialize(data);

		// Add the mesh geometry
		this._mesh = new THREE.Mesh(new THREE.SphereGeometry(1, 64, 64), new THREE.MeshPhongMaterial({ color: 0xffffff, transparent: true }));
		this._representation.add(this._mesh);
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the AtmosphereEntity instance.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		if (!this._ellipsoid.updated) {
			this._mesh.scale.set(this._ellipsoid.radiusX.value * 1.001, this._ellipsoid.radiusY.value * 1.001, this._ellipsoid.radiusZ.value * 1.001);
		}

		// Apply the cloud texture
		if (!this._clouds.updated && this._clouds.value) {
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
export class BackgroundEntity extends Entity {


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The shape of the component. */
	get shape() { return this._shape; }

	/** The shape of the component. */
	get texture() { return this._texture; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new BackgroundEntity instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data = {}) {

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
export class GraticuleEntity extends Entity {


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The shape of the graticule. */
	get ellipsoid() { return this._ellipsoid; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new GraticuleEntity instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data = {}) {

		// Call the base class constructor
		super(name, parent);

		// Create the child items
		this._ellipsoid = new Ellipsoid("shape", this, data);

		// Deserialize the initialization data
		if (data)
			this.deserialize(data);

		// Add the mesh geometry
		this._lines = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.SphereGeometry(1, 36, 18), 0.001), new THREE.LineBasicMaterial({ color: 0xffffff }));

		let DEG2RAD = (Math.PI / 180), width = 0.001;
		let red = new THREE.MeshBasicMaterial({ color: 0x880000 });
		let green = new THREE.MeshBasicMaterial({ color: 0x008800 });
		let white = new THREE.MeshBasicMaterial({ color: 0xffffff });

		let detail = 2;
		let torus = new THREE.TorusGeometry(1, width, 8 * detail, 36 * detail);
		let equator = new THREE.Mesh(torus, red);
		equator.rotateX(Math.PI / 2);
		this._representation.add(equator);
		let greenwich = new THREE.Mesh(torus, green);
		this._representation.add(greenwich);

		// Create the meridian lines
		for (let lat = 10; lat < 90; lat += 10) {
			let a = lat * DEG2RAD, sin = Math.sin(a), cos = Math.cos(a);
			let meridian = new THREE.TorusGeometry(cos, width, 8 * detail, 36 * detail);
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


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the GraticuleEntity instance.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

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







/** Defines a Grid entity. */
export class GridEntity extends Entity {

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new GridEntity instance.
	 * @param name The name of the entity.
	 * @param parentNode The parent entity. */
	constructor(name, parent, radius = 1) {

		// Call the base class constructor
		super(name, parent);

		let size = 1000000, halfSize = size / 2;
		let segments = 16;

		// Create the grid
		let grid = new THREE.GridHelper(size);
		grid.rotateX(-Math.PI / 2);
		this.representation.add(grid);

		if (parent) {
			let geopose = parent.pose.position;
			if (geopose.tangentVector) {
				let t = geopose.tangentVector.getValues();
				let p = geopose.relativeValues.getValues();
				let tangent = new THREE.ArrowHelper(new THREE.Vector3(t.x, t.y, t.z), new THREE.Vector3(p.x, p.y, p.z), 100000);
				this.representation.add(tangent);
			}
		}

		// Create the axes
		let red = new THREE.MeshPhongMaterial({ color: 0xff0000 }), green = new THREE.MeshPhongMaterial({ color: 0x00ff00 }), blue = new THREE.MeshPhongMaterial({ color: 0x0000ff }), axis = new THREE.CylinderGeometry(size / 50, size / 50, size, segments), arrow = new THREE.ConeGeometry(size / 20, size / 10, segments), ball = new THREE.SphereGeometry(size / 20, segments, segments), xAxis = new THREE.Mesh(axis, red), xBall = new THREE.Mesh(ball, red), xArrow = new THREE.Mesh(arrow, red), yAxis = new THREE.Mesh(axis, green), yBall = new THREE.Mesh(ball, green), yArrow = new THREE.Mesh(arrow, green), zAxis = new THREE.Mesh(axis, blue), zBall = new THREE.Mesh(ball, blue), zArrow = new THREE.Mesh(arrow, blue);


		xAxis.rotateZ(-Math.PI / 2);
		xArrow.rotateZ(-Math.PI / 2);
		xArrow.position.x = halfSize;
		xBall.position.x = -halfSize;
		this.representation.add(xAxis, xBall, xArrow);

		yArrow.position.y = halfSize;
		yBall.position.y = -halfSize;
		this.representation.add(yAxis, yBall, yArrow);

		zAxis.rotateX(Math.PI / 2);
		zArrow.rotateX(Math.PI / 2);
		zArrow.position.z = halfSize;
		zBall.position.z = -halfSize;
		this.representation.add(zAxis, zBall, zArrow);

	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the GridEntity class. */
GridEntity.type = new Type("grid-entity", GridEntity, Entity.type);








/** Defines a user Presence entity. */
export class PresenceEntity extends Entity {


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The field of view of the Camera. */
	get fieldOfView() { return this._fieldOfView; }

	/** The aspect ratio of the Camera. */
	get aspectRatio() { return this._aspectRatio; }

	/** The near plane of the Camera frustum. */
	get nearPlane() { return this._nearPlane; }

	/** The far plane of the Camera frustum. */
	get farPlane() { return this._farPlane; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new PresenceEntity instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data = {}) {

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


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the Entity.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

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
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the PresenceEntity class. */
PresenceEntity.type = new Type("presence-entity", PresenceEntity, Entity.type);







/** Defines a Shape entity. */
export class ShapeEntity extends Entity {

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new ShapeEntity instance.
	 * @param name The name of the entity.
	 * @param parentNode The parent entity. */
	constructor(name, parent, radius = 1) {

		// Call the base class constructor
		super(name, parent);

		// Create a cone
		this.representation.add(new THREE.Mesh(new THREE.ConeGeometry(100000, 100000, 64, 64), new THREE.MeshLambertMaterial({ color: 0xffff00 })));

	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the ShapeEntity class. */
ShapeEntity.type = new Type("shape-entity", ShapeEntity, Entity.type);







/** Defines a Space entity. */
export class SpaceEntity extends Entity {

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new SpaceEntity instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data = {}) {

		// Call the base class constructor
		super(name, parent, new THREE.Scene());

		// Deserialize the initialization data
		if (data)
			this.deserialize(data);

		// Set the lights
		this._representation.add(new THREE.AmbientLight(0x888888, 0.5));
		let light = new THREE.DirectionalLight(0xffffff);
		light.position.z = 3;
		this._representation.add(light);

		// DEBUG
		// this._representation.add(new THREE.Mesh(
		// 	new THREE.SphereGeometry(100000,64,64),
		// 	new THREE.MeshPhongMaterial({color: 0x00ff00})));

	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the SpaceEntity class. */
SpaceEntity.type = new Type("space-entity", SpaceEntity, Entity.type);










/** Defines a Terrain Entity. */
export class TerrainEntity extends Entity {

	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The shape of the terrain. */
	get ellipsoid() { return this._ellipsoid; }

	/** The diffuse texture of the terrain. */
	get diffuse() { return this._diffuse; }

	/** The normal texture of the terrain. */
	get normal() { return this._normal; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new TerrainEntity instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data = {}) {

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


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the TerrainEntity instance.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

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


/** Defines a Logic Event */
export class Event {


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The event type. */
	get type() { return this._type; }

	/** The event owner. */
	get owner() { return this._owner; }

	/** The event data. */
	get data() { return this._data; }

	/** The event listeners. */
	get listeners() { return this._listeners; }


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
	 * @param source The object that triggers the event.
	 * @param data Additional event data. */
	trigger(source, data = {}) {
		for (let listener of this._listeners) {
			let captured = listener(this, source, data);
			if (captured)
				break; // If captured, stop broadcasting the event
		}
	}
}







/** Defines an user interaction (view) layer . */
export class Layer extends Item {


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The widgets of the layer. */
	get widgets() { return this._widgets; }

	/** The Interaction Space associated to the layer. */
	get space() { return this._space; }

	/** The user Presence in the layer. */
	get presence() { return this._presence; }

	/** The entity associated to the layer. */
	get entity() { return this._space.entity; }


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
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Layer class. */
Layer.type = new Type("layer", Layer, Item.type);








/** Defines the user Presence in an interaction space. */
export class Presence extends Item {


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The entity associated with this presence. */
	get entity() { return this._entity; }

	/** The space associated with the presence. */
	get space() { return this._space; }
	set space(space) { this._space = space; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Presence instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data = {}) {

		// Call the parent class constructor
		super(name, parent, data);

		// Create the child items
		this._entity = new PresenceEntity(name + "Entity", this);
		// The space node is not initialized here because it is actually a link

		// Deserialize the initialization data
		if (data)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Presence class. */
Presence.type = new Type("presence", Presence, Item.type);









/** Defines an Interaction Space. */
export class Space extends Item {


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The entity of the space. */
	get entity() { return this._entity; }

	/** The subspaces of the space. */
	get subspaces() { return this._subspaces; }

	/** The user presences in the space. */
	get presences() { return this._presences; }

	/** The widgets of the space. */
	get widgets() { return this._widgets; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Space instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data = {}) {

		// Call the parent class constructor
		super(name, parent, data);

		// Create the child nodes
		this._entity = new SpaceEntity(this.name);
		this._subspaces = new Collection([Space.type], this);
		this._presences = new Collection([Presence.type], this);
		this._widgets = new Collection([Widget.type], this);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


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
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Space class. */
Space.type = new Type("space", Space, Item.type);












/** Defines a User Interaction View. */
export class View extends Item {


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


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new View instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data = {}) {

		// Call the parent class constructor
		super(name, parent, data);

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
		this._width = new Number("width", this, { defaultValue: 100, min: 0 });
		this._height = new Number("height", this, { defaultValue: 100, min: 0 });
		this._state = new String("state", this, { defaultValue: "Maximized",
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
		// this._element.addEventListener("dblclick", () =>{
		// 	this._state.value = "FullScreen";
		// });
	}


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
export class ViewPort {


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The canvas element of the viewport. */
	get canvas() { return this._canvas; }

	/** The renderer of the viewport. */
	get renderer() { return this._renderer; }

	/** The width of the viewport. */
	get width() { return this._width; }

	/** The height of the viewport. */
	get height() { return this._height; }


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









/** Defines an user interaction widget. */
export class Widget extends Item {

	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The entity of the space. */
	get entity() { return this._entity; }

	/** The list of child widgets. */
	get widgets() { return this._widgets; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Widget instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data = {}) {

		// Call the parent class constructor
		super(name, parent, data);

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
		// console.log("Widget Updated");
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Widget class. */
Widget.type = new Type("widget", Widget, Item.type);






/** Defines a widget for the background. */
export class BackgroundWidget extends Widget {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new PlanetWidget instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data = {}) {

		// Call the base class constructor
		super(name, parent, data);

		if (data.radius) {
			data.radiusX = data.radius;
			data.radiusY = data.radius;
			data.radiusZ = data.radius;
		}

		// Add the shape Component
		let mesh = new BackgroundEntity(name + "Mesh", this._entity, data);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Widget class. */
BackgroundWidget.type = new Type("background-widget", BackgroundWidget, Widget.type);








/** Defines a widget to control the camera (the presence of the user). */
export class CameraWidget extends Widget {



	// ------------------------------------------------------ PUBLIC PROPERTIES

	/** The arrow of the widget. */
	get pose() { return this._entity.pose; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new GeoPoseWidget instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data = {}) {

		// Call the base class constructor
		super(name, parent, data);

		// Check the parent
		if (!parent || !parent.type.is(Layer.type))
			throw Error("Invalid parent");

		// Get the entity
		this._entity = parent.presence.entity;

		// Set the pose of the entity as a pose entity
		this._entity.pose = new GeoPoseBasicYPR("pose", this._entity, data);

		// Deserialize the initialization data
		if (data != undefined)
			this._entity.pose.deserialize(data);
	}
}
// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Widget class. */
CameraWidget.type = new Type("Camera-widget", CameraWidget, Widget.type);










/** Defines a widget for a GeoPose. */
export class GeoPoseWidget extends Widget {


	// ------------------------------------------------------ PUBLIC PROPERTIES

	/** The arrow of the widget. */
	get arrow() { return this._arrow; }

	/** The grid of the widget. */
	get grid() { return this._arrow; }

	/** The geographic frame of the widget. */
	get frame() { return this._frame; }

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new GeoPoseWidget instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data = {}) {

		// Call the base class constructor
		super(name, parent, data);

		// Create a link with the GeoFrame
		if (data.frame) {
			this._frame = data.frame;
			this._frame.links.add(this);
		}

		// Set the pose of the entity as a pose entity
		this._entity.pose = new GeoPoseBasicYPR("pose", this._entity, data);

		// Add the entities
		this._grid = new GridEntity(this._name + "Grid", this._entity);
		this._arrow = new ArrowEntity(this._name + "Arrow", this._grid);
		this._arrow.pose = new EuclideanPoseYPR("pose", this._arrow, data);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the GeoPoseWidget instance.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		// If the update is not forced, skip it when the item is already updated
		if (this.updated && !forced)
			return;

		// Update the properties of the camera
		if (!this._frame.updated) {
			this._frame.update();
		}

		// Show a message on console
		console.log("Updated: " + this.name);


		// Call the base class function
		super.update(deltaTime, forced);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Widget class. */
GeoPoseWidget.type = new Type("GeoPose-widget", GeoPoseWidget, Widget.type);









/** Defines a widget for a planet. */
export class PlanetWidget extends Widget {


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** The component of the widget. */
	get terrain() { return this._terrain; }

	/** The atmosphere of the planet. */
	get atmosphere() { return this._atmosphere; }

	/** The graticule of the planet. */
	get graticule() { return this._graticule; }

	/** The geographic frame of the planet. */
	get frame() { return this._frame; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new PlanetWidget instance.
	 * @param name The name of the data item.
	 * @param name The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data = {}) {

		// Call the base class constructor
		super(name, parent, data);

		// Create a link with the GeoFrame
		this._frame = data.frame;
		data.radiusX = this._frame.equatorialRadius.value;
		data.radiusY = this._frame.polarRadius.value;
		data.radiusZ = this._frame.equatorialRadius.value;
		this.frame.links.add(this);

		// Add the shape Component
		this._terrain = new TerrainEntity(name + "Terrain", this._entity, data);
		this._atmosphere = new AtmosphereEntity(name + "Atmosphere", this._entity, data);
		this._graticule = new GraticuleEntity(name + "Graticule", this._entity, data);

		// Deserialize the initialization data
		if (data != undefined)
			this.deserialize(data);
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Updates the PlanetWidget instance.
	 * @param deltaTime The update time.
	 * @param forced Indicates whether the update is forced or not. */
	update(deltaTime = 0, forced = false) {

		// If the update is not forced, skip it when the item is already updated
		if (this.updated && !forced)
			return;

		// Update the properties of the camera
		if (!this._frame.updated) {
			this._frame.update();
			let radiusX = this._frame.equatorialRadius.value, radiusY = this._frame.polarRadius.value, radiusZ = this._frame.equatorialRadius.value;

			this._terrain.ellipsoid.radiusX.value = radiusX;
			this._terrain.ellipsoid.radiusY.value = radiusY;
			this._terrain.ellipsoid.radiusZ.value = radiusZ;

			this._atmosphere.ellipsoid.radiusX.value = radiusX;
			this._atmosphere.ellipsoid.radiusY.value = radiusY;
			this._atmosphere.ellipsoid.radiusZ.value = radiusZ;

			this._graticule.ellipsoid.radiusX.value = radiusX;
			this._graticule.ellipsoid.radiusY.value = radiusY;
			this._graticule.ellipsoid.radiusZ.value = radiusZ;
		}

		// Show a message on console
		// console.log("Updated: " + this.name);

		// Call the base class function
		super.update(deltaTime, forced);
	}
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the Widget class. */
PlanetWidget.type = new Type("planet-widget", PlanetWidget, Widget.type);









/** Defines a user. */
export class User extends Item {


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The presences of the user in the interaction spaces. */
	get presences() { return this._presences; }

	/** The point of views of the user. */
	get views() { return this._views; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new User class instance.
	 * @param name The name of the data item.
	 * @param parent The parent data item.
	 * @param data The initialization data. */
	constructor(name, parent, data = {}) {

		// Call the parent class constructor
		super(name, parent, data);

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
}

// -------------------------------------------------------- PUBLIC METADATA

/** The data type associated to the User class. */
User.type = new Type("user", User, Item.type);



export default GeoPoseSandbox;