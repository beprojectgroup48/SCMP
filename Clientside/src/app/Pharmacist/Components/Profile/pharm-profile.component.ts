import { PharmacistProfile } from './../../Models/pharm-profile';
import { PharmacistUpdateProfileComponent } from './Update Profile/pharm-update-profile.component';
import { Component, OnInit, Inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { PharmacistService } from '../../Services/pharmacist.service';

@Component({
  selector: 'app-pharm-profile',
  templateUrl: './pharm-profile.component.html',
  styleUrls: ['./pharm-profile.component.css']
})
export class PharmacistProfileComponent {
 
  public constructor(
  
    public sanitizer:DomSanitizer,
    private router:Router,
    public dialog:MatDialog,
    private pharmacistService: PharmacistService

    ) 
    {  }
  ngOnInit(){

    var token = localStorage.getItem('token');
    if( token !== null){
      this.setProfilePhoto(this.pharmacistService.imageName);
    }
    else{
      this.router.navigate(['/login']);
    }
  }
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
  currentData: PharmacistProfile={
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
    const dialogRef = this.dialog.open(PharmacistUpdateProfileComponent, {
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