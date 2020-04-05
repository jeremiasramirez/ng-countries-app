import { Component} from '@angular/core';
import { ServiceCountry} from '../services/service.country'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css','../generalStyle/general.css'],
  providers: [ServiceCountry]
})
export class SearchComponent {

  constructor(public serv:ServiceCountry) {
    this.serv.changeTextNamePage('Search')

   }


}
