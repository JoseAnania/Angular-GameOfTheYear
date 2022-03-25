import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})

// implementamos la destrucción de la página
export class GraficoBarraHorizontalComponent implements OnDestroy {

  // creamos el llamado a la BD para "dibujar" el gráfico (ver HTML inicio.component.html)
  @Input() results: any[] = [];


  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  constructor() {


  }

  onSelect(event: any) {
    console.log(event);
  }

  // llamamos al método de destrucción para evitar que siga ejecutandose el intervalo (que obtiene valores random)
  ngOnDestroy(): void {
    
  }
}
