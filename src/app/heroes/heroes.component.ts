import {Component, OnInit} from "@angular/core";
import {Hero} from "../models/hero";
import {HEROES} from "../mock-heroes";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss',]
})

export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero: Hero;
  greeting: string;

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(hero) {
    this.selectedHero = hero;
    this.greeting = "Greetings, " + this.selectedHero.name;
  }

}
