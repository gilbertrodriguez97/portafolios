import { Component, OnInit } from '@angular/core';
import { ProyectosInterface } from '../interface/proyectos.interface';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {
  ArrayProyectos: ProyectosInterface[];

  constructor(private proyServices: DbService) { 
    this.ArrayProyectos = [];
  }
  
  ngOnInit(): void {
    this.proyServices.getProyectos().subscribe(
      proyectos => {
        this.ArrayProyectos = proyectos;
      });
   
  }

}
