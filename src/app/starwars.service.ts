import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ICharacters } from './interfaceSW';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  private _url: string ="https://swapi.co/api/people/";
  constructor(private http: HttpClient) { }

  getCategory() {
    return [
      {"id":1, "name": "Characters"},
      {"id":2, "name": "Films"},
      {"id":3, "name": "Species"},
      {"id":4, "name": "Starship"},
      {"id":5, "name": "Vehicles"},
      {"id":6, "name": "Planets"}
    ];
  }

  getCharacter() : Observable<any> {
    return this.http.get<any>(this._url);
    // [
    //   {"id":1, "name": "Luke Skywalker"},
    //   {"id":2, "name": "C-3PO"},
    //   {"id":3, "name": "R2-D2"},
    //   {"id":4, "name": "Darth Vader"},
    //   {"id":5, "name": "Leia Organa"},
    //   {"id":6, "name": "Owen Lars"}
    // ];
  }
}
