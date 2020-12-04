import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FNewComponent } from './f-new/f-new.component';

const routes: Routes = [
  {path: ':newId', component: FNewComponent},
  {path: '**', redirectTo: ':newId'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }