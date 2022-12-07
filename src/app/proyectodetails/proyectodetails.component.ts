import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { find, map } from 'rxjs';
import { ProyectosInterface } from '../interface/proyectos.interface';
import { DocumentService } from '../services/document.service';

declare var $: any;

@Component({
  selector: 'app-proyectodetails',
  templateUrl: './proyectodetails.component.html',
  styleUrls: ['./proyectodetails.component.css']
})
export class ProyectodetailsComponent implements OnInit {

  arrayProyecto: ProyectosInterface[];
  terminado: string;
  nombre: string;
  descripcion: string;
  tecnologias: string[];
  anio: number;
  contribucion: string; 
  imagen:string;
  url:string;
  loader: boolean;
  constructor(private route: ActivatedRoute, private practService: DocumentService) { 
    this.arrayProyecto = [];
    this.terminado = "";
    this.nombre = "";
    this.descripcion = "";
    this.tecnologias=[];
    this.anio=0;
    this.contribucion="";
    this.imagen="";
    this.url="";
    this.loader = true;
  }
   
  ngOnInit(): void {

    $('.materialboxed').materialbox();

    const routeParams = this.route.snapshot.paramMap;
    const IdFromRoute = String(routeParams.get('id'));
    this.practService.getProyecto (IdFromRoute).subscribe(proyecto => {

      this.nombre = proyecto.nombre;
      this.descripcion = proyecto.descripcion;
      this.tecnologias = proyecto.tecnologias;
      this.anio = proyecto.anio;
      if (proyecto.terminado == false) {
        this.terminado = "En desarrollo";
      } else {
        this.terminado = "Terminado";
      }
      this.imagen = proyecto.imagen;
      this.url = proyecto.url;
      if (!proyecto) {
       
      } else {
        this.loader = false;
      }
    });

    
  }

}
