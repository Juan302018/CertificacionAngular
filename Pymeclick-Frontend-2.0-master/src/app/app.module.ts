import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalificacionComponent } from './pages/calificacion/calificacion.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { CiudadComponent } from './pages/ciudad/ciudad.component';
import { ComunaComponent } from './pages/comuna/comuna.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import { ProductoServicioComponent } from './pages/producto-servicio/producto-servicio.component';
import { CalificacionEdicionComponent } from './pages/calificacion/calificacion-edicion/calificacion-edicion.component';
import { CategoriaEdicionComponent } from './pages/categoria/categoria-edicion/categoria-edicion.component';
import { CiudadEdicionComponent } from './pages/ciudad/ciudad-edicion/ciudad-edicion.component';
import { ComunaEdicionComponent } from './pages/comuna/comuna-edicion/comuna-edicion.component';
import { EmpresaEdicionComponent } from './pages/empresa/empresa-edicion/empresa-edicion.component';
import { ProductoServicioEdicionComponent } from './pages/productoServicio/producto-servicio-edicion/producto-servicio-edicion.component';

@NgModule({
  declarations: [
    AppComponent,
    CalificacionComponent,
    CategoriaComponent,
    CiudadComponent,
    ComunaComponent,
    EmpresaComponent,
    ProductoServicioComponent,
    CalificacionEdicionComponent,
    CategoriaEdicionComponent,
    CiudadEdicionComponent,
    ComunaEdicionComponent,
    EmpresaEdicionComponent,
    ProductoServicioEdicionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
