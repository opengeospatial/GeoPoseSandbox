import { Node } from "../Node";

/** Defines a numeric measure. */ 
export class Measure extends Node {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The current value of the Measure.*/
	private _value : number = 0;

	/** The minimum possible value of Measure. */
	private _min : number = Number.NEGATIVE_INFINITY;

	/** The maximum possible value of the Measure. */
	private _max : number = Number.POSITIVE_INFINITY;

	/** The default value of the Measure. .*/
	private _default : number = 0;

	/** The accuracy of the Measure. */
	private _accuracy : number = 0;

	/** The measurement unit of the Measure. */
	private _unit : string;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** Gets the current value of the Measure. */
	get value() { return this._value; }
	
	/** Sets the current value of the Measure. */
	set value(newValue: number) { 
		// TODO Include Warnings messages when the value is not in range
		if (newValue < this._min)  this._value = this._min;
		else if (newValue > this._max) this._value = this._max;
		else this._value = newValue;
		this.updated = false;
	}


	/** Gets the minimum possible value of the Measure. */
	get min(): number { return this._min; }

	/** Sets the minimum possible value of the Measure. */
	set min(newMin: number) { 
		if (newMin > this._max) this._max = newMin;
		if (newMin > this._value) this.value = newMin;
		this._min = newMin; this.updated = false;
	}
	

	/** Gets the maximum possible value of the Measure. */
	get max() : number { return this._max; }

	/** Sets the maximum possible value of the Measure. */
	set max(newMax: number) { 
		if (newMax < this._min) this._min = newMax;
		if (newMax < this._value) this.value = newMax;
		this._max = newMax; this.updated = false;
	}


	/** Gets the default value of the Measure. */
	get default() : number { return this._default; }

	/** Sets the default value of the Measure. */
	set default(newDefault: number) { 
		this._default = newDefault; this.updated = false;
	}

	
	/** Gets the value accuracy of the Measure. */
	get accuracy() : number { return this._accuracy; }

	/** Sets the value accuracy of the Measure. */
	set accuracy(newAccuracy: number) {
		this._accuracy = newAccuracy; this.updated = false;
	}


	/** Gets the measurement unit of the Measure. */
	get unit() : string { return this._unit; }

	/** Sets the measurement unit of the Measure. */
	set unit(newUnit: string) { 
		// TODO create conversion between units
		this._unit = newUnit; this.updated = false;
	}
	

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR
	
	/** Initializes a new instance of the Measure class.
	 * @param name The name of the Measure.
	 * @param type The type of the Measure.
	 * @param parentNode The parent Measure.
	 * @param params The initialization parameters (or a numeric value). */
	constructor(name : any, type: string, parentNode?: Node, params: any = {}){ 
		
		// Call the parent constructor
		super (name, type, parentNode, params);

		// Set the values
		if (params) this.setValue(params);
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Sets the value or the properties of the Measure.
	* @param params The properties to modify (or a numeric value). */
	setValue (params: number);
	setValue (params: object);
	setValue (params: any = {}){
		if (typeof params == "number") this.value = params;
		else {
			this.min = params.min; this.max = params.max;
			this.value = params.value; this.accuracy = params.accuracy;
		}
	}

	/** Gets the value of the Measure.
	 *  @returns The value of the Measure. */
	getValue (): number { return this._value; }
}