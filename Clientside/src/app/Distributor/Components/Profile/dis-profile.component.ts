import { Profile } from './../../Models/profile';
import { UpdateProfileComponent } from './Update Profile/update-profile.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dis-profile',
  templateUrl: './dis-profile.component.html',
  styleUrls: ['./dis-profile.component.css']
})
export class DistributorProfileComponent {

  constructor(
    public dialog: MatDialog,
    public _d:DomSanitizer
    ) { }

  url ='';
  imgsrc="/assets/avatar.svg";
  onSelectFile(event)
  {
    const file = event.srcElement.files[0]; 
    this.imgsrc = window.URL.createObjectURL(file); 
  }
    
  

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