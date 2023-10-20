import { Item } from "./Item";
import { Type } from "./Type";

/** Defines a collection of data items. */
export class Collection<ItemType extends Item> implements Iterable<ItemType> {

	// ------------------------------------------------------- PROTECTED FIELDS

	/** The types of items in the data collection. */
	protected _types: Type[];

	/** The items of the data collection. */
	protected _items: ItemType[];

	/** The number of items of the data collection. */
	protected _count: number;

	/** The owner the data collection. */
	protected _owner: Item | undefined;

		
	// ------------------------------------------------------ PUBLIC PROPERTIES

	/** The number of items of the data collection. */
	get count(): number { return this._count; }

	/** The owner of the data collection. */
	get owner(): Item | undefined { return this._owner; }

	
	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the Collection instance.
	 * @param types The types of items in the collection.
	 * @param owner The owner the data collection. */
	constructor(types: Type[], owner?: Item) {

		// Check the 
		this._types = types; 

		// Store the owner of the data collection
		this._owner = owner;

		// Initialize the array of items
		this._items = []; this._count = 0;
	}


	// --------------------------------------------------------- PUBLIC METHODS

	/** Gets a data item by index. 
	 * @param index The index of the item to get.
	 * @returns The item with the specified index. */
	getByIndex(index: number): ItemType | undefined { 
		if (index >= 0 && index < this._items.length) return this._items[index]; 
		return undefined;
	}


	/** Gets a data item by name. 
	 * @param index The name of the item to get.
	 * @returns The item with the specified name. */
	getByName(name: string): ItemType | undefined { 
		for (let item of this._items) if (item.name == name) return item; 
		return undefined;
	}

	
	/** Adds a new item to the end of the list.
	 * @param item The item to add.
	 * @param position The position where to add the item (by default, at the
	 * end). Negative values imply counting from the end of the list.
	 * @returns The added item.  */
	 add(item: ItemType, position?: number) {

		// If no position is defined, just add it to the end of the array
		if (position == undefined) this._items.push(item);
		else { // Otherwise, calculate the index from the position
			let index = 0, size = this._items.length;
			if (position > 0) {
				index = position;
				if (index > size) index = size; // Prevent out_of_bounds errors
			} else { // Negative values imply counting backwards
				index = size - position;
				if (index < 0) index = 0; // Prevent out_of_bounds errors
			}
		
			// Insert the item in the right position
			this._items.splice(index,0, item);
		}

		// Remember to increase the counter 
		this._count++;
	}

	
	/** Removes an item from the list. 
	 * @param item The item to remove. */
	remove (item: ItemType) {
		for (let itemIndex = 0; itemIndex < this._count; itemIndex++ ) {
			if (this._items[itemIndex] == item) {
				this._items.splice(itemIndex,1);
				itemIndex--; this._count--;
			}
		}
	}


	[Symbol.iterator]() {
		let pointer = 0, items = this._items;
		return {
			next(): IteratorResult<ItemType> {
				if (pointer < items.length)
					return { done: false, value: items[pointer++] }
				else return { done: true, value: null };
			}
		}
	}
}