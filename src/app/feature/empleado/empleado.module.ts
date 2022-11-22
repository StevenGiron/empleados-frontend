import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CrearComponent } from './components/crear/crear.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { EmpleadoRoutingModule } from './empleado-routing.module';
import { ListarComponent } from './components/listar/listar.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent,
    EmpleadoComponent
  ],
  imports: [
    CommonModule,
    EmpleadoRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DatePipe
  ]
})

export class EmpleadoModule { }
