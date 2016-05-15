import { Component, OnInit, Input } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { HeroService } from '../services/hero.service';
import { Hero } from '../models/hero.class';

@Component({
  selector: 'my-hero-detail',
  styleUrls: ['app/styles/hero-detail.component.css'],
  templateUrl: 'app/views/hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {
  @Input()
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private routeParams: RouteParams
  ) { }

  ngOnInit() {
    let id = +this.routeParams.get('id');
    this.heroService.getHero(id)
      .then(hero => this.hero = hero);
  }

  goBack() {
    window.history.back();
  }
}
