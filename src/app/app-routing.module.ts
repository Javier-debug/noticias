import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // Módulo de autenticación (página de login y registro)
  // En este caso se estan cargando los módulso por Lazy load
  // Módulo de con las características de la aplicación
  {path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },
  // Comodin en caso de que no existan las rutas
  {path: '**', redirectTo: 'home'}
  // {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
