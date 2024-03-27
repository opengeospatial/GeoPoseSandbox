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
//# sourceMappingURL=Event.js.map