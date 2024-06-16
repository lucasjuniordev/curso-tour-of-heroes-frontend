import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { HomeHeroesComponent } from './components/home-heroes/home-heroes.component';

const routes: Routes = [
  {path: '', component: HomeHeroesComponent},
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroes/:id', component: HeroDetailsComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
