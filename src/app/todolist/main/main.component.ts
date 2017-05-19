import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
      <section class="main">
          <ng-content></ng-content>
      </section>
  `,
  styles: []
})
export class MainComponent  {

}
