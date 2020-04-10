import { AddDistributorComponent } from './../Add Distributor/add-distributor.component';
import { Distributor } from './../../../../Distributor/Models/distributor';
import { listOfDistributors } from '../../../Models/list-of-distributors';
import { ManufacturerService } from '../../../Services/manufacturer.service';
import { MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';

@Component({
  selector: 'app-subscribed-distributors',
  templateUrl: './subscribed-distributors.component.html',
  styleUrls: ['./subscribed-distributors.component.css']
})
export class ManufacturerSubscribedDistributorsComponent implements OnInit {
  distributorList: Distributor[];
  displayedColumns: string[] = ['username', 'name', 'email', 'mobileNumber', 'location', 'licenceNumber'];
  dataSource: any;
  sendData: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private dialog: MatDialog,private manufacturerService: ManufacturerService) { }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {
    this.getDistributorsList();
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.sendData = ELEMENT_DATA;
  }

  addDistributor(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "55%";
    dialogConfig.data = this.sendData;
    const dialogRef = this.dialog.open(AddDistributorComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if(!result)
        return;
      this.dataSource = new MatTableDataSource(result.selected);
      this.dataSource.paginator = this.paginator;
      this.sendData = result.selected;
      console.log(result.selected);
    });
  }

  getDistributorsList(){
      this.manufacturerService.getDistributors().subscribe(distributorList =>{
      console.log(distributorList);
      this.distributorList = distributorList;
      this.dataSource = new MatTableDataSource(this.distributorList);
      this.dataSource.paginator = this.paginator;
    })
  }
}
// this is the list of subscribed distributors by this pharmacist
const ELEMENT_DATA: listOfDistributors[] = [
  {username:"DB74563",name:"Vipul Distributors",email:"vipul123@scmp.com",mobileNumber:8695412563,location:"Pune",licenceNumber:"45632"},
  {username:"DB36415",name:"Viraj Distributors",email:"vipul123@scmp.com",mobileNumber:8695412563,location:"Pune",licenceNumber:"45632"},
  {username:"DB53641",name:"Jayesh Distributors",email:"vipul123@scmp.com",mobileNumber:8695412563,location:"Pune",licenceNumber:"45632"},
];