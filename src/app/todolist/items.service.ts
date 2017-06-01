import { Injectable } from '@angular/core';
import {Item} from './item';

@Injectable()
export class ItemsService {

  public items: Item[];
  constructor() {
    this.items = [
      // new Item('11'),
      // new Item('22')
    ] ;
  }

    getItems() {
        return this.items;
    }

  addItem(title: string): void {
    this.items.push(new Item(title));
  }

  removeItem( item: Item): void {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

  getCompletedItemsCounter(): number {
    let completedItemsCounter = 0 ;
    for ( let index = 0; index < this.items.length; index++) {
        if (this.items[index].completed ) {
            completedItemsCounter++;
        }
    }
    return completedItemsCounter;
  }

    getUncompletedItemsCounter(): number {
        const completedItemsCounter = this.getCompletedItemsCounter();
        return this.items.length - completedItemsCounter;
    }
}
