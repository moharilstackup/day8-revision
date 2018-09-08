import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  public characters = [];

  constructor(private _starwarsService: StarwarsService, private router: Router) { }

  ngOnInit() {
    // this.characters = this._starwarsService.getCharacter();
    this._starwarsService.getCharacter()
      .subscribe(data => this.characters = data.results);
  }

  showCharacter(name: string) {
    console.log("character.component.ts.showCharacter() :", name);
    this.router.navigate(['/characterDetail', name]);
  }

  showCategory() {
    this.router.navigate(['/category']);
  }

}
