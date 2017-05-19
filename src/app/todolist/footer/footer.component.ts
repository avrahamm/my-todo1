import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
      <footer class="footer">
          <ng-content></ng-content>
      </footer>
  `,
  styles: []
})
export class FooterComponent {

}
