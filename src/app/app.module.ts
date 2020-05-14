import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule , FormsModule} from "@angular/forms"

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component';
import { AllComponent } from './all/all.component';
import { InitComponent } from './init/init.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExploreComponent } from './explore/explore.component';
import { RegionComponent } from './region/region.component';
import { CountryComponent } from './country/country.component'
import { ROUTING } from './app.route';

// Service
import { ServiceCountry } from "./services/service.country";
import { ExploreService } from "./services/explore.service";


// material
import { MatButtonModule } from "@angular/material/button";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatRippleModule} from "@angular/material/core";
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider'



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AllComponent,
    InitComponent,
    HomeComponent,
    AboutComponent,
    ExploreComponent,
    RegionComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRippleModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule ,
    FormsModule,
    MatDividerModule,
    MatTooltipModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
