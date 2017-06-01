import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
      <span class="todo-count">
          <strong>{{uncompletedItemsCounter}}</strong> items left
      </span>
  `,
  styles: []
})
export class CounterComponent  {
    @Input()
    public uncompletedItemsCounter: number;
}
