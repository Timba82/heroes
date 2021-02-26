import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { FilterPipe } from 'src/app/helpers/pipes/filter.pipe';
import { Hero } from 'src/app/interfaces/heroe/hero';
import { HeroesService } from 'src/app/services/heroes/heroes.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-home-heroes',
  templateUrl: './home-heroes.component.html',
  styleUrls: ['./home-heroes.component.scss'],
})
export class HomeHeroesComponent implements OnInit {
  private heroes: Hero[];
  heroes$: Observable<Hero[]>;
  filterInput = new FormControl();
  public notFoundMessage = 'No existe super héroe que coincida con el filtro introducido';
  private getAllHeroesSub: Subscription;
  public showNotFoundMessage = false;
  private filter = new FilterPipe();

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.getAllHeroes();
  }

  private getAllHeroes(): void {
    this.heroes$ = this.heroesService.getAllHeroes();
  }

  filterInputChange(): void {
    const result: Hero[] = this.filter.transform(this.heroes, this.filterInput.value, 'powers', 'id');
    this.showNotFoundMessage = (result.length === 0);
  }
}
