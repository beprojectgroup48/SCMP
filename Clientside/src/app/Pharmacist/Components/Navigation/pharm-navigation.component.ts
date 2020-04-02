import { PharmacistProfile } from '../../Models/pharm-profile';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PharmacistChangePasswordComponent } from '../Profile/Change-Password/pharm-change-password.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-pharm-navigation',
  templateUrl: './pharm-navigation.component.html',
  styleUrls: ['./pharm-navigation.component.css']
})
export class PharmacistNavigationComponent  {
  
  currentData: PharmacistProfile={name:'Pharmacist1', email:'pharmacist@scmp.com', mob:1234567890, address: 'Swargate, Pune', password: 'Password@123'};

  constructor(private router:Router,public dialog:MatDialog) {}

  goToProfile(){ 
    this.router.navigate(['/pharmacist/profile']);
  }

  goToLogin(){
    this.router.navigate(['/login']);
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(PharmacistChangePasswordComponent, {
      width: '500px',
      data: { name: this.currentData.name, 
              mob: this.currentData.mob,
              address: this.currentData.address,
              email: this.currentData.email,
              password: this.currentData.password
            }
    });
  }
}