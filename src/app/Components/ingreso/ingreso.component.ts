import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/Services/cliente.service';
import { Cliente } from 'src/app/Models/Cliente';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  email: string = '';
  clave: string='';
  mayusculas: any = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  minusculas: any = 'abcdefghijklmnopqrstuvwxyz';
  caracteres: any = '@#$%&';
  numeros: any='1234567890';
  
  constructor(private ServiciosClientes: ClienteService) { 
  }

  validarClave() {
    var i = 0;
    var m = 0;
    var n = 0;
    var c = 0;
    var numeros=0;
    var res = true;
    while (this.clave.length > i) {
      var j = 0;
      var k = 0;
      var l = 0;
      var o = 0;
      while (this.mayusculas.length > j) {
        if (this.clave[i] == this.mayusculas[j]) {
          m++;
        }
        j++;
      }
      while (this.minusculas.length > k) {
        if (this.clave[i] == this.minusculas[k]) {
          n++;
        }
        k++;
      }
      while (this.caracteres.length > l) {
        if (this.clave[i] == this.caracteres[l]) {
          c++;
        }
        l++;
      }
      while (this.numeros.length > o) {
        if (this.clave[i] == this.numeros[o]) {
          numeros++;
        }
        o++;
      }
      
      i++;
    }
    if (m < 2 || n < 2 || c == 0 || numeros == 0) {
      res = false;
      alert('La clave no cumple con las especificaciones.');
    }
    this.ServiciosClientes.listarClientes().subscribe(res=>{
      var vectorClientes = <any>res;
      var i=0;
      var j=0;
      while(vectorClientes.length > i){
        if(vectorClientes[i]['email']==this.email){
          j++;
        }
        i++;
      }
      if(j==0){
        alert('Usuario no encontrado.');
      }
    })
  }

  ngOnInit(): void {
  }

}
