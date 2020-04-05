import { Component} from '@angular/core';
import { ServiceCountry} from '../services/service.country'
import { timer} from 'rxjs'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css','../generalStyle/general.css'],
  providers: [ServiceCountry]
})
export class SearchComponent {
  public spinner = {
    off: true
  }
  constructor(public serv:ServiceCountry) {
    this.serv.search('Dominican').subscribe((x)=>console.log(x)
    )
    this.serv.changeTextNamePage('Search')
    timer(500).subscribe(timing=>this.spinner.off=false)
   }


}
