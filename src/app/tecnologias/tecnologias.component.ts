import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.css']
})
export class TecnologiasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.tabs').tabs();
  }

}
