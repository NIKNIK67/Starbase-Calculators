import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CapitalCalcComponent } from './capital-calc/capital-calc.component';
import { AlloyCalcComponent } from './alloy-calc/alloy-calc.component';
import { ShipCalcComponent } from './ship-calc/ship-calc.component';
import { FooterComponent } from './footer/footer.component';
import { ResourcesMapComponent } from './resources-map/resources-map.component';
import { LocationCardComponent } from './location-card/location-card.component';
import { LocationPageComponent } from './location-page/location-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CapitalCalcComponent,
    AlloyCalcComponent,
    ShipCalcComponent,
    FooterComponent,
    ResourcesMapComponent,
    LocationCardComponent,
    LocationPageComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'cap-calc', component: CapitalCalcComponent, pathMatch: 'full' },
      { path: 'alloy-calc', component: AlloyCalcComponent, pathMatch: 'full' },
      { path: 'ship-calc', component: ShipCalcComponent, pathMatch: 'full' },
      { path: 'resources-map', component: ResourcesMapComponent, pathMatch: 'full' },
      { path: 'location-page/:name', component: LocationPageComponent, pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
