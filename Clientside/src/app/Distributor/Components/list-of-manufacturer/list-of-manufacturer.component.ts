import { Component, OnInit } from '@angular/core';
import { listOfManufacturer } from './../../Models/list-of-manufacturer';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-list-of-manufacturer',
  templateUrl: './list-of-manufacturer.component.html',
  styleUrls: ['./list-of-manufacturer.component.css']
})
export class ListOfManufacturerComponent implements OnInit {
  displayedColumns: string[] = ['Order Id', 'Manufacturer Name', 'Issue Date', 'Delivery Date','Total Amount','Status'];
  dataSource =  new MatTableDataSource(ELEMENT_DATA);
  
  constructor() { }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {
  }

}
const ELEMENT_DATA: listOfManufacturer[] = [
  { orderId: '1', manufacturerName: 'Avinash', issueDate: new Date('3-25-2020') , deliveryDate: new Date('3-15-2020'), totalAmount: 100000, status: 'Pending'},
  { orderId: '2', manufacturerName: 'Puru', issueDate: new Date('5-21-2020') , deliveryDate: new Date('5-14-2020'), totalAmount: 200000, status: 'Done'},
  { orderId: '3', manufacturerName: 'Rohan', issueDate: new Date('7-13-2020') , deliveryDate: new Date('7-28-2020'), totalAmount: 100000, status: 'Pending'},
  { orderId: '4', manufacturerName: 'Avinash', issueDate: new Date('3-25-2020') , deliveryDate: new Date('3-15-2020'), totalAmount: 100000, status: 'Pending'},
];