import { Injectable } from '@angular/core';
import { Alumno } from '../models/alumno';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnosServiceService {

  Alumno:Alumno= new Alumno;
  Alumnos:Array<Alumno>= new Array<Alumno>();
  ruta:string= "http://127.0.0.1:8000/api";
  constructor(private http:HttpClient) {

  }

  getAlumnos():Observable<Alumno[]>{
    return this.http.get<Alumno[]>(`${this.ruta}/alumnos`);
  }

  setAlumno(alumno:Alumno):Observable<number>{
    return this.http.post<number>(`${this.ruta}/alumnos`,alumno);
  }

  updateAlumno(alumno:Alumno):Observable<number>{
    return this.http.put<number>(`${this.ruta}/update`,alumno);
  }

  delete(id:number):Observable<number>{
    return this.http.get<number>(`${this.ruta}/delete/${id}`);
  }

}
