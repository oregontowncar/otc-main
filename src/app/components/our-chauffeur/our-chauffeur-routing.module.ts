import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OurChauffeurComponent } from './our-chauffeur.component';

const routes: Routes = [
  { path: '', component: OurChauffeurComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurChauffeurRoutingModule { }
