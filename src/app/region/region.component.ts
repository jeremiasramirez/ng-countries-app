import { Component } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";

import { ContinentService } from "../services/continent.service";
import { Theme } from "../services/theme.service";

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css', '../generalStyle/general.css'],
  providers: [ContinentService, Theme]
})
export class RegionComponent  {
  public params = {
    data: null
  };
  public spinner = {
    off:true
  }
  public allCountryOfRegion = {
    data: []
  }
  constructor(public param:ActivatedRoute ,public continent:ContinentService, public theme:Theme, public router:Router) {
      this.theme.setColorTheme("theme--orange", "menu--orange")
    this.param.params.subscribe(data=>{this.params.data = data.region})

    this.continent.getAllContinentOfRegion(this.params.data).subscribe(data=>{
      this.allCountryOfRegion.data = data;
      console.log(this.allCountryOfRegion.data);
    }, (err)=>{ return err }, ()=>{this.spinner.off=false})


  }
  goToCountry(name:any){
    // this.router.navigate(["explore/region0"])
  }


}
