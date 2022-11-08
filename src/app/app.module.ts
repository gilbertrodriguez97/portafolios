import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faSquare, faCheckSquare, faServer, faLaptopCode} from '@fortawesome/free-solid-svg-icons';
import {
  faSquare as farSquare,
  faCheckSquare as farCheckSquare,
  faEnvelope as farEnvelope,
} from '@fortawesome/free-regular-svg-icons';
import {
  faStackOverflow,
  faGithub,
  faMedium,
  faLinkedinIn,
  faFacebook,
  faPhp,
  faLaravel,
  faCss3Alt,
  faAngular,
  faLinux,
} from '@fortawesome/free-brands-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { HomeComponent } from './home/home.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { ProyectodetailsComponent } from './proyectodetails/proyectodetails.component';
import { PracticasComponent } from './practicas/practicas.component';
import { PracticadetailsComponent } from './practicadetails/practicadetails.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';


@NgModule({
  declarations: [
    AppComponent,
    ExperienciaComponent,
    HomeComponent,
    PortafolioComponent,
    ProyectoComponent,
    ProyectodetailsComponent,
    PracticasComponent,
    PracticadetailsComponent,
    TecnologiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faSquare,
      faCheckSquare,
      farSquare,
      farCheckSquare,
      faStackOverflow,
      faGithub,
      faMedium,
      farEnvelope,
      faLinkedinIn,
      faServer,
      faLaptopCode,
      faFacebook,
      faPhp,
      faLaravel,
      faCss3Alt,
      faAngular,
      faLinux,
    );
  }
 }
