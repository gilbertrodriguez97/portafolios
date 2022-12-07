import { Component, OnInit } from '@angular/core';
import { PracticasInterface } from '../interface/practicas.interface';
import { CollectionService } from '../services/collection.service';

@Component({
  selector: 'app-practicas',
  templateUrl: './practicas.component.html',
  styleUrls: ['./practicas.component.css']
})
export class PracticasComponent implements OnInit {

  arrayPracticas: PracticasInterface[];
  loader: boolean;
  constructor(private practServices: CollectionService) { 
    this.arrayPracticas=[];
    this.loader = true;
  }

  ngOnInit(): void {
    this.practServices.getPracticas().subscribe(practicas => {
      this.arrayPracticas = practicas;
      if (!this.arrayPracticas) {
        
      } else {
        this.loader = false;
      }
    })
  }

}
