import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Item} from '../item';
import {ItemsService} from '../items.service';

@Component({
  selector: 'app-item',
  template: `
      <li>
          <div class="view">
              <input class="toggle" type="checkbox">
              <label>{{item.title}}</label>
              <button class="destroy"
                      (itemRemoved)="handleRemoveEvent($event)"
                      (click)="fireRemoveEvent($event)"
              ></button>
          </div>
          <input class="edit">
      </li>
  `,
  providers: [ItemsService],
  styles: []
})
export class ItemComponent  {
  @Input()
  public item: Item;

  @Output()
  public itemRemoved = new EventEmitter<Item>() ;

  public itemsService: ItemsService;

  constructor(itemsService: ItemsService) {
    this.itemsService = itemsService;
  }

  fireRemoveEvent($event) {
    this.itemRemoved.emit($event.target);
  }

  handleRemoveEvent($event) {
    this.itemsService.removeItem($event);
  }
}
