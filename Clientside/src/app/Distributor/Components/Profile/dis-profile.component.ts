import { Component, OnInit, Inject } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { DistributorUpdateProfileComponent } from './Update Profile/dis-update-profile.component';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { DistributorProfile } from '../../Models/dis-profile';
import { DistributorService } from '../../Services/distributor.service';
import { FormBuilder, FormGroup } from "@angular/forms";
import { DistributorDashboardComponent } from '../Dashboard/dis-dashboard.component';
import { copyStyles } from '@angular/animations/browser/src/util';
@Component({
  selector: 'app-dis-profile',
  templateUrl: './dis-profile.component.html',
  styleUrls: ['./dis-profile.component.css']
})
export class DistributorProfileComponent {
   selectedFile: File;
   form: FormGroup;
   imageName: any;
  public constructor(
  
    public sanitizer:DomSanitizer,
    private router:Router,
    public dialog:MatDialog,
    private distributorService: DistributorService
    ) 
    {
    }

  url ='';
  imgsrc:any = "/assets/avatar.svg";
  
  onSelectFile(event)
  {
    
    const file = (event.target as HTMLInputElement).files[0];
   this.distributorService.uploadProfilePhoto(file).subscribe(data =>{
      var filename = data.filename;   
       this.setProfilePhoto(filename);
    })
    
  }
  setProfilePhoto(filename:any){
    this.distributorService.getProfilePhoto(filename).subscribe(blob=>{
      this.imgsrc = window.URL.createObjectURL(blob);       
     // this.imgsrc = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    })
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
  ngOnInit() {

    this.setProfilePhoto(this.distributorService.imageName);
  }
}