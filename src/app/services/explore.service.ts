import { Injectable } from "@angular/core"
import { ajax } from 'rxjs/ajax'
import { Router } from "@angular/router";
import { pluck, sampleTime, delay } from 'rxjs/operators'
import { timer } from 'rxjs'
@Injectable()

export class ExploreService{

  public urlAllRegion: string = 'assets/api/image-explore.json'

  constructor(public router:Router){

  }


  public getAllRegion(){

    return ajax.get(this.urlAllRegion).pipe(
      delay(100),
      pluck('response')
    )

  }




}
