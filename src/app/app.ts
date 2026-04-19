import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet],
  template: `
  <div class="page-contents">
    <app-header></app-header>
    <hr />
    <router-outlet></router-outlet>
  </div>
  `,
})
export class App { }
