import { Component } from '@angular/core';
import { ServiceCountry } from "../services/service.country";
import { timer } from "rxjs";
import { delay } from "rxjs/operators";

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css', '../generalStyle/general.css'],
  providers: [ServiceCountry]
})
export class ExploreComponent {

  public allRegion: [];

  public spinner = {
    off:true
  }
  constructor(public countryService:ServiceCountry) {

      this.countryService.changeTextNamePage('Explore')
      this.setAllRegionToArray();


  }


  setAllRegionToArray(){

    this.countryService.getAllRegion().pipe(delay(600)).subscribe(resp=>{
        this.allRegion = resp;

        console.log(this.allRegion);
    }, (err)=>{return err}, ()=>{this.spinner.off=false})
    return this.allRegion


  }


}
