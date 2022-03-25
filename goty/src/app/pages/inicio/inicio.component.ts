/* Componente creado para el manejo de la lógica de la página de inicio */
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Game } from '../../interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  // creamos una propiedad de un arreglo de juegos vacío
  juegos: any[] = [];

  // inyectamos el AngularFirestore para acceder a la bd y poder mostrar el gráfico (según documentación de Angular Fire)
  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {

    // obtenemos la referencia a la BD para mostrar los cambios (es decir cambios en el gráfico al votar un juego) 
    this.db.collection('goty').valueChanges()
      .pipe(
        map((resp: any[]) => resp.map(({name, votos}) => ({name, value: votos})))
      )
      .subscribe(juegos => {
        this.juegos = juegos;
      });
  }

}
