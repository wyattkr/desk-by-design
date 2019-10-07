import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desks',
  templateUrl: './desks.component.html',
  styleUrls: ['./desks.component.css']
})
export class DesksComponent implements OnInit {

  desks = [
    {
      name: 'Floating/Wall Mount Desk',
      description: 'It is space saving easy to lift when needing extra space for other activities. ',
      image: 'assets/img/floating-desk.webp',
      price: '$350'
    }, {
      name: 'Sit/Stand Desk',
      description: 'Sit or stand while you work.',
      image: 'assets/img/desk-1.webp',
      price: '$325'
    }, {
      name: 'Roll-Top Desk',
      description: 'If you want a more old style desk, try our Roll-Top.',
      image: 'assets/img/desk-2.webp',
      price: '$325'
    }, {
      name: 'Computer Desk',
      description: 'Put your Computer on it!',
      image: 'assets/img/desk-3.webp',
      price: '$325'
    }, {
      name: 'Executive Desk',
      description: 'If you want a nice sleek desk try our Execvtive Desk.',
      image: 'assets/img/desk-3.webp',
      price: '$325'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
