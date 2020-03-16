import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
//import { DistinctSubscriber } from 'rxjs/internal/operators/distinct';
import { DistributorProfileComponent, DialogData } from '../dis-profile.component';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent{

  constructor(
    public dialogRef: MatDialogRef<DistributorProfileComponent>,
    @Inject (MAT_DIALOG_DATA) public data: DialogData) {}

  
    onNoClick(): void{
      this.dialogRef.close();
    }

}

