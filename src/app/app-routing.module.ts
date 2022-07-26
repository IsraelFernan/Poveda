import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresoComponent } from './Components/ingreso/ingreso.component';
import { RegistroComponent } from './Components/registro/registro.component';

const routes: Routes = [
  {path:'', component:IngresoComponent},
  {path:'Registro',component:RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
