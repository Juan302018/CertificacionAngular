import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CalificacionEdicionComponent } from './pages/calificacion/calificacion-edicion/calificacion-edicion.component';
import { CalificacionComponent } from './pages/calificacion/calificacion.component';
import { CategoriaEdicionComponent } from './pages/categoria/categoria-edicion/categoria-edicion.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { CiudadEdicionComponent } from './pages/ciudad/ciudad-edicion/ciudad-edicion.component';
import { CiudadComponent } from './pages/ciudad/ciudad.component';
import { ComunaEdicionComponent } from './pages/comuna/comuna-edicion/comuna-edicion.component';
import { ComunaComponent } from './pages/comuna/comuna.component';
import { EmpresaEdicionComponent } from './pages/empresa/empresa-edicion/empresa-edicion.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import { ProductoServicioComponent } from './pages/producto-servicio/producto-servicio.component';
import { ProductoServicioEdicionComponent } from './pages/productoServicio/producto-servicio-edicion/producto-servicio-edicion.component';


const routes: Routes = [

  {
    path: 'calificacion', component: CalificacionComponent, children: [
      { path: 'nuevo', component: CalificacionEdicionComponent },
      { path: 'edicion/:id', component: CalificacionEdicionComponent }
    ]
  },

  {
    path: 'categoria', component: CategoriaComponent, children: [
      { path: 'nuevo', component: CategoriaEdicionComponent },
      { path: 'edicion/:id', component: CategoriaEdicionComponent }
    ]
  },

  {
    path: 'ciudad', component: CiudadComponent, children: [
      { path: 'nuevo', component: CiudadEdicionComponent },
      { path: 'edicion/:id', component: CiudadEdicionComponent }
    ]
  },

  {
    path: 'comuna', component: ComunaComponent, children: [
      { path: 'nuevo', component: ComunaEdicionComponent },
      { path: 'edicion/:id', component: ComunaEdicionComponent }
    ]
  },

  {
    path: 'empresa', component: EmpresaComponent, children: [
      { path: 'nuevo', component: EmpresaEdicionComponent },
      { path: 'edicion/:id', component: EmpresaEdicionComponent }
    ]
  },

  {
    path: 'productoservicio', component: ProductoServicioComponent, children: [
      { path: 'nuevo', component: ProductoServicioEdicionComponent },
      { path: 'edicion/:id', component: ProductoServicioEdicionComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
