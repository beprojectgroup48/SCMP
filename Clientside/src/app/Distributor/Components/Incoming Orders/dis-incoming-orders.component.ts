import { DistributorIncomingOrders } from '../../Models/dis-incoming-orders';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { DistributorService } from '../../Services/distributor.service';

@Component({
  selector: 'app-dis-incoming-orders',
  templateUrl: './dis-incoming-orders.component.html',
  styleUrls: ['./dis-incoming-orders.component.css']
})
export class DistributorIncomingOrdersComponent implements OnInit {
  incomingOrderList: DistributorIncomingOrders[];
  displayedColumns: string[] = ['orderId', 'pharmacistName', 'issueDate', 'deliveryDate','totalAmount','status'];
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private distributorService: DistributorService) { }

  ngOnInit() {
    this.getIncomingOrderList();
  }

  getIncomingOrderList(){
    this.distributorService.getIncomingOrders().subscribe(incomingOrderList =>{
      this.incomingOrderList = incomingOrderList;
      for(var i=0;i<this.incomingOrderList.length;i++)
      {
        this.incomingOrderList[i].issueDate = new Date(this.incomingOrderList[i].issueDate);
        this.incomingOrderList[i].deliveryDate = new Date(this.incomingOrderList[i].deliveryDate);
      }
      this.dataSource = new MatTableDataSource(this.incomingOrderList);
      this.dataSource.paginator = this.paginator;
    })
  }
}

