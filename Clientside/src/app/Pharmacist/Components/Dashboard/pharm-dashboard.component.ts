import { PharmacistSubOrder } from './../../Models/pharm-sub-order';
import { PharmacistCompleteOrder } from './../../Models/pharm-complete-order';
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

  yourOrderList: PharmacistCompleteOrder[];
  displayedColumns: string[] = ['orderId', 'distributorName', 'issueDate', 'dueDate','finalAmount','status'];
  dataSource: any;
  PieChart = [];

  constructor(private router: Router,private pharmacistService: PharmacistService) { }

  getYourOrderList(){
    this.pharmacistService.getYourOrders().subscribe(yourOrderList =>{
    this.yourOrderList = yourOrderList;
    for(var i=0;i<this.yourOrderList.length;i++)
    {
        this.yourOrderList[i].issueDate = new Date(this.yourOrderList[i].issueDate);
        this.yourOrderList[i].dueDate = new Date(this.yourOrderList[i].dueDate);
    }
    this.yourOrderList.splice(3);
    this.dataSource = new MatTableDataSource(this.yourOrderList);
  })
}

  ngOnInit() {

    this.getYourOrderList();

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

    gotoYourOrders(){
        this.router.navigate(['/pharmacist/view-order']);
    }
}

const ELEMENT_DATA: PharmacistCompleteOrder[] = [
    { orderId: "1324", orders: undefined, pharmacistUsername: "PH123456", pharmacistName:"Ganesh", issueDate: new Date('2-12-2020'),
    distributorUsername: "DB123456", distributorName:"Ashish Distributors", dueDate: new Date('4-12-2020'), finalAmount: 4000, status: "Pending"},
    { orderId: "2433", orders: undefined, pharmacistUsername: "PH659745", pharmacistName:"Mahesh", issueDate: new Date('3-23-2020'), 
    distributorUsername: "DB589641", distributorName:"Avinash Distributors", dueDate: new Date('4-12-2020'), finalAmount: 5000, status: "Done"},
    { orderId: "3234", orders: undefined, pharmacistUsername: "PH896314", pharmacistName:"Ramesh", issueDate: new Date('3-13-2020'), 
    distributorUsername: "DB302569", distributorName:"Rohan Distributors", dueDate: new Date('4-12-2020'), finalAmount: 2000, status: "Pending"},
    { orderId: "4224", orders: undefined, pharmacistUsername: "PH102591", pharmacistName:"Rakesh", issueDate: new Date('2-16-2020'), 
    distributorUsername: "DB759412", distributorName:"Puru Distributors", dueDate: new Date('4-12-2020'), finalAmount: 9000, status: "Processing"},
    { orderId: "5543", orders: undefined, pharmacistUsername: "PH400632", pharmacistName:"Nilesh", issueDate: new Date('1-8-2020'), 
    distributorUsername: "DB954102", distributorName:"Vipul Distributors", dueDate: new Date('4-12-2020'), finalAmount: 300, status: "Pending"},
  ];
  
  const ELEMENT_DATA2: PharmacistSubOrder[] = [
    { productId: "2386", productName: "Crosin", unitPrice: 100, quantity: 7, totalAmount: 700, manufacturerUsername: "MF123456", manufacturerName:"Sachin"},
    { productId: "4865", productName: "Fever", unitPrice: 200, quantity: 4, totalAmount: 800, manufacturerUsername: "MF896412", manufacturerName:"Sehwag"},
    { productId: "1956", productName: "Cold", unitPrice: 300, quantity: 2, totalAmount: 600, manufacturerUsername: "MF489210", manufacturerName:"Virat"},
    { productId: "2020", productName: "Flu", unitPrice: 400, quantity: 6, totalAmount: 2400, manufacturerUsername: "MF023694", manufacturerName:"Dhoni"},
  ];