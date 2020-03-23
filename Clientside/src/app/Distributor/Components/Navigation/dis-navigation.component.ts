import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from '../../Models/profile';
import { ChangePasswordComponent } from '../Profile/Change-Password/change-password.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-dis-navigation',
  templateUrl: './dis-navigation.component.html',
  styleUrls: ['./dis-navigation.component.css']
})
export class DistributorNavigationComponent  {
  
  constructor(
    private router:Router,
    public dialog:MatDialog
    ) { }
  goToProfile(){ 
    this.router.navigate(['/distributor/profile']);
  }
  goToLogin(){
    this.router.navigate(['/login']);
  }
 
  currentData: Profile={name:'Distributor1', email:'distributor@scmp.com', mob:1234567890, address: 'Swargate, Pune', password: 'Password@123'};

  openDialog(): void{
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      width: '500px',
      data: { name: this.currentData.name, 
              mob: this.currentData.mob,
              address: this.currentData.address,
              email: this.currentData.email,
              password: this.currentData.password
            }
    });


  }
  }

