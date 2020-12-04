import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeTemplateComponent } from './home-template/home-template.component';

const routes: Routes = [
  {
    path: '',
    component: HomeTemplateComponent,
    children: [
      {
        path: 'list',
        loadChildren: () => import('../list/list.module').then((m) => m.ListModule),
        // canLoad: [LoadModuleGuard]
      },
      {
        path: 'form',
        loadChildren: () => import('../form/form.module').then((m) => m.FormModule),
        // canLoad: [LoadModuleGuard]
      },
      {path: '**', redirectTo: 'list'}
    ]
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
