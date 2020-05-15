import { Component } from '@angular/core';
import { ajax } from 'rxjs/ajax'
import { timer } from 'rxjs'
import { pluck,delay } from 'rxjs/operators'
import { Theme } from "../services/theme.service";
import { ServiceCountry } from "../services/service.country";

import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css','../generalStyle/general.css'],
  providers: [Theme, ServiceCountry]
})
export class CountryComponent  {
  borders = []
  storageBolders  = []
  spinner = {
    off:true
  }
  titleCountry: string = '......';

  inform :any[]= []
  constructor(public theme:Theme, public param:ActivatedRoute, public countryService:ServiceCountry) {

    this.theme.setColorTheme("theme--orange", "menu--orange");

    this.param.params.subscribe(par=>{
      this.analizer(par.only)
    })

  }



   analizer(name:string){

      ajax.get('https://restcountries.eu/rest/v2/all').pipe(
          pluck('response'),
          delay(1000)).subscribe(data=>{
          for (let i = 0; i < data.length; i++) {
              if (data[i].alpha2Code==name){
                this.inform.unshift(data[i]);console.log(this.inform)
                this.titleCountry = this.inform[0].name
                this.countryService.changeTextNamePage(this.titleCountry)


              }
  
           
          }

          
           
 
            for(let k=0; k<this.inform[0].borders.length; k+=1){
              this.storageBolders.push(this.inform[0].borders[k])
            }

            for(let z=0; z<this.storageBolders.length; z+=1){    
             
              ajax.get(`https://restcountries.eu/rest/v2/alpha/${this.storageBolders[z]}`).pipe(pluck('response')).subscribe(resp=>{
              
                this.borders.push(resp);

              })  
 
            }
             

        
         

      }, (err)=>{return err}, ()=>{this.spinner.off=false})


  }

 


}
