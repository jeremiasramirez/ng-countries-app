import { Component } from '@angular/core';
import { ServiceCountry } from "../services/service.country";
import { ExploreService } from "../services/explore.service";
import { ContinentService } from "../services/continent.service";
import { LanguageService } from "../services/language.service";
import { Theme } from "../services/theme.service";

import {MatSnackBar} from '@angular/material/snack-bar';
import { timer,concat, Subject ,from} from "rxjs";
import { delay,take } from "rxjs/operators";
import { Router } from "@angular/router";


@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css', '../generalStyle/general.css'],
  providers: [
    ServiceCountry,
    ExploreService,
    ContinentService,
    Theme,
    LanguageService
  ]
})
export class ExploreComponent {

  public allRegion: [];

  public allLanguages : any[] = [];

  public allContinent : [];

  public forCode : any[] = [];

  public spinner = {
    off:true
  }

  public spinner2 = {
    off:true
  }

  public spinner3 = {
    off:true
  }

  public spinner4 = {
    off:true
  }
  public obsCode = new Subject();
  constructor(private _snackBar: MatSnackBar,public countryService:ServiceCountry,
              public exploreService:ExploreService, public continent:ContinentService,
              public router:Router, public theme:Theme, public language:LanguageService) {

      this.theme.setColorTheme("theme--orange", "menu--orange");
      this.countryService.changeTextNamePage('Explore')

      timer(100).subscribe(timing=>{

        this.openSnackBar('showing all regions', 'Ok')

        this.setAllContinent();

        this.setAllRegionToArray();

        this.setAllLanguages()

        // this.setForCode()


      })






  }

  public setForCode(){
    this.exploreService.getAllForCode().subscribe((data)=>{
        for (let index = 0; index < 20; index++) {
          this.forCode[index]=data[index]

        }
    },
    (err)=>{return err},
    ()=>{this.spinner4.off=false})
  }
  public setAllLanguages(){

    this.language.getAllForLanguages().subscribe(
                                    (resp)=>{this.allLanguages = resp;},
                                    (err)=>{return err},
                                    ()=>{this.spinner3.off=false})



  }


  setAllContinent(){
    this.continent.getAllContinent().pipe(delay(1000)).subscribe(
                                  (resp) => {this.allContinent = resp;},
                                  (err)=>{return err},
                                  ()=>{this.spinner2.off=false})
  }
  setAllRegionToArray(){

    this.exploreService.getAllRegion().pipe(delay(100)).subscribe(resp=>{
        this.allRegion = resp;



    }, (err)=>{return err}, ()=>{this.spinner.off=false})

    return this.allRegion


  }
  openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action, {
        duration: 5000,
      });
    }



  public goToRegion(name:string){
    timer(500).subscribe(timing=>this.router.navigate(["explore/region", name]))
  }

}
