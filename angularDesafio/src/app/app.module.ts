import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { sidenavComponent } from '../pages/sidenav/sidenav.component';
import { SidebarModule } from 'ng-sidebar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes }   from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';




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
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, sidenavComponent, MatSidenavModule, MatSlideToggleModule,
    CommonModule, BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    MatExpansionModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule
   ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[MatSlideToggleModule]
})
export class AppModule {}
