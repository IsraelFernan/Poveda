import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  validador: boolean=false;
  cedula: String = '';
  mayusculas: any = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  minusculas: any = 'abcdefghijklmnopqrstuvwxyz';
  caracteres: any  = '@#$%&';
  nombre: string = '';
  apellido: string = '';
  clave: string = '';
  constructor() { }

  validacionClave(){
    var i =0;
    while(this.clave.length > i){
      var j=0;
      var k=0;
      var l=0;
      var m=0;
      var n=0;
      var c=0;
      while(this.mayusculas.length > j){
        if(this.clave[i] == this.mayusculas[j]){
          m++;
        }
        j++;
      }
      while(this.minusculas.length > k){
        if(this.clave[i] == this.minusculas[k]){
          n++;
        }
        k++;
      }
      while(this.caracteres.length > l){
        if(this.clave[i] == this.caracteres[l]){
          c++;
        }
        l++;
      }
      if(m <= 2 || n <= 2 || c <= 2){
        alert('Por favor reingrese la clave.')
      }
      i++;
    }
  }

  validadorDeCedula(cedula: String) {
    let cedulaCorrecta = false;

    if (cedula.length == 10) {
      let tercerDigito = parseInt(cedula.substring(2, 3));
      if (tercerDigito < 6) {

        // El ultimo digito se lo considera dígito verificador
        let coefValCedula = [2, 1, 2, 1, 2, 1, 2, 1, 2];
        let verificador = parseInt(cedula.substring(9, 10));
        let suma: number = 0;
        let digito: number = 0;
        for (let i = 0; i < (cedula.length - 1); i++) {
          digito = parseInt(cedula.substring(i, i + 1)) * coefValCedula[i];
          suma += ((parseInt((digito % 10) + '') + (parseInt((digito / 10) + ''))));
          //      console.log(suma+" suma"+coefValCedula[i]); 
        }

        suma = Math.round(suma);

        //  console.log(verificador);
        //  console.log(suma);
        //  console.log(digito);

        if ((Math.round(suma % 10) == 0) && (Math.round(suma % 10) == verificador)) {
          cedulaCorrecta = true;
        } else if ((10 - (Math.round(suma % 10))) == verificador) {
          cedulaCorrecta = true;
        } else {
          cedulaCorrecta = false;
        }
      } else {
        cedulaCorrecta = false;
      }
    } else {
      cedulaCorrecta = false;
    }
    this.validador = cedulaCorrecta;
  }

  ngOnInit(): void {
  }

}
