import { Component } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";

import { ContinentService } from "../services/continent.service";
import { LanguageService } from "../services/language.service";
import { ExploreService } from "../services/explore.service";
import { Theme } from "../services/theme.service";
import { delay } from "rxjs/operators";


@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css', '../generalStyle/general.css'],
  providers: [ContinentService, Theme, LanguageService, ExploreService]
})


export class RegionComponent  {

  public params = {
    data: null
  };


  public spinner = {
    off:true
  }

  public spinner2 = {
    off:true
  }

  public spinner3 = {
    off:true
  }

  public allCountryOfRegion = {
    data: []
  }

  public allCountryOfContinent = {
    data: []
  }

  public allCountryForLanguages = {
    data: []
  }

  public allCountryForCode = {
    data: []
  }

  constructor(public param:ActivatedRoute ,public continent:ContinentService,
              public theme:Theme, public router:Router, public languages:LanguageService,
              public explores:ExploreService) {

    this.theme.setColorTheme("theme--orange", "menu--orange")

    this.param.params.subscribe(param=>{

      if(param.region == "code") {

        this.getAllCountryOfCode();

      }else{

        this.param.params.subscribe(data=>{this.params.data = data.region})
        this.getAllCountryForLanguages();
        this.getAllCountryOfContinents();
        this.getAllContinentOfRegions();

      }

    })





  }
  getAllCountryForLanguages(){

      this.languages.getAllCountryForLanguage(this.params.data).pipe(delay(500)).subscribe(data=>{
        this.allCountryOfContinent.data = data;
      }, (err)=>{ return err}, ()=>{ this.spinner2.off=false;this.spinner.off=false })

  }
  getAllCountryOfContinents(){
    this.continent.getAllCountryOfContinent(this.params.data).pipe(delay(200)).subscribe(data=>{
      this.allCountryOfContinent.data = data;

    }, (err)=>{ return err}, ()=>{ this.spinner2.off=false;this.spinner.off=false })

  }

  getAllCountryOfCode(){
    this.explores.getAllForCode().pipe(delay(200)).subscribe(data=>{
      this.allCountryForCode.data = data;
    }, (err)=>{ return err}, ()=>{ this.spinner3.off=false;this.spinner.off=false;this.spinner2.off=false })

  }

  goToOnly(data){
    console.log(data)
  }

  getAllContinentOfRegions(){
    this.continent.getAllContinentOfRegion(this.params.data).pipe(delay(200)).subscribe(data=>{
      this.allCountryOfRegion.data = data;

    }, (err)=>{return err}, ()=>{this.spinner.off=false;this.spinner2.off=false})


  }
  explore(){
   this.router.navigate(["explore"]);
  }


}
