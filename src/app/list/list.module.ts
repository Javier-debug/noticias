import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { LListComponent } from './l-list/l-list.component';
import { LViewComponent } from './l-view/l-view.component';
import { LTemplateComponent } from './l-template/l-template.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [LViewComponent, LListComponent, LTemplateComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ]
})
export class ListModule { }