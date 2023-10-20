import * as THREE from "three";
import { Presence } from "./Presence.js";

/** Defines a Viewport. */
export class ViewPort {

	// --------------------------------------------------------- PRIVATE FIELDS

	/** The canvas element of the viewport. */
	private _canvas: HTMLCanvasElement;

	/** The renderer of the viewport. */
	private _renderer: THREE.WebGLRenderer;

	/** The width of the viewport. */
	private _width: number;

	/** The height of the viewport. */
	private _height: number;


	// ------------------------------------------------------- PUBLIC ACCESSORS

	/** The canvas element of the viewport. */
	get canvas(): HTMLCanvasElement { return this._canvas; }

	/** The renderer of the viewport. */
	get renderer(): THREE.WebGLRenderer { return this._renderer; }

	/** The width of the viewport. */
	get width(): number { return this._width; }

	/** The height of the viewport. */
	get height(): number { return this._height; }


	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new ViewPort instance.
	 * @param canvas The canvas of the viewport.
	 * @param updateFunction The callback for the. */
	constructor(canvas, updateFunction) {

		// Store the canvas instance
		this._canvas = canvas; 

		// Create the renderer
		this._renderer = new THREE.WebGLRenderer( { canvas:this._canvas,
			antialias: true, logarithmicDepthBuffer: true} );
		this._renderer.setPixelRatio(window.devicePixelRatio);
		this._renderer.xr.enabled = true;
		this._renderer.setAnimationLoop(updateFunction);
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Resizes the viewport.
	 * @param width The new width of the viewport.
	 * @param height The new height of the viewport. */
	resize(width, height) {
		this._width = width; this._height = height;
		this._renderer.setSize(width, height);
	}


	/** Renders the viewport.
	 * @param presence The presence of a user in a interaction space */
	render(presence: Presence) {

		// Clear the renderer
		this._renderer.setClearColor(0xff0000);
		this._renderer.clear();

		// Render the
		this._renderer.render(presence.space.entity.representation,
			presence.entity.representation as THREE.PerspectiveCamera);
	}
} 