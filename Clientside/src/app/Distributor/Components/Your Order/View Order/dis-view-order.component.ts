import { DistributorShowProductsComponent } from '../Show Products/dis-show-products.component';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { DistributorCompleteOrder } from '../../../Models/dis-complete-order';
import { Component, OnInit } from '@angular/core';
import { DistributorService } from 'src/app/Distributor/Services/distributor.service';

@Component({
  selector: 'app-dis-view-order',
  templateUrl: './dis-view-order.component.html',
  styles: ['./dis-view-order.component.css']
})
export class DistributorViewOrderComponent implements OnInit {

  orderList: DistributorCompleteOrder[] = [];
  PriceFilterdOrderList: DistributorCompleteOrder[] = [];
  StatusFilterdOrderList: DistributorCompleteOrder[] = [];
  DateFilterdOrderList: DistributorCompleteOrder[] = [];

  priceFilterArray: number[] = [];
  priceFilterFlags: boolean[] = [false,false,false,false,false,false];
  priceFilterCount: number = 0;

  statusFilterArray: number[] = [];
  statusFilterFlags: boolean[] = [false,false,false];
  statusFilterCount: number = 0;

  startDate1: Date = undefined;
  endDate1: Date = undefined;
  dateFilterNumber: number = undefined;
  dateFilterFlags: boolean[] = [false,false,false,false,false,false];
  today: Date = new Date();

  commonArray: DistributorCompleteOrder[] = [];
  commonArrayCache: DistributorCompleteOrder[] = [];
  totalFilterCount: number = 0;

  constructor(private dialog: MatDialog, private distributorService: DistributorService) {
    this.getOrders();
   }

  ngOnInit() {
    //this.refreshList();
  }
  
  getOrders() {
    this.distributorService.getOutgoingOrders().subscribe(data=>{
      if(data.listOfOutgoingOrders == undefined)
        return;
      this.orderList = data.listOfOutgoingOrders.orders;
      for(var i=0;i<this.orderList.length;i++)
      {
        this.orderList[i].issueDate = new Date(this.orderList[i].issueDate);
        this.orderList[i].deliveryDate = new Date(this.orderList[i].deliveryDate);
      }
      for(let i=0;i<this.orderList.length;i++){
        this.PriceFilterdOrderList.push(this.orderList[i]);
        this.StatusFilterdOrderList.push(this.orderList[i]);
        this.DateFilterdOrderList.push(this.orderList[i]);
        this.commonArray.push(this.orderList[i]);
      }
    })
  }

  refreshFilterCount(){
    this.totalFilterCount = 0;
    if(this.priceFilterCount != 0)
      this.totalFilterCount = this.totalFilterCount +1;
    if(this.statusFilterCount != 0)
      this.totalFilterCount = this.totalFilterCount +1;
    if(this.dateFilterNumber != undefined)
      this.totalFilterCount = this.totalFilterCount +1;
  }

  clearAllFilters(){
    if(this.priceFilterCount == 0 && this.statusFilterCount == 0 && this.dateFilterNumber == undefined)
      return;
    if(this.priceFilterCount != 0){
      this.PriceFilterdOrderList.splice(0, this.PriceFilterdOrderList.length);
      for(let i=0;i<this.orderList.length;i++)
        this.PriceFilterdOrderList.push(this.orderList[i]);
      this.priceFilterCount = 0;
      this.priceFilterArray.splice(0, this.priceFilterArray.length);
      this.priceFilterFlags.splice(0, 6, false,false,false,false,false,false);
    }
    if(this.statusFilterCount != 0){
      this.StatusFilterdOrderList.splice(0, this.StatusFilterdOrderList.length);
      for(let i=0;i<this.orderList.length;i++)
        this.StatusFilterdOrderList.push(this.orderList[i]);
      this.statusFilterCount = 0;
      this.statusFilterArray.splice(0, this.statusFilterArray.length);
      this.statusFilterFlags.splice(0, 3, false,false,false);
    }
    if(this.dateFilterNumber != undefined){
      this.DateFilterdOrderList.splice(0, this.DateFilterdOrderList.length);
      for(let i=0;i<this.orderList.length;i++)
        this.DateFilterdOrderList.push(this.orderList[i]);
      this.dateFilterNumber = undefined;
      this.startDate1 = undefined;
      this.endDate1 = undefined;
      this.dateFilterFlags.splice(0, 6, false,false,false,false,false,false);
    }
    this.findCommonCache(this.PriceFilterdOrderList, this.StatusFilterdOrderList);
    this.findCommon(this.commonArrayCache, this.DateFilterdOrderList);
    this.refreshFilterCount();
  }

