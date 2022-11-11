import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { HomeComponent } from './home/home.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { PracticadetailsComponent } from './practicadetails/practicadetails.component';
import { PracticasComponent } from './practicas/practicas.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { ProyectodetailsComponent } from './proyectodetails/proyectodetails.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo:'home'},
  {path: '', component: HomeComponent, title: "Portafolios - Home"},
  {path: 'experiencia', component: ExperienciaComponent, 'title': "Experiencia"},
  {path: 'portafolios', component: PortafolioComponent, 'title': "Portafolios"},

  {path: 'portafolios/proyectos', component: ProyectoComponent, title: "Todos los proyectos"},
  {path: 'portafolios/proyecto/:id', component: ProyectodetailsComponent, title: "Ver proyecto"},

  {path: 'portafolios/practicas', component: PracticasComponent, title: "Todas las prácticas"},
  {path: 'portafolios/practica/:id', component: PracticadetailsComponent, title: "Ver práctica"},
  
  {path: 'tecnologias', component: TecnologiasComponent, title: "Tecnologías"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
