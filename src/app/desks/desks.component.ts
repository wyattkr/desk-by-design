import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desks',
  templateUrl: './desks.component.html',
  styleUrls: ['./desks.component.css']
})
export class DesksComponent implements OnInit {
  deskImages = [
    'assets/img/desk-1.webp',
    'assets/img/desk-2.webp',
    'assets/img/desk-3.webp',
    'assets/img/floating-desk.webp',
  ]

  constructor() { }

  ngOnInit() {
  }

}
