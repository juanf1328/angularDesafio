import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { sidenavComponent } from './sidenav.component';



@NgModule({
  declarations: [
    // sidenavComponent
  ],
  exports:[
    // sidenavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
