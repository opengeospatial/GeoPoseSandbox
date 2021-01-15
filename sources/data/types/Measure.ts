import { Node } from "./Node";

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
	}


	/** Gets the minimum possible value of the Measure. */
	get min(): number { return this._min; }

	/** Sets the minimum possible value of the Measure. */
	set min(newMin: number) { 
		if (newMin > this._max) this._max = newMin;
		this._min = newMin;
	}
	

	/** Gets the maximum possible value of the Measure. */
	get max() : number { return this._max; }

	/** Sets the maximum possible value of the Measure. */
	set max(newMax: number) { 
		if (newMax < this._min) this._min = newMax;
		this._max = newMax;
	}


	/** Gets the default value of the Measure. */
	get default() : number { return this._default; }

	/** Sets the default value of the Measure. */
	set default(newDefault: number) { this._default = newDefault; }

	
	/** Gets the value accuracy of the Measure. */
	get accuracy() : number { return this._accuracy; }

	/** Sets the value accuracy of the Measure. */
	set accuracy(newAccuracy: number) { this._accuracy = newAccuracy; }


	/** Gets the measurement unit of the Measure. */
	get unit() : string { return this._unit; }

	/** Sets the measurement unit of the Measure. */
	set unit(newUnit: string) { this._unit = newUnit; }
	

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR
	
	/** Initializes a new instance of the Measure class.
	 * @param name The name(s) of the Measure.
	 * @param parentNode The parent Measure.
	 * @param params The initialization parameters (or a numeric value). */
	constructor(name : any, parentNode?: Node, params?: number);
	constructor(name : any, parentNode?: Node, params?: object);
	constructor(name : any, parentNode?: Node, params: any = {}){ 
		
		// Call the parent constructor
		super (name, parentNode, params);

		// Set the values
		if (params) this.set(params);
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Sets the value or the properties of the Measure.
	* @param params The properties to modify (or a numeric value). */
	set(params: number);
	set(params: object);
	set(params: any = {}){
		if (typeof params == "number") this.value = params;
		else {
			this.min = params.min;
			this.max = params.max;
			this.value = params.value;
			this.accuracy = params.accuracy;
		}
	}

	/** Gets the value of the Number.
	 *  The value of the Number. */
	get(): number { return this._value; }

}