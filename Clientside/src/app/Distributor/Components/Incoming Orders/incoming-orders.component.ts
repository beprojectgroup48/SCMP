import { PeriodicElement } from './../../Models/incoming-orders';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incoming-orders',
  templateUrl: './incoming-orders.component.html',
  styleUrls: ['./incoming-orders.component.css']
})
export class IncomingOrdersComponent implements OnInit {
  displayedColumns: string[] = ['order', 'name', 'idate', 'ddate','amt','status'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}

const ELEMENT_DATA: PeriodicElement[] = [
  { order: 1, name: 'Avinash', idate: '10/02/2020' , ddate: '15/03/2020', amt: 100000, status: 'Pending'},
  { order: 2, name: 'Puru', idate: '10/02/2020' , ddate: '18/02/2020', amt: 200000, status: 'Done'},
  { order: 3, name: 'Rohan', idate: '07/03/2020' , ddate: '15/05/2020', amt: 100000, status: 'Pending'},
  { order: 4, name: 'Ashish', idate: '02/02/2020' , ddate: '15/02/2020', amt: 150000, status: 'Done'},
  { order: 1, name: 'Avinash', idate: '10/02/2020' , ddate: '15/03/2020', amt: 100000, status: 'Pending'},
  { order: 2, name: 'Puru', idate: '10/02/2020' , ddate: '18/02/2020', amt: 200000, status: 'Done'},
  { order: 3, name: 'Rohan', idate: '07/03/2020' , ddate: '15/05/2020', amt: 100000, status: 'Pending'},
  { order: 4, name: 'Ashish', idate: '02/02/2020' , ddate: '15/02/2020', amt: 150000, status: 'Done'},
  { order: 1, name: 'Avinash', idate: '10/02/2020' , ddate: '15/03/2020', amt: 100000, status: 'Pending'},
  { order: 2, name: 'Puru', idate: '10/02/2020' , ddate: '18/02/2020', amt: 200000, status: 'Done'},
  { order: 3, name: 'Rohan', idate: '07/03/2020' , ddate: '15/05/2020', amt: 100000, status: 'Pending'},
  { order: 4, name: 'Ashish', idate: '02/02/2020' , ddate: '15/02/2020', amt: 150000, status: 'Done'},
  { order: 1, name: 'Avinash', idate: '10/02/2020' , ddate: '15/03/2020', amt: 100000, status: 'Pending'},
  { order: 2, name: 'Puru', idate: '10/02/2020' , ddate: '18/02/2020', amt: 200000, status: 'Done'},
  { order: 3, name: 'Rohan', idate: '07/03/2020' , ddate: '15/05/2020', amt: 100000, status: 'Pending'},
  { order: 4, name: 'Ashish', idate: '02/02/2020' , ddate: '15/02/2020', amt: 150000, status: 'Done'},
  { order: 1, name: 'Avinash', idate: '10/02/2020' , ddate: '15/03/2020', amt: 100000, status: 'Pending'},
  { order: 2, name: 'Puru', idate: '10/02/2020' , ddate: '18/02/2020', amt: 200000, status: 'Done'},
  { order: 3, name: 'Rohan', idate: '07/03/2020' , ddate: '15/05/2020', amt: 100000, status: 'Pending'},
  { order: 4, name: 'Ashish', idate: '02/02/2020' , ddate: '15/02/2020', amt: 150000, status: 'Done'},
  { order: 1, name: 'Avinash', idate: '10/02/2020' , ddate: '15/03/2020', amt: 100000, status: 'Pending'},
  { order: 2, name: 'Puru', idate: '10/02/2020' , ddate: '18/02/2020', amt: 200000, status: 'Done'},
  { order: 3, name: 'Rohan', idate: '07/03/2020' , ddate: '15/05/2020', amt: 100000, status: 'Pending'},
  { order: 4, name: 'Ashish', idate: '02/02/2020' , ddate: '15/02/2020', amt: 150000, status: 'Done'},
  { order: 1, name: 'Avinash', idate: '10/02/2020' , ddate: '15/03/2020', amt: 100000, status: 'Pending'},
  { order: 2, name: 'Puru', idate: '10/02/2020' , ddate: '18/02/2020', amt: 200000, status: 'Done'},
  { order: 3, name: 'Rohan', idate: '07/03/2020' , ddate: '15/05/2020', amt: 100000, status: 'Pending'},
  { order: 4, name: 'Ashish', idate: '02/02/2020' , ddate: '15/02/2020', amt: 150000, status: 'Done'},
  { order: 1, name: 'Avinash', idate: '10/02/2020' , ddate: '15/03/2020', amt: 100000, status: 'Pending'},
  { order: 2, name: 'Puru', idate: '10/02/2020' , ddate: '18/02/2020', amt: 200000, status: 'Done'},
  { order: 3, name: 'Rohan', idate: '07/03/2020' , ddate: '15/05/2020', amt: 100000, status: 'Pending'},
  { order: 4, name: 'Ashish', idate: '02/02/2020' , ddate: '15/02/2020', amt: 150000, status: 'Done'},
  { order: 1, name: 'Avinash', idate: '10/02/2020' , ddate: '15/03/2020', amt: 100000, status: 'Pending'},
  { order: 2, name: 'Puru', idate: '10/02/2020' , ddate: '18/02/2020', amt: 200000, status: 'Done'},
  { order: 3, name: 'Rohan', idate: '07/03/2020' , ddate: '15/05/2020', amt: 100000, status: 'Pending'},
  { order: 4, name: 'Ashish', idate: '02/02/2020' , ddate: '15/02/2020', amt: 150000, status: 'Done'},
  { order: 1, name: 'Avinash', idate: '10/02/2020' , ddate: '15/03/2020', amt: 100000, status: 'Pending'},
  { order: 2, name: 'Puru', idate: '10/02/2020' , ddate: '18/02/2020', amt: 200000, status: 'Done'},
  { order: 3, name: 'Rohan', idate: '07/03/2020' , ddate: '15/05/2020', amt: 100000, status: 'Pending'},
  { order: 4, name: 'Ashish', idate: '02/02/2020' , ddate: '15/02/2020', amt: 150000, status: 'Done'},
];