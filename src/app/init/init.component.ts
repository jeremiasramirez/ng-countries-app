import { Component } from '@angular/core';
import { timer }from 'rxjs'
import { Router } from "@angular/router"
import { Theme } from "../services/theme.service";

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css', '../generalStyle/general.css'],
  providers: [Theme]
})
export class InitComponent  {
  public spinner ={
    off:true
  }
  constructor(public router:Router, public theme:Theme) {
    timer(1000).subscribe(timing=>this.spinner.off=false)
      this.theme.setColorTheme("theme--blue-dark", "menu--blue-dark")
  }

  goHome(){
    timer(400).subscribe(timing=>this.router.navigate(["explore"]))
  }



}
