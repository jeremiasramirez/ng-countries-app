import { Component } from '@angular/core';
import { ServiceCountry } from "../services/service.country";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','../generalStyle/general.css'],
  providers: [ServiceCountry]
})
export class HomeComponent  {

  constructor(public serv:ServiceCountry) {
    this.serv.changeTextNamePage('Home')
  }
  goExplore(){
    this.serv.goExplore();
  }



}
