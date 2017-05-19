import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Item} from '../item';

@Component({
  selector: 'app-item',
  template: `
      <li>
          <div class="view">
              <input class="toggle" type="checkbox">
              <label>{{item.title}}</label>
              <button class="destroy"
                      (click)="fireRemoveEvent($event)"
              ></button>
          </div>
          <input class="edit">
      </li>
  `,
  styles: []
})
export class ItemComponent  {
  @Input()
  public item: Item;

    @Output()
    public itemRemoved = new EventEmitter<Item>() ;

    fireRemoveEvent($event) {
        this.itemRemoved.emit(this.item);
    }
}
