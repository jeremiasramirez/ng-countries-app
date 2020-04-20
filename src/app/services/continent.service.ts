import { Injectable } from "@angular/core"
import { ajax } from 'rxjs/ajax'
import { Router } from "@angular/router";
import { pluck, sampleTime, delay } from 'rxjs/operators'
import { timer } from 'rxjs'
@Injectable()

export class ContinentService{

  // public urlContinent: string = 'https://restcountries.eu/rest/v2/lang/'

  constructor(public router:Router){

  }




}
