import { Component } from '@angular/core';
import { ServiceCountry } from "../services/service.country";
import { timer } from 'rxjs'
import { Router } from "@angular/router"
import { Theme } from "../services/theme.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','../generalStyle/general.css'],
  providers: [ServiceCountry, Theme]
})
export class HomeComponent  {
  public spinner = {
    off:true
  }
  constructor(public serv:ServiceCountry, public router:Router, public theme:Theme) {
    this.spinner_();
    this.serv.changeTextNamePage('Home')
    this.theme.setColorTheme("theme--blue-dark", "menu--blue-dark")
  }
  goExplore(){
    this.serv.goExplore();
  }
  spinner_(){
    timer(800).subscribe(timing=>this.spinner.off=false)
  }
  toEs(){
    timer(1000).subscribe(timing=>  this.router.navigate(["explore/country/language","es"] ))
  }
  toUs(){
        timer(1000).subscribe(timing=>  this.router.navigate(["explore/country/language","en"] ))
  }



}
