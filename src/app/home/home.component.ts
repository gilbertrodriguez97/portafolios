import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  public edad: number;
  constructor( ) { 
   this.edad = 0;
  }
  ngOnInit(): void {
      function calcularEdad(dia: number, mes: number, anio:number) {
        var today = new Date();
        var anios = 0;
        //Restamos los años
        anios = today.getFullYear() - anio;
    
        let mes_masuno = today.getMonth() + 1;  //El metodo getMonth devuelve el valor del mes a partir de 0
        if (mes == mes_masuno ) {
          if (today.getDate() < dia ) {
                anios= anios-1;
          }
        } else if (today.getMonth() < mes){
            anios=anios-1;
        } else {}
        return anios;
    }

    this.edad = calcularEdad(15, 11, 1997);
  }

}
