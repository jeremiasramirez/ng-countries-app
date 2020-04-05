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
  public form = {
    value : ''
  }
  public items : any[];


  constructor(public serv:ServiceCountry, public router:Router,public par:ActivatedRoute) {
    this.changeText();
    this.router.navigate(["search", ""])
    this.par.params.subscribe(params=>{
      this.setSearchAutomation(params.name)
      if(params.name){
        this.form.value = params.name;
      }
    })


    timer(500).subscribe(timing=>{

      this.spinner.off=false

    })


   }

   setSearchAutomation(name:string=''){
     if (name != ''){
       this.keyupSearch(name);
     }
   }
   setNavigateData(data:string=''){
     this.router.navigate(["search", data])
   }
   keyupSearch(data:any=''){

       this.setNavigateData(data)



    this.spinner.off=true

     timer(2000).subscribe(timing=>{

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
