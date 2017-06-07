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
      let completedItemsCounter = 0;
      for (const item of this.items) {
          if (item.completed) {
              completedItemsCounter++;
          }
      }
      return completedItemsCounter;
  }

    getUncompletedItemsCounter(): number {
        const completedItemsCounter = this.getCompletedItemsCounter();
        return this.items.length - completedItemsCounter;
    }

    toggleAll(completedStatus: boolean): void {
        for ( const item of this.items){
            item.completed = completedStatus;
        }
        this.items = [
            ...this.items
        ] ;
    }

    removeCompletedItems(): void {
        this.items = this.items.filter( item => item.completed === false);
    }
}
