import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-desk',
  templateUrl: './desk.component.html',
  styleUrls: ['./desk.component.css']
})
export class DeskComponent implements OnInit {
  @Input() desk;

  constructor() {}

  ngOnInit() {
    console.log('desk');
  }

}
