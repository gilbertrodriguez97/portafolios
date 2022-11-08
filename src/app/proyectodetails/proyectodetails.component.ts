import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { find, map } from 'rxjs';
import { ProyectosInterface } from '../interface/proyectos.interface';
import { DbService } from '../services/db.service';

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
  constructor(private proyService: DbService, private route: ActivatedRoute) { 
    this.arrayProyecto = [];
    this.terminado = "";
    this.nombre = "";
    this.descripcion = "";
    this.tecnologias=[];
    this.anio=0;
    this.contribucion="";
    this.imagen="";
  }
   
  ngOnInit(): void {

    $('.materialboxed').materialbox();

    const routeParams = this.route.snapshot.paramMap;
    const IdFromRoute = String(routeParams.get('id'));

    this.proyService.getProyectos().subscribe(proyectos=>{
      this.arrayProyecto = proyectos;
      this.arrayProyecto.find(proyecto => proyecto.id === IdFromRoute);

      this.nombre = this.arrayProyecto[0].nombre;
     
      if (this.arrayProyecto[0].terminado==true) {
        this.terminado = "Terminado";
      } else {
        this.terminado = "En desarrollo";
      }
      this.descripcion = this.arrayProyecto[0].descripcion;
      this.tecnologias = this.arrayProyecto[0].tecnologias;
      this.anio = this.arrayProyecto[0].anio;
      if (this.arrayProyecto[0].contribucion == true) {
        this.contribucion = "Contribución";
      } else {
        this.contribucion = "Proyecto individual";
      }
      this.imagen = this.arrayProyecto[0].imagen;

    
    });
    
  }

}
