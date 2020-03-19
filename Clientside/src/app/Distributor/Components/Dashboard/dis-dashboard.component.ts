import { OutgoingOrders } from './../../Models/outgoing-orders';
import { MatTableDataSource } from '@angular/material';
import { IncomingOrders } from './../../Models/incoming-orders';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { DistributorService } from '../../Services/distributor.service';


@Component({
  selector: 'app-dis-dashboard',
  templateUrl: './dis-dashboard.component.html',
  styleUrls: ['./dis-dashboard.component.css']
})

export class DistributorDashboardComponent implements OnInit {

  incomingOrderList: IncomingOrders[];
  displayedColumns1: string[] = ['orderId', 'pharmacistName', 'issueDate', 'deliveryDate','totalAmount','status'];
  dataSource1: any;
  outgoingOrderList: OutgoingOrders[];
  displayedColumns2: string[] = ['orderId', 'manufacturerName', 'issueDate', 'deliveryDate','totalAmount','status'];
  dataSource2: any;
  PieChart=[];
  PieChart2=[];

  constructor(private router: Router,private distributorService: DistributorService) { }

  getIncomingOrderList(){
      this.distributorService.getIncomingOrders().subscribe(incomingOrderList =>{
      this.incomingOrderList = incomingOrderList;
      this.dataSource1 = new MatTableDataSource(this.incomingOrderList);
    })
  }

  getOutgoingOrderList(){
    this.distributorService.getOutgoingOrders().subscribe(outgoingOrderList =>{
    this.outgoingOrderList = outgoingOrderList;
    this.dataSource2 = new MatTableDataSource(this.outgoingOrderList);
  })
}

  ngOnInit() {

    this.getIncomingOrderList();
    this.getOutgoingOrderList();
    
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

this.PieChart2 = new Chart('pieChart2', {
    type: 'pie',
  data: {
   labels: ["Completed", "Pending", "Delayed"],
   datasets: [{
       label: '# of Votes',
       data: [19, 17, 13],
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
  
}
    gotoIncoming(){
        this.router.navigate(['/distributor/dashboard/incoming-orders']);
    }

    gotoOutgoing(){
        this.router.navigate(['/distributor/dashboard/outgoing-orders']);
    }
}
