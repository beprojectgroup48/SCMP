import { PharmacistOutgoingOrders } from '../../Models/pharm-outgoing-orders';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { PharmacistService } from '../../Services/pharmacist.service';


@Component({
  selector: 'app-pharm-dashboard',
  templateUrl: './pharm-dashboard.component.html',
  styleUrls: ['./pharm-dashboard.component.css']
})

export class PharmacistDashboardComponent implements OnInit {

  outgoingOrderList: PharmacistOutgoingOrders[];
  displayedColumns: string[] = ['orderId', 'distributorName', 'issueDate', 'deliveryDate','totalAmount','status'];
  dataSource: any;
  PieChart=[];

  constructor(private router: Router,private pharmacistService: PharmacistService) { }

  getOutgoingOrderList(){
    this.pharmacistService.getOutgoingOrders().subscribe(outgoingOrderList =>{
    this.outgoingOrderList = outgoingOrderList;
    for(var i=0;i<this.outgoingOrderList.length;i++)
    {
        this.outgoingOrderList[i].issueDate = new Date(this.outgoingOrderList[i].issueDate);
        this.outgoingOrderList[i].deliveryDate = new Date(this.outgoingOrderList[i].deliveryDate);
    }
    this.outgoingOrderList.splice(3);
    this.dataSource = new MatTableDataSource(this.outgoingOrderList);
  })
}

  ngOnInit() {

    this.getOutgoingOrderList();

this.PieChart = new Chart('pieChart', {
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

    gotoOutgoing(){
        this.router.navigate(['/pharmacist/dashboard/outgoing-orders']);
    }
}

const ELEMENT_DATA2: PharmacistOutgoingOrders[] = [
    { orderId: '1', distributorName: 'Avinash', issueDate: new Date('3-25-2020') , deliveryDate: new Date('3-15-2020'), totalAmount: 100000, status: 'Pending'},
    { orderId: '2', distributorName: 'Puru', issueDate: new Date('5-21-2020') , deliveryDate: new Date('5-14-2020'), totalAmount: 200000, status: 'Done'},
    { orderId: '3', distributorName: 'Rohan', issueDate: new Date('7-13-2020') , deliveryDate: new Date('7-28-2020'), totalAmount: 100000, status: 'Pending'},
]