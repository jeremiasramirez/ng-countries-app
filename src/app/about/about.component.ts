import { Component } from '@angular/core';
import { timer }from 'rxjs'
import { ServiceCountry} from '../services/service.country'
import { Theme } from "../services/theme.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: [
    './about.component.css',
    '../generalStyle/general.css'
  ],
  providers: [
    ServiceCountry,
    Theme
  ]
})
export class AboutComponent   {
  
  public spinner = {
    off: true
  }

  constructor(public serv:ServiceCountry, public theme:Theme) {
    
    this.theme.setColorTheme("theme--blue-dark", "menu--blue-dark")
    this.serv.changeTextNamePage('About');
    timer(500).subscribe(timing=>this.spinner.off = false)
  
  }



}
