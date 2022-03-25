import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { GotyComponent } from './pages/goty/goty.component';

// configuramos las rutas de las dos páginas del proyecto (inicio y goty, y una default)
const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'goty', component: GotyComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
