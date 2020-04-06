import { ManufacturerProfile } from '../../../Models/manu-profile';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DistinctSubscriber } from 'rxjs/internal/operators/distinct';
import { ManufacturerProfileComponent } from '../manu-profile.component';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-manu-change-password',
  templateUrl: './manu-change-password.component.html',
  styleUrls: ['./manu-change-password.component.css']
})
export class ManufacturerChangePasswordComponent{
  
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ManufacturerProfileComponent>,
    @Inject (MAT_DIALOG_DATA) public data: ManufacturerProfile) {}
    
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
    
    dialogRef.afterClosed().subscribe(result => {
      if(!result)
        return;
        this.currentData.username = result.username;
        this.currentData.mobileNumber = result.mob;
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

