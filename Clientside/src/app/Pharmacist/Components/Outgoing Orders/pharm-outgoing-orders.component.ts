import { PharmacistService } from '../../Services/pharmacist.service';
import { PharmacistOutgoingOrders } from '../../Models/pharm-outgoing-orders';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-pharm-outgoing-orders',
  templateUrl: './pharm-outgoing-orders.component.html',
  styleUrls: ['./pharm-outgoing-orders.component.css']
})
export class PharmacistOutgoingOrdersComponent implements OnInit {
  outgoingOrderList: PharmacistOutgoingOrders[];
  displayedColumns: string[] = ['orderId', 'distributorName', 'issueDate', 'deliveryDate','totalAmount','status'];
  dataSource: any;

    @ViewChild(MatPaginator) paginator: MatPaginator;
  
    constructor(private pharmacistService: PharmacistService) { }
  
    ngOnInit() {
      this.getOutgoingOrderList();
    }

    getOutgoingOrderList(){
        this.pharmacistService.getOutgoingOrders().subscribe(outgoingOrderList =>{
        this.outgoingOrderList = outgoingOrderList;
        for(var i=0;i<this.outgoingOrderList.length;i++)
        {
          this.outgoingOrderList[i].issueDate = new Date(this.outgoingOrderList[i].issueDate);
          this.outgoingOrderList[i].deliveryDate = new Date(this.outgoingOrderList[i].deliveryDate);
        }
        this.dataSource = new MatTableDataSource(this.outgoingOrderList);
        this.dataSource.paginator = this.paginator;
      })
    }
  }
  
  const ELEMENT_DATA2: PharmacistOutgoingOrders[] = [
    { orderId: '1', distributorName: 'Avinash', issueDate: new Date('3-25-2020') , deliveryDate: new Date('3-15-2020'), totalAmount: 100000, status: 'Pending'},
    { orderId: '2', distributorName: 'Puru', issueDate: new Date('5-21-2020') , deliveryDate: new Date('5-14-2020'), totalAmount: 200000, status: 'Done'},
    { orderId: '3', distributorName: 'Rohan', issueDate: new Date('7-13-2020') , deliveryDate: new Date('7-28-2020'), totalAmount: 100000, status: 'Pending'},
    { orderId: '1', distributorName: 'Avinash', issueDate: new Date('3-25-2020') , deliveryDate: new Date('3-15-2020'), totalAmount: 100000, status: 'Pending'},
    { orderId: '2', distributorName: 'Puru', issueDate: new Date('5-21-2020') , deliveryDate: new Date('5-14-2020'), totalAmount: 200000, status: 'Done'},
    { orderId: '3', distributorName: 'Rohan', issueDate: new Date('7-13-2020') , deliveryDate: new Date('7-28-2020'), totalAmount: 100000, status: 'Pending'},
    { orderId: '1', distributorName: 'Avinash', issueDate: new Date('3-25-2020') , deliveryDate: new Date('3-15-2020'), totalAmount: 100000, status: 'Pending'},
    { orderId: '2', distributorName: 'Puru', issueDate: new Date('5-21-2020') , deliveryDate: new Date('5-14-2020'), totalAmount: 200000, status: 'Done'},
    { orderId: '3', distributorName: 'Rohan', issueDate: new Date('7-13-2020') , deliveryDate: new Date('7-28-2020'), totalAmount: 100000, status: 'Pending'},
    { orderId: '1', distributorName: 'Avinash', issueDate: new Date('3-25-2020') , deliveryDate: new Date('3-15-2020'), totalAmount: 100000, status: 'Pending'},
    { orderId: '2', distributorName: 'Puru', issueDate: new Date('5-21-2020') , deliveryDate: new Date('5-14-2020'), totalAmount: 200000, status: 'Done'},
    { orderId: '3', distributorName: 'Rohan', issueDate: new Date('7-13-2020') , deliveryDate: new Date('7-28-2020'), totalAmount: 100000, status: 'Pending'},
]