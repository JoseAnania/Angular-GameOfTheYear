/* este Módulo se crea para importar los distintos componentes y luego importar sólo este Módulo y no uno x uno en el app.module.ts */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { GraficoBarraHorizontalComponent } from './grafico-barra-horizontal/grafico-barra-horizontal.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    NavbarComponent,
    GraficoBarraHorizontalComponent
  ],
  // exportamos para usar los componentes fuera de este módulo
  exports: [
    NavbarComponent,
    GraficoBarraHorizontalComponent,
  ],
  imports: [
    CommonModule,
    // importamos el Módulo Router para poder navegar entre las páginas de la app (inicio y goty)
    RouterModule,
    // importamos los Módulos del "ngx-charts" para utilizar los gráficos según documentación
    BrowserAnimationsModule,
    NgxChartsModule,
  ]
})

export class ComponentsModule { }
