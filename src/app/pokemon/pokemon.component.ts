import { Component, OnInit } from '@angular/core';
import { pokemon } from './pokemon.model';

import {PokemonService} from './pokemon.service';



@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  pokelist : pokemon[] = [];

  constructor(private pokemonService : PokemonService){

  }

  ngOnInit(){
    this.getVal();
  }

  getVal(){
    this.pokemonService.getPokemonList().subscribe(pokemon =>{
      this.pokelist = pokemon
    })
  }
}


