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
}
