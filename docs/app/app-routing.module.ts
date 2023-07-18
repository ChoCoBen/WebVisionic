import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResearchComponent } from './page/research/research.component';
import { HomeComponent } from './page/home/home.component';
import { PublicationsComponent } from './page/publications/publications.component';
import { TeamComponent } from './page/team/team.component';
import { ContactComponent } from './page/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Research', component: ResearchComponent },
  { path: 'Publications', component: PublicationsComponent },
  { path: 'Team', component: TeamComponent },
  { path: 'Contact', component: ContactComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
