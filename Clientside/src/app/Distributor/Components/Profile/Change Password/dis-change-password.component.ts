import { MatDialogConfig } from '@angular/material/dialog';
import { DistributorProfile } from '../../../Models/dis-profile';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DistinctSubscriber } from 'rxjs/internal/operators/distinct';
import { DistributorProfileComponent } from '../dis-profile.component';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-dis-change-password',
  templateUrl: './dis-change-password.component.html',
  styleUrls: ['./dis-change-password.component.css']
})
export class DistributorChangePasswordComponent{
  
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DistributorProfileComponent>,
    @Inject (MAT_DIALOG_DATA) public data: DistributorProfile) {    }
    
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

  dialogRef.afterClosed().subscribe(result => {
  if(!result)
    return;
  this.currentData.username = result.username;
  this.currentData.mobileNumber = result.mobileNumber;
  this.currentData.address = result.address;
  this.currentData.email = result.email;
  this.currentData.name = result.name;
  this.currentData.city = result.city;
  this.currentData.companyName = result.companyName;
  this.currentData.companyInfo = result.companyInfo;
  this.currentData.registrationId = result.registrationId;
  this.currentData.password = result.password;
  });
   
  }
}

