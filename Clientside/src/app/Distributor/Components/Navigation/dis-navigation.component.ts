import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DistributorProfile } from '../../Models/dis-profile';
import { DistributorChangePasswordComponent } from '../Profile/Change Password/dis-change-password.component';
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
 
  currentData: DistributorProfile={
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
    const dialogRef = this.dialog.open(DistributorChangePasswordComponent, {
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

