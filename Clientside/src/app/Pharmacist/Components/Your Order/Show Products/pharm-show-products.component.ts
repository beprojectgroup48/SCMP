import { MAT_DIALOG_DATA } from '@angular/material';
import { PharmacistSubOrder } from '../../../Models/pharm-sub-order';
import { MatDialogRef } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-pharm-show-products',
  templateUrl: './pharm-show-products.component.html',
  styleUrls: ['./pharm-show-products.component.css']
})
export class PharmacistShowProductsComponent implements OnInit {

  data1: PharmacistSubOrder[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public currentSubOrder: PharmacistSubOrder[],
    public dialogRef: MatDialogRef<PharmacistShowProductsComponent>) {
      this.data1 = currentSubOrder;
     }

  ngOnInit() {
  }

}
