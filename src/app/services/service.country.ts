import { Injectable } from "@angular/core"
import { ajax } from 'rxjs/ajax'
import { pluck, delay } from 'rxjs/operators'
@Injectable()

export class ServiceCountry{
  public urlAllCountries: string = 'https://restcountries.eu/rest/v2/all'

 

  public changeTextNamePage(name:string){
    document.getElementById('idTheme').innerText=name
  }
  public getAllCountry(){

    return ajax.get(this.urlAllCountries).pipe(
      delay(1000),
      pluck('response')
    )

  }




}
