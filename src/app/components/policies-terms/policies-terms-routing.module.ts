import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PoliciesTermsComponent } from './policies-terms.component';

const routes: Routes = [
  { path: '', component: PoliciesTermsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoliciesTermsRoutingModule { }
