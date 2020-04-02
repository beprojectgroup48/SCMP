import { PharmacistProfile } from '../../../Models/pharm-profile';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DistinctSubscriber } from 'rxjs/internal/operators/distinct';
import { PharmacistProfileComponent } from '../pharm-profile.component';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-pharm-change-password',
  templateUrl: './pharm-change-password.component.html',
  styleUrls: ['./pharm-change-password.component.css']
})
export class PharmacistChangePasswordComponent{
  
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<PharmacistProfileComponent>,
    @Inject (MAT_DIALOG_DATA) public data: PharmacistProfile) {    }
    
  currentData: PharmacistProfile={name:'Distributor1', email:'distributor@scmp.com', mob:1234567890, address: 'Swargate, Pune', password: 'Password@123'};

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
    
    dialogRef.afterClosed().subscribe(result => {
      if(!result)
        return;
      this.currentData.name = result.name;
      this.currentData.mob = result.mob;
      this.currentData.address=result.address;
      this.currentData.email=result.email;
      this.currentData.password=result.password;
    
    });
   
  }
}

