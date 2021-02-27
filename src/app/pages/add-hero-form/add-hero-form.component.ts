import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HeroesService } from 'src/app/services/heroes/heroes.service';

@Component({
  selector: 'app-add-hero-form',
  templateUrl: './add-hero-form.component.html',
  styleUrls: ['./add-hero-form.component.scss']
})
export class AddHeroFormComponent implements OnInit, OnDestroy {
  form: FormGroup;
  requiredErrorMessage = 'Este campo es requerido';
  saveSuccessMessage = 'Super Hero creado correctamente';
  private saveSuperHeroSub: Subscription;
  showSuccess = false;
  constructor(private fb: FormBuilder, private httpService: HeroesService) {
    this.initForm();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.saveSuperHeroSub.unsubscribe();
  }

  private initForm(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      powers: ['', Validators.required]
    });
  }

  saveSuperHero(): void {
    if (this.form.valid) {
      this.saveSuperHeroSub = this.httpService.createHero(this.form.value).subscribe(
        (res) => {
          this.form.reset();
          this.showSuccess = true;
          this.hideSuccesMessage();
        },
        (err) => console.log('HTTP Error', err),
        () => console.log('HTTP request completed')
      );
    }
  }

  private hideSuccesMessage(): void {
    setTimeout(() => {
      this.showSuccess = false;
    }, 3000);
  }

}
