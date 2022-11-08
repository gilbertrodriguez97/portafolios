import { Component, OnInit } from '@angular/core';
import { PracticasInterface } from '../interface/practicas.interface';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-practicas',
  templateUrl: './practicas.component.html',
  styleUrls: ['./practicas.component.css']
})
export class PracticasComponent implements OnInit {

  arrayPracticas: PracticasInterface[];
  constructor(private practServices: DbService) { 
    this.arrayPracticas=[];
  }

  ngOnInit(): void {
    this.practServices.getPracticas().subscribe(practicas => {
      console.log(practicas);
      this.arrayPracticas = practicas;
    })
  }

}
