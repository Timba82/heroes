import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Hero } from 'src/app/interfaces/heroe/hero';
import { HeroesService } from 'src/app/services/heroes/heroes.service';

@Component({
  selector: 'app-heroes-card-list',
  templateUrl: './heroes-card-list.component.html',
  styleUrls: ['./heroes-card-list.component.scss']
})
export class HeroesCardListComponent implements OnInit, OnDestroy {
  @Input() heroes: Hero[] = [];
  @Input() filterInput;
  deleteHeroSub: Subscription;
  constructor(
    private heroesService: HeroesService,
    private route: Router) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.deleteHeroSub) {
      this.deleteHeroSub.unsubscribe();
    }
  }

  deleteHero(id: string): void {
    this.deleteHeroSub = this.heroesService.deleteHero(id).subscribe();
  }

  editHero(id: string): void {
    this.route.navigate([`/update-hero/${id}`]);
  }

}
