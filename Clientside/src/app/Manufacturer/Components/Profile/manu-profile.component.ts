import { Component, OnInit, Inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ManufacturerUpdateProfileComponent } from './Update-Profile/manu-update-profile.component';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Profile } from '../../Models/profile';


@Component({
  selector: 'app-manu-profile',
  templateUrl: './manu-profile.component.html',
  styleUrls: ['./manu-profile.component.css']
})
export class ManufacturerProfileComponent {
 
  public constructor(
  
    public _d:DomSanitizer,
    private router:Router,
    public dialog:MatDialog,
    

    ) 
    {  }

  url ='';
  imgsrc="/assets/avatar.svg";
  onSelectFile(event)
  {
    const file = event.srcElement.files[0]; 
    this.imgsrc = window.URL.createObjectURL(file); 
  }
  
  currentData: Profile={
  username:'Manufacturer1',
  fname:'Ram',
  lname:'Sharma', 
  email:'manufacturer@scmp.com', 
  mob:1234567890, 
  address: 'Swargate, Pune', 
  country: 'India',
  city: 'Pune',
  companyInfo: 'Pharma Industry',
  password: 'Password@123'};

  openDialog(): void{
    const dialogRef = this.dialog.open(ManufacturerUpdateProfileComponent, {
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