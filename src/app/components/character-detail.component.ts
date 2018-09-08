import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  public characters = [];
  public characterSelect : string;

  constructor(private _starwarsService: StarwarsService,
    private route : ActivatedRoute,  private router: Router) { }

  ngOnInit() {
    this._starwarsService.getCharacter()
      .subscribe(data => this.characters = data.results);

    //const character = this.route.snapshot.params.name;
    let charSelect = this.route.snapshot.paramMap.get('charName');
    this.characterSelect = charSelect;
    console.log("character-detail.component() on init : ", this.characterSelect);

  }

  showCharacters() {
    this.router.navigate(['/character']);
  }

}
