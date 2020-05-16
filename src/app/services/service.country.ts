import { Injectable } from "@angular/core"
import { ajax } from 'rxjs/ajax'
import { Router } from "@angular/router";
import { pluck, delay } from 'rxjs/operators'
import { timer } from 'rxjs'


@Injectable()

export class ServiceCountry{
  public urlAllCountries: string = 'https://restcountries.eu/rest/v2/all'
  public urlAllRegion: string = 'assets/api/image-explore.json'

  constructor(public router:Router){}

  public goExplore(){
     timer(100).subscribe(timing=>this.router.navigate(["explore"]))
  }

  public changeTextNamePage(name:string){
    document.getElementById('idTheme').innerText=name
  }
  
  public search(name:string=''){
    // filter
    name = name.substring(0,1).toUpperCase()+name.substring(1,name.length).toLowerCase()

    return ajax.get(`https://restcountries.eu/rest/v2/name/${name}`).pipe(
      pluck('response'),
      delay(10)
    )

  }
  public getAllCountry(){

    return ajax.get(this.urlAllCountries).pipe(
      delay(100),
      pluck('response')
    )

  }

  public getAllRegion(){

    return ajax.get(this.urlAllRegion).pipe(
      delay(100),
      pluck('response')
    )

  }




}
