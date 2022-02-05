import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import { PresidentLetterComponent } from './president-letter/president-letter.component';
import { MainAboutComponent } from './main-about/main-about.component';


@NgModule({
  declarations: [
    AboutUsComponent,
    PresidentLetterComponent,
    MainAboutComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ]
})
export class AboutUsModule { }
