import { listOfManufacturer } from './../../../Models/list-of-manufacturer';
import { AddManufacturerComponent } from './../Add Manufacturer/add-manufacturer.component';
import { DistributorService } from './../../../Services/distributor.service';
import { MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { Manufacturer } from 'src/app/Manufacturer/Models/manufacturer';

@Component({
  selector: 'app-subscribed-manufacturers',
  templateUrl: './subscribed-manufacturers.component.html',
  styleUrls: ['./subscribed-manufacturers.component.css']
})
export class SubscribedManufacturersComponent implements OnInit {
  manufacturerList: Manufacturer[];
  displayedColumns: string[] = ['username', 'name', 'email', 'mobileNumber', 'location', 'licenceNumber'];
  dataSource: any;
  sendData: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private dialog: MatDialog,private distributorService: DistributorService) { }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {
    this.getManufacturerList();
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.sendData = ELEMENT_DATA;
  }

  addManufacturer(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "55%";
    dialogConfig.data = this.sendData;
    const dialogRef = this.dialog.open(AddManufacturerComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if(!result)
        return;
      this.dataSource = new MatTableDataSource(result.selected);
      this.dataSource.paginator = this.paginator;
      this.sendData = result.selected;
      console.log(result.selected);
    });
  }

  getManufacturerList(){
    this.distributorService.getManufacturers().subscribe(manufacturerList =>{
      console.log('manufacturers' + manufacturerList);
      this.manufacturerList = manufacturerList;
      this.dataSource = new MatTableDataSource(this.manufacturerList);
      this.dataSource.paginator = this.paginator;
    })
  }

}
// this is the list of subscribed manufacturers by this distributor
const ELEMENT_DATA: listOfManufacturer[] = [
  {username:"MF74563",email:"vipul321@scmp.com",name:"Vipul Industries",mobileNumber:8695412563,location:"Pune",licenceNumber:45632},
  {username:"MF36415",email:"viraj321@scmp.com",name:"Viraj Industries",mobileNumber:8695412563,location:"Pune",licenceNumber:45632},
  {username:"MF53641",email:"jayesh321@scmp.com",name:"Jayesh Industries",mobileNumber:8695412563,location:"Pune",licenceNumber:45632},
];

