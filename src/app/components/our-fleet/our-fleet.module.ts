import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurFleetRoutingModule } from './our-fleet-routing.module';
import { OurFleetComponent } from './our-fleet.component';


@NgModule({
  declarations: [
    OurFleetComponent
  ],
  imports: [
    CommonModule,
    OurFleetRoutingModule
  ]
})
export class OurFleetModule { }
