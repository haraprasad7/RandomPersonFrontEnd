import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-cards',
  templateUrl: './person-cards.component.html',
  styleUrls: ['./person-cards.component.css']
})
export class PersonCardsComponent implements OnInit {

  @Input() personData = {
    name:'',
    id:'',
    sex:'',
    mobileNumber:'',
    age:'',
    address:''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
