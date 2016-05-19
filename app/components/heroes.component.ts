import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Hero } from '../models/hero.class';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'my-heroes',
  styleUrls: ['app/styles/heroes.component.css'],
  templateUrl: 'app/views/heroes.component.html',
  //directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
  //title = "Tour of Heroes";
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  gotoDetail() {
    this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }

}
