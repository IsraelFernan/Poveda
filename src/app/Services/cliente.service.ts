import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Cliente } from '../Models/Cliente';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {


  url: string = 'http://localhost:61154/api/Clientes';
  constructor(private http: HttpClient) { }

  listarClientes(){
    return this.http.get(this.url);
  }

  agregarDetalle(datos:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.url,datos);
  }
}
