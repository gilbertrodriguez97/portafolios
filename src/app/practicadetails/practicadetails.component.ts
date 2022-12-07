import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentService } from '../services/document.service';




declare var $: any;

@Component({
  selector: 'app-practicadetails',
  templateUrl: './practicadetails.component.html',
  styleUrls: ['./practicadetails.component.css']
})
export class PracticadetailsComponent implements OnInit {

  id: string;
  nombre: string;
  descripcion: string;
  tecnologias: string[];
  anio: number;
  terminado: string;
  imagen: string;
  url: string;
  loader: boolean;
  constructor(private route: ActivatedRoute, private practService: DocumentService) {

    this.id = "";
    this.nombre="";
    this.descripcion="";
    this.tecnologias=[];
    this.anio=0;
    this.terminado="";
    this.imagen = "";
    this.url = "";
    this.loader = true;
   }

  ngOnInit(): void {

      $('.materialboxed').materialbox();

      const routeParams = this.route.snapshot.paramMap;
      const IdFromRoute = String(routeParams.get('id'));
     this.practService.getPractica(IdFromRoute).subscribe(practica => {
      
            this.nombre = practica.nombre;
            this.descripcion = practica.descripcion;
            this.tecnologias = practica.tecnologias;
            this.anio = practica.anio;
            if (practica.terminado == false) {
              this.terminado = "En desarrollo";
            } else {
              this.terminado = "Terminado";
            }
            this.imagen = practica.imagen;
            this.url = practica.url;
            if (!practica) {
              
            } else {
              this.loader = false;
            }
          });
     

    
  }

}
