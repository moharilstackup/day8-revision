import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  constructor() { }

  getCategory(){
    return [
      {"id":1, "name": "Characters"},
      {"id":2, "name": "Films"},
      {"id":3, "name": "Species"},
      {"id":4, "name": "Starship"},
      {"id":5, "name": "Vehicles"},
      {"id":6, "name": "Planets"}
    ];
  }

  getCharacter(){
    return [
      {"id":1, "name": "Luke Skywalker"},
      {"id":2, "name": "C-3PO"},
      {"id":3, "name": "R2-D2"},
      {"id":4, "name": "Darth Vader"},
      {"id":5, "name": "Leia Organa"},
      {"id":6, "name": "Owen Lars"}
    ];
  }
}
