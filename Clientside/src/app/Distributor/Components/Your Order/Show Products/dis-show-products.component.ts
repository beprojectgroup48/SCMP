import { MAT_DIALOG_DATA } from '@angular/material';
import { DistributorSubOrder } from '../../../Models/dis-sub-order';
import { MatDialogRef } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-dis-show-products',
  templateUrl: './dis-show-products.component.html',
  styleUrls: ['./dis-show-products.component.css']
})
export class DistributorShowProductsComponent implements OnInit {

  data1: DistributorSubOrder[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public currentSubOrder: DistributorSubOrder[],
    public dialogRef: MatDialogRef<DistributorShowProductsComponent>) {
      this.data1 = currentSubOrder;
     }

  ngOnInit() {
  }

}
