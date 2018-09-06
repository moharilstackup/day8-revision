import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  public characters = [];

  constructor(private _starwarsService: StarwarsService) {  }

  ngOnInit() {
    this.characters = this._starwarsService.getCharacter();
  }

  showCharacters() {
    console.log("showCharacters() :", this.characters);
  }

}
