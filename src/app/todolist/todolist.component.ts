import { Component } from '@angular/core';
import {ItemsService} from './items.service';

@Component({
  selector: 'app-todolist',
  template: `
      <app-header>
          <app-title></app-title>
          <app-item-box
          (itemAdded)="items.addItem($event)"
          ></app-item-box>
      </app-header>
      <app-main>
          <app-toggle></app-toggle>
          <app-items
            [items]="items.getItems()"
          ></app-items>
      </app-main>
      <app-footer>
          <app-counter [uncompletedItemsCounter]="items.getUncompletedItemsCounter()"></app-counter>
          <app-action-btn></app-action-btn>
      </app-footer>
  `,
  styles: []
})
export class TodolistComponent  {
  public items: ItemsService;

  constructor(items: ItemsService) {
    this.items = items;
  }
}
