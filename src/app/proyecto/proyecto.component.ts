import { Component, OnInit } from '@angular/core';
import { ProyectosInterface } from '../interface/proyectos.interface';
import { CollectionService } from '../services/collection.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  arrayProyectos: ProyectosInterface[];
  constructor(private proyServices: CollectionService) { 
    this.arrayProyectos=[];
  }

  ngOnInit(): void {
    this.proyServices.getProyectos().subscribe(
      proyecto=>{ this.arrayProyectos = proyecto }
    );
  }

}
