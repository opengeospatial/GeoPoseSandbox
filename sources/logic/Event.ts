/** Defines a Logic Event */
export class Event {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The event type. */
	private _type: string;

	/** The event owner. */
	private _owner: object | undefined;

	/** The event data. */
	private _data: object | undefined;

	/** The event listeners. */
	private _listeners: CallableFunction[];


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The event type. */
	get type(): string { return this._type; }

	/** The event owner. */
	get owner(): object | undefined { return this._owner; }

	/** The event data. */
	get data(): object | undefined { return this._data; }

	/** The event listeners. */
	get listeners(): any { return this._listeners; }


	// ---------------------------------------------------------- PUBLIC FIELDS

	/** Marks the object as an Event. */
	public isEvent: boolean = true;
	

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new Event instance.
	 * @param type The event type.
	 * @param owner The event owner.
	 * @param data The event data. */
	constructor (type: string, owner?: object, data?: object) {
		this._type = type; this._owner = owner; this._data = data; 
		this._listeners = [];
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Adds a listener for the event.
	 * @param listener The listener function to add. */
	add (listener: CallableFunction) { 
		if (!this._listeners.includes(listener)) this._listeners.push(listener); 
	}


	/** Removes a listener for the event.
	 * @param listener The listener function to add. */
	removes (listener: CallableFunction) { 
		this._listeners = this._listeners.filter((l) => {return l != listener});
	}


	/** Triggers the event.
	 * @param source The object that triggers the event.
	 * @param data Additional event data. */
	trigger (source?:any, data: any = {}) {
		for (let listener of this._listeners) {
			let captured = listener(this, source, data);
			if (captured) break; // If captured, stop broadcasting the event
		}
	}
}