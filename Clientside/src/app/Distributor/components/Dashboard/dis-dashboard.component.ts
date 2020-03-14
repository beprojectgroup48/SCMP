import { PeriodicElement } from './../../Models/incoming-orders';

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { manufacturer } from '../../../Manufacturer/Models/manufacturer';
import { pharmacist } from '../../../Pharmacist/Models/pharmacist';
import { incomingOrders } from '../../models/incomingOrders';
import { outgoingOrders } from '../../models/outgoingOrders';
import { DistributorService } from '../../services/distributor.service';

@Component({
  selector: 'app-dis-dashboard',
  templateUrl: './dis-dashboard.component.html',
  styleUrls: ['./dis-dashboard.component.css']
})

export class DistributorDashboardComponent implements OnInit {
  displayedColumns: string[] = ['order', 'name', 'idate', 'ddate','amt','status'];
  dataSource = ELEMENT_DATA;
  PieChart=[];
  PieChart2=[];
 
  manufacturerList: manufacturer[] = [];
  pharmacistList: pharmacist[] = [];
  incomingOrders: incomingOrders[] = [];
  outgoingOrders: outgoingOrders[] = [];

  constructor(private distributorService: DistributorService , private router: Router) { }
 

  getManufacturerList(){
    this.distributorService.getManufacturers().subscribe(manufacturerList =>{
      this.manufacturerList = manufacturerList;
    });
  }
  getPharmacistList(){
    this.distributorService.getPharmacists().subscribe(pharmacistList =>{
      this.pharmacistList = pharmacistList;
    })  
  }
  getIncomingOrders() {
    this.distributorService.getIncomingOrders().subscribe(incomingOrders =>{
      this.incomingOrders = incomingOrders;
    });
  }
  getOutgoingOrders(){
    this.distributorService.getOutgoingOrders().subscribe(outgoingOrders =>{
      this.outgoingOrders = outgoingOrders;
    })
  }
  ngOnInit() {
    
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

const ELEMENT_DATA: PeriodicElement[] = [
  { order: 1, name: 'Avinash', idate: '10/02/2020' , ddate: '15/03/2020', amt: 100000, status: 'Pending'},
  { order: 2, name: 'Puru', idate: '10/02/2020' , ddate: '18/02/2020', amt: 200000, status: 'Done'},
{ order: 3, name: 'Rohan', idate: '07/03/2020' , ddate: '15/05/2020', amt: 100000, status: 'Pending'},
//{ order: 4, name: 'Ashish', idate: '02/02/2020' , ddate: '15/02/2020', amt: 150000, status: 'Done'},
];