import { Component, OnInit } from '@angular/core';
// import { UsersService } from "../users/users.service";

 import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {

  // user: string;
  // password: string;

 constructor(private route : Router) { }

  ngOnInit(): void {
  }
  // login() {
  //   const user = {email: this.user, password: this.password};
  //   this.userService.login(user).subscribe( data => {
  //     console.log(data);
  //   });

btnClick(){
  this.route.navigate(["empleado"])
}

}
