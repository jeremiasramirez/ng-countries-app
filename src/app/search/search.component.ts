import { Component} from '@angular/core';
import { ServiceCountry} from '../services/service.country'
import { timer } from 'rxjs'
import { delay, sampleTime} from 'rxjs/operators'
import { Router , ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css','../generalStyle/general.css'],
  providers: [ServiceCountry]
})
export class SearchComponent {

  public spinner = {
    off: true
  }

  public items : any[];

  constructor(public serv:ServiceCountry) {
    this.changeText();

    timer(500).subscribe(timing=>{

      this.spinner.off=false

    })




   }

   keyupSearch(data:any=''){


     this.spinner.off=true
     timer(1200).subscribe(timing=>{

        this.items = []

         this.serv.search(data).pipe(

         ).subscribe(resp=>{

           this.items = resp

         }, (x)=>{return}, ()=>this.spinner.off=false)

      })


   }


   changeText(){
     this.serv.changeTextNamePage('Search')
   }


}
