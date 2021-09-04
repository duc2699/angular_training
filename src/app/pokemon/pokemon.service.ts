import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import pokedex from './pokedex.json';

import { pokemon } from './pokemon.model'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }
  getPokemonList() : Observable<pokemon[]> {
    const pokemons = of(pokedex.data);
    return pokemons;
  }
}
