import { Component, OnInit } from '@angular/core';
// import { UsersService } from "../users/users.service";

 import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {

public loginForm!: FormGroup;
user!: string;
pass!: string;

 constructor(
  private formBuilder:FormBuilder, private route : Router,) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName : ['', [Validators.required]],
      password : ['', [Validators.required]]
    });
  }

btnClick(){
  this.user = this.loginForm.controls['userName'].value;
  this.pass = this.loginForm.controls['password'].value;

  if(this.user == 'juancito' && this.pass == '123456'){
    this.route.navigate(['options'])
    console.log('redireccion');

  }else{
    console.log('error');
  }

}


}

