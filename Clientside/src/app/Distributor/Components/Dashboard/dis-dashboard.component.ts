import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { DistributorService } from '../../Services/distributor.service';
import { manufacturer } from 'src/app/Manufacturer/Models/manufacturer';
import { pharmacist } from 'src/app/Pharmacist/Models/pharmacist';
import { IncomingOrders } from './../../Models/incoming-orders';
import { outgoingOrders } from '../../Models/outgoing-orders';

@Component({
  selector: 'app-dis-dashboard',
  templateUrl: './dis-dashboard.component.html',
  styleUrls: ['./dis-dashboard.component.css']
})

export class DistributorDashboardComponent implements OnInit {
  displayedColumns: string[] = ['orderId', 'name', 'idate', 'ddate','amt','status'];
  dataSource = ELEMENT_DATA;
  PieChart=[];
  PieChart2=[];

  manufacturerList: manufacturer[] = [];
  pharmacistList: pharmacist[] = [];
  incomingOrders: IncomingOrders[] = [];
  outgoingOrders: outgoingOrders[] = [];

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

const ELEMENT_DATA: IncomingOrders[] = [
  { orderId: '1', pharmacistName: 'Avinash', issueDate: new Date(10-2-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 100000, status: 'Pending'},
  { orderId: '2', pharmacistName: 'Puru', issueDate: new Date(10-2-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 200000, status: 'Done'},
{ orderId: '3', pharmacistName: 'Rohan', issueDate: new Date(7-3-2020) , deliveryDate: new Date(15-3-2020), totalAmount: 100000, status: 'Pending'},
];