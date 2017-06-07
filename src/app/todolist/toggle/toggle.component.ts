import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-toggle',
  template: `
      <input class="toggle-all" 
             type="checkbox"
            (click)="fireToggleAllItems($event)"
      >
  `,
  styles: []
})
export class ToggleComponent {

    @Output()
    public toggleAllItems = new EventEmitter<boolean>();

    fireToggleAllItems($event) {
        this.toggleAllItems.emit($event.target.checked);
    }
}
