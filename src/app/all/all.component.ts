import { Component  } from '@angular/core';
import { ServiceCountry } from "../services/service.country";
import { timer } from 'rxjs'
import { Theme } from "../services/theme.service";
@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css','../generalStyle/general.css'],
  providers: [ServiceCountry,Theme]
})
export class AllComponent  {
   public spinner = {
     off: true
   }
   public countriesAll : any[] = []
  constructor(public countryService: ServiceCountry, public theme:Theme) {
    this.theme.setColorTheme("theme--blue-dark", "menu--blue-dark")
    this.countryService.changeTextNamePage('All')
    this.chargedCountries();

  }

  chargedCountries(){

    this.countryService.getAllCountry().subscribe((resp)=>{
      this.countriesAll = resp
    },
    ()=>{return},
    ()=>{this.spinner.off = false})

  }



}
