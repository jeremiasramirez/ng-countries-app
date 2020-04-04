import { Injectable } from "@angular/core"
import { ajax } from 'rxjs/ajax'
import { pluck, delay } from 'rxjs/operators'
@Injectable()

export class ServiceCountry{
  public urlAllCountries: string = 'https://restcountries.eu/rest/v2/all'



  constructor(){}



  public getAllCountry(){

    return ajax.get(this.urlAllCountries).pipe(
      delay(1500),
      pluck('response')
    )

  }




}
