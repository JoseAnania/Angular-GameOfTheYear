/* Página que maneja la lógica de los juegos */
import { Component, OnInit } from '@angular/core';
import { Game } from '../../interfaces/interfaces';
import { GameService } from '../../services/game.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  // creamos una propiedad de un arreglo de Juegos vacío del tipo Game (interfaces)
  juegos: Game[] = [];

  // inyectamos el servicio
  constructor(private gameService: GameService) { }

  ngOnInit(): void {

    // llamamos al método del servicio que nos trae los juegos
    this.gameService.getNominados()
      .subscribe(juegos => {
        console.log(juegos);

        // llenamos el arreglo
        this.juegos = juegos;
      });
  }

  // llamamos al método del servicio que vota los juegos
  votarJuego(juego: Game) {

    this.gameService.votarJuego(juego.id)
      .subscribe( (resp: any) => {
        
        // usamos Sweet Alert 2 para mostrar un mensaje si se votó
        if(resp.ok) {
          Swal.fire('Gracias', resp.mensaje, 'success');
        } else {
          Swal.fire('Oops', resp.mensaje, 'error');
        }
      })
  }

}
