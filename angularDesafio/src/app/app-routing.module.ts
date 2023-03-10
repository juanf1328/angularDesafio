import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { AdminComponent } from '../pages/admin/admin.component';
import { EmpleadoComponent } from '../pages/empleado/empleado.component';
import { OptionsComponent } from '../pages/options/options.component';
import { RrhhComponent } from '../pages/rrhh/rrhh.component';
import { SeguridadComponent } from '../pages/seguridad/seguridad.component';
import { ErrorComponent } from '../pages/error/error.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'empleado',
    component: EmpleadoComponent,
  },
  {
    path: 'options',
    component: OptionsComponent,
  },
  {
    path: 'rrhh',
    component: RrhhComponent,
    pathMatch: "full"
  },
  {
    path: 'seguridad',
    component: SeguridadComponent,
    pathMatch: "full"
  },
  {
    path: '**',
    component: ErrorComponent ,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
