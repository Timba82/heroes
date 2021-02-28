/* tslint:disable:no-unused-variable */
/* tslint:disable:no-string-literal */
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { AppRoutes } from 'src/app/app.routing';
import { HeroesCardListComponent } from 'src/app/components/cards/heroes-card-list/heroes-card-list.component';
import { NavBarComponent } from 'src/app/components/layouts/nav-bar/nav-bar.component';
import { UppercaseDirective } from 'src/app/directives/uppercase/uppercase.directive';
import { FilterPipe } from 'src/app/helpers/pipes/filter.pipe';
import { HeroesService } from 'src/app/services/heroes/heroes.service';
import { AddHeroFormComponent } from '../add-hero-form/add-hero-form.component';
import { HomeHeroesComponent } from './home-heroes.component';


fdescribe('HomeHeroesComponent', () => {
  let component: HomeHeroesComponent;
  let fixture: ComponentFixture<HomeHeroesComponent>;
  let httpClient: HttpClient;
  let service;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeHeroesComponent,
        HeroesCardListComponent,
        FilterPipe,
        NavBarComponent,
        AddHeroFormComponent,
        UppercaseDirective
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        AppRoutes,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatCardModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
        MatTableModule
      ]
    })
    .compileComponents();
    httpClient = TestBed.inject(HttpClient);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(inject([HeroesService], (s) => {
    service = s;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('get Hero and remove from array', () => {
    component.heroes = [
      {
        id: '-MUXI-GNc6JoIkkpbkGe',
        name: 'Batman',
        powers: 'high tech gear, martial arts, and high intelligence'
      }
    ];
    component.getHeroIdEmitted('heroId');
    expect(component).toBeTruthy();
  });

  it('filter Input Change Method', () => {
    component.filterInputChange();
    expect(component).toBeTruthy();
  });

  it('Get all Heroes Service', () => {
    const response = [
      {
        id: '-MUXI-GNc6JoIkkpbkGe',
        name: 'Batman',
        powers: 'high tech gear, martial arts, and high intelligence'
      }
    ];
    spyOn( service, 'getAllHeroes' ).and.returnValue(of( response ));
    component['getAllHeroes']();
    expect(service.getAllHeroes).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

});
