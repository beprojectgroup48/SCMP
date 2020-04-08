import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManufacturerProfile } from '../../Models/manu-profile';
import { ManufacturerChangePasswordComponent } from '../Profile/Change Password/manu-change-password.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-manu-navigation',
  templateUrl: './manu-navigation.component.html',
  styleUrls: ['./manu-navigation.component.css']
})
export class ManufacturerNavigationComponent  {
  
  constructor(private router:Router,public dialog:MatDialog) { }

  goToProfile(){ 
    this.router.navigate(['/manufacturer/profile']);
  }
  
  goToLogin(){
    this.router.navigate(['/login']);
  }
 
  currentData: ManufacturerProfile={
    username: 'MF123456',
    name: 'Ashish Chintakindi',
    email: 'ashish@scmp.com', 
    mobileNumber: 8605038260, 
    address: 'Zarekar Lane',
    city: 'Ahmednagar',
    companyName: 'Seva Healthcare Ltd. ',
    companyInfo: 'Seva Healthcare Private Limited is a Private incorporated on 24 February 2000. It is classified as Non-govt company and is registered at Registrar of Companies',
    password: 'Password@123',
    registrationId: 864598
  };
  
  openDialog(): void{
    const dialogRef = this.dialog.open(ManufacturerChangePasswordComponent, {
      width: '500px',
      data: {  
        username: this.currentData.username, 
        name: this.currentData.name,
        companyName: this.currentData.companyName,
        companyInfo: this.currentData.companyInfo,
        city: this.currentData.city,
        mob: this.currentData.mobileNumber,
        address: this.currentData.address,
        email: this.currentData.email,
        registrationId: this.currentData.registrationId,
        password: this.currentData.password
      }
    });
  }
}