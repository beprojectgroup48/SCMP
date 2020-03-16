import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Login } from '../Models/Login';
import { LoginService } from '../Services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }

  username:String;
  password:String;

  gotoHomePage(){
    this.router.navigate(['/distributor']);
  }

  login(form2){
     var user : Login;
     user = form2.value;
     this.loginService.login(user).subscribe ( data =>{
       if(data){
         console.log(data);
       }
     })
    // verify the user using username and password
  }

  ngOnInit() {
  }

}
