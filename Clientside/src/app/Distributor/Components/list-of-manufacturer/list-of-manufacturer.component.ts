import { Component, OnInit, ViewChild } from '@angular/core';
import { listOfManufacturer } from './../../Models/list-of-manufacturer';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { DistributorService } from '../../Services/distributor.service';
import { Manufacturer } from 'src/app/Manufacturer/Models/manufacturer';

@Component({
  selector: 'app-list-of-manufacturer',
  templateUrl: './list-of-manufacturer.component.html',
  styleUrls: ['./list-of-manufacturer.component.css']
})
export class ListOfManufacturerComponent implements OnInit {
  manufacturerList: Manufacturer[];
  displayedColumns: string[] = ['username', 'email', 'name', 'mobileNumber', 'location', 'licenceNumber'];
  dataSource : any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private distributorService: DistributorService) { }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {
    this.getManufacturerList();
  }

  getManufacturerList(){
    this.distributorService.getManufacturers().subscribe(manufacturerList =>{
      this.manufacturerList = manufacturerList;
      this.dataSource = new MatTableDataSource(this.manufacturerList);
      this.dataSource.paginator = this.paginator;
    })
  }

}
const ELEMENT_DATA: listOfManufacturer[] = [
  {username:"MF12345",email:"ashok321@scmp.com",name:"Ashok Industries",mobileNumber:8695412563,location:"Pune",licenceNumber:45632},
  {username:"MF74563",email:"vipul321@scmp.com",name:"Vipul Industries",mobileNumber:8695412563,location:"Pune",licenceNumber:45632},
  {username:"MF56932",email:"kishor321@scmp.com",name:"Kishor Industries",mobileNumber:8695412563,location:"Pune",licenceNumber:45632},
  {username:"MF87459",email:"kartik321@scmp.com",name:"kartik Industries",mobileNumber:8695412563,location:"Pune",licenceNumber:45632},
  {username:"MF36415",email:"viraj321@scmp.com",name:"Viraj Industries",mobileNumber:8695412563,location:"Pune",licenceNumber:45632},
  {username:"MF78965",email:"mahesh321@scmp.com",name:"Mahesh Industries",mobileNumber:8695412563,location:"Pune",licenceNumber:45632},
];