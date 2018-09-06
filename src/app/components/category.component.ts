import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public categories = [];
  public characters = [];

  constructor(private _starwarsService: StarwarsService) { }

  ngOnInit() {
    this.categories = this._starwarsService.getCategory();
    this.characters = this._starwarsService.getCharacter();
  }

  showCategory(id: number) {
    console.log("showCategory() :", id);
  }

  showCharacters() {
    console.log("showCharacters() :", this.characters);
  }

}
