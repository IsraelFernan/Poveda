import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngresoComponent } from './Components/ingreso/ingreso.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { ComprasComponent } from './Components/compras/compras.component';

@NgModule({
  declarations: [
    AppComponent,
    IngresoComponent,
    RegistroComponent,
    ComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
