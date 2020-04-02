import { Component, OnInit, Inject } from '@angular/core';
import { Profile } from 'src/app/Distributor/Models/profile';
import { DistributorProfileComponent } from '../dis-profile.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  constructor( 
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DistributorProfileComponent>,
    @Inject (MAT_DIALOG_DATA) public data: Profile) { }

  ngOnInit() {
  }
  // currentData: Profile={
  //   username:'Distributor1',
  //   fname:'Ram',
  //   lname:'Sharma', 
  //   email:'distributor@scmp.com', 
  //   mob:1234567890, 
  //   address: 'Swargate, Pune', 
  //   country: 'India',
  //   city: 'Pune',
  //   companyInfo: 'Pharma Industry',
  //   password: 'Password@123'};

  // openDialog(): void{
  //   const dialogRef = this.dialog.open(UpdateProfileComponent, {
  //     width: '500px',
  //     data: {  
  //       username: this.currentData.username, 
  //       fname: this.currentData.fname,
  //       lname: this.currentData.lname,
  //       country: this.currentData.country,
  //       companyInfo: this.currentData.companyInfo,
  //       city: this.currentData.city,
  //       mob: this.currentData.mob,
  //       address: this.currentData.address,
  //       email: this.currentData.email,
  //       password: this.currentData.password
  //           }
  //   });
    
  //   dialogRef.afterClosed().subscribe(result => {
  //     if(!result)
  //       return;
  //     this.currentData.username = result.username;
  //     this.currentData.mob = result.mob;
  //     this.currentData.address=result.address;
  //     this.currentData.email=result.email;
  //     this.currentData.fname=result.fname;
  //     this.currentData.lname=result.lname;
  //     this.currentData.city=result.city;
  //     this.currentData.country=result.country;
  //     this.currentData.companyInfo=result.companyInfo;
  //     this.currentData.password=result.password;
  //   });
   
  // }
}