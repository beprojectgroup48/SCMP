import { SubOrder } from './../../../Models/sub-order';
import { ShowProductsComponent } from './../Show Products/show-products.component';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { CompleteOrder } from './../../../Models/complete-order';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styles: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {
  orderList: CompleteOrder[] = ELEMENT_DATA;
  currentOrderProducts: SubOrder[] = ELEMENT_DATA2;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    //this.refreshList();
  }

  /*refreshList() {
    this.service.getOrderList().then(res => this.orderList = res);
  }*/

  showProducts(orderID: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    //dialogConfig.maxHeight = "50%";
    dialogConfig.data = this.currentOrderProducts;
    this.dialog.open(ShowProductsComponent, dialogConfig);
  }

  onDeleteOrder(i: number) {
    if (confirm('Are you sure to delete this record?')) {
      //this.service.deleteOrder(id).then(res => {
        //this.refreshList();
        
      //});
      console.log("Deleted Successfully", "Restaurent App.");
      this.orderList.splice(i, 1);
    }
  }
}

const ELEMENT_DATA: CompleteOrder[] = [
  { orderId: "1324", orders: undefined, manufacturerUsername: "MF123456", manufacturerName:"Sachin", distributorUsername: "DB123456", distributorName:"Ganesh", issueDate: new Date('4-2-2020'), dueDate: new Date('4-12-2020'), finalAmount: 10000, status: "Pending"},
  { orderId: "2433", orders: undefined, manufacturerUsername: "MF896412", manufacturerName:"Sehwag", distributorUsername: "DB659745", distributorName:"Mahesh", issueDate: new Date('4-2-2020'), dueDate: new Date('4-12-2020'), finalAmount: 15000, status: "Pending"},
  { orderId: "3234", orders: undefined, manufacturerUsername: "MF103578", manufacturerName:"Virat", distributorUsername: "DB896314", distributorName:"Ramesh", issueDate: new Date('4-2-2020'), dueDate: new Date('4-12-2020'), finalAmount: 20000, status: "Pending"},
  { orderId: "4224", orders: undefined, manufacturerUsername: "MF023694", manufacturerName:"Dhoni", distributorUsername: "DB102591", distributorName:"Rakesh", issueDate: new Date('4-2-2020'), dueDate: new Date('4-12-2020'), finalAmount: 25000, status: "Pending"},
  { orderId: "5543", orders: undefined, manufacturerUsername: "MF489210", manufacturerName:"Rohit", distributorUsername: "DB400632", distributorName:"Nilesh", issueDate: new Date('4-2-2020'), dueDate: new Date('4-12-2020'), finalAmount: 30000, status: "Pending"},
];

const ELEMENT_DATA2: SubOrder[] = [
  { productId: "2386", productName: "Crosin", unitPrice: 100, quantity: 7, totalAmount: 700, manufacturerUsername: "MF123456", manufacturerName:"Sachin"},
  { productId: "4865", productName: "Fever", unitPrice: 200, quantity: 4, totalAmount: 800, manufacturerUsername: "MF896412", manufacturerName:"Sehwag"},
  { productId: "1956", productName: "Cold", unitPrice: 300, quantity: 2, totalAmount: 600, manufacturerUsername: "MF489210", manufacturerName:"Virat"},
  { productId: "2020", productName: "Flu", unitPrice: 400, quantity: 6, totalAmount: 2400, manufacturerUsername: "MF023694", manufacturerName:"Dhoni"},
];