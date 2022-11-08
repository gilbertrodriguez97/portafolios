import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faTurkishLiraSign } from '@fortawesome/free-solid-svg-icons';
import { PracticasInterface } from '../interface/practicas.interface';
import { DbService } from '../services/db.service';

declare var $: any;

@Component({
  selector: 'app-practicadetails',
  templateUrl: './practicadetails.component.html',
  styleUrls: ['./practicadetails.component.css']
})
export class PracticadetailsComponent implements OnInit {

  arrayPractica: PracticasInterface[];
  nombre: string;
  descripcion: string;
  tecnologias: string[];
  anio: number;
  terminado: string;
  imagen: string;
  url: string;
  constructor(private practService: DbService, private route: ActivatedRoute) {
    this.arrayPractica = [];
    this.nombre="";
    this.descripcion="";
    this.tecnologias=[];
    this.anio=0;
    this.terminado="";
    this.imagen = "";
    this.url = "";
   }

  ngOnInit(): void {

    $('.materialboxed').materialbox();

    const routeParams = this.route.snapshot.paramMap;
    const IdFromRoute = String(routeParams.get('id'));
      this.practService.getPracticas().subscribe(practicas => {
      this.arrayPractica = practicas;
      this.arrayPractica.find(practica => practica.id == IdFromRoute);
      this.nombre = this.arrayPractica[0].nombre;
      this.descripcion = this.arrayPractica[0].descripcion;
      this.tecnologias = this.arrayPractica[0].tecnologias;
      this.anio = this.arrayPractica[0].anio;
      if (this.arrayPractica[0].terminado == true) {
        this.terminado = "Terminado";
      } else {
        this.terminado = "En desarrollo";
      }
      this.imagen = this.arrayPractica[0].imagen;
      this.url = this.arrayPractica[0].url;
    })
  }

}
