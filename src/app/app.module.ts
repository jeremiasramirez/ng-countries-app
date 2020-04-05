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
import { ROUTING } from './app.route';

// Service
import { ServiceCountry } from "./services/service.country";


// material
import { MatButtonModule } from "@angular/material/button";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatRippleModule} from "@angular/material/core";
import { ExploreComponent } from './explore/explore.component'


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AllComponent,
    InitComponent,
    HomeComponent,
    AboutComponent,
    ExploreComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRippleModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule ,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
