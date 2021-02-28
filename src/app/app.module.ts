import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesCardListComponent } from './components/cards/heroes-card-list/heroes-card-list.component';
import { HomeHeroesComponent } from './pages/home-heroes/home-heroes.component';
import { MatCardModule } from '@angular/material/card';
import { FilterPipe } from './helpers/pipes/filter.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NavBarComponent } from './components/layouts/nav-bar/nav-bar.component';
import { AddHeroFormComponent } from './pages/add-hero-form/add-hero-form.component';
import { MatInputModule } from '@angular/material/input';
import { AppRoutes } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    HomeHeroesComponent,
    HeroesCardListComponent,
    FilterPipe,
    NavBarComponent,
    AddHeroFormComponent
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
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
