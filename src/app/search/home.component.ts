import { Component } from "@angular/core";
import { ServicePokemon } from "../services/service.pokemon"
import { timer  } from 'rxjs'

@Component({
  selector: "home-app",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  providers: [
    ServicePokemon
  ]
})

export class HomeComponent{
   spinner = {
     load: true,
     text:true
   }
   pokemonsArray  :any[]= []

  constructor(public poke:ServicePokemon){
    timer(400).subscribe(x=>{this.spinner.load=false})
  
    this.pokemons()

  }
  pokemons(){
    this.poke.getPokemonHome().subscribe((n)=>{

      for(let i=0;i<6; i++){
        n[i].name=n[i].name.toLowerCase()
        this.pokemonsArray.push(n[i]) ;


      }
      // console.log(this.pokemonsArray);



    })
  }





}
