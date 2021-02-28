import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { FilterPipe } from 'src/app/helpers/pipes/filter.pipe';
import { Hero } from 'src/app/interfaces/heroe/hero';
import { HeroesService } from 'src/app/services/heroes/heroes.service';

@Component({
  selector: 'app-home-heroes',
  templateUrl: './home-heroes.component.html',
  styleUrls: ['./home-heroes.component.scss'],
})
export class HomeHeroesComponent implements OnInit, OnDestroy {
  public heroes: Hero[] = [];
  filterInput = new FormControl();
  public notFoundMessage = 'No existe super héroe que coincida con el filtro introducido';
  private getAllHeroesSub: Subscription;
  public showNotFoundMessage = false;
  private filter = new FilterPipe();

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.getAllHeroes();
  }

  ngOnDestroy(): void {
    this.getAllHeroesSub.unsubscribe();
  }

  private getAllHeroes(): void {
    this.getAllHeroesSub = this.heroesService.getAllHeroes()
      .pipe(
        map((res, i) => {
          const heroesArray = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              heroesArray.push({...res[key], id: key});
            }
          }
          return heroesArray;
        })
      ).subscribe(heroes => {
          this.heroes = heroes;
      });
  }

  filterInputChange(): void {
    const result: Hero[] = this.filter.transform(this.heroes, this.filterInput.value, 'name');
    this.showNotFoundMessage = (result.length === 0);
  }

  private removeHeroElementFromArray(id: string): void {
    const heroIndex = this.heroes
      .findIndex(
        hero => hero.id === id
    );
    this.heroes.splice(heroIndex, 1);
  }

  getHeroIdEmitted(id: string): void {
    this.removeHeroElementFromArray(id);
  }
}
