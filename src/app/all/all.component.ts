import { Component  } from '@angular/core';
import { ServiceCountry } from "../services/service.country";
import { timer } from 'rxjs'

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css'],
  providers: [ServiceCountry]
})
export class AllComponent  {
   public spinner = {
     off: true
   }
  constructor(public countryService: ServiceCountry) {

    this.countryService.getAllCountry().subscribe((resp)=>{
      console.log(resp);
    },
    ()=>{
      return
    },
    ()=>{
      this.spinner.off = false
    }
  )

  }



}
