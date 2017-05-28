import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-item-box',
  template: `
      <input class="new-todo"
             type="text"
             (keydown.enter)="addItem($event)"
             placeholder="What needs to be done?"
             [value]="title"
             autofocus="">
  `,
  styles: []
})

export class ItemBoxComponent {
    @Output()
    public itemAdded = new EventEmitter<string>();
    title = '';

    addItem($event): void {
        this.itemAdded.emit($event.target.value);
        $event.target.value = null;
    }
}
