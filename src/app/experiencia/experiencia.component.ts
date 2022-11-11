import { Component, OnInit } from '@angular/core';
import { ExperienciaInterface } from '../interface/experiencia.interface';
import { CollectionService } from '../services/collection.service';

declare var $: any;

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
ArrayExperiencia: ExperienciaInterface[]; //Inicializando los datos experados de la interfacce de Exp.

  constructor(private expServices: CollectionService) {
    this.ArrayExperiencia = [];
   }

  ngOnInit(): void {
      $('.collapsible').collapsible({'accordion':false});
   
    this.expServices.getExperiencia().subscribe(experiencia => {
        this.ArrayExperiencia = experiencia;
    });
  }

}
