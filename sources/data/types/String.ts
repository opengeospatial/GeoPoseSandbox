import { Node } from "./Node";

/** Defines a numeric measure. */ 
export class String extends Node {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The current value of the Measure.*/
	private _value : string = null;

	/** The default value of the Measure. .*/
	private _default : string = null;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** Gets the current value of the Measure. */
	get value():string { return this._value; }
	
	/** Sets the current value of the Measure. */
	set value(newValue: string) { this._value = newValue; }

	/** Gets the default value of the Measure. */
	get default() : string { return this._default; }

	/** Sets the default value of the Measure. */
	set default(newDefault: string) { this._default = newDefault; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR
	
	/** Initializes a new instance of the Measure class.
	 * @param name The name(s) of the Measure.
	 * @param parentNode The parent Measure.
	 * @param params The initialization parameters (or a numberic value). */
	constructor(name : any, parentNode?: Node, params?: string);
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
	set( params: any = {}){
		if (typeof params == "string") this.value = params;
		else {
			this.value = params.value;
			this.default = params.default;
		}
	}

	/** Gets the value of the Number.
	 *  The value of the Number. */
	get(): string{ return this._value; }

}