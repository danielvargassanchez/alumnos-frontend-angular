import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllAlumnosComponent } from './all-alumnos/all-alumnos.component';
import { NewAlumnoComponent } from './new-alumno/new-alumno.component';


const routes: Routes = [
  {
    path:'', component: AllAlumnosComponent
  },{
    path:'new-Alumno/:new', component: NewAlumnoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
