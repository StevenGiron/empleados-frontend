import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { Empleado } from './model/empleado';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
  })

export class EmpleadoService{
    constructor(private http: HttpClient){}

    obtenerEmpleados():Observable<Empleado[]>{
        return this.http.get<Empleado[]>(`${environment.endpoint}/empleados`)
    }

    obtenerEmpleado(id:number):Observable<Empleado>{
        return this.http.get<Empleado>(`${environment.endpoint}/empleados/${id}`)
    }

    crearEmpleado(empleado: Empleado):Observable<Empleado>{
        return this.http.post<Empleado>(`${environment.endpoint}/empleados`,empleado)
    }

    actualizarEmpleado(empleado: Empleado, id:number):Observable<Empleado>{
        return this.http.put<Empleado>(`${environment.endpoint}/empleados/${id}`,empleado)
    }

    eliminarEmpleado(empleado: Empleado):Observable<Empleado>{
        return this.http.get<Empleado>(`${environment.endpoint}/empleados/eliminar/${empleado.id}`)
    }
}


