import { Manufacturer } from '../../../../Manufacturer/Models/manufacturer';
import { DistributorProduct } from '../../../Models/dis-product';
import { DistributorCompleteOrder } from '../../../Models/dis-complete-order';
import { DistributorAddItemsComponent } from '../Add Items/dis-add-items.component';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DistributorSubOrder } from 'src/app/Distributor/Models/dis-sub-order';
import { DistributorService } from '../../../Services/distributor.service';

@Component({
  selector: 'app-dis-order',
  templateUrl: './dis-order.component.html',
  styles: ['./dis-order.component.css']
})
export class DistributorOrderComponent implements OnInit {
  isValid: boolean = true;
  OrderId: String = "123456";
  currentSubOrder: DistributorSubOrder;
  currentSubOrderList: DistributorSubOrder[] = [];
  currentCompleteOrder: DistributorCompleteOrder;
  count: number = 0;
  username: String = "DB76390";
  productList = ELEMENT_DATA;
  dateRe : String;
  manufacturerName1 : String;
  manufacturerUsername1 : String;
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  manufacturersList : Manufacturer[] = ELEMENT_DATA2;

  constructor(private dialog: MatDialog, private distributorService: DistributorService) { }

  ngOnInit() {
    this.currentCompleteOrder = new DistributorCompleteOrder();
    this.currentCompleteOrder.orderId=this.OrderId;
   // this.currentCompleteOrder.distributorUsername = this.username;
    this.currentCompleteOrder.issueDate = new Date();
    this.currentCompleteOrder.dueDate = undefined;
    this.currentCompleteOrder.finalAmount = 0;
    this.currentCompleteOrder.status =  "Pending";
    this.manufacturerName1 =  "0";
    this.manufacturerUsername1 =  "0";
    this.currentCompleteOrder.orders = this.currentSubOrderList;
    this.dateRe = new Date().toDateString();
  }

  updateProductList(ctrl){
    this.currentCompleteOrder.finalAmount = 0;
    this.currentSubOrderList.splice(0, this.currentSubOrderList.length);
    this.currentCompleteOrder.orders.splice(0, this.currentCompleteOrder.orders.length);
    this.count = 0;
    if (ctrl.selectedIndex != 0) {
      this.manufacturerName1 = this.manufacturersList[ctrl.selectedIndex-1].name;
    }
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
    if(this.manufacturerUsername1=="0")
    {
      confirm('Please select the Manufacturer first!');
      return;
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    dialogConfig.data = { productId : "0", productName : "", unitPrice : 0, quantity: undefined, totalAmount : 0, manufacturerusername : this.manufacturerUsername1, manufacturerName : this.manufacturerName1 };
    const dialogRef = this.dialog.open(DistributorAddItemsComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if(!result)
        return;
      var index = this.currentSubOrderList.findIndex(x => x.productId === result.productId);
      if(index != -1)
      {
        this.currentSubOrderList[index].quantity += result.quantity;
        this.currentCompleteOrder.finalAmount -= this.currentSubOrderList[index].totalAmount;
        this.currentSubOrderList[index].totalAmount = this.currentSubOrderList[index].quantity * this.currentSubOrderList[index].unitPrice;
        this.currentCompleteOrder.finalAmount += this.currentSubOrderList[index].totalAmount;
        return;
      }
      this.currentSubOrder = new DistributorSubOrder();
      this.currentSubOrder.productId = result.productId;
      this.currentSubOrder.productName = result.productName;
      this.currentSubOrder.unitPrice = result.unitPrice;
      this.currentSubOrder.quantity = result.quantity;
      this.currentSubOrder.totalAmount=result.totalAmount;
      this.currentSubOrder.manufacturerUsername=this.manufacturerUsername1;
      this.currentSubOrder.manufacturerName=this.manufacturerName1;
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
    dialogConfig.data = { productId : this.currentSubOrderList[orderItemIndex].productId, productName : this.currentSubOrderList[orderItemIndex].productName, unitPrice : this.currentSubOrderList[orderItemIndex].unitPrice, quantity : this.currentSubOrderList[orderItemIndex].quantity,
       totalAmount : this.currentSubOrderList[orderItemIndex].totalAmount, manufacturerusername : this.currentSubOrderList[orderItemIndex].manufacturerUsername, manufacturerName : this.currentSubOrderList[orderItemIndex].manufacturerName };
    const dialogRef = this.dialog.open(DistributorAddItemsComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if(!result)
        return;
      var index = this.currentSubOrderList.findIndex(x => x.productId === result.productId);
      if(index != -1 && index == orderItemIndex)
      {
        this.currentCompleteOrder.finalAmount -= this.currentSubOrderList[orderItemIndex].totalAmount;
        this.currentCompleteOrder.finalAmount += result.totalAmount;
        this.currentSubOrderList[orderItemIndex].quantity = result.quantity;
        this.currentSubOrderList[orderItemIndex].totalAmount = result.totalAmount;
        return;
      }
      else if(index != -1)
      {
        this.currentSubOrderList[index].quantity += result.quantity;
        this.currentCompleteOrder.finalAmount -= this.currentSubOrderList[index].totalAmount;
        this.currentSubOrderList[index].totalAmount = this.currentSubOrderList[index].quantity * this.currentSubOrderList[index].unitPrice;
        this.currentCompleteOrder.finalAmount += this.currentSubOrderList[index].totalAmount;
        this.onDeleteOrderItem(orderItemIndex);
        return;
      }
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
    this.distributorService.placeOrder(this.currentCompleteOrder).subscribe(data =>{
       console.log(data);
    })
  }
}

const ELEMENT_DATA: DistributorProduct[] = [
  { id: "1", name: "Crosin", unitPrice: 100, manufacturerUsername: "MF123456", manufacturerName:"Ganesh"},
  { id: '2', name: 'Trishul', unitPrice: 200, manufacturerUsername: 'MF896412', manufacturerName:'Ramesh'},
  { id: '3', name: 'Pain Killer', unitPrice: 300, manufacturerUsername: 'MF486215', manufacturerName:'Suresh'},
  { id: '4', name: 'Fever', unitPrice: 400, manufacturerUsername: 'MF369412', manufacturerName:'Mukesh'},
  { id: '5', name: 'Cold', unitPrice: 500, manufacturerUsername: 'MF201596', manufacturerName:'Nilesh'},
  { id: '6', name: 'Flu', unitPrice: 600, manufacturerUsername: 'MF963480', manufacturerName:'Hitesh'},
];

const ELEMENT_DATA2: Manufacturer[] = [
  {username: "MF123456",
    email: "manufacturer1@scmp.com",
    password: "password@123",
    name: "Ashok Industries",
    mobileNumber: 8605038260,
    transportAgency: "Tejas Agency",
    modeOfTransport: "Road",
    location: "Pune",
    registrationId: 458961},
    
    {username: "MF564800",
    email: "manufacturer2@scmp.com",
    password: "password@123",
    name: "Kartik Industries",
    mobileNumber: 9648201163,
    transportAgency: "Vikas Agency",
    modeOfTransport: "Road",
    location: "Mumbai",
    registrationId: 789624},

    {username: "MF489651",
    email: "manufacturer3@scmp.com",
    password: "password@123",
    name: "Vikas Industries",
    mobileNumber: 8965214521,
    transportAgency: "Prakash Agency",
    modeOfTransport: "Road",
    location: "Nagar",
    registrationId: 789654},
];