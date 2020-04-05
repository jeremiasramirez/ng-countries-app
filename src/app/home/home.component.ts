import { Component } from '@angular/core';
import { ServiceCountry } from "../services/service.country";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ServiceCountry]
})
export class HomeComponent  {

  constructor(public serv:ServiceCountry) {
    this.serv.changeTextNamePage('Home')
  }



}
