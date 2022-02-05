import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoliciesTermsRoutingModule } from './policies-terms-routing.module';
import { PoliciesTermsComponent } from './policies-terms.component';


@NgModule({
  declarations: [
    PoliciesTermsComponent
  ],
  imports: [
    CommonModule,
    PoliciesTermsRoutingModule
  ]
})
export class PoliciesTermsModule { }
