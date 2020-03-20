import { Product } from './../../../Models/product';
import { CompleteOrder } from './../../../Models/complete-order';
import { AddItemsComponent } from './../Add Items/add-items.component';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SubOrder } from 'src/app/Distributor/Models/sub-order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  isValid: boolean = true;
  OrderId: String = "123456";
  currentSubOrder: SubOrder;
  currentSubOrderList: SubOrder[] = [];
  currentCompleteOrder: CompleteOrder;
  count: number = 0;
  username: String = "DB76390";
  productList = ELEMENT_DATA;
  dateRe : String;
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.currentCompleteOrder = new CompleteOrder();
    this.currentCompleteOrder.orderId=this.OrderId;
    this.currentCompleteOrder.distributorUsername = this.username;
    this.currentCompleteOrder.issueDate = new Date();
    this.currentCompleteOrder.dueDate = undefined;
    this.currentCompleteOrder.finalAmount = 0;
    this.currentCompleteOrder.status =  "Pending";
    this.currentCompleteOrder.orders = this.currentSubOrderList;
    this.dateRe = new Date().toDateString();
  }

  resetForm(form?: NgForm) {
    /*if (form = null)
      form.resetForm();
    this.service.formData = {
      OrderID: null,
      OrderNo: Math.floor(100000 + Math.random() * 900000).toString(),
      GTotal: 0,
      DeletedOrderItemIDs: ''
    };
    this.service.orderItems = [];*/
  }

  AddOrEditOrderItem() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    dialogConfig.data = { productId : "0", productName : "", unitPrice : 0, quantity: undefined, totalAmount : 0 };
    const dialogRef = this.dialog.open(AddItemsComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if(!result)
        return;
      this.currentSubOrder = new SubOrder();
      this.currentSubOrder.productId = result.productId;
      this.currentSubOrder.productName = result.productName;
      this.currentSubOrder.unitPrice = result.unitPrice;
      this.currentSubOrder.quantity = result.quantity;
      this.currentSubOrder.totalAmount=result.totalAmount;
      this.currentSubOrderList[this.count] = this.currentSubOrder;
      this.updateGrandTotal();
      this.count++;
    });
  }

  EditOrderItem(orderItemIndex) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    dialogConfig.data = { productId : this.currentSubOrderList[orderItemIndex].productId, productName : this.currentSubOrderList[orderItemIndex].productName, unitPrice : this.currentSubOrderList[orderItemIndex].unitPrice, quantity : this.currentSubOrderList[orderItemIndex].quantity, totalAmount : this.currentSubOrderList[orderItemIndex].totalAmount };
    const dialogRef = this.dialog.open(AddItemsComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if(!result)
        return;
      
        this.currentCompleteOrder.finalAmount -= this.currentSubOrderList[orderItemIndex].totalAmount;
        this.currentCompleteOrder.finalAmount += result.totalAmount;
        
        this.currentSubOrderList[orderItemIndex].productId = result.productId;
        this.currentSubOrderList[orderItemIndex].productName = result.productName;
        this.currentSubOrderList[orderItemIndex].unitPrice = result.unitPrice;
        this.currentSubOrderList[orderItemIndex].quantity = result.quantity;
        this.currentSubOrderList[orderItemIndex].totalAmount = result.totalAmount;
    });
  }

  onDeleteOrderItem(i: number) {
    this.currentCompleteOrder.finalAmount -= this.currentSubOrderList[i].totalAmount;
    this.currentSubOrderList.splice(i, 1);
    this.count=this.count-1;
  }

  updateGrandTotal() {
    this.currentCompleteOrder.finalAmount += this.currentSubOrder.totalAmount;
  }

  /*validateForm() {
    this.isValid = true;
    if (this.service.formData.CustomerID == 0)
      this.isValid = false;
    else if (this.service.orderItems.length == 0)
      this.isValid = false;
    return this.isValid;
  }*/


  onSubmit(form: NgForm) {
    console.log(this.currentCompleteOrder);
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