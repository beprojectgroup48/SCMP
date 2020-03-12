import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-dis-dashboard',
  templateUrl: './dis-dashboard.component.html',
  styleUrls: ['./dis-dashboard.component.css']
})

export class DistributorDashboardComponent implements OnInit {
  displayedColumns: string[] = ['order', 'name', 'idate', 'ddate','amt','status'];
  dataSource = ELEMENT_DATA;
  BarChart=[];
  PieChart=[];
  PieChart2=[];
 
  constructor() { }

  ngOnInit() {
    // Bar chart:
this.BarChart = new Chart('barChart', {
  type: 'bar',
data: {
 labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
 datasets: [{
     label: '# of Votes',
     data: [9,7 , 3, 5, 2, 10],
     backgroundColor: [
         'rgba(255, 99, 132, 0.2)',
         'rgba(54, 162, 235, 0.2)',
         'rgba(255, 206, 86, 0.2)',
         'rgba(75, 192, 192, 0.2)',
         'rgba(153, 102, 255, 0.2)',
         'rgba(255, 159, 64, 0.2)'
     ],
     borderColor: [
         'rgba(255,99,132,1)',
         'rgba(54, 162, 235, 1)',
         'rgba(255, 206, 86, 1)',
         'rgba(75, 192, 192, 1)',
         'rgba(153, 102, 255, 1)',
         'rgba(255, 159, 64, 1)'
     ],
     borderWidth: 1
 }]
}, 
options: {
 title:{
     text:"Bar Chart",
     display:true
 },
 scales: {
     yAxes: [{
         ticks: {
             beginAtZero:true
         }
     }]
 }
}
});


this.PieChart = new Chart('pieChart', {
  type: 'pie',
data: {
 labels: ["Completed", "Pending", "Delayed", "On Time"],
 datasets: [{
     label: '# of Votes',
     data: [9,7 , 3, 5],
     backgroundColor: [
         'rgba(255, 99, 132, 0.2)',
         'rgba(153, 102, 255, 0.2)',         
         'rgba(255, 206, 86, 0.2)',
         'rgba(75, 192, 192, 0.2)'
        //  'rgba(153, 102, 255, 0.2)',
        //  'rgba(255, 159, 64, 0.2)'
     ],
     borderColor: [
         'rgba(255,99,132,1)',
         'rgba(54, 162, 235, 1)',
         'rgba(255, 206, 86, 1)',
         'rgba(75, 192, 192, 1)'
        //  'rgba(153, 102, 255, 1)',
        //  'rgba(255, 159, 64, 1)'
     ],
     borderWidth: 1
 }]
}, 
options: {
 title:{
     text:"Pie Chart",
     display:true
 },
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
   labels: ["Completed", "Pending", "Delayed", "On Time"],
   datasets: [{
       label: '# of Votes',
       data: [9,7 , 3, 5],
       backgroundColor: [
           'rgba(255, 99, 132, 0.2)',
           'rgba(153, 102, 255, 0.2)',         
           'rgba(255, 206, 86, 0.2)',
           'rgba(75, 192, 192, 0.2)'
          //  'rgba(153, 102, 255, 0.2)',
          //  'rgba(255, 159, 64, 0.2)'
       ],
       borderColor: [
           'rgba(255,99,132,1)',
           'rgba(54, 162, 235, 1)',
           'rgba(255, 206, 86, 1)',
           'rgba(75, 192, 192, 1)'
          //  'rgba(153, 102, 255, 1)',
          //  'rgba(255, 159, 64, 1)'
       ],
       borderWidth: 1
   }]
  }, 
  options: {
   title:{
       text:"Pie Chart",
       display:true
   },
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
}

//import {Component} from '@angular/core';

export interface PeriodicElement {
  name: string;
  order: number;
  idate: string;
  ddate: string;
  amt: number;
  status: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  { order: 1, name: 'Avinash', idate: '10/02/2020' , ddate: '15/03/2020', amt: 100000, status: 'pending'},
  { order: 2, name: 'Puru', idate: '10/02/2020' , ddate: '18/02/2020', amt: 200000, status: 'Done'},
{ order: 3, name: 'Rohan', idate: '07/03/2020' , ddate: '15/05/2020', amt: 100000, status: 'pending'},
{ order: 4, name: 'Ashish', idate: '02/02/2020' , ddate: '15/02/2020', amt: 150000, status: 'Done'},
  // {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  // {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  // {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

/**
 * @title Basic use of `<table mat-table>`
 */

// export class FirstComponent {
//   displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
//   dataSource = ELEMENT_DATA;
// }
