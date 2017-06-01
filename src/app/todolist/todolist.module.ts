import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodolistComponent} from './todolist.component';
import {MainComponent} from './main/main.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {TitleComponent} from './title/title.component';
import {ItemBoxComponent} from './item-box/item-box.component';
import {ToggleComponent} from './toggle/toggle.component';
import {ItemsComponent} from './items/items.component';
import {ItemComponent} from './item/item.component';
import {CounterComponent} from './counter/counter.component';
import {ActionBtnComponent} from './action-btn/action-btn.component';
import {ItemsService} from './items.service';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [TodolistComponent, MainComponent,
        HeaderComponent, FooterComponent,
        TitleComponent, ItemBoxComponent,
        ToggleComponent, ItemsComponent,
        ItemComponent, CounterComponent,
        ActionBtnComponent],
    providers: [ItemsService],
    exports: [TodolistComponent]
})
export class TodolistModule {
}
