import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component';
import { AllComponent } from './all/all.component';
import { InitComponent } from './init/init.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ROUTING } from './app.route';


// material
import { MatButtonModule } from "@angular/material/button";
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AllComponent,
    InitComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
