import { MAT_DIALOG_DATA } from '@angular/material';
import { ManufacturerSubOrder } from '../../../Models/manu-sub-order';
import { MatDialogRef } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-manu-show-products',
  templateUrl: './manu-show-products.component.html',
  styleUrls: ['./manu-show-products.component.css']
})
export class ManufacturerShowProductsComponent implements OnInit {

  data1: ManufacturerSubOrder[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public currentSubOrder: ManufacturerSubOrder[],
    public dialogRef: MatDialogRef<ManufacturerShowProductsComponent>) {
      this.data1 = currentSubOrder;
     }

  ngOnInit() {
  }

}
