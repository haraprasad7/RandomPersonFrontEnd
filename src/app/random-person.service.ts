import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RandomPersonService {
  apiURI = 'localhost:8080/api/'

  constructor(private http: HttpClient) { }

  getRandomPersondata(noOfPerson:number) {
     return this.http.get<any>(this.apiURI + 'persons?number=' + noOfPerson);
  }

  getOnePersondata(randomId:number) {
    return this.http.get<any>(this.apiURI + 'persons/' + randomId);
 }
}
