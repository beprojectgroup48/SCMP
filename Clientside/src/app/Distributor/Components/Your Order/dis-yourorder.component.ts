import { OutgoingOrders } from './../../Models/outgoing-orders';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-dis-yourorder',
  templateUrl: './dis-yourorder.component.html',
  styleUrls: ['./dis-yourorder.component.css']
})
export class DistributorYourOrderComponent implements OnInit {
  displayedColumns: string[] = ['Order Id', 'Manufacturer Name', 'Issue Date', 'Delivery Date','Total Amount','Status'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
    constructor() { }
  
    ngOnInit() {
    }

    ngAfterViewInit(): void {
      this.dataSource.paginator = this.paginator;
    }
  
  }
  
  const ELEMENT_DATA: OutgoingOrders[] = [
    { orderId: '1', manufacturerName: 'Avinash', issueDate: new Date('3-25-2020') , deliveryDate: new Date('3-15-2020'), totalAmount: 100000, status: 'Pending'},
    { orderId: '2', manufacturerName: 'Puru', issueDate: new Date('5-21-2020') , deliveryDate: new Date('5-14-2020'), totalAmount: 200000, status: 'Done'},
    { orderId: '3', manufacturerName: 'Rohan', issueDate: new Date('7-13-2020') , deliveryDate: new Date('7-28-2020'), totalAmount: 100000, status: 'Pending'},
    { orderId: '1', manufacturerName: 'Avinash', issueDate: new Date('3-25-2020') , deliveryDate: new Date('3-15-2020'), totalAmount: 100000, status: 'Pending'},
    { orderId: '2', manufacturerName: 'Puru', issueDate: new Date('5-21-2020') , deliveryDate: new Date('5-14-2020'), totalAmount: 200000, status: 'Done'},
    { orderId: '3', manufacturerName: 'Rohan', issueDate: new Date('7-13-2020') , deliveryDate: new Date('7-28-2020'), totalAmount: 100000, status: 'Pending'},
    { orderId: '1', manufacturerName: 'Avinash', issueDate: new Date('3-25-2020') , deliveryDate: new Date('3-15-2020'), totalAmount: 100000, status: 'Pending'},
    { orderId: '2', manufacturerName: 'Puru', issueDate: new Date('5-21-2020') , deliveryDate: new Date('5-14-2020'), totalAmount: 200000, status: 'Done'},
    { orderId: '3', manufacturerName: 'Rohan', issueDate: new Date('7-13-2020') , deliveryDate: new Date('7-28-2020'), totalAmount: 100000, status: 'Pending'},
    { orderId: '1', manufacturerName: 'Avinash', issueDate: new Date('3-25-2020') , deliveryDate: new Date('3-15-2020'), totalAmount: 100000, status: 'Pending'},
    { orderId: '2', manufacturerName: 'Puru', issueDate: new Date('5-21-2020') , deliveryDate: new Date('5-14-2020'), totalAmount: 200000, status: 'Done'},
    { orderId: '3', manufacturerName: 'Rohan', issueDate: new Date('7-13-2020') , deliveryDate: new Date('7-28-2020'), totalAmount: 100000, status: 'Pending'},
    { orderId: '1', manufacturerName: 'Avinash', issueDate: new Date('3-25-2020') , deliveryDate: new Date('3-15-2020'), totalAmount: 100000, status: 'Pending'},
    { orderId: '2', manufacturerName: 'Puru', issueDate: new Date('5-21-2020') , deliveryDate: new Date('5-14-2020'), totalAmount: 200000, status: 'Done'},
    { orderId: '3', manufacturerName: 'Rohan', issueDate: new Date('7-13-2020') , deliveryDate: new Date('7-28-2020'), totalAmount: 100000, status: 'Pending'},
    { orderId: '1', manufacturerName: 'Avinash', issueDate: new Date('3-25-2020') , deliveryDate: new Date('3-15-2020'), totalAmount: 100000, status: 'Pending'},
    { orderId: '2', manufacturerName: 'Puru', issueDate: new Date('5-21-2020') , deliveryDate: new Date('5-14-2020'), totalAmount: 200000, status: 'Done'},
    { orderId: '3', manufacturerName: 'Rohan', issueDate: new Date('7-13-2020') , deliveryDate: new Date('7-28-2020'), totalAmount: 100000, status: 'Pending'},
    { orderId: '1', manufacturerName: 'Avinash', issueDate: new Date('3-25-2020') , deliveryDate: new Date('3-15-2020'), totalAmount: 100000, status: 'Pending'},
    { orderId: '2', manufacturerName: 'Puru', issueDate: new Date('5-21-2020') , deliveryDate: new Date('5-14-2020'), totalAmount: 200000, status: 'Done'},
    { orderId: '3', manufacturerName: 'Rohan', issueDate: new Date('7-13-2020') , deliveryDate: new Date('7-28-2020'), totalAmount: 100000, status: 'Pending'},
    { orderId: '1', manufacturerName: 'Avinash', issueDate: new Date('3-25-2020') , deliveryDate: new Date('3-15-2020'), totalAmount: 100000, status: 'Pending'},
    { orderId: '2', manufacturerName: 'Puru', issueDate: new Date('5-21-2020') , deliveryDate: new Date('5-14-2020'), totalAmount: 200000, status: 'Done'},
    { orderId: '3', manufacturerName: 'Rohan', issueDate: new Date('7-13-2020') , deliveryDate: new Date('7-28-2020'), totalAmount: 100000, status: 'Pending'},
    { orderId: '1', manufacturerName: 'Avinash', issueDate: new Date('3-25-2020') , deliveryDate: new Date('3-15-2020'), totalAmount: 100000, status: 'Pending'},
    { orderId: '2', manufacturerName: 'Puru', issueDate: new Date('5-21-2020') , deliveryDate: new Date('5-14-2020'), totalAmount: 200000, status: 'Done'},
    { orderId: '3', manufacturerName: 'Rohan', issueDate: new Date('7-13-2020') , deliveryDate: new Date('7-28-2020'), totalAmount: 100000, status: 'Pending'},
    { orderId: '1', manufacturerName: 'Avinash', issueDate: new Date('3-25-2020') , deliveryDate: new Date('3-15-2020'), totalAmount: 100000, status: 'Pending'},
    { orderId: '2', manufacturerName: 'Puru', issueDate: new Date('5-21-2020') , deliveryDate: new Date('5-14-2020'), totalAmount: 200000, status: 'Done'},
    { orderId: '3', manufacturerName: 'Rohan', issueDate: new Date('7-13-2020') , deliveryDate: new Date('7-28-2020'), totalAmount: 100000, status: 'Pending'},
    { orderId: '1', manufacturerName: 'Avinash', issueDate: new Date('3-25-2020') , deliveryDate: new Date('3-15-2020'), totalAmount: 100000, status: 'Pending'},
    { orderId: '2', manufacturerName: 'Puru', issueDate: new Date('5-21-2020') , deliveryDate: new Date('5-14-2020'), totalAmount: 200000, status: 'Done'},
    { orderId: '3', manufacturerName: 'Rohan', issueDate: new Date('7-13-2020') , deliveryDate: new Date('7-28-2020'), totalAmount: 100000, status: 'Pending'},
    { orderId: '1', manufacturerName: 'Avinash', issueDate: new Date('3-25-2020') , deliveryDate: new Date('3-15-2020'), totalAmount: 100000, status: 'Pending'},
    { orderId: '2', manufacturerName: 'Puru', issueDate: new Date('5-21-2020') , deliveryDate: new Date('5-14-2020'), totalAmount: 200000, status: 'Done'},
    { orderId: '3', manufacturerName: 'Rohan', issueDate: new Date('7-13-2020') , deliveryDate: new Date('7-28-2020'), totalAmount: 100000, status: 'Pending'},
  ];