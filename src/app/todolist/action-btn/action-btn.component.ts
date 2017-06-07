import {Component, EventEmitter, Output} from '@angular/core';
import {ItemsService} from '../items.service';
import {Item} from '../item';

@Component({
  selector: 'app-action-btn',
  template: `
      <button class="clear-completed"
              *ngIf="getClearCompletedStatus()"  
              (click)="clearCompleted.emit($event)"
      >Clear completed
      </button>
  `,
  styles: []
})
export class ActionBtnComponent  {
    @Output()
    public clearCompleted = new EventEmitter() ;
    public items: ItemsService;

    constructor(items: ItemsService) {
        this.items = items;
    }

    getClearCompletedStatus() {
      return ( this.items.getCompletedItemsCounter() > 0 );
    }
}
