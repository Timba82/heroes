import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHeroFormComponent } from './pages/add-hero-form/add-hero-form.component';
import { HomeHeroesComponent } from './pages/home-heroes/home-heroes.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeHeroesComponent
  },
  {
    path: 'add-hero',
    component: AddHeroFormComponent
  },
  {
    path: 'update-hero/:heroId',
    component: AddHeroFormComponent
  },
  {
      path: '**',
      component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ]
})

export class AppRoutes {}
