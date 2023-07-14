import { Component, OnInit, Input } from '@angular/core';
import {Song} from '../song'
@Component({
  selector: 'app-songcards',
  templateUrl: './songcards.component.html',
  styleUrls: ['./songcards.component.css']
})
export class SongcardsComponent implements OnInit {
@Input() song:Song;
  constructor() { }

  ngOnInit() {
  }

}