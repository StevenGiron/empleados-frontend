import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormGroup, FormControl, } from '@angular/forms';

import { MessageService } from 'primeng/api';

import { Empleado } from '../../shared/model/empleado';
import { EmpleadoService } from '../../shared/empleado.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})

export class CrearComponent implements OnInit {

  empleadoForm!: FormGroup;

  paises = [
    {label: 'Colombia', value: 'Colombia'},
    {label: 'Estados Unidos ', value: 'Estados Unidos'}
  ];
  
  tipoIdentificacion = [
    {label: 'Cédula de Ciudadanía', value: 'Cédula de Ciudadanía'},
    {label: 'Cédula de Extranjería', value: 'Cédula de Extranjería'},
    {label: 'Pasaporte', value: 'Pasaporte'},
    {label: 'Permiso Especial', value: 'Permiso Especial'}
  ];
  
  areas = [
    {label: 'Administración', value: 'Administración'},
    {label: 'Financiera', value: 'Financiera'},
    {label: 'Compras', value: 'Compras'},
    {label: 'Infraestructura', value: 'Infraestructura'},
    {label: 'Operación', value: 'Operación'},
    {label: 'Talento Humano', value: 'Talento Humano'},
    {label: 'Servicios Varios', value: 'Servicios Varios'}
  ]

  empleado: Empleado ={
    area: '',
    correoElectronico:'',
    estado:'',
    fechaHoraRegistro: '',
    fechaIngreso: '',
    numeroIdentificacion: '',
    otrosNombres: '',
    paisEmpleo: '',
    primerApellido: '',
    primerNombre: '',
    segundoApellido: '',
    tipoIdentificacion: ''
  }

  id: number;
  
  constructor( private empleadoService: EmpleadoService,
               private router: Router,
               private route: ActivatedRoute,
               private datepipe: DatePipe,
               private messsageService: MessageService
               ){
                this.id = Number(this.route.snapshot.paramMap.get("id"));
                if(this.id)this.obtenerEmpleadoId(this.id);
                }
  
  ngOnInit(): void { 

    this.construirFormularioEmpleado();

  }

  private construirFormularioEmpleado(){
    this.empleadoForm = new FormGroup({
      primerNombre: new FormControl(''),
      otrosNombres: new FormControl(''),
      primerApellido: new FormControl(''),
      segundoApellido: new FormControl(''),
      tipoIdentificacion: new FormControl(''),
      numeroIdentificacion: new FormControl(''),
      paisEmpleo: new FormControl(''),
      area: new FormControl(''),
      fechaIngreso: new FormControl('')
    })
  }
  
    guardar(){
      this.empleadoForm.value.primerNombre = this.empleadoForm.value.primerNombre,
      this.empleadoForm.value.otrosNombres = this.empleadoForm.value.otrosNombres,
      this.empleadoForm.value.primerApellido = this.empleadoForm.value.primerApellido,
      this.empleadoForm.value.segundoApellido = this.empleadoForm.value.segundoApellido,
      this.empleadoForm.value.tipoIdentificacion = this.empleadoForm.value.tipoIdentificacion,
      this.empleadoForm.value.numeroIdentificacion = this.empleadoForm.value.numeroIdentificacion,
      this.empleadoForm.value.paisEmpleo = this.empleadoForm.value.paisEmpleo,
      this.empleadoForm.value.area = this.empleadoForm.value.area,
      this.empleadoForm.value.fechaIngreso = this.empleadoForm.value.fechaIngreso
      
      if (this.id){
        this.empleadoService.actualizarEmpleado(this.empleadoForm.value,this.id)
        .subscribe(()=>{
          this.messsageService.add({
            key: 'tsm',
            severity: 'success',
            summary: 'Hurra!',
            detail:'Empleado actulizado correctamente correctamente'
            })
          setTimeout(()=>{
            this.router.navigate(['/empleado/listado'])
          }, 2000)
        })
      }else{
        this.empleadoService.crearEmpleado(this.empleadoForm.value)
        .subscribe(()=>{
          this.messsageService.add({
            key: 'tsm',
            severity: 'success',
            summary: 'Hurra!',
            detail:'Empleado creado correctamente'
          })
          setTimeout(()=>{
            this.router.navigate(['/empleado/listado'])
          }, 2000)
        },
  
        ({error})=>{
          const {msg} = error
          
          this.messsageService.add({
            key: 'tsm',
            severity: 'error',
            summary: 'Error',
            detail:msg
          })
        }
      )

      }      
      
  }

    obtenerEmpleadoId(id:number){
      this.empleadoService.obtenerEmpleado(id)
      .subscribe((empleado)=>{
        this.empleado=empleado;

        let fecha = this.datepipe.transform(this.empleado.fechaIngreso, 'yyyy-MM-dd');
        
        this.empleadoForm.patchValue({
          primerNombre:this.empleado.primerNombre,
          otrosNombres:this.empleado.otrosNombres,
          primerApellido:this.empleado.primerApellido,
          segundoApellido:this.empleado.segundoApellido,
          tipoIdentificacion:this.empleado.tipoIdentificacion,
          numeroIdentificacion:this.empleado.numeroIdentificacion,
          paisEmpleo:this.empleado.paisEmpleo,
          area:this.empleado.area,
          fechaIngreso: fecha
        })
      })
    }
}
