import { Component, OnInit } from '@angular/core';
import { RandomPersonService } from '../random-person.service';


@Component({
  selector: 'app-person-home',
  templateUrl: './person-home.component.html',
  styleUrls: ['./person-home.component.css']
})
export class PersonHomeComponent implements OnInit {
  noOfPerson:any;
  randomId:any;
  personResults:any[] =[];

  constructor(private randomPersonService: RandomPersonService) { }

  ngOnInit(): void {
    this.noOfPerson = '';
    this.randomId = '';
  
  }
  generateOnePerson() {
    this.randomPersonService.getOnePersondata(this.randomId).subscribe(data => {
      this.personResults = [];
      this.personResults.push(data);
    })

  }

  generateListOfPerson() {
    this.randomPersonService.getRandomPersondata(this.noOfPerson).subscribe(data => {
      this.personResults = [];
      this.personResults = data;
    })

  }


}
