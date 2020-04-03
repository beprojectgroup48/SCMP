import { Profile } from '../../../Models/profile';
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
    @Inject (MAT_DIALOG_DATA) public data: Profile) {    }
    
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
    
    dialogRef.afterClosed().subscribe(result => {
      if(!result)
        return;
        this.currentData.username = result.username;
        this.currentData.mob = result.mob;
        this.currentData.address=result.address;
        this.currentData.email=result.email;
        this.currentData.fname=result.fname;
        this.currentData.lname=result.lname;
        this.currentData.city=result.city;
        this.currentData.country=result.country;
        this.currentData.companyInfo=result.companyInfo;
        this.currentData.password=result.password;
    
    });
   
  }
}

