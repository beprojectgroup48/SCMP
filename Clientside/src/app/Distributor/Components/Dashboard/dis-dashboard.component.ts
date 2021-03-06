import { DistributorOutgoingOrders } from './../../Models/dis-outgoing-orders';
import { MatTableDataSource } from '@angular/material';
import { DistributorIncomingOrders } from './../../Models/dis-incoming-orders';
import { Router  } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { DistributorService } from '../../Services/distributor.service';
import { DistributorIncomingOrdersComponent } from '../Incoming Orders/dis-incoming-orders.component';



@Component({
  selector: 'app-dis-dashboard',
  templateUrl: './dis-dashboard.component.html',
  styleUrls: ['./dis-dashboard.component.css']
})

export class DistributorDashboardComponent implements OnInit {

  incomingOrderList: DistributorIncomingOrders[];
  displayedColumns1: string[] = ['orderId', 'pharmacistName', 'issueDate', 'deliveryDate','totalAmount','status'];
  dataSource1: any;
  outgoingOrderList: DistributorOutgoingOrders[];
  displayedColumns2: string[] = ['orderId', 'manufacturerName', 'issueDate', 'deliveryDate','totalAmount','status'];
  dataSource2: any;
  PieChart=[];
  PieChart2=[];

  constructor(private router: Router,private distributorService: DistributorService) {
     
   }
  getDashboard(){
    this.distributorService.getDistributorDashboard().subscribe(dashboard =>{
      console.log(dashboard);
     
      this.distributorService.imageName = dashboard.image;
      console.log(this.distributorService.imageName);
    })
  }
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

  getOutgoingOrderList(){
    this.distributorService.getOutgoingOrders().subscribe(outgoingOrderList =>{
    console.log(outgoingOrderList);
   /* this.outgoingOrderList = outgoingOrderList;
    for(var i=0;i<this.outgoingOrderList.length;i++)
    {
        this.outgoingOrderList[i].issueDate = new Date(this.outgoingOrderList[i].issueDate);
        this.outgoingOrderList[i].deliveryDate = new Date(this.outgoingOrderList[i].deliveryDate);
    }
    this.outgoingOrderList.splice(3);
    this.dataSource2 = new MatTableDataSource(this.outgoingOrderList);*/
  })
}
  getManufacturers(){
    this.distributorService.getManufacturers().subscribe(data=>{
      console.log(data);
    })
  }
  getPharmacists(){
    this.distributorService.getPharmacists().subscribe(data =>{
      console.log(data);
    })
  }
  ngOnInit() {
    var token = localStorage.getItem('token');
    if( token !== null){
    this.getDashboard();
    //this.getManufacturers();
    //this.getPharmacists();
   // this.getIncomingOrderList();
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
    
    }else{
      this.router.navigate(['/login']);
    }
    

}
    gotoIncoming(){
        this.router.navigate(['/distributor/dashboard/incoming-orders']);
    }

    gotoOutgoing(){
        this.router.navigate(['/distributor/dashboard/outgoing-orders']);
    }
}

const ELEMENT_DATA: DistributorIncomingOrders[] = [
    { orderId: '1', pharmacistName: 'Avinash', issueDate: new Date('3-10-2020') , deliveryDate: new Date('3-15-2020'), totalAmount: 100000, status: 'Pending'},
    { orderId: '2', pharmacistName: 'Puru', issueDate: new Date('5-2-2020') , deliveryDate: new Date('5-14-2020'), totalAmount: 200000, status: 'Done'},
    { orderId: '3', pharmacistName: 'Rohan', issueDate: new Date('7-21-2020') , deliveryDate: new Date('7-29-2020'), totalAmount: 100000, status: 'Pending'},
]

const ELEMENT_DATA2: DistributorOutgoingOrders[] = [
    { orderId: '1', manufacturerName: 'Avinash', issueDate: new Date('3-25-2020') , deliveryDate: new Date('3-15-2020'), totalAmount: 100000, status: 'Pending'},
    { orderId: '2', manufacturerName: 'Puru', issueDate: new Date('5-21-2020') , deliveryDate: new Date('5-14-2020'), totalAmount: 200000, status: 'Done'},
    { orderId: '3', manufacturerName: 'Rohan', issueDate: new Date('7-13-2020') , deliveryDate: new Date('7-28-2020'), totalAmount: 100000, status: 'Pending'},
]