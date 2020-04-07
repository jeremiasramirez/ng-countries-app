import { Component } from '@angular/core';
import { ServiceCountry } from "../services/service.country";
@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
  providers: [ServiceCountry]
})
export class ExploreComponent {

  constructor(public countryService:ServiceCountry) {
      this.countryService.changeTextNamePage('Explore')
  }


}
