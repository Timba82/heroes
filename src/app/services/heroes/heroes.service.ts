import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../../interfaces/heroe/hero';

@Injectable({
  providedIn: 'root',
})

export class HeroesService {
  private baseApiUrl = 'https://heroes-81e07-default-rtdb.europe-west1.firebasedatabase.app';
  private dbTable = 'heroes';

  constructor(private http: HttpClient) {}

  getAllHeroes(): Observable<{ [key: string]: Hero }> {
    return this.http.get<{ [key: string]: Hero }>(`${this.baseApiUrl}/${this.dbTable}.json`);
  }

  getHeroById(id: string): Observable<Hero> {
    return this.http.get<Hero>(`${this.baseApiUrl}/${this.dbTable}/${id}.json`);
  }

  updateHero(id: string, heroData: Hero): Observable<object> {
    return this.http.put(`${this.baseApiUrl}/${this.dbTable}/${id}.json`, heroData);
  }

  deleteHero(id: string): Observable<object> {
    return this.http.delete(`${this.baseApiUrl}/${this.dbTable}/${id}.json`);
  }

  createHero(heroData: Hero): Observable<object> {
    return this.http.post(`${this.baseApiUrl}/${this.dbTable}.json`, heroData);
  }

}
