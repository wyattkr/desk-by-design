import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desk-description',
  templateUrl: './desk-description.component.html',
  styleUrls: ['./desk-description.component.css']
})
export class DeskDescriptionComponent implements OnInit {
  myInput = 'desk';
  myInputCreationStatus = 'no desk selected';

  constructor() { }

  ngOnInit() {
  }

  onCreateMyInput(){
    this.myInputCreationStatus = 'you selected' + this.myInput;
  }
    // Entering in the description using Angular
  onUpdateMyInput(event: any) {
    this.myInput = (event.target as HTMLInputElement).value;
  }

}
