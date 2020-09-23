import { Component } from '@angular/core';
import { Goal } from './goal';
@Component({
  selector: 'custom-selector',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Goals';

  constructor() {}
}