const ELEMENT_DATA: DistributorIncomingOrders[] = [
  { orderId: '1', pharmacistName: 'Avinash', issueDate: new Date('3-10-2020') , deliveryDate: new Date('3-15-2020'), totalAmount: 100000, status: 'Pending'},
  { orderId: '2', pharmacistName: 'Puru', issueDate: new Date('5-2-2020') , deliveryDate: new Date('5-14-2020'), totalAmount: 200000, status: 'Done'},
  { orderId: '3', pharmacistName: 'Rohan', issueDate: new Date('7-21-2020') , deliveryDate: new Date('7-29-2020'), totalAmount: 100000, status: 'Pending'},
  { orderId: '1', pharmacistName: 'Avinash', issueDate: new Date('3-10-2020') , deliveryDate: new Date('3-15-2020'), totalAmount: 100000, status: 'Pending'},
  { orderId: '2', pharmacistName: 'Puru', issueDate: new Date('5-2-2020') , deliveryDate: new Date('5-14-2020'), totalAmount: 200000, status: 'Done'},
  { orderId: '3', pharmacistName: 'Rohan', issueDate: new Date('7-21-2020') , deliveryDate: new Date('7-29-2020'), totalAmount: 100000, status: 'Pending'},
  { orderId: '1', pharmacistName: 'Avinash', issueDate: new Date('3-10-2020') , deliveryDate: new Date('3-15-2020'), totalAmount: 100000, status: 'Pending'},
  { orderId: '2', pharmacistName: 'Puru', issueDate: new Date('5-2-2020') , deliveryDate: new Date('5-14-2020'), totalAmount: 200000, status: 'Done'},
  { orderId: '3', pharmacistName: 'Rohan', issueDate: new Date('7-21-2020') , deliveryDate: new Date('7-29-2020'), totalAmount: 100000, status: 'Pending'},
  { orderId: '1', pharmacistName: 'Avinash', issueDate: new Date('3-10-2020') , deliveryDate: new Date('3-15-2020'), totalAmount: 100000, status: 'Pending'},
  { orderId: '2', pharmacistName: 'Puru', issueDate: new Date('5-2-2020') , deliveryDate: new Date('5-14-2020'), totalAmount: 200000, status: 'Done'},
  { orderId: '3', pharmacistName: 'Rohan', issueDate: new Date('7-21-2020') , deliveryDate: new Date('7-29-2020'), totalAmount: 100000, status: 'Pending'},
  { orderId: '1', pharmacistName: 'Avinash', issueDate: new Date('3-10-2020') , deliveryDate: new Date('3-15-2020'), totalAmount: 100000, status: 'Pending'},
  { orderId: '2', pharmacistName: 'Puru', issueDate: new Date('5-2-2020') , deliveryDate: new Date('5-14-2020'), totalAmount: 200000, status: 'Done'},
  { orderId: '3', pharmacistName: 'Rohan', issueDate: new Date('7-21-2020') , deliveryDate: new Date('7-29-2020'), totalAmount: 100000, status: 'Pending'},
  { orderId: '1', pharmacistName: 'Avinash', issueDate: new Date('3-10-2020') , deliveryDate: new Date('3-15-2020'), totalAmount: 100000, status: 'Pending'},
  { orderId: '2', pharmacistName: 'Puru', issueDate: new Date('5-2-2020') , deliveryDate: new Date('5-14-2020'), totalAmount: 200000, status: 'Done'},
  { orderId: '3', pharmacistName: 'Rohan', issueDate: new Date('7-21-2020') , deliveryDate: new Date('7-29-2020'), totalAmount: 100000, status: 'Pending'},
  { orderId: '1', pharmacistName: 'Avinash', issueDate: new Date('3-10-2020') , deliveryDate: new Date('3-15-2020'), totalAmount: 100000, status: 'Pending'},
  { orderId: '2', pharmacistName: 'Puru', issueDate: new Date('5-2-2020') , deliveryDate: new Date('5-14-2020'), totalAmount: 200000, status: 'Done'},
  { orderId: '3', pharmacistName: 'Rohan', issueDate: new Date('7-21-2020') , deliveryDate: new Date('7-29-2020'), totalAmount: 100000, status: 'Pending'},
  { orderId: '1', pharmacistName: 'Avinash', issueDate: new Date('3-10-2020') , deliveryDate: new Date('3-15-2020'), totalAmount: 100000, status: 'Pending'},
  { orderId: '2', pharmacistName: 'Puru', issueDate: new Date('5-2-2020') , deliveryDate: new Date('5-14-2020'), totalAmount: 200000, status: 'Done'},
  { orderId: '3', pharmacistName: 'Rohan', issueDate: new Date('7-21-2020') , deliveryDate: new Date('7-29-2020'), totalAmount: 100000, status: 'Pending'},
  { orderId: '1', pharmacistName: 'Avinash', issueDate: new Date('3-10-2020') , deliveryDate: new Date('3-15-2020'), totalAmount: 100000, status: 'Pending'},
  { orderId: '2', pharmacistName: 'Puru', issueDate: new Date('5-2-2020') , deliveryDate: new Date('5-14-2020'), totalAmount: 200000, status: 'Done'},
  { orderId: '3', pharmacistName: 'Rohan', issueDate: new Date('7-21-2020') , deliveryDate: new Date('7-29-2020'), totalAmount: 100000, status: 'Pending'},
  { orderId: '1', pharmacistName: 'Avinash', issueDate: new Date('3-10-2020') , deliveryDate: new Date('3-15-2020'), totalAmount: 100000, status: 'Pending'},
  { orderId: '2', pharmacistName: 'Puru', issueDate: new Date('5-2-2020') , deliveryDate: new Date('5-14-2020'), totalAmount: 200000, status: 'Done'},
  { orderId: '3', pharmacistName: 'Rohan', issueDate: new Date('7-21-2020') , deliveryDate: new Date('7-29-2020'), totalAmount: 100000, status: 'Pending'},
  { orderId: '1', pharmacistName: 'Avinash', issueDate: new Date('3-10-2020') , deliveryDate: new Date('3-15-2020'), totalAmount: 100000, status: 'Pending'},
  { orderId: '2', pharmacistName: 'Puru', issueDate: new Date('5-2-2020') , deliveryDate: new Date('5-14-2020'), totalAmount: 200000, status: 'Done'},
  { orderId: '3', pharmacistName: 'Rohan', issueDate: new Date('7-21-2020') , deliveryDate: new Date('7-29-2020'), totalAmount: 100000, status: 'Pending'},
  { orderId: '1', pharmacistName: 'Avinash', issueDate: new Date('3-10-2020') , deliveryDate: new Date('3-15-2020'), totalAmount: 100000, status: 'Pending'},
  { orderId: '2', pharmacistName: 'Puru', issueDate: new Date('5-2-2020') , deliveryDate: new Date('5-14-2020'), totalAmount: 200000, status: 'Done'},
  { orderId: '3', pharmacistName: 'Rohan', issueDate: new Date('7-21-2020') , deliveryDate: new Date('7-29-2020'), totalAmount: 100000, status: 'Pending'},
];