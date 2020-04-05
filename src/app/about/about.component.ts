import { Component } from '@angular/core';
import { timer }from 'rxjs'
import { ServiceCountry} from '../services/service.country'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [ServiceCountry]
})
export class AboutComponent   {
  public spinner = {
    off: true
  }
  constructor(public serv:ServiceCountry) {
    this.serv.changeTextNamePage('About');
    timer(500).subscribe(timing=>this.spinner.off = false)
  }



}
