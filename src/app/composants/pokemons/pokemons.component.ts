import {Component, Inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pokemons} from "../../modeles/pokemons";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent {

  public pokemons$: Observable<Pokemons>;
  public url = "https://pokeapi.co/api/v2/pokemon";

  constructor(
    @Inject(HttpClient) private http: HttpClient
  ) {
    const url = '';
    this.pokemons$ = this.http.get<Pokemons>(this.url);
  }
}
