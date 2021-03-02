import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { HeroesCardListComponent } from './components/cards/heroes-card-list/heroes-card-list.component';
import { NavBarComponent } from './components/layouts/nav-bar/nav-bar.component';
import { UppercaseDirective } from './directives/uppercase/uppercase.directive';
import { FilterPipe } from './helpers/pipes/filter.pipe';
import { AddHeroFormComponent } from './pages/add-hero-form/add-hero-form.component';
import { HomeHeroesComponent } from './pages/home-heroes/home-heroes.component';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
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
    MatTableModule,
    NgbModule,
    NgbPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
