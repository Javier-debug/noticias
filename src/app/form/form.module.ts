import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FNewComponent } from './f-new/f-new.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [FNewComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormModule { }