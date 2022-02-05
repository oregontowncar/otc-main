import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurChauffeurRoutingModule } from './our-chauffeur-routing.module';
import { OurChauffeurComponent } from './our-chauffeur.component';


@NgModule({
  declarations: [
    OurChauffeurComponent
  ],
  imports: [
    CommonModule,
    OurChauffeurRoutingModule
  ]
})
export class OurChauffeurModule { }
