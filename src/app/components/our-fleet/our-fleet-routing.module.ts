import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OurFleetComponent } from './our-fleet.component';

const routes: Routes = [
  { path: '', component: OurFleetComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurFleetRoutingModule { }
