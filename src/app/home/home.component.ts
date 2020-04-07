import { Component } from '@angular/core';
import { ServiceCountry } from "../services/service.country";
import { timer } from 'rxjs'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','../generalStyle/general.css'],
  providers: [ServiceCountry]
})
export class HomeComponent  {
  public spinner = {
    off:true
  }
  constructor(public serv:ServiceCountry) {
    this.spinner_();
    this.serv.changeTextNamePage('Home')
  }
  goExplore(){
    this.serv.goExplore();
  }
  spinner_(){
    timer(800).subscribe(timing=>this.spinner.off=false)
  }



}
