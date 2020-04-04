import { Component } from '@angular/core';
import { timer }from 'rxjs'
import { Router } from "@angular/router"


@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css', '../generalStyle/general.css']
})
export class InitComponent  {
  public spinner ={
    off:true
  }
  constructor(public router:Router) {
    timer(1000).subscribe(timing=>this.spinner.off=false)
  }

  goHome(){
    timer(400).subscribe(timing=>this.router.navigate(["home"]))
  }



}
