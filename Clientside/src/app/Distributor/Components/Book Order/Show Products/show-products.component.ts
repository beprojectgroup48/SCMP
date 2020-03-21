import { MAT_DIALOG_DATA } from '@angular/material';
import { SubOrder } from './../../../Models/sub-order';
import { MatDialogRef } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {

  data1: SubOrder[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public currentSubOrder: SubOrder[],
    public dialogRef: MatDialogRef<ShowProductsComponent>) {
      this.data1 = currentSubOrder;
     }

  ngOnInit() {
  }

}
