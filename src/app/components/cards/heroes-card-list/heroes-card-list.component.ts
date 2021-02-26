import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/interfaces/heroe/hero';

@Component({
  selector: 'app-heroes-card-list',
  templateUrl: './heroes-card-list.component.html',
  styleUrls: ['./heroes-card-list.component.scss']
})
export class HeroesCardListComponent implements OnInit {
  @Input() heroes: Hero[] = [];
  @Input() filterInput;
  constructor() { }

  ngOnInit(): void {
  }

}
