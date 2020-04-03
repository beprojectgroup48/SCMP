import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from '../../Models/profile';
import { ManufacturerChangePasswordComponent } from '../Profile/Change Password/manu-change-password.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-manu-navigation',
  templateUrl: './manu-navigation.component.html',
  styleUrls: ['./manu-navigation.component.css']
})
export class ManufacturerNavigationComponent  {
  
  constructor(
    private router:Router,
    public dialog:MatDialog
    ) { }
  goToProfile(){ 
    this.router.navigate(['/manufacturer/profile']);
  }
  goToLogin(){
    this.router.navigate(['/login']);
  }
 
  currentData: Profile={
    username:'Distributor1',
    fname:'Ram',
    lname:'Sharma', 
    email:'distributor@scmp.com', 
    mob:1234567890, 
    address: 'Swargate, Pune', 
    country: 'India',
    city: 'Pune',
    companyInfo: 'Pharma Industry',
    password: 'Password@123'
  };

  openDialog(): void{
    const dialogRef = this.dialog.open(ManufacturerChangePasswordComponent, {
      width: '500px',
      data: { 
        username: this.currentData.username, 
        fname: this.currentData.fname,
        lname: this.currentData.lname,
        country: this.currentData.country,
        companyInfo: this.currentData.companyInfo,
        city: this.currentData.city,
        mob: this.currentData.mob,
        address: this.currentData.address,
        email: this.currentData.email,
        password: this.currentData.password
            }
    });


  }
  }

