import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dis-navigation',
  templateUrl: './dis-navigation.component.html',
  styleUrls: ['./dis-navigation.component.css']
})
export class DistributorNavigationComponent implements OnInit {
  
  constructor(private router:Router) { }
  goToProfile(){ 
    this.router.navigate(['/distributor/profile']);
  }
  goToLogin(){
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
