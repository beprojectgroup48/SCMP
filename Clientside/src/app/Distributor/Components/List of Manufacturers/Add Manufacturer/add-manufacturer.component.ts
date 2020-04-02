import { listOfManufacturer } from './../../../Models/list-of-manufacturer';
import { MatDialogRef, MatTableDataSource, MatPaginator } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-add-manufacturer',
  templateUrl: './add-manufacturer.component.html',
  styleUrls: ['./add-manufacturer.component.css']
})
export class AddManufacturerComponent implements OnInit {

  selection: any;
  dataSource: any;
  subSet1: listOfManufacturer[] = [];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['select', 'no', 'username', 'name', 'mobileNumber', 'location', 'licenceNumber'];
  constructor(
    @Inject(MAT_DIALOG_DATA) public manufacturerList: listOfManufacturer[],
    public dialogRef: MatDialogRef<AddManufacturerComponent>) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    for(var i=0;i<this.manufacturerList.length;i++){
      var index = ELEMENT_DATA.findIndex(x => x.username === this.manufacturerList[i].username);
      this.subSet1 = this.subSet1.concat(this.dataSource.data.slice(index, index+1));
    }
    this.selection = new SelectionModel<listOfManufacturer>(true, this.subSet1);
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
  checkboxLabel(row?: listOfManufacturer): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.licenceNumber + 1}`;
  }
}

// this is the list of all manufactuerers in database
const ELEMENT_DATA: listOfManufacturer[] = [
  {username:"MF12345",email:"ashok321@scmp.com",name:"Ashok Industries",mobileNumber:8695412563,location:"Pune",licenceNumber:45632},
  {username:"MF74563",email:"vipul321@scmp.com",name:"Vipul Industries",mobileNumber:8695412563,location:"Pune",licenceNumber:45632},
  {username:"MF56932",email:"kishor321@scmp.com",name:"Kishor Industries",mobileNumber:8695412563,location:"Pune",licenceNumber:45632},
  {username:"MF87459",email:"kartik321@scmp.com",name:"kartik Industries",mobileNumber:8695412563,location:"Pune",licenceNumber:45632},
  {username:"MF36415",email:"viraj321@scmp.com",name:"Viraj Industries",mobileNumber:8695412563,location:"Pune",licenceNumber:45632},
  {username:"MF78965",email:"mahesh321@scmp.com",name:"Mahesh Industries",mobileNumber:8695412563,location:"Pune",licenceNumber:45632},
  {username:"MF56970",email:"pratul321@scmp.com",name:"Pratul Industries",mobileNumber:8695412563,location:"Pune",licenceNumber:45632},
  {username:"MF13697",email:"ganesh321@scmp.com",name:"Ganesh Industries",mobileNumber:8695412563,location:"Pune",licenceNumber:45632},
  {username:"MF53641",email:"jayesh321@scmp.com",name:"Jayesh Industries",mobileNumber:8695412563,location:"Pune",licenceNumber:45632},
  {username:"MF95413",email:"hitesh321@scmp.com",name:"Hitesh Industries",mobileNumber:8695412563,location:"Pune",licenceNumber:45632},
];