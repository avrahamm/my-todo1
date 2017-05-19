import {Component, Input} from '@angular/core';
import {Item} from '../item';


@Component({
  selector: 'app-items',
  template: `
      <ul class="todo-list">
          <app-item
                  *ngFor="let currItem of items"
                  [item]="currItem"
          ></app-item>
      </ul>
  `,
  styles: [],
})
export class ItemsComponent  {
    @Input()
    public items: Item[];

}
