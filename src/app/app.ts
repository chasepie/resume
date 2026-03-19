import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`,
  styles: [
    `:host {
      display: flex;
      justify-content: center;
    }`
  ]
})
export class App {
  protected readonly title = signal('resume');
}
