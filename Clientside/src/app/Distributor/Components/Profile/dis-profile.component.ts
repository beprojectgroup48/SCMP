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
  password: 'Password@123'};

  openDialog(): void{
    const dialogRef = this.dialog.open(DistributorUpdateProfileComponent, {
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