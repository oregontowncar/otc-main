import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurServicesRoutingModule } from './our-services-routing.module';
import { OurServicesComponent } from './our-services.component';
import { MainServicesComponent } from './main-services/main-services.component';
import { AirportTransferComponent } from './airport-transfer/airport-transfer.component';
import { BusinessMeetingsComponent } from './business-meetings/business-meetings.component';
import { TourComponent } from './tour/tour.component';
import { WeddingTransferComponent } from './wedding-transfer/wedding-transfer.component';


@NgModule({
  declarations: [
    OurServicesComponent,
    MainServicesComponent,
    AirportTransferComponent,
    BusinessMeetingsComponent,
    TourComponent,
    WeddingTransferComponent
  ],
  imports: [
    CommonModule,
    OurServicesRoutingModule
  ]
})
export class OurServicesModule { }
