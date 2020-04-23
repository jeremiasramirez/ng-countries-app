import { Injectable } from "@angular/core"

@Injectable()

export class Theme{

  constructor(){

  }

  public setColorTheme(theme:string="theme--blue-dark", menu:string="menu--blue-dark"){
    let theme_ = document.getElementById("theme"),
        menu_ = document.getElementById("menu")

        theme_.className=theme
        menu_.className=menu
  }



}
