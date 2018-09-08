import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public categories = [];
  public characters = [];

  constructor(private _starwarsService: StarwarsService, private router: Router,
    private route : ActivatedRoute) { }

  ngOnInit() {
    this.categories = this._starwarsService.getCategory();
    //this.characters = this._starwarsService.getCharacter();
  }

  showCategory(id: number) {
    console.log("showCategory() :", id);
    if ( id = 1 ){
      this.router.navigate(['/character']);  
    }
  }

  showCharacters() {
    console.log("showCharacters() :", this.characters);
    this.router.navigate(['/character']);
    console.log("Done");

  }

}
