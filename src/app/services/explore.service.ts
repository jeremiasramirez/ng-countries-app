import { Injectable } from "@angular/core"
import { ajax } from 'rxjs/ajax'
import { Router } from "@angular/router";
import { pluck, delay } from 'rxjs/operators'
 
@Injectable()

export class ExploreService{

  public urlAllRegion: string = 'assets/api/image-explore.json'

  constructor(public router:Router){}


  public getAllRegion(){

    return ajax.get(this.urlAllRegion).pipe(
      delay(10),
      pluck('response')
    )

  }
  public getAllForCode(){

    return ajax.get('https://restcountries.eu/rest/v2/all').pipe(
      pluck('response'),
      delay(100)
    )

  }




}
