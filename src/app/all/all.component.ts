import { Component  } from '@angular/core';
import { ServiceCountry } from "../services/service.country";
import { timer } from 'rxjs'
import { Theme } from "../services/theme.service";
import { Router } from '@angular/router'
import { typeResponse } from '../typeResponse/type.response';


@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: [
    './all.component.css',
    '../generalStyle/general.css'
  ],
  providers: [
    ServiceCountry,
    Theme
  ]
})
export class AllComponent  {
  //properties 
  public spinner = {
     off: true
   }

  public dataStart : number=0;
  public dataEach : number=10;
  public dataEnd : number=this.dataEach;
  public dataPageLength : number;


  public countriesAll : typeResponse[] = []

  constructor(public countryService: ServiceCountry, public theme:Theme,public router:Router) {
    
    this.theme.setColorTheme("theme--blue-dark", "menu--blue-dark")
    this.countryService.changeTextNamePage('All the countries')
    timer(300).subscribe(timing=>this.chargedCountries())
   
   
  }

 public next(){
   
  if (this.dataEnd < this.countriesAll.length){
    this.dataStart += this.dataEach
    this.dataEnd += this.dataEach
     
  }
 
  else{
    this.dataStart = 0
    this.dataEnd = this.dataEach
    
  }
  
 }
 
 public back(){

  if (this.dataStart > 0){
    this.dataStart -= this.dataEach
    this.dataEnd -= this.dataEach
  
  }
  else{
    this.dataStart = (this.countriesAll.length - 10)
    this.dataEnd = this.countriesAll.length
     
  }
   


 }

 public chargedCountries(){

    this.countryService.getAllCountry().subscribe((resp)=>{
      this.countriesAll = resp
    },
    ()=>{return},
    ()=>{this.spinner.off = false; this.dataPageLength = this.countriesAll.length})

  }
  public goToOnly(name:string){

    this.router.navigate(["explore/only", name])


  }
  


}
