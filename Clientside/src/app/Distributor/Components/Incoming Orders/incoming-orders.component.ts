import { IncomingOrders } from './../../Models/incoming-orders';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-incoming-orders',
  templateUrl: './incoming-orders.component.html',
  styleUrls: ['./incoming-orders.component.css']
})
export class IncomingOrdersComponent implements OnInit {
  displayedColumns: string[] = ['Order Id', 'Pharmacist Name', 'Issue Date', 'Delivery Date','Total Amount','Status'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}

const ELEMENT_DATA: IncomingOrders[] = [
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