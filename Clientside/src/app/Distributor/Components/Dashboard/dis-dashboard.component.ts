import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { DistributorService } from '../../Services/distributor.service';
import { Manufacturer } from 'src/app/Manufacturer/Models/manufacturer';
import { Pharmacist } from 'src/app/Pharmacist/Models/pharmacist';
import { IncomingOrders } from './../../Models/incoming-orders';
import { OutgoingOrders } from '../../Models/outgoing-orders';

@Component({
  selector: 'app-dis-dashboard',
  templateUrl: './dis-dashboard.component.html',
  styleUrls: ['./dis-dashboard.component.css']
})

export class DistributorDashboardComponent implements OnInit {
  displayedColumns1: string[] = ['Order Id', 'Pharmacist Name', 'Issue Date', 'Delivery Date','Total Amount','Status'];
  displayedColumns2: string[] = ['Order Id', 'Manufacturer Name', 'Issue Date', 'Delivery Date','Total Amount','Status'];
  dataSource1 = ELEMENT_DATA1;
  dataSource2 = ELEMENT_DATA2;
  PieChart=[];
  PieChart2=[];

  manufacturerList: Manufacturer[] = [];
  pharmacistList: Pharmacist[] = [];
  incomingOrders: IncomingOrders[] = [];
  outgoingOrders: OutgoingOrders[] = [];

  constructor(private router: Router,private distributorService: DistributorService) { }

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

const ELEMENT_DATA1: IncomingOrders[] = [
  { orderId: '1', pharmacistName: 'Avinash', issueDate: new Date('3-10-2020') , deliveryDate: new Date('3-15-2020'), totalAmount: 100000, status: 'Pending'},
  { orderId: '2', pharmacistName: 'Puru', issueDate: new Date('5-2-2020') , deliveryDate: new Date('5-14-2020'), totalAmount: 200000, status: 'Done'},
  { orderId: '3', pharmacistName: 'Rohan', issueDate: new Date('7-21-2020') , deliveryDate: new Date('7-29-2020'), totalAmount: 100000, status: 'Pending'},
];

const ELEMENT_DATA2: OutgoingOrders[] = [
  { orderId: '1', manufacturerName: 'Avinash', issueDate: new Date('3-25-2020') , deliveryDate: new Date('3-15-2020'), totalAmount: 100000, status: 'Pending'},
  { orderId: '2', manufacturerName: 'Puru', issueDate: new Date('5-21-2020') , deliveryDate: new Date('5-14-2020'), totalAmount: 200000, status: 'Done'},
  { orderId: '3', manufacturerName: 'Rohan', issueDate: new Date('7-13-2020') , deliveryDate: new Date('7-28-2020'), totalAmount: 100000, status: 'Pending'},
];