import { Component } from '@angular/core';
import {Song } from './song';
import {songdb} from './song';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
songs:Song[]=songdb;
}
