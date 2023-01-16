import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import { LoginComponent } from '../../pages/login/login.component';



@NgModule({
  declarations: [
    // LoginComponent
  ],
  exports:[
    // LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class SharedModule { }
