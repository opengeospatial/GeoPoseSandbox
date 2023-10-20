import { Collection } from "../Collection";
import { Item } from "../Item";
import { Type } from "../Type";

/** Defines a generic list of data items. */
export class List<ItemType extends Item> extends Collection<ItemType> {

	// ----------------------------------------------------- PUBLIC CONSTRUCTOR

	/** Initializes a new instance of the List instance.
	 * @param types The types of items in the collection.
	 * @param owner The owner the data collection. */
	constructor(types: Type[], owner?: Item) {

		// Call the base class constructor
		super(types, owner);
	}

	// --------------------------------------------------------- PUBLIC METHODS

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

	
}

