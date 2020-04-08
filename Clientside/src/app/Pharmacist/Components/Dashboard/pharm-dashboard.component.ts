import { PharmacistSubOrder } from './../../Models/pharm-sub-order';
import { PharmacistCompleteOrder } from './../../Models/pharm-complete-order';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { PharmacistService } from '../../Services/pharmacist.service';
import { PharmacistOutgoingOrders} from '../../Models/pharm-outgoing-orders';

@Component({
  selector: 'app-pharm-dashboard',
  templateUrl: './pharm-dashboard.component.html',
  styleUrls: ['./pharm-dashboard.component.css']
})

export class PharmacistDashboardComponent implements OnInit {

  yourOrders: PharmacistCompleteOrder[];
  outgoingOrderList: PharmacistOutgoingOrders[];
  displayedColumns: string[] = ['orderId', 'distributorName', 'issueDate', 'dueDate','finalAmount','status'];
  dataSource: any;
  PieChart = [];

  constructor(private router: Router,private pharmacistService: PharmacistService) { }

  getDashboard(){
    this.pharmacistService.getPharmacistDashboard().subscribe(dashboard =>{
      console.log(dashboard);
      this.pharmacistService.imageName = dashboard.image;
      console.log(this.pharmacistService.imageName);
    })
  }
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

    var token = localStorage.getItem('token');
    if( token !== null){
    //this.getOutgoingOrderList();
    this.getDashboard();
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
}else{
  this.router.navigate(['/login']);
}
}

    gotoOutgoing(){
        this.router.navigate(['/pharmacist/dashboard/outgoing-orders']);
    }
}

const ELEMENT_DATA: PharmacistOutgoingOrders[] = [
    { orderId: '1', distributorName: 'Avinash', issueDate: new Date('3-25-2020') , deliveryDate: new Date('3-15-2020'), totalAmount: 100000, status: 'Pending'},
    { orderId: '2', distributorName: 'Puru', issueDate: new Date('5-21-2020') , deliveryDate: new Date('5-14-2020'), totalAmount: 200000, status: 'Done'},
    { orderId: '3', distributorName: 'Rohan', issueDate: new Date('7-13-2020') , deliveryDate: new Date('7-28-2020'), totalAmount: 100000, status: 'Pending'},
]
