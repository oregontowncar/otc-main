import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmploymentRoutingModule } from './employment-routing.module';
import { EmploymentComponent } from './employment.component';


@NgModule({
  declarations: [
    EmploymentComponent
  ],
  imports: [
    CommonModule,
    EmploymentRoutingModule
  ]
})
export class EmploymentModule { }
