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
  <!-- <router-outlet></router-outlet> -->
  `,
  // styles: [
  //   `:host {
  //     display: flex;
  //     justify-content: center;
  //   }`
  // ]
})
export class App { }
