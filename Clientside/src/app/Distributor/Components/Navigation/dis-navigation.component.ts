import { MatDialogConfig } from '@angular/material/dialog';
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
    localStorage.clear();
    this.router.navigate(['/login']);
  }
 
  currentData: DistributorProfile={
    username: 'DB123456',
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
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    dialogConfig.data = { 
      username: this.currentData.username, 
      name: this.currentData.name,
      companyName: this.currentData.companyName,
      companyInfo: this.currentData.companyInfo,
      city: this.currentData.city,
      mobileNumber: this.currentData.mobileNumber,
      address: this.currentData.address,
      email: this.currentData.email,
      registrationId: this.currentData.registrationId,
      password: this.currentData.password 
    };
    const dialogRef = this.dialog.open(DistributorChangePasswordComponent, dialogConfig);
  }
}
