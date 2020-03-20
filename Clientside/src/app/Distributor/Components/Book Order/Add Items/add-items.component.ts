import { CompleteOrder } from './../../../Models/complete-order';
import { Product } from './../../../Models/product';
import { SubOrder } from './../../../Models/sub-order';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styles: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
  orderList: CompleteOrder;
  productList = ELEMENT_DATA;
  isValid: boolean = true;
  data1: SubOrder =new SubOrder;

  constructor(
    @Inject(MAT_DIALOG_DATA) public currentSubOrder: SubOrder,
    public dialogRef: MatDialogRef<AddItemsComponent>) {
      this.data1 = currentSubOrder;
     }

  ngOnInit() {
  }

  updatePrice(ctrl) {
    if (ctrl.selectedIndex != 0) {
      this.data1.productId = this.productList[ctrl.selectedIndex - 1].id;
      this.data1.productName = this.productList[ctrl.selectedIndex - 1].name;
      this.data1.unitPrice = this.productList[ctrl.selectedIndex - 1].unitPrice;
      this.data1.quantity = undefined;
      this.data1.totalAmount = 0;
    }
  }

  updateTotal() {
    this.data1.totalAmount = (this.data1.quantity * this.data1.unitPrice);
  }

  validateForm(form) {
    this.isValid = true;
    if (form.productId == "0")
      this.isValid = false;
    else if (form.quantity == 0)
      this.isValid = false;
  }

}

const ELEMENT_DATA: Product[] = [
  { id: "1", name: "Crosin", unitPrice: 100, manufacturerUsername: "MF123456", manufacturerName:"Ganesh"},
  { id: '2', name: 'Trishul', unitPrice: 200, manufacturerUsername: 'MF896412', manufacturerName:'Ramesh'},
  { id: '3', name: 'Pain Killer', unitPrice: 300, manufacturerUsername: 'MF486215', manufacturerName:'Suresh'},
  { id: '4', name: 'Fever', unitPrice: 400, manufacturerUsername: 'MF369412', manufacturerName:'Mukesh'},
  { id: '5', name: 'Cold', unitPrice: 500, manufacturerUsername: 'MF201596', manufacturerName:'Nilesh'},
  { id: '6', name: 'Flu', unitPrice: 600, manufacturerUsername: 'MF963480', manufacturerName:'Hitesh'},
];