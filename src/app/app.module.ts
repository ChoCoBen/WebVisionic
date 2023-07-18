import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResearchComponent } from './page/research/research.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './page/home/home.component';
import { PublicationsComponent } from './page/publications/publications.component';
import { TeamComponent } from './page/team/team.component';
import { ContactComponent } from './page/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MemberComponent } from './page/team/member/member.component';
import { ProjectComponent } from './page/research/project/project.component';
import { PublicationComponent } from './page/publications/publication/publication.component';
import { ImageDisplayerComponent } from './page/home/image-displayer/image-displayer.component';
import { SliderComponent } from './page/research/project/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    ResearchComponent,
    HeaderComponent,
    HomeComponent,
    PublicationsComponent,
    TeamComponent,
    ContactComponent,
    MemberComponent,
    ProjectComponent,
    PublicationComponent,
    ImageDisplayerComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
