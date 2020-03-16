import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

export interface DialogData{
  name: string;
  email: string;
  mob: number;
  address: string;
  password: string;
}
export interface UsersData{
  name: string;
  email: string;
  mob: number;
  address: string;
  password: string;
}
@Component({
  selector: 'app-dis-profile',
  templateUrl: './dis-profile.component.html',
  styleUrls: ['./dis-profile.component.css']
})
export class DistributorProfileComponent {

 // formDisabled: boolean = false;
  name="Distributor1";
  email="dis1@scmp.com";
  mob=1234567890;
  address="Swargate, Pune";
  password= "password@123";
  // ELEMENT_DATA: UsersData[] =[{name:'Distributor1', email:'dis1@scmp.com', mob:1234567890, address: 'Swargate, Pune', password: 'password@123'}];
  constructor(public dialog: MatDialog) { }

  openDialog(): void{
    const dialogRef = this.dialog.open(UpdateProfileComponent, {
      width: '500px',
      data: { name: this.name, 
              mob: this.mob,
              address: this.address,
              email: this.email,
              password: this.password
            }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = result;
      // this.mob = result;
      // this.address=result;
      // this.email=result;
      // this.password=result;
    });

  }
 

}
