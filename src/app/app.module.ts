import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { MatMenuModule } from '@angular/material/menu';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventsComponent } from './components/events/events.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { MessagesComponent } from './components/messages/messages.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ReversePipe } from './reverse.pipe';
import { CurrentTimeExemploComponent } from './components/current-time-exemplo/current-time-exemplo.component';
import { TwoWayBidingComponent } from './components/two-way-biding/two-way-biding.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeHeroesComponent } from './components/home-heroes/home-heroes.component';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';





@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ParentDataComponent,
    DirectivesComponent,
    IfRenderComponent,
    EventsComponent,
    EmitterComponent,
    ChangeNumberComponent,
    ListRenderComponent,
    PipesComponent,
    ReversePipe,
    CurrentTimeExemploComponent,
    TwoWayBidingComponent,
    HeroesComponent,
    HeroDetailsComponent,
    DashboardComponent,
    HomeHeroesComponent,
    MessagesComponent,
    ProfileHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatMenuModule,
    FlexLayoutModule.withConfig({
      addFlexToParent: true,
      addOrientationBps: true,
      disableDefaultBps: false,
      disableVendorPrefixes: false,
      serverLoaded: false,
      useColumnBasisZero: false
    }, [
      { alias: 'xs', suffix: 'Xs', mediaQuery: 'screen and (max-width: 599px)' }, /*extra-small//celulares*/
      { alias: 'sm', suffix: 'Sm', mediaQuery: 'screen and (min-width: 600px) and (max-width: 959px)' },/*small*/
      { alias: 'md', suffix: 'Md', mediaQuery: 'screen and (min-width: 960px) and (max-width: 1279px)' },/*medium*/
      { alias: 'lg', suffix: 'Lg', mediaQuery: 'screen and (min-width: 1280px) and (max-width: 1919px)' },/*large*/
      { alias: 'xl', suffix: 'Xl', mediaQuery: 'screen and (min-width: 1920px)' }/*extra-large*/
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
