import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrearComponent } from './components/crear/crear.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { ListarComponent } from './components/listar/listar.component';

const routes: Routes = [
  {
  path: '',
  component: EmpleadoComponent,
  children: [
    {
      path: 'listado',
      component: ListarComponent
    },
    {
      path: 'crear',
      component: CrearComponent
    },
    {
      path: 'crear/:id',
      component: CrearComponent
    },
    {
      path: '**',
      redirectTo: 'listado'      
    }
  ]
 }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadoRoutingModule { }
