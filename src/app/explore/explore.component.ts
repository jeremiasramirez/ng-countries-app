import { Component } from '@angular/core';
import { ServiceCountry } from "../services/service.country";
import { ExploreService } from "../services/explore.service";
import { ContinentService } from "../services/continent.service";
import { LanguageService } from "../services/language.service";
import { Theme } from "../services/theme.service";
import { MatSnackBar} from '@angular/material/snack-bar';
import { timer,Subject} from "rxjs";
import { delay } from "rxjs/operators";
import { Router } from "@angular/router";
import { typeResponse } from '../typeResponse/type.response';


@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: [
    './explore.component.css',
    '../generalStyle/general.css'
  ],
  providers: [
    ServiceCountry,
    ExploreService,
    ContinentService,
    Theme,
    LanguageService
  ]
})
export class ExploreComponent {

  public allRegion: typeResponse[];

  public allLanguages : typeResponse[] = [];

  public allContinent : typeResponse[];

  public forCode : typeResponse[] = [];

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

  constructor(private _snackBar: MatSnackBar,
              public countryService:ServiceCountry,
              public exploreService:ExploreService,
              public continent:ContinentService,
              public router:Router,
              public theme:Theme,
              public language:LanguageService) {

      this.theme.setColorTheme("theme--orange", "menu--orange");
      this.countryService.changeTextNamePage('Explore')

      timer(200).subscribe(timing=>{

        this.openSnackBar('showing all regions', 'Ok')

        this.setAllContinent();

        this.setAllRegionToArray();

        this.setAllLanguages()

      })






  }

  public setForCode(){
    
    this.exploreService.getAllForCode().subscribe((data)=>{
       this.forCode = data;
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


  public setAllContinent(){
    this.continent.getAllContinent().pipe(delay(100)).subscribe(
                                  (resp) => {this.allContinent = resp;},
                                  (err)=>{return err},
                                  ()=>{this.spinner2.off=false})
  }
  public setAllRegionToArray(){

    this.exploreService.getAllRegion().pipe(delay(100)).subscribe(resp=>{
        this.allRegion = resp;



    }, (err)=>{return err}, ()=>{this.spinner.off=false})

    return this.allRegion


  }
  public openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action, {
        duration: 5000,
      });
    }

  public goToCode(){
    timer(200).subscribe(timing=>this.router.navigate(["explore/region", "code"]))
  }

  public goToRegion(name:string){
    timer(200).subscribe(timing=>this.router.navigate(["explore/region", name]))
  }

}
