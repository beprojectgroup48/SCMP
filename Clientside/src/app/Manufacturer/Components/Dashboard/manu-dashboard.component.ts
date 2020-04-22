import { MatTableDataSource } from '@angular/material';
import { ManufacturerIncomingOrders } from '../../Models/manu-incoming-orders';
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

  incomingOrderList: ManufacturerIncomingOrders[];
  displayedColumns1: string[] = ['orderId', 'pharmacistName', 'issueDate', 'deliveryDate','totalAmount','status'];
  dataSource1: any;
  PieChart=[];
  

  constructor(private router: Router,private manufacturerService: ManufacturerService) { }

  getIncomingOrderList(){
      this.manufacturerService.getIncomingOrders().subscribe(incomingOrderList =>{
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



  ngOnInit() {
    var token = localStorage.getItem('token');
    if(token != null){
    this.getIncomingOrderList();
   
    
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


}else{
   this.router.navigate(['/login']);
   
}
}

    gotoIncoming(){
        this.router.navigate(['/manufacturer/dashboard/incoming-orders']);
    }

   
}

const ELEMENT_DATA: ManufacturerIncomingOrders[] = [
    { orderId: '1', pharmacistName: 'Avinash', issueDate: new Date('3-10-2020') , deliveryDate: new Date('3-15-2020'), totalAmount: 100000, status: 'Pending'},
    { orderId: '2', pharmacistName: 'Puru', issueDate: new Date('5-2-2020') , deliveryDate: new Date('5-14-2020'), totalAmount: 200000, status: 'Done'},
    { orderId: '3', pharmacistName: 'Rohan', issueDate: new Date('7-21-2020') , deliveryDate: new Date('7-29-2020'), totalAmount: 100000, status: 'Pending'},
]

