import { Profile } from './../../Models/profile';
import { UpdateProfileComponent } from './Update Profile/update-profile.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-dis-profile',
  templateUrl: './dis-profile.component.html',
  styleUrls: ['./dis-profile.component.css']
})
export class DistributorProfileComponent {

  constructor(public dialog: MatDialog) { }

  currentData: Profile={name:'Distributor1', email:'distributor@scmp.com', mob:1234567890, address: 'Swargate, Pune', password: 'Password@123'};

  openDialog(): void{
    const dialogRef = this.dialog.open(UpdateProfileComponent, {
      width: '500px',
      data: { name: this.currentData.name, 
              mob: this.currentData.mob,
              address: this.currentData.address,
              email: this.currentData.email,
              password: this.currentData.password
            }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.currentData.name = result.name;
      this.currentData.mob = result.mob;
      this.currentData.address=result.address;
      this.currentData.email=result.email;
      this.currentData.password=result.password;
    });
    
  }
}