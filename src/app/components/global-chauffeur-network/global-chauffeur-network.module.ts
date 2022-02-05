import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalChauffeurNetworkRoutingModule } from './global-chauffeur-network-routing.module';
import { GlobalChauffeurNetworkComponent } from './global-chauffeur-network.component';


@NgModule({
  declarations: [
    GlobalChauffeurNetworkComponent
  ],
  imports: [
    CommonModule,
    GlobalChauffeurNetworkRoutingModule
  ]
})
export class GlobalChauffeurNetworkModule { }
