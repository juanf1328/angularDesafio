import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { sidenavComponent } from './sidenav.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    // sidenavComponent
  ],
  exports:[
    // sidenavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    sidenavComponent,
    MatSidenavModule,
    MatSlideToggleModule
  ]
})
export class SharedModule { }
