import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { ContinentService } from "../services/continent.service";


@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css', '../generalStyle/general.css'],
  providers: [ContinentService]
})
export class RegionComponent  {
  public params = {
    data: null
  };
  public allCountryOfRegion = {
    data: []
  }
  constructor(public param:ActivatedRoute ,public continent:ContinentService) {

    this.param.params.subscribe(data=>{this.params.data = data.region})

    this.continent.getAllContinentOfRegion(this.params.data).subscribe(data=>{
      this.allCountryOfRegion.data = data;
      console.log(this.allCountryOfRegion.data);
    })


  }


}
