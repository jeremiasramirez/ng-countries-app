import { Component} from '@angular/core';
import { ServiceCountry} from '../services/service.country'
import { timer } from 'rxjs'
import { delay} from 'rxjs/operators'
import { Router , ActivatedRoute} from '@angular/router'
import { Theme } from "../services/theme.service";
import { typeResponse } from '../typeResponse/type.response';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [
    './search.component.css',
    '../generalStyle/general.css'
  ],
  providers: [
    ServiceCountry,
    Theme
  ]
})
export class SearchComponent {

  public spinner = {
    off: true
  }

  public form = {
    value : null
  }

  public items : typeResponse[];


  constructor(public serv:ServiceCountry,
    public router:Router,
    public par:ActivatedRoute,
    public theme:Theme) {

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

  public goExplore(){
    this.serv.goExplore()
  }

  public goToOnly(name:string){
    this.router.navigate(["explore/only", name])
  }

   public spinnerTime(){
     this.spinner.off=true

     setTimeout(() => {
        this.spinner.off=false
     }, 600);

   }

   public setSearchAutomation(name:string=''){
     if (name != ''){
    
        this.keyupSearch(name);   
       
     }
     else{
       this.form.value =null
     }
   }

   public setNavigateData(data:string=''){
      
      this.router.navigate(["search", data])
     
     
   }

   public keyupSearch(data:any=''){
       if (data.length >= 4){

        this.spinnerTime()
        this.spinner.off=true
        this.setNavigateData(data)
      
        timer(5000).subscribe(timing=>{

            this.serv.search(data).pipe(

            ).pipe(delay(100)).subscribe(resp=>{

              this.items = resp

            }, (x)=>{return x}, ()=>{this.spinner.off=false})


          })

        } 

   }


   public changeText(){
     this.serv.changeTextNamePage('Search')
   }


}
