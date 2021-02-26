import { Injectable } from '@angular/core';
import { Hero } from '../../interfaces/heroe/hero';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {

  constructor(private http: HttpClient) {}

  getAllHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>('http://localhost:3000/heroes');
  }

}
