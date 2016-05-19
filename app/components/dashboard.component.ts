import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Hero } from '../models/hero.class';
import { HeroService } from '../services/hero.service';

@Component({
  //selector: 'my-dashboard',
  styleUrls: ['app/styles/dashboard.component.css'],
  templateUrl: 'app/views/dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private router: Router,
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  gotoDetail(hero: Hero) {
    let link = ['HeroDetail', { id: hero.id }];
    this.router.navigate(link);
  }

}
