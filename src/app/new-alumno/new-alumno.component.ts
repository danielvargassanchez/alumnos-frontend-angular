import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlumnosServiceService } from '../services/alumnos-service.service';
import { Alumno } from '../models/alumno';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-alumno',
  templateUrl: './new-alumno.component.html',
  styleUrls: ['./new-alumno.component.scss']
})
export class NewAlumnoComponent implements OnInit {

  form:FormGroup;
  alumno:Alumno=new Alumno();
  creado:boolean=false;
  errorCreado:boolean=false;
  esNuevo:boolean=false;
  titulo:string="";
  mensaje:string="";

  constructor(private fbForm:FormBuilder, private Service:AlumnosServiceService,private RutaActiva:ActivatedRoute) { 

    this.form=this.fbForm.group({
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      num_control:['',Validators.required],
      carrera:['',Validators.required]
    });
  }

  ngOnInit(): void {
    this.esNuevo=JSON.parse(this.RutaActiva.snapshot.params.new);
    this.titulo=this.esNuevo? 'New Alumno' : 'Edit Alumno';

    if(!this.esNuevo){
      this.alumno=this.Service.Alumno;
      this.form.setValue({
        nombre:this.alumno.nombre,
        apellido:this.alumno.apellido,
        num_control:this.alumno.num_control,
        carrera:this.alumno.carrera
      });
    }
  }

  save(){
    this.alumno= this.form.value as Alumno;
    this.Service.setAlumno(this.alumno).subscribe((respuesta)=>{
      if(respuesta==201){
        this.mensaje="the alumno has been created"
        this.creado=true; 
        setTimeout(()=>{
          this.creado=false;
        },3000)

        this.form.reset();
      }else{
        this.errorCreado=true; 
        setTimeout(()=>{
          this.errorCreado=false;
        },3000)
      }

    });
  }

  edit(){
    this.alumno.nombre=this.form.value.nombre;
    this.alumno.apellido=this.form.value.apellido;
    this.alumno.num_control=this.form.value.num_control;
    this.alumno.carrera=this.form.value.carrera;

    this.Service.updateAlumno(this.alumno).subscribe((respuesta)=>{
      if(respuesta==200){
        this.mensaje="the alumno has been edited"
        this.creado=true;
        setTimeout(()=>{
          this.creado=false;
        },3000)
        this.form.reset();
      }else{

      }
    });
  }
}
