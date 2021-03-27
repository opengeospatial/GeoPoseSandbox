import { Node } from "../Node";
import { NodeSet } from "../NodeSet";
import { AudioResource } from "./AudioResource";
import { FontResource } from "./FontResource";
import { ModelResource } from "./ModelResource";

/** Provides a way to group resources. */
export class ResourceGroup extends Node {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The model resources. */
	private _models: NodeSet<ModelResource>;

	/** The font resources. */
	private _fonts: NodeSet<FontResource>;

	/** The audio resources. */
	private _audios: NodeSet<AudioResource>;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The model resources. */
	get models (): NodeSet<ModelResource> { return this._models; }

	/** The font resources. */
	get fonts (): NodeSet<FontResource> { return this._fonts; }

	/** The audio resources. */
	get audios (): NodeSet<AudioResource> { return this._audios; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new ResourceManager instance.
	 * @param name The name of the interaction space. */
	 constructor(name: string) {
		
		// Call the base class constructor
		super(name, "resourceGroup");

		// Create the node sets
		this._models = new NodeSet<ModelResource>("models", this);
		this._fonts = new NodeSet<FontResource>("fonts", this);
		this._audios = new NodeSet<AudioResource>("audios", this);
	}
}