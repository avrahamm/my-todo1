import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
      <header class="header">
          <ng-content></ng-content>
      </header>
  `,
  styles: []
})
export class HeaderComponent  {


}
