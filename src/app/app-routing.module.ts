import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './feature/empleado/components/listar/listar.component';

const routes: Routes = [
  {path: 'empleado', component: ListarComponent},
  {path: '', redirectTo: '/listado', pathMatch: 'full'},
  {path: 'empleado', loadChildren: ()=> import('./feature/empleado/empleado.module').then(m=>m.EmpleadoModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
