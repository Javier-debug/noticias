import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LListComponent } from './l-list/l-list.component';
import { LViewComponent } from './l-view/l-view.component';
import { LTemplateComponent } from './l-template/l-template.component';

const routes: Routes = [
  {path: 'tpl', component: LTemplateComponent, children: [
    {path: 'list', component: LListComponent},
    {path: ':newId', component: LViewComponent},
    {path: '**', redirectTo: 'list'}
]},
  {path: '**', redirectTo: 'tpl'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }