import { Injectable } from "@angular/core"
import { ajax } from 'rxjs/ajax'
import { Router } from "@angular/router";
import { pluck, delay } from 'rxjs/operators'

@Injectable()

export class ContinentService{

  public urlAllContinent: string = 'assets/api/continent.json'
  public urlAllRegion: string = 'https://restcountries.eu/rest/v2/regionalbloc/'
  public urlAllCountry: string = 'https://restcountries.eu/rest/v2/region/'

  constructor(public router:Router){  }
  
  public getAllContinent(){

    return ajax.get(this.urlAllContinent).pipe(
      pluck('response'),
      delay(10)
    )

  }

  public getAllContinentOfRegion(name:string){

    return ajax.get(`${this.urlAllRegion}${name}`).pipe(
      delay(10),
      pluck('response')
    )

  }
  public getAllCountryOfContinent(name:string){

    return ajax.get(`${this.urlAllCountry}${name}`).pipe(
      delay(10),
      pluck('response')
    )

  }





}
