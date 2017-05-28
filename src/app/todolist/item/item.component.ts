import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Item} from '../item';

@Component({
  selector: 'app-item',
  template: `
      <li [ngClass]="getClass()">
          <div class="view">
              <input class="toggle"
                     (checked)="item.completed"
                     type="checkbox"
                        (change)="updateCompletedStatus($event)"
              >
              <label
                      (dblclick)="item.isEditing=true"
              >{{item.title}}</label>
              <button class="destroy"
                      (click)="removeItem()"
              ></button>
          </div>
          <input
                  [value]="item.title"
                  (keydown.esc)="quitEditing($event)"
                  (keydown.enter)="updateEditedItem($event)"
                  class="edit">
      </li>
  `,
  styles: []
})
export class ItemComponent  {
  @Input()
  public item: Item;

    @Output()
    public itemRemoved = new EventEmitter<Item>() ;

    getClass() {
        return {
            'completed' : this.item.completed,
            'editing' : this.item.isEditing,
        };
    }

    updateEditedItem($event): void {
        this.item.isEditing = false;
        this.item.title = $event.target.value ;
    }

    quitEditing($event): void {
        this.item.isEditing = false;
        // if editing is quitted, old value is restored.
        $event.target.value = this.item.title;
    }

    removeItem() {
        this.itemRemoved.emit(this.item);
    }

    updateCompletedStatus($event) {
        this.item.completed = $event.target.checked;
    }
}
