import { Profile } from '../../../Models/profile';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DistinctSubscriber } from 'rxjs/internal/operators/distinct';
import { DistributorProfileComponent } from '../dis-profile.component';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent{
  
  
 

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DistributorProfileComponent>,
    @Inject (MAT_DIALOG_DATA) public data: Profile) {    }
    
  currentData: Profile={name:'Distributor1', email:'distributor@scmp.com', mob:1234567890, address: 'Swargate, Pune', password: 'Password@123'};

  openDialog(): void{
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
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

