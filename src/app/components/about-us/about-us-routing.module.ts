import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent } from './about-us.component';
import { MainAboutComponent } from './main-about/main-about.component';
import { PresidentLetterComponent } from './president-letter/president-letter.component';

const routes: Routes = [
  {
    path: '',
    component: AboutUsComponent,
    children: [
      {
        path: '',
        component: MainAboutComponent
      },
      {
        path: 'mainabout',
        component: MainAboutComponent
      },
      {
        path: 'presidentletter',
        component: PresidentLetterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }
