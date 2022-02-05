import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OurServicesComponent } from './our-services.component';
import { MainServicesComponent } from './main-services/main-services.component';
import { AirportTransferComponent } from './airport-transfer/airport-transfer.component';
import { BusinessMeetingsComponent } from './business-meetings/business-meetings.component';
import { TourComponent } from './tour/tour.component';
import { WeddingTransferComponent } from './wedding-transfer/wedding-transfer.component';

const routes: Routes = [
  {
    path: '',
    component: OurServicesComponent,
    children: [
      {
        path: '',
        component: MainServicesComponent
      },
      {
        path: 'mainservices',
        component: MainServicesComponent
      },
      {
        path: 'airporttransfer',
        component: AirportTransferComponent
      },
      {
        path: 'businessmeetings',
        component: BusinessMeetingsComponent
      },
      {
        path: 'tour',
        component: TourComponent
      },
      {
        path: 'weddingtransfer',
        component: WeddingTransferComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurServicesRoutingModule { }
