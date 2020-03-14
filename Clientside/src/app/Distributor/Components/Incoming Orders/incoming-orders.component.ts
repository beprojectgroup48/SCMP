import { IncomingOrders } from './../../Models/incoming-orders';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incoming-orders',
  templateUrl: './incoming-orders.component.html',
  styleUrls: ['./incoming-orders.component.css']
})
export class IncomingOrdersComponent implements OnInit {
  displayedColumns: string[] = ['Order Id', 'Pharmacist Name', 'Issue Date', 'Delivery Date','Total Amount','Status'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}

const ELEMENT_DATA: IncomingOrders[] = [
  { orderId: '1', pharmacistName: 'Avinash', issueDate: new Date(10-2-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 100000, status: 'Pending'},
  { orderId: '2', pharmacistName: 'Puru', issueDate: new Date(10-2-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 200000, status: 'Done'},
  { orderId: '3', pharmacistName: 'Rohan', issueDate: new Date(7-3-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 100000, status: 'Pending'},
  { orderId: '4', pharmacistName: 'Ashish', issueDate: new Date(24-3-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 150000, status: 'Done'},
  { orderId: '1', pharmacistName: 'Avinash', issueDate: new Date(10-2-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 100000, status: 'Pending'},
  { orderId: '2', pharmacistName: 'Puru', issueDate: new Date(10-2-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 200000, status: 'Done'},
  { orderId: '3', pharmacistName: 'Rohan', issueDate: new Date(7-3-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 100000, status: 'Pending'},
  { orderId: '4', pharmacistName: 'Ashish', issueDate: new Date(24-3-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 150000, status: 'Done'},
  { orderId: '1', pharmacistName: 'Avinash', issueDate: new Date(10-2-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 100000, status: 'Pending'},
  { orderId: '2', pharmacistName: 'Puru', issueDate: new Date(10-2-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 200000, status: 'Done'},
  { orderId: '3', pharmacistName: 'Rohan', issueDate: new Date(7-3-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 100000, status: 'Pending'},
  { orderId: '4', pharmacistName: 'Ashish', issueDate: new Date(24-3-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 150000, status: 'Done'},
  { orderId: '1', pharmacistName: 'Avinash', issueDate: new Date(10-2-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 100000, status: 'Pending'},
  { orderId: '2', pharmacistName: 'Puru', issueDate: new Date(10-2-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 200000, status: 'Done'},
  { orderId: '3', pharmacistName: 'Rohan', issueDate: new Date(7-3-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 100000, status: 'Pending'},
  { orderId: '4', pharmacistName: 'Ashish', issueDate: new Date(24-3-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 150000, status: 'Done'},
  { orderId: '1', pharmacistName: 'Avinash', issueDate: new Date(10-2-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 100000, status: 'Pending'},
  { orderId: '2', pharmacistName: 'Puru', issueDate: new Date(10-2-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 200000, status: 'Done'},
  { orderId: '3', pharmacistName: 'Rohan', issueDate: new Date(7-3-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 100000, status: 'Pending'},
  { orderId: '4', pharmacistName: 'Ashish', issueDate: new Date(24-3-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 150000, status: 'Done'},
  { orderId: '1', pharmacistName: 'Avinash', issueDate: new Date(10-2-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 100000, status: 'Pending'},
  { orderId: '2', pharmacistName: 'Puru', issueDate: new Date(10-2-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 200000, status: 'Done'},
  { orderId: '3', pharmacistName: 'Rohan', issueDate: new Date(7-3-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 100000, status: 'Pending'},
  { orderId: '4', pharmacistName: 'Ashish', issueDate: new Date(24-3-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 150000, status: 'Done'},
  { orderId: '1', pharmacistName: 'Avinash', issueDate: new Date(10-2-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 100000, status: 'Pending'},
  { orderId: '2', pharmacistName: 'Puru', issueDate: new Date(10-2-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 200000, status: 'Done'},
  { orderId: '3', pharmacistName: 'Rohan', issueDate: new Date(7-3-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 100000, status: 'Pending'},
  { orderId: '4', pharmacistName: 'Ashish', issueDate: new Date(24-3-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 150000, status: 'Done'},
  { orderId: '1', pharmacistName: 'Avinash', issueDate: new Date(10-2-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 100000, status: 'Pending'},
  { orderId: '2', pharmacistName: 'Puru', issueDate: new Date(10-2-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 200000, status: 'Done'},
  { orderId: '3', pharmacistName: 'Rohan', issueDate: new Date(7-3-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 100000, status: 'Pending'},
  { orderId: '4', pharmacistName: 'Ashish', issueDate: new Date(24-3-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 150000, status: 'Done'},
  { orderId: '1', pharmacistName: 'Avinash', issueDate: new Date(10-2-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 100000, status: 'Pending'},
  { orderId: '2', pharmacistName: 'Puru', issueDate: new Date(10-2-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 200000, status: 'Done'},
  { orderId: '3', pharmacistName: 'Rohan', issueDate: new Date(7-3-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 100000, status: 'Pending'},
  { orderId: '4', pharmacistName: 'Ashish', issueDate: new Date(24-3-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 150000, status: 'Done'},
];