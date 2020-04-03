import { PharmacistChangePasswordComponent } from './../Profile/Change Password/pharm-change-password.component';
import { PharmacistProfile } from './../../Models/pharm-profile';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-pharm-navigation',
  templateUrl: './pharm-navigation.component.html',
  styleUrls: ['./pharm-navigation.component.css']
})
export class PharmacistNavigationComponent  {
  
  constructor(
    private router:Router,
    public dialog:MatDialog
    ) { }
  goToProfile(){ 
    this.router.navigate(['/pharmacist/profile']);
  }
  goToLogin(){
    this.router.navigate(['/login']);
  }
 
  currentData: PharmacistProfile={
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
    const dialogRef = this.dialog.open(PharmacistChangePasswordComponent, {
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

