import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  username:String;
  password:String;

  gotoHomePage(){
    this.router.navigate(['/dashboard']);
  }

  login(form2){
    this.username=form2.value.username;
    this.password=form2.value.password;
    // verify the user using username and password
  }

  ngOnInit() {
  }

}
