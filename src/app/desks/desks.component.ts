import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desks',
  templateUrl: './desks.component.html',
  styleUrls: ['./desks.component.css']
})
export class DesksComponent implements OnInit {

  desks = [
    {
      name: 'Floating Desk',
      description: 'It Floats!',
      image: 'assets/img/floating-desk.webp',
      price: '$350'
    }, {
      name: 'Computer Desk',
      description: 'Put your Computer on it!',
      image: 'assets/img/desk-1.webp',
      price: '$325'
    }, {
      name: 'Computer Desk',
      description: 'Put your Computer on it!',
      image: 'assets/img/desk-2.webp',
      price: '$325'
    }, {
      name: 'Computer Desk',
      description: 'Put your Computer on it!',
      image: 'assets/img/desk-3.webp',
      price: '$325'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
