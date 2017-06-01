import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-item-box',
  template: `
      <input class="new-todo"
             type="text"
             (keydown.enter)="addItem($event)"
             placeholder="What needs to be done?"
             [(ngModel)]="title"
             autofocus="">
  `,
  styles: []
})

export class ItemBoxComponent {
    @Output()
    public itemAdded = new EventEmitter<string>();
    title = '';

    addItem($event): void {
        // original Nir's style,
        // $event.target.value may be replaced
        // with this.item
        this.itemAdded.emit($event.target.value);
        /**
         * @link:https://stackoverflow.com/questions/41224893/cant-bind-to-ngmodel-since-it-isnt-a-known-property-of-input-during-two-wa
         * You are missing FormsModule import in your module to use ngModel-
         * in src/app/todolist/todolist.module.ts !!!
         * not only in src/app/app.module.ts
         */
        this.title = null;
    }
}
