import { Injectable } from '@angular/core';

import { HEROES } from './mock-heroes';
import { Hero } from './hero.class';

@Injectable()
export class HeroService {
  getHero(id: number) {
    return Promise.resolve(HEROES)
      .then(
        heroes => heroes.filter(hero => hero.id === id)[0]
      );
  }

  getHeroes() {
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly() {
    return new Promise<Hero[]>(
      resolve =>
        setTimeout(()=>resolve(HEROES), 2000)
    );
  }
}
