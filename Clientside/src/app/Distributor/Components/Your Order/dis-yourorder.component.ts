import { OutgoingOrders } from './../../Models/outgoing-orders';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dis-yourorder',
  templateUrl: './dis-yourorder.component.html',
  styleUrls: ['./dis-yourorder.component.css']
})
export class DistributorYourOrderComponent implements OnInit {
  displayedColumns: string[] = ['Order Id', 'Manufacturer Name', 'Issue Date', 'Delivery Date','Total Amount','Status'];
  dataSource = ELEMENT_DATA;
  
    constructor() { }
  
    ngOnInit() {
    }
  
  }
  
  const ELEMENT_DATA: OutgoingOrders[] = [
    { orderId: '1', manufacturerName: 'Avinash', issueDate: new Date(10-2-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 100000, status: 'Pending'},
    { orderId: '2', manufacturerName: 'Puru', issueDate: new Date(10-2-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 200000, status: 'Done'},
    { orderId: '3', manufacturerName: 'Rohan', issueDate: new Date(7-3-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 100000, status: 'Pending'},
    { orderId: '4', manufacturerName: 'Ashish', issueDate: new Date(24-3-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 150000, status: 'Done'},
    { orderId: '1', manufacturerName: 'Avinash', issueDate: new Date(10-2-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 100000, status: 'Pending'},
    { orderId: '2', manufacturerName: 'Puru', issueDate: new Date(10-2-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 200000, status: 'Done'},
    { orderId: '3', manufacturerName: 'Rohan', issueDate: new Date(7-3-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 100000, status: 'Pending'},
    { orderId: '4', manufacturerName: 'Ashish', issueDate: new Date(24-3-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 150000, status: 'Done'},
    { orderId: '1', manufacturerName: 'Avinash', issueDate: new Date(10-2-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 100000, status: 'Pending'},
    { orderId: '2', manufacturerName: 'Puru', issueDate: new Date(10-2-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 200000, status: 'Done'},
    { orderId: '3', manufacturerName: 'Rohan', issueDate: new Date(7-3-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 100000, status: 'Pending'},
    { orderId: '4', manufacturerName: 'Ashish', issueDate: new Date(24-3-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 150000, status: 'Done'},
    { orderId: '1', manufacturerName: 'Avinash', issueDate: new Date(10-2-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 100000, status: 'Pending'},
    { orderId: '2', manufacturerName: 'Puru', issueDate: new Date(10-2-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 200000, status: 'Done'},
    { orderId: '3', manufacturerName: 'Rohan', issueDate: new Date(7-3-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 100000, status: 'Pending'},
    { orderId: '4', manufacturerName: 'Ashish', issueDate: new Date(24-3-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 150000, status: 'Done'},
    { orderId: '1', manufacturerName: 'Avinash', issueDate: new Date(10-2-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 100000, status: 'Pending'},
    { orderId: '2', manufacturerName: 'Puru', issueDate: new Date(10-2-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 200000, status: 'Done'},
    { orderId: '3', manufacturerName: 'Rohan', issueDate: new Date(7-3-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 100000, status: 'Pending'},
    { orderId: '4', manufacturerName: 'Ashish', issueDate: new Date(24-3-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 150000, status: 'Done'},
    { orderId: '1', manufacturerName: 'Avinash', issueDate: new Date(10-2-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 100000, status: 'Pending'},
    { orderId: '2', manufacturerName: 'Puru', issueDate: new Date(10-2-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 200000, status: 'Done'},
    { orderId: '3', manufacturerName: 'Rohan', issueDate: new Date(7-3-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 100000, status: 'Pending'},
    { orderId: '4', manufacturerName: 'Ashish', issueDate: new Date(24-3-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 150000, status: 'Done'},
    { orderId: '1', manufacturerName: 'Avinash', issueDate: new Date(10-2-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 100000, status: 'Pending'},
    { orderId: '2', manufacturerName: 'Puru', issueDate: new Date(10-2-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 200000, status: 'Done'},
    { orderId: '3', manufacturerName: 'Rohan', issueDate: new Date(7-3-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 100000, status: 'Pending'},
    { orderId: '4', manufacturerName: 'Ashish', issueDate: new Date(24-3-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 150000, status: 'Done'},
    { orderId: '1', manufacturerName: 'Avinash', issueDate: new Date(10-2-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 100000, status: 'Pending'},
    { orderId: '2', manufacturerName: 'Puru', issueDate: new Date(10-2-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 200000, status: 'Done'},
    { orderId: '3', manufacturerName: 'Rohan', issueDate: new Date(7-3-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 100000, status: 'Pending'},
    { orderId: '4', manufacturerName: 'Ashish', issueDate: new Date(24-3-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 150000, status: 'Done'},
    { orderId: '1', manufacturerName: 'Avinash', issueDate: new Date(10-2-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 100000, status: 'Pending'},
    { orderId: '2', manufacturerName: 'Puru', issueDate: new Date(10-2-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 200000, status: 'Done'},
    { orderId: '3', manufacturerName: 'Rohan', issueDate: new Date(7-3-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 100000, status: 'Pending'},
    { orderId: '4', manufacturerName: 'Ashish', issueDate: new Date(24-3-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 150000, status: 'Done'},
  ];