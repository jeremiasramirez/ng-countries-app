import { Injectable } from "@angular/core"
import { ajax } from "rxjs/ajax";
import { delay,pluck } from "rxjs/operators";
@Injectable()

export class LanguageService{
  public urlForLanguages : string = "assets/api/language.json"
  constructor(){

  }

  getAllForLanguages(){
     return ajax.get(this.urlForLanguages).pipe(delay(1000),pluck('response'))
  }



}
