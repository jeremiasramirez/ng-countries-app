import { Component } from '@angular/core';
import { ServiceCountry } from "../services/service.country";
import { ExploreService } from "../services/explore.service";
import {MatSnackBar} from '@angular/material/snack-bar';
import { timer } from "rxjs";
import { delay } from "rxjs/operators";

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css', '../generalStyle/general.css'],
  providers: [ServiceCountry, ExploreService]
})
export class ExploreComponent {

  public allRegion: [];

  public spinner = {
    off:true
  }
  constructor(private _snackBar: MatSnackBar,public countryService:ServiceCountry, public exploreService:ExploreService) {
      timer(800).subscribe(timing=>this.openSnackBar());
      this.countryService.changeTextNamePage('Explore')
      this.setAllRegionToArray();


  }


  setAllRegionToArray(){

    this.exploreService.getAllRegion().pipe(delay(600)).subscribe(resp=>{
        this.allRegion = resp;

        console.log(this.allRegion);
    }, (err)=>{return err}, ()=>{this.spinner.off=false})
    return this.allRegion


  }
  openSnackBar(message: string, action: string) {
      this._snackBar.open('showing all regions', 'Ok', {
        duration: 5000,
      });
    }

}