import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dis-yourorder',
  templateUrl: './dis-yourorder.component.html',
  styleUrls: ['./dis-yourorder.component.css']
})
export class DistributorYourOrderComponent implements OnInit {
  displayedColumns: string[] = ['order', 'name', 'idate', 'ddate','amt','status'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
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