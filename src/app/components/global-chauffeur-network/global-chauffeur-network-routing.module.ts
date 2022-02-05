import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GlobalChauffeurNetworkComponent } from './global-chauffeur-network.component';

const routes: Routes = [
  { path: '', component: GlobalChauffeurNetworkComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobalChauffeurNetworkRoutingModule { }
