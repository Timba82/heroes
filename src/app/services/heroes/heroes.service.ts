import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../../interfaces/heroe/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private baseApiUrl = 'https://heroes-81e07-default-rtdb.europe-west1.firebasedatabase.app';
  constructor(private http: HttpClient) {}

  getAllHeroes(): Observable<{ [key: string]: Hero }> {
    return this.http.get<{ [key: string]: Hero }>(`${this.baseApiUrl}/heroes.json`);
  }

  getHeroById(id: string): Observable<Hero> {
    return this.http.get<Hero>(`${this.baseApiUrl}/heroes/${id}.json`);
  }

  updateHero(id: string, heroData: Hero): Observable<object> {
    return this.http.put(`${this.baseApiUrl}/heroes/${id}.json`, heroData);
  }

  deleteHero(id: string): Observable<object> {
    return this.http.delete(`${this.baseApiUrl}/heroes/${id}.json`);
  }

  createHero(heroData: Hero): Observable<object> {
    return this.http.post(`${this.baseApiUrl}/heroes.json`, heroData);
  }

}
