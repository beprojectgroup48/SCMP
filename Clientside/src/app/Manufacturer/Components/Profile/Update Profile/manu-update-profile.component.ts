import { Component, OnInit, Inject } from '@angular/core';
import { ManufacturerProfile } from '../../../Models/manu-profile';
import { ManufacturerProfileComponent } from '../manu-profile.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-manu-update-profile',
  templateUrl: './manu-update-profile.component.html',
  styleUrls: ['./manu-update-profile.component.css']
})
export class ManufacturerUpdateProfileComponent implements OnInit {

  constructor( 
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ManufacturerProfileComponent>,
    @Inject (MAT_DIALOG_DATA) public currentData: ManufacturerProfile) { }

  ngOnInit() {
  }
}