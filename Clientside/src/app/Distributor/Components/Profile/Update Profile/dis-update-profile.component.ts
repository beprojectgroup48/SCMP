import { Component, OnInit, Inject } from '@angular/core';
import { DistributorProfile } from 'src/app/Distributor/Models/dis-profile';
import { DistributorProfileComponent } from '../dis-profile.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dis-update-profile',
  templateUrl: './dis-update-profile.component.html',
  styleUrls: ['./dis-update-profile.component.css']
})
export class DistributorUpdateProfileComponent implements OnInit {

  constructor( 
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DistributorProfileComponent>,
    @Inject (MAT_DIALOG_DATA) public currentData: DistributorProfile) { }

  ngOnInit() {
  }
}