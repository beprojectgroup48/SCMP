import { Component, OnInit, Inject } from '@angular/core';
import { DistributorProfile } from 'src/app/Distributor/Models/dis-profile';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-pharm-update-profile',
  templateUrl: './pharm-update-profile.component.html',
  styleUrls: ['./pharm-update-profile.component.css']
})
export class PharmacistUpdateProfileComponent implements OnInit {

  constructor( 
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<PharmacistUpdateProfileComponent>,
    @Inject (MAT_DIALOG_DATA) public currentData: DistributorProfile) { }

  ngOnInit() {
  }
}