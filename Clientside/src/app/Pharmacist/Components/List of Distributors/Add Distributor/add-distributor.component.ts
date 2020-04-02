import { listOfDistributors } from './../../../Models/list-of-distributors';
import { MatDialogRef, MatTableDataSource, MatPaginator } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-add-distributor',
  templateUrl: './add-distributor.component.html',
  styleUrls: ['./add-distributor.component.css']
})
export class AddDistributorComponent implements OnInit {

  selection: any;
  dataSource: any;
  subSet1: listOfDistributors[] = [];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['select', 'no', 'username', 'name', 'mobileNumber', 'location', 'licenceNumber'];
  constructor(
    @Inject(MAT_DIALOG_DATA) public distributorList: listOfDistributors[],
    public dialogRef: MatDialogRef<AddDistributorComponent>) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    for(var i=0;i<this.distributorList.length;i++){
      var index = ELEMENT_DATA.findIndex(x => x.username === this.distributorList[i].username);
      this.subSet1 = this.subSet1.concat(this.dataSource.data.slice(index, index+1));
    }
    this.selection = new SelectionModel<listOfDistributors>(true, this.subSet1);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: listOfDistributors): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.licenceNumber}`;
  }
}

// this is the list of all distributors in database
const ELEMENT_DATA: listOfDistributors[] = [
  {username:"DB12345",email:"ashok321@scmp.com",name:"Ashok Distributors",mobileNumber:8695412563,location:"Pune",licenceNumber:"45632"},
  {username:"DB74563",email:"vipul321@scmp.com",name:"Vipul Distributors",mobileNumber:8695412563,location:"Pune",licenceNumber:"45632"},
  {username:"DB56932",email:"kishor321@scmp.com",name:"Kishor Distributors",mobileNumber:8695412563,location:"Pune",licenceNumber:"45632"},
  {username:"DB87459",email:"kartik321@scmp.com",name:"kartik Distributors",mobileNumber:8695412563,location:"Pune",licenceNumber:"45632"},
  {username:"DB36415",email:"viraj321@scmp.com",name:"Viraj Distributors",mobileNumber:8695412563,location:"Pune",licenceNumber:"45632"},
  {username:"DB78965",email:"mahesh321@scmp.com",name:"Mahesh Distributors",mobileNumber:8695412563,location:"Pune",licenceNumber:"45632"},
  {username:"DB56970",email:"pratul321@scmp.com",name:"Pratul Distributors",mobileNumber:8695412563,location:"Pune",licenceNumber:"45632"},
  {username:"DB13697",email:"ganesh321@scmp.com",name:"Ganesh Distributors",mobileNumber:8695412563,location:"Pune",licenceNumber:"45632"},
  {username:"DB53641",email:"jayesh321@scmp.com",name:"Jayesh Distributors",mobileNumber:8695412563,location:"Pune",licenceNumber:"45632"},
  {username:"DB95413",email:"hitesh321@scmp.com",name:"Hitesh Distributors",mobileNumber:8695412563,location:"Pune",licenceNumber:"45632"},
];