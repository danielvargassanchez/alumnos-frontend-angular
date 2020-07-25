import { Component, OnInit } from '@angular/core';
import { Alumno } from '../models/alumno';
import { AlumnosServiceService } from '../services/alumnos-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-alumnos',
  templateUrl: './all-alumnos.component.html',
  styleUrls: ['./all-alumnos.component.scss']
})
export class AllAlumnosComponent implements OnInit {

  alumno: Alumno = new Alumno();
  alumnos: Array<Alumno> = new Array<Alumno>();

  constructor(private Servicio: AlumnosServiceService,
    private Ruta: Router) {
    this.Servicio.getAlumnos().subscribe((alumnosJSON) => {
      this.alumnos = alumnosJSON;
    })
  }

  ngOnInit(): void {
  }

  edit(alumno: Alumno) {
    this.Servicio.Alumno = alumno;
    this.Ruta.navigateByUrl('new-Alumno/false');
  }

  eliminar(alumno: Alumno) {
    this.Servicio.delete(alumno.id).subscribe((resp) => {
      if (resp == 200) {
        this.alumnos.splice(this.Servicio.Alumnos.indexOf(alumno), 1);
      }
    })
  }
}
