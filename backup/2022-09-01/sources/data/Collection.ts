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