import {Component, Input } from '@angular/core';
import {Item} from '../item';
import {ItemsService} from '../items.service';

@Component({
  selector: 'app-items',
  template: `
      <ul class="todo-list">
          <app-item
                  *ngFor="let currItem of items"
                  [item]="currItem"
                  (itemRemoved)="handleRemoveEvent($event)"
          ></app-item>
      </ul>
  `,
    // providers: [ItemsService],
    styles: [],
})
export class ItemsComponent  {
    @Input()
    public items: Item[];

    public itemsService: ItemsService;

    constructor(itemsService: ItemsService) {
        this.itemsService = itemsService;
    }

    handleRemoveEvent(item: Item) {
        this.itemsService.removeItem(item);
    }
}
