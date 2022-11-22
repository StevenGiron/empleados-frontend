import { Component, OnInit, ViewChild} from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Observable } from 'rxjs';
import { Empleado } from '../../shared/model/empleado';
import { EmpleadoService } from '../../shared/empleado.service';
import { Table } from 'primeng/table'
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})

export class ListarComponent implements OnInit {

  public empleados:  Empleado[] = [];
  
  @ViewChild('dt') dt: Table | undefined;
  applyFilterGlobal($event:any, stringVal:any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
 
  constructor(private empleadoService: EmpleadoService,
              private confirmationservice: ConfirmationService,
              private messageService: MessageService,
              private router: Router) { }

  ngOnInit(): void {
    this.empleadoService.obtenerEmpleados()
      .subscribe((empleados)=> { this.empleados = empleados}); 
      
  }
  
  eliminarEmpleado(empleado:Empleado){
    this.confirmationservice.confirm({
      message: '¿Seguro que deseas eliminar este empleado?',
      header : 'Confirmacion',
      icon   : 'pi pi-exclamation-triangle',
      accept : ()=>{
        this.empleadoService.eliminarEmpleado(empleado)
          .subscribe(()=>{
            this.messageService.add({
              key: 'tsm',
              severity: 'success',
              summary: 'Hurra!',
              detail:'Empleado eliminado correctamente correctamente'
            })
          })
        this.router.navigate(['/empleado/listado'])
        this.empleadoService.obtenerEmpleados()
          .subscribe((empleados)=>{
          this.empleados = empleados
          })
      }
    })
  }
}

  
  


