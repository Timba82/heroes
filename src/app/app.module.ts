import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesCardListComponent } from './components/cards/heroes-card-list/heroes-card-list.component';
import { HomeHeroesComponent } from './pages/home-heroes/home-heroes.component';
import {MatCardModule} from '@angular/material/card';
import { FilterPipe } from './helpers/pipes/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeHeroesComponent,
    HeroesCardListComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
