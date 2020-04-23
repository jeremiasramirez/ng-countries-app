import { Injectable } from "@angular/core"
import { ajax } from 'rxjs/ajax'
import { Router } from "@angular/router";
import { pluck, sampleTime, delay } from 'rxjs/operators'
import { timer } from 'rxjs'
@Injectable()

export class ContinentService{

  // public urlContinent: string = 'https://restcountries.eu/rest/v2/region/'
  public urlAllContinent: string = 'assets/api/continent.json'
  public urlAllRegion: string = 'https://restcountries.eu/rest/v2/regionalbloc/'

  constructor(public router:Router){  }
  getAllContinent(){

    return ajax.get(this.urlAllContinent).pipe(
      pluck('response'),
      delay(600)
    )

  }

  getAllContinentOfRegion(name:string){

    return ajax.get(`${this.urlAllRegion}${name}`).pipe(
      delay(100),
      pluck('response')
    )

  }





}
