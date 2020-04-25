import { Component} from '@angular/core';
import { ServiceCountry} from '../services/service.country'
import { timer } from 'rxjs'
import { delay, sampleTime} from 'rxjs/operators'
import { Router , ActivatedRoute} from '@angular/router'
import { Theme } from "../services/theme.service";
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css','../generalStyle/general.css'],
  providers: [ServiceCountry,Theme]
})
export class SearchComponent {

  public spinner = {
    off: true
  }
  public form = {
    value : null
  }
  public items : any[];


  constructor(public serv:ServiceCountry, public router:Router,public par:ActivatedRoute, public theme:Theme) {
      // this.router.navigate(["search", ""])
    this.changeText();
    this.spinnerTime()
    this.theme.setColorTheme("theme--blue-dark", "menu--blue-dark")
   
    this.par.params.subscribe(params=>{

        this.items = []
        this.setSearchAutomation(params.name)


        if(params.name){
          this.form.value = params.name;
        }

        this.spinner.off=true;


    }, (err)=>{return err}, ()=>{this.spinner.off=false;})


   }
  goExplore(){
    this.serv.goExplore()
  }

   spinnerTime(){
     this.spinner.off=true

     setTimeout(() => {
          this.spinner.off=false
     }, 600);
   }

   setSearchAutomation(name:string=''){
     if (name != ''){
       this.keyupSearch(name);
     }
     else{
       this.form.value =null
     }
   }
   setNavigateData(data:string=''){
     this.router.navigate(["search", data])
   }
   keyupSearch(data:any=''){
       if (data.length >= 4){
      this.spinnerTime()
      this.spinner.off=true
      this.setNavigateData(data)




     timer(3000).subscribe(timing=>{

        // this.items = []

         this.serv.search(data).pipe(

         ).pipe(delay(100)).subscribe(resp=>{

           this.items = resp

         }, (x)=>{return x}, ()=>{this.spinner.off=false})


      })

}

   }


   changeText(){
     this.serv.changeTextNamePage('Search')
   }


}
