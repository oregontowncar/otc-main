import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/homepgae/homepgae.module').then(m => m.HomepgaeModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./components/homepgae/homepgae.module').then(m => m.HomepgaeModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./components/about-us/about-us.module').then(m => m.AboutUsModule)
  },
  {
    path: 'ourfleet',
    loadChildren: () => import('./components/our-fleet/our-fleet.module').then(m => m.OurFleetModule)
  },
  {
    path: 'ourchauffeur',
    loadChildren: () => import('./components/our-chauffeur/our-chauffeur.module').then(m => m.OurChauffeurModule)
  },
  {
    path: 'employment',
    loadChildren: () => import('./components/employment/employment.module').then(m => m.EmploymentModule)
  },
  {
    path: 'ourservices',
    loadChildren: () => import('./components/our-services/our-services.module').then(m => m.OurServicesModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./components/blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'privacypolicy',
    loadChildren: () => import('./components/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule)
  },
  {
    path: 'policyterms',
    loadChildren: () => import('./components/policies-terms/policies-terms.module').then(m => m.PoliciesTermsModule)
  },
  {
    path: 'globalnetwork',
    loadChildren: () => import('./components/global-chauffeur-network/global-chauffeur-network.module').then(m => m.GlobalChauffeurNetworkModule)
  },
  {
    path: 'contactus',
    loadChildren: () => import('./components/contact-us/contact-us.module').then(m => m.ContactUsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
