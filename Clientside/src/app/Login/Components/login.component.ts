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
<<<<<<< HEAD
    this.router.navigate(['/distributor']);
=======
    this.router.navigate(['/dashboard']);
>>>>>>> 279d3ae10aebf89343f7f26727aa5cd8c4b6cecd
  }

  login(form2){
    this.username=form2.value.username;
    this.password=form2.value.password;
    // verify the user using username and password
  }

  ngOnInit() {
  }

}
