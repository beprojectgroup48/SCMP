
import { MatTableDataSource } from '@angular/material';
import { IncomingOrders } from '../../Models/incoming-orders';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ManufacturerService } from '../../Services/manufacturer.service';


@Component({
  selector: 'app-manu-dashboard',
  templateUrl: './manu-dashboard.component.html',
  styleUrls: ['./manu-dashboard.component.css']
})

export class ManufacturerDashboardComponent implements OnInit {

  incomingOrderList: IncomingOrders[];
  displayedColumns1: string[] = ['orderId', 'pharmacistName', 'issueDate', 'deliveryDate','totalAmount','status'];
  dataSource1: any;
  // outgoingOrderList: OutgoingOrders[];
  // displayedColumns2: string[] = ['orderId', 'manufacturerName', 'issueDate', 'deliveryDate','totalAmount','status'];
  dataSource2: any;
  PieChart=[];
  // PieChart2=[];

  constructor(private router: Router,private distributorService: ManufacturerService) { }

  getIncomingOrderList(){
      this.distributorService.getIncomingOrders().subscribe(incomingOrderList =>{
      this.incomingOrderList = incomingOrderList;
      for(var i=0;i<this.incomingOrderList.length;i++)
    {
        this.incomingOrderList[i].issueDate = new Date(this.incomingOrderList[i].issueDate);
        this.incomingOrderList[i].deliveryDate = new Date(this.incomingOrderList[i].deliveryDate);
    }
      this.incomingOrderList.splice(3);
      this.dataSource1 = new MatTableDataSource(this.incomingOrderList);
    })
  }

//   getOutgoingOrderList(){
//     this.distributorService.getOutgoingOrders().subscribe(outgoingOrderList =>{
//     this.outgoingOrderList = outgoingOrderList;
//     for(var i=0;i<this.outgoingOrderList.length;i++)
//     {
//         this.outgoingOrderList[i].issueDate = new Date(this.outgoingOrderList[i].issueDate);
//         this.outgoingOrderList[i].deliveryDate = new Date(this.outgoingOrderList[i].deliveryDate);
//     }
//     this.outgoingOrderList.splice(3);
//     this.dataSource2 = new MatTableDataSource(this.outgoingOrderList);
//   })
// }

  ngOnInit() {

    this.getIncomingOrderList();
    //this.getOutgoingOrderList();
    
this.PieChart = new Chart('pieChart', {
  type: 'pie',
data: {
 labels: ["Completed", "Pending", "Delayed"],
 datasets: [{
     label: '# of Votes',
     data: [9, 7, 3],
     backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
     hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870"],
     borderWidth: 1
 }]
}, 
options: {
 scales: {
     yAxes: [{
         ticks: {
             beginAtZero:true
         }
     }]
 }
}
});

// this.PieChart2 = new Chart('pieChart2', {
//     type: 'pie',
//   data: {
//    labels: ["Completed", "Pending", "Delayed"],
//    datasets: [{
//        label: '# of Votes',
//        data: [19, 17, 13],
//        backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
//      hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870"],
//        borderWidth: 1
//    }]
//   }, 
//   options: {
//    scales: {
//        yAxes: [{
//            ticks: {
//                beginAtZero:true
//            }
//        }]
//    }
//   }
//   });
  
}
    gotoIncoming(){
        this.router.navigate(['/manufacturer/dashboard/incoming-orders']);
    }

    // gotoOutgoing(){
    //     this.router.navigate(['/distributor/dashboard/outgoing-orders']);
    // }
}

const ELEMENT_DATA: IncomingOrders[] = [
    { orderId: '1', pharmacistName: 'Avinash', issueDate: new Date('3-10-2020') , deliveryDate: new Date('3-15-2020'), totalAmount: 100000, status: 'Pending'},
    { orderId: '2', pharmacistName: 'Puru', issueDate: new Date('5-2-2020') , deliveryDate: new Date('5-14-2020'), totalAmount: 200000, status: 'Done'},
    { orderId: '3', pharmacistName: 'Rohan', issueDate: new Date('7-21-2020') , deliveryDate: new Date('7-29-2020'), totalAmount: 100000, status: 'Pending'},
]

// const ELEMENT_DATA2: OutgoingOrders[] = [
//     { orderId: '1', manufacturerName: 'Avinash', issueDate: new Date('3-25-2020') , deliveryDate: new Date('3-15-2020'), totalAmount: 100000, status: 'Pending'},
//     { orderId: '2', manufacturerName: 'Puru', issueDate: new Date('5-21-2020') , deliveryDate: new Date('5-14-2020'), totalAmount: 200000, status: 'Done'},
//     { orderId: '3', manufacturerName: 'Rohan', issueDate: new Date('7-13-2020') , deliveryDate: new Date('7-28-2020'), totalAmount: 100000, status: 'Pending'},
// ]