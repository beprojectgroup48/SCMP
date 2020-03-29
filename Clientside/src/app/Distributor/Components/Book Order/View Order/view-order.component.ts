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
  filterdOrderList: CompleteOrder[] = [];
  currentOrderProducts: SubOrder[] = ELEMENT_DATA2;

  priceFilterArray: number[] = [];
  priceFilterFlags: boolean[] = [false,false,false,false,false,false];
  priceFilterCount: number = 0;

  statusFilterArray: number[] = [];
  statusFilterFlags: boolean[] = [false,false,false];
  statusFilterCount: number = 0;

  startDate1: Date = undefined;
  endDate1: Date = undefined;
  dateFilterNumber: number;
  dateFilterFlags: boolean[] = [false,false,false,false,false,false];
  today: Date = new Date();

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    for(let i=0;i<this.orderList.length;i++)
          this.filterdOrderList.push(this.orderList[i]);
    //this.refreshList();
  }

  removeCustomDateFilter(){
    if(this.dateFilterNumber == 20){
      this.dateFilterNumber = undefined;
      this.dateFilterFlags[5] = false;
      this.startDate1 = undefined;
      this.endDate1 = undefined;
      this.filterdOrderList.splice(0, this.filterdOrderList.length);
      for(let i=0;i<this.orderList.length;i++)
        this.filterdOrderList.push(this.orderList[i]);
    }
  }

  filterByDate(a){
    if(a == 20 && this.endDate1 == undefined)
      return;
    this.dateFilterFlags.splice(0, 6, false,false,false,false,false,false);
    if(this.dateFilterNumber == a && a != 20){
      this.dateFilterNumber = undefined;
      this.filterdOrderList.splice(0, this.filterdOrderList.length);
      for(let i=0;i<this.orderList.length;i++)
        this.filterdOrderList.push(this.orderList[i]);
      return;
    }
    var ss = new Date();
    this.dateFilterNumber = a;
    if(a == 0){
      this.dateFilterFlags[0] = true;
      ss.setDate(ss.getDate() - 7);
    }
    else if(a == 1){
      this.dateFilterFlags[1] = true;
      ss.setMonth(ss.getMonth() - a);
    }
    else if(a == 3){
      this.dateFilterFlags[2] = true;
      ss.setMonth(ss.getMonth() - a);
    }
    else if(a == 6){
      this.dateFilterFlags[3] = true;
      ss.setMonth(ss.getMonth() - a);
    }
    else if(a == 12){
      this.dateFilterFlags[4] = true;
      ss.setMonth(ss.getMonth() - a);
    }
    else if(a == 20){
      this.dateFilterFlags[5] = true;
      this.dateFilter(this.startDate1,this.endDate1);
      return;
    }
    this.dateFilter(ss,this.today);
  }

  dateFilter(a,b){
    this.filterdOrderList.splice(0, this.filterdOrderList.length);
    let indices = this.orderList.map((element,index) => element.issueDate >= a && element.issueDate <= b ? index: '').filter(String);
    for(let i=0;i<indices.length;i++)
      this.filterdOrderList.push(this.orderList[indices[i]]);
  }
  
  filterByStatus(status){
    if(status == "Pending"){
      this.statusFilterFlags[0] = !this.statusFilterFlags[0];
      this.statusFilter(1,"Pending");
    }
    else if(status == "Done"){
      this.statusFilterFlags[1] = !this.statusFilterFlags[1];
      this.statusFilter(2,"Done");
    }
    else if(status == "Processing"){
      this.statusFilterFlags[2] = !this.statusFilterFlags[2];
      this.statusFilter(3,"Processing");
    }
  }

  statusFilter(a,b){
    var index = this.statusFilterArray.indexOf(a);
      if(index == -1){
        if(this.statusFilterCount == 0)
          this.filterdOrderList.splice(0, this.filterdOrderList.length);
        this.statusFilterCount = this.statusFilterCount + 1;
        this.statusFilterArray.push(a);
        let indices = this.orderList.map((element,index) => element.status == b ? index: '').filter(String);
        for(let i=0;i<indices.length;i++)
          this.filterdOrderList.push(this.orderList[indices[i]]);
      }
      else{
        this.statusFilterCount = this.statusFilterCount - 1;
        this.statusFilterArray.splice(index, 1);
        let indices = this.filterdOrderList.map((element,index) => element.status == b ? index: '').filter(String);
        for(let i=indices.length-1;i>=0;i--)
          this.filterdOrderList.splice(Number(indices[i]), 1);
        if(this.statusFilterCount == 0){
          for(let i=0;i<this.orderList.length;i++)
            this.filterdOrderList.push(this.orderList[i]);
          }
      }
  }

  filterByPrice(price){
    if(price == 500){
      this.priceFilterFlags[0] = !this.priceFilterFlags[0];
      this.priceFilter(0,500,1);
    }
    else if(price == 1000){
      this.priceFilterFlags[1] = !this.priceFilterFlags[1];
      this.priceFilter(500,1000,2);
    }
    else if(price == 2000){
      this.priceFilterFlags[2] = !this.priceFilterFlags[2];
      this.priceFilter(1000,2000,3);
    }
    else if(price == 5000){
      this.priceFilterFlags[3] = !this.priceFilterFlags[3];
      this.priceFilter(2000,5000,4);
    }
    else if(price == 10000){
      this.priceFilterFlags[4] = !this.priceFilterFlags[4];
      this.priceFilter(5000,10000,5);
    }
    else if(price == 10001){
      this.priceFilterFlags[5] = !this.priceFilterFlags[5];
      this.priceFilter(10000,Number.MAX_SAFE_INTEGER,6);
    }
  }

  priceFilter(a,b,c){
    var index = this.priceFilterArray.indexOf(c);
      if(index == -1){
        if(this.priceFilterCount == 0)
          this.filterdOrderList.splice(0, this.filterdOrderList.length);
        this.priceFilterCount = this.priceFilterCount + 1;
        this.priceFilterArray.push(c);
        let indices = this.orderList.map((element,index) => element.finalAmount <= b && element.finalAmount > a ? index: '').filter(String);
        for(let i=0;i<indices.length;i++)
          this.filterdOrderList.push(this.orderList[indices[i]]);
      }
      else{
        this.priceFilterCount = this.priceFilterCount - 1;
        this.priceFilterArray.splice(index, 1);
        let indices = this.filterdOrderList.map((element,index) => element.finalAmount <= b && element.finalAmount > a ? index: '').filter(String);
        for(let i=indices.length-1;i>=0;i--)
          this.filterdOrderList.splice(Number(indices[i]), 1);
        if(this.priceFilterCount == 0){
          for(let i=0;i<this.orderList.length;i++)
            this.filterdOrderList.push(this.orderList[i]);
          }
      }
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
  { orderId: "1324", orders: undefined, distributorUsername: "DB123456", distributorName:"Ganesh", issueDate: new Date('2-12-2020'), dueDate: new Date('4-12-2020'), finalAmount: 4000, status: "Pending"},
  { orderId: "2433", orders: undefined, distributorUsername: "DB659745", distributorName:"Mahesh", issueDate: new Date('3-23-2020'), dueDate: new Date('4-12-2020'), finalAmount: 5000, status: "Done"},
  { orderId: "3234", orders: undefined, distributorUsername: "DB896314", distributorName:"Ramesh", issueDate: new Date('3-13-2020'), dueDate: new Date('4-12-2020'), finalAmount: 2000, status: "Pending"},
  { orderId: "4224", orders: undefined, distributorUsername: "DB102591", distributorName:"Rakesh", issueDate: new Date('2-16-2020'), dueDate: new Date('4-12-2020'), finalAmount: 9000, status: "Processing"},
  { orderId: "5543", orders: undefined, distributorUsername: "DB400632", distributorName:"Nilesh", issueDate: new Date('1-8-2020'), dueDate: new Date('4-12-2020'), finalAmount: 300, status: "Pending"},
];

const ELEMENT_DATA2: SubOrder[] = [
  { productId: "2386", productName: "Crosin", unitPrice: 100, quantity: 7, totalAmount: 700, manufacturerUsername: "MF123456", manufacturerName:"Sachin"},
  { productId: "4865", productName: "Fever", unitPrice: 200, quantity: 4, totalAmount: 800, manufacturerUsername: "MF896412", manufacturerName:"Sehwag"},
  { productId: "1956", productName: "Cold", unitPrice: 300, quantity: 2, totalAmount: 600, manufacturerUsername: "MF489210", manufacturerName:"Virat"},
  { productId: "2020", productName: "Flu", unitPrice: 400, quantity: 6, totalAmount: 2400, manufacturerUsername: "MF023694", manufacturerName:"Dhoni"},
];