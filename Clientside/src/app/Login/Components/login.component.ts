import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../Models/login';
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
         if(user.username.substring(0,2) == "MF"){

         }else if(user.username.substring(0,2) == "DB"){
         localStorage.setItem('id', data.distributor.id);
         localStorage.setItem('username', data.distributor.username);
         localStorage.setItem('token', data.token);
         this.router.navigate(['/distributor']);
         }else if (user.username.substring(0,2) == "PH"){
        localStorage.setItem('id', data.pharmacist.id);
        localStorage.setItem('username', data.pharmacist.username);
        localStorage.setItem('token', data.token);
        this.router.navigate(['/pharmacist']);
       }else{
         console.log("error in logging");
       }
      }
     })
    // verify the user using username and password
  }

  ngOnInit() {
  }

}
