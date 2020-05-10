import { Injectable } from "@angular/core"
import { ajax } from "rxjs/ajax";
import { delay,pluck } from "rxjs/operators";
@Injectable()

export class LanguageService{
  public urlForLanguages : string = "assets/api/language.json"
  public urlCountryForLanguages : string = "https://restcountries.eu/rest/v2/lang/"
  constructor(){

  }

  getAllForLanguages(){
     return ajax.get(this.urlForLanguages).pipe(delay(10),pluck('response'))
  }

  getAllCountryForLanguage(name:string){
     return ajax.get(`${this.urlCountryForLanguages}${name}`).pipe(delay(100),pluck('response'))
  }



}
