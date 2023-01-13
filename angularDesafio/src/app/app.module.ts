import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../pages/login/login.component';
import { AdminComponent } from '../pages/admin/admin.component';
import { EmpleadoComponent } from '../pages/empleado/empleado.component';
import { ErrorComponent } from '../pages/error/error.component';
import { OptionsComponent } from '../pages/options/options.component';
import { RrhhComponent } from '../pages/rrhh/rrhh.component';
import { SeguridadComponent } from '../pages/seguridad/seguridad.component';
// import { SidenavComponent } from '../pages/sidenav/sidenav.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    EmpleadoComponent,
    ErrorComponent,
    OptionsComponent,
    RrhhComponent,
    SeguridadComponent,
    // SidenavComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
