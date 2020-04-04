import { Component  } from '@angular/core';
import { ServiceCountry } from "../services/service.country";
import { timer } from 'rxjs'

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css','../generalStyle/general.css'],
  providers: [ServiceCountry]
})
export class AllComponent  {
   public spinner = {
     off: true
   }
   public countriesAll : any[] = []
  constructor(public countryService: ServiceCountry) {

    this.chargedCountries();

  }

  chargedCountries(){

    this.countryService.getAllCountry().subscribe((resp)=>{
      console.log(resp);
      this.countriesAll = resp
    },
    ()=>{return},
    ()=>{this.spinner.off = false})

  }



}
