/* Servicio creado para manejar todas las peticiones http (get, post, etc) del proyecto */ 
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { Game } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  // creamos una propiedad de un arreglo vacío del tipo Game (interface) 
  private juegos: Game[] = [];

  // inyectamos el httpClient para poder llamar las peticiones
  constructor(private http: HttpClient) { }

  // método de petición GET para mostrar los juegos (en ambiente de desarrollo)
  getNominados() {

    // validamos si el arreglo es vacío, que haga la petición (de esta forma evitamos hacer la petición cada vez que entramos a la página de votación)
    if(this.juegos.length > 0) {
      
      // no tenemos juegos
      return of(this.juegos);

    } else {

      // realizamos la petición
      return this.http.get<Game[]>(`${environment.url}/api/goty`)
        .pipe(
          tap(
              juegos => this.juegos = juegos
          )
        );
    }
  }

  // // método de petición POST para votar los juegos (en ambiente de desarrollo)
  votarJuego(id: string) {
    
    return this.http.post(`${environment.url}/api/goty/${id}`,{})
      .pipe(
        catchError(err => {
          return of(err.error);
        })
      )  
  }
}
