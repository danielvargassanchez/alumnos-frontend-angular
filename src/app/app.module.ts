import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllAlumnosComponent } from './all-alumnos/all-alumnos.component';
import { NewAlumnoComponent } from './new-alumno/new-alumno.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { AlumnosServiceService } from './services/alumnos-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AllAlumnosComponent,
    NewAlumnoComponent,
    EncabezadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AlumnosServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
