import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  email: string = '';
  clave: string='';
  
  constructor() { }

  
  ngOnInit(): void {
  }

}
