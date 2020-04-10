import { MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ManufacturerUpdateProfileComponent } from './Update Profile/manu-update-profile.component';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ManufacturerProfile } from '../../Models/manu-profile';


@Component({
  selector: 'app-manu-profile',
  templateUrl: './manu-profile.component.html',
  styleUrls: ['./manu-profile.component.css']
})
export class ManufacturerProfileComponent {
 
  public constructor(public _d:DomSanitizer,private router:Router,public dialog:MatDialog) {}

  url ='';
  imgsrc="/assets/avatar.svg";
  onSelectFile(event)
  {
    
    const file = (event.target as HTMLInputElement).files[0];
    this.pharmacistService.uploadProfilePhoto(file).subscribe(data =>{
      var filename = data.filename;   
      this.setProfilePhoto(filename);
    })
    
  }
  setProfilePhoto(filename:any){
    this.pharmacistService.getProfilePhoto(filename).subscribe(blob=>{
      this.imgsrc = window.URL.createObjectURL(blob);       
      // this.imgsrc = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    })
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
    const dialogRef = this.dialog.open(ManufacturerUpdateProfileComponent, dialogConfig);

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