import { Injectable } from '@angular/core';
import { Hero } from '../../interfaces/heroe/hero';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private baseUrl = 'https://heroes-81e07-default-rtdb.europe-west1.firebasedatabase.app';
  constructor(private http: HttpClient) {}

  getAllHeroes(): Observable<{ [key: string]: Hero }> {
    return this.http.get<{ [key: string]: Hero }>(`${this.baseUrl}/heroes.json`);
  }

  getHeroById(id: string): Observable<Hero> {
    const HEADERS = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', this.baseUrl);
    return this.http.get<Hero>(`${this.baseUrl}/heroes.json/-MUXI-GNc6JoIkkpbkGe`, {headers: HEADERS});
  }

  deleteHero(id: string): Observable<object> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  createHero(heroData: Hero): Observable<object> {
    return this.http.post(`${this.baseUrl}/heroes.json`, heroData);
  }

}
