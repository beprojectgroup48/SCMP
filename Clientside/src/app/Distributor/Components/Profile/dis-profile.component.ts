import { MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DistributorUpdateProfileComponent } from './Update Profile/dis-update-profile.component';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { DistributorProfile } from '../../Models/dis-profile';


@Component({
  selector: 'app-dis-profile',
  templateUrl: './dis-profile.component.html',
  styleUrls: ['./dis-profile.component.css']
})
export class DistributorProfileComponent {
 
  public constructor(public _d:DomSanitizer,private router:Router,public dialog:MatDialog) {}

  url ='';
  imgsrc="/assets/avatar.svg";

  uploadFile(event){
    const file = event.srcElement.files[0]; 
    this.imgsrc = window.URL.createObjectURL(file);
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
    const dialogRef = this.dialog.open(DistributorUpdateProfileComponent, dialogConfig);

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