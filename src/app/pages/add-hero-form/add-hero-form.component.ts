/* tslint:disable:no-string-literal */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Hero } from 'src/app/interfaces/heroe/hero';
import { HeroesService } from 'src/app/services/heroes/heroes.service';

@Component({
  selector: 'app-add-hero-form',
  templateUrl: './add-hero-form.component.html',
  styleUrls: ['./add-hero-form.component.scss']
})
export class AddHeroFormComponent implements OnInit, OnDestroy {
  form: FormGroup;
  requiredErrorMessage = 'Este campo es requerido';
  headerPage: string;
  buttonText: string;
  private formSubmitSub: Subscription;
  private hero: Hero = {
    name: '',
    powers: ''
  };
  private heroId: string;
  private getHeroByIdSub: Subscription;

  constructor(
    private fb: FormBuilder,
    private httpService: HeroesService,
    private activedRoute: ActivatedRoute,
    private route: Router) {
    this.getRouteParams();
  }

  ngOnInit(): void {
    this.initForm(this.hero);
    this.setTemplateLiterals();
    if (this.heroId) {
      this.getHeroById(this.heroId);
    }
  }

  ngOnDestroy(): void {
    if ( this.formSubmitSub ) {
      this.formSubmitSub.unsubscribe();
    }
    if ( this.getHeroByIdSub) {
      this.getHeroByIdSub.unsubscribe();
    }
  }

  private initForm(hero: Hero): void {
    this.form = this.fb.group({
      name: [hero.name, Validators.required],
      powers: [hero.powers, Validators.required]
    });
  }

  private getRouteParams(): void {
    this.heroId = this.activedRoute.snapshot.params['heroId'];
  }

  submit(): void {
    if (this.heroId) {
      this.updateHero();
    } else {
      this.createHero();
    }
  }

  private updateHero(): void {
    if (this.form.valid) {
      this.formSubmitSub = this.httpService.updateHero(this.heroId, this.form.value).subscribe(
        (res) => {
          this.successForm();
        },
        (err) => console.log('HTTP Error', err),
        () => console.log('HTTP request completed')
      );
    }
  }

  private createHero(): void {
    if (this.form.valid) {
      this.formSubmitSub = this.httpService.createHero(this.form.value).subscribe(
        (res) => {
          this.successForm();
        },
        (err) => console.log('HTTP Error', err),
        () => console.log('HTTP request completed')
      );
    }
  }

  private successForm(): void {
    this.form.reset();
    this.route.navigate(['/']);
  }

  private getHeroById(id: string): void {
    this.getHeroByIdSub = this.httpService.getHeroById(id).subscribe(res => {
      this.hero = res;
      this.initForm(this.hero);
    });
  }

  private setTemplateLiterals(): void {
    this.headerPage = this.heroId ? 'Editar Super Héroe' : 'Añadir Super Heroe';
    this.buttonText = this.heroId ? 'Actualizar' : 'Guardar';
  }

}
