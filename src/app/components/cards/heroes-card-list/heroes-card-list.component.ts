import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConfirmDialogComponent } from 'src/app/components/dialogs/confirm-dialog/confirm-dialog.component';
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
  @Output() emitDeleted: EventEmitter<string> = new EventEmitter();
  private heroToDelete: string;
  deleteHeroSub: Subscription;
  private dialogMessage = '¿Seguro que quieres borrar este Super Héroes?. Es necesario para salvar el mundo.';
  constructor(
    private heroesService: HeroesService,
    private route: Router,
    private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.deleteHeroSub) {
      this.deleteHeroSub.unsubscribe();
    }
  }

  private deleteHero(id: string): void {
    this.deleteHeroSub = this.heroesService.deleteHero(id).subscribe();
  }

  editHero(id: string): void {
    this.route.navigate([`/update-hero/${id}`]);
  }

  confirmDelete(id: string): void {
    this.heroToDelete = id;
    this.dialog
      .open(ConfirmDialogComponent, {
        data: this.dialogMessage
      })
      .afterClosed()
      .subscribe((confirm) => {
        if (confirm) {
          this.deleteHero(this.heroToDelete);
          this.emitDeleted.emit(this.heroToDelete);
        }
      });
  }

}