  findCommonCache(a,b){
    this.commonArrayCache.splice(0, this.commonArrayCache.length);
    for(var i=0; i< b.length; i++)
    {
      const f = a.some(e1 => e1.orderId === b[i].orderId);
      if(f)
        this.commonArrayCache.push(b[i]);
    }
  }

  findCommon(a,b){
    this.commonArray.splice(0, this.commonArray.length);
    for(var i=0; i< b.length; i++)
    {
      const f = a.some(e1 => e1.orderId === b[i].orderId);
      if(f)
        this.commonArray.push(b[i]);
    }
  }

  removeCustomDateFilter(){
    if(this.dateFilterNumber == 20){
      this.dateFilterNumber = undefined;
      this.dateFilterFlags[5] = false;
      this.startDate1 = undefined;
      this.endDate1 = undefined;
      this.DateFilterdOrderList.splice(0, this.DateFilterdOrderList.length);
      for(let i=0;i<this.orderList.length;i++)
        this.DateFilterdOrderList.push(this.orderList[i]);
      this.findCommonCache(this.PriceFilterdOrderList, this.StatusFilterdOrderList);
      this.findCommon(this.commonArrayCache, this.DateFilterdOrderList);
      this.refreshFilterCount();
    }
  }

  filterByDate(a){
    if(a == 20 && this.endDate1 == undefined)
      return;
    this.dateFilterFlags.splice(0, 6, false,false,false,false,false,false);
    if(this.dateFilterNumber == a && a != 20){
      this.dateFilterNumber = undefined;
      this.DateFilterdOrderList.splice(0, this.DateFilterdOrderList.length);
      for(let i=0;i<this.orderList.length;i++)
        this.DateFilterdOrderList.push(this.orderList[i]);
      this.findCommonCache(this.PriceFilterdOrderList, this.StatusFilterdOrderList);
      this.findCommon(this.commonArrayCache, this.DateFilterdOrderList);
      this.refreshFilterCount();
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
    this.DateFilterdOrderList.splice(0, this.DateFilterdOrderList.length);
    let indices = this.orderList.map((element,index) => element.issueDate >= a && element.issueDate <= b ? index: '').filter(String);
    for(let i=0;i<indices.length;i++)
      this.DateFilterdOrderList.push(this.orderList[indices[i]]);
    this.findCommonCache(this.PriceFilterdOrderList, this.StatusFilterdOrderList);
    this.findCommon(this.commonArrayCache, this.DateFilterdOrderList);
    this.refreshFilterCount();
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
          this.StatusFilterdOrderList.splice(0, this.StatusFilterdOrderList.length);
        this.statusFilterCount = this.statusFilterCount + 1;
        this.statusFilterArray.push(a);
        let indices = this.orderList.map((element,index) => element.status == b ? index: '').filter(String);
        for(let i=0;i<indices.length;i++)
          this.StatusFilterdOrderList.push(this.orderList[indices[i]]);
      }
      else{
        this.statusFilterCount = this.statusFilterCount - 1;
        this.statusFilterArray.splice(index, 1);
        let indices = this.StatusFilterdOrderList.map((element,index) => element.status == b ? index: '').filter(String);
        for(let i=indices.length-1;i>=0;i--)
          this.StatusFilterdOrderList.splice(Number(indices[i]), 1);
        if(this.statusFilterCount == 0){
          for(let i=0;i<this.orderList.length;i++)
            this.StatusFilterdOrderList.push(this.orderList[i]);
          }
      }
      this.findCommonCache(this.PriceFilterdOrderList, this.StatusFilterdOrderList);
      this.findCommon(this.commonArrayCache, this.DateFilterdOrderList);
      this.refreshFilterCount();
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
          this.PriceFilterdOrderList.splice(0, this.PriceFilterdOrderList.length);
        this.priceFilterCount = this.priceFilterCount + 1;
        this.priceFilterArray.push(c);
        let indices = this.orderList.map((element,index) => element.totalAmount <= b && element.totalAmount > a ? index: '').filter(String);
        for(let i=0;i<indices.length;i++)
          this.PriceFilterdOrderList.push(this.orderList[indices[i]]);
      }
      else{
        this.priceFilterCount = this.priceFilterCount - 1;
        this.priceFilterArray.splice(index, 1);
        let indices = this.PriceFilterdOrderList.map((element,index) => element.totalAmount <= b && element.totalAmount > a ? index: '').filter(String);
        for(let i=indices.length-1;i>=0;i--)
          this.PriceFilterdOrderList.splice(Number(indices[i]), 1);
        if(this.priceFilterCount == 0){
          for(let i=0;i<this.orderList.length;i++)
            this.PriceFilterdOrderList.push(this.orderList[i]);
          }
      }
      this.findCommonCache(this.PriceFilterdOrderList, this.StatusFilterdOrderList);
      this.findCommon(this.commonArrayCache, this.DateFilterdOrderList);
      this.refreshFilterCount();
  }

  /*refreshList() {
    this.service.getOrderList().then(res => this.orderList = res);
  }*/

  showProducts(i: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    //dialogConfig.maxHeight = "50%";
    dialogConfig.data = this.commonArray[i].subOrders;
    this.dialog.open(DistributorShowProductsComponent, dialogConfig);
  }

  onDeleteOrder(i: number) {
    if (confirm('Are you sure to delete this record?')) {
      //this.service.deleteOrder(id).then(res => {
        //this.refreshList();
      //});
      var index = this.PriceFilterdOrderList.findIndex(e1 => e1.orderId === this.commonArray[i].orderId);
      if(index != -1)
        this.PriceFilterdOrderList.splice(index, 1);
      
      index = this.StatusFilterdOrderList.findIndex(e1 => e1.orderId === this.commonArray[i].orderId);
      if(index != -1)
        this.StatusFilterdOrderList.splice(index, 1);

      index = this.DateFilterdOrderList.findIndex(e1 => e1.orderId === this.commonArray[i].orderId);
      if(index != -1)
        this.DateFilterdOrderList.splice(index, 1);

      index = this.orderList.findIndex(e1 => e1.orderId === this.commonArray[i].orderId);
      if(index != -1)
        this.orderList.splice(index, 1);

      this.findCommonCache(this.PriceFilterdOrderList, this.StatusFilterdOrderList);
      this.findCommon(this.commonArrayCache, this.DateFilterdOrderList);
    }
  }
}
/*
const ELEMENT_DATA: DistributorCompleteOrder[] = [
  { orderId: "1324", subOrders: undefined, issueDate: new Date('2-12-2020'), deliveryDate: new Date('4-12-2020'), totalAmount: 4000, status: "Pending"},
  { orderId: "2433", subOrders: undefined, issueDate: new Date('3-23-2020'), deliveryDate: new Date('4-12-2020'), totalAmount: 5000, status: "Done"},
  { orderId: "3234", subOrders: undefined, issueDate: new Date('3-13-2020'), deliveryDate: new Date('4-12-2020'), totalAmount: 2000, status: "Pending"},
  { orderId: "4224", subOrders: undefined, issueDate: new Date('2-16-2020'), deliveryDate: new Date('4-12-2020'), totalAmount: 9000, status: "Processing"},
  { orderId: "5543", subOrders: undefined, issueDate: new Date('1-8-2020'), deliveryDate: new Date('4-12-2020'), totalAmount: 300, status: "Pending"},
];

const ELEMENT_DATA2: DistributorSubOrder[] = [
  { productId: "2386", productName: "Crosin", unitPrice: 100, quantity: 7, totalAmount: 700, manufacturerUsername: "MF123456", manufacturerName:"Sachin"},
  { productId: "4865", productName: "Fever", unitPrice: 200, quantity: 4, totalAmount: 800, manufacturerUsername: "MF896412", manufacturerName:"Sehwag"},
  { productId: "1956", productName: "Cold", unitPrice: 300, quantity: 2, totalAmount: 600, manufacturerUsername: "MF489210", manufacturerName:"Virat"},
  { productId: "2020", productName: "Flu", unitPrice: 400, quantity: 6, totalAmount: 2400, manufacturerUsername: "MF023694", manufacturerName:"Dhoni"},
];*/