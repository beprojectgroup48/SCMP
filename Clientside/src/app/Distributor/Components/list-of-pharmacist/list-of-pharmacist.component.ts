import { Component, OnInit } from '@angular/core';
//import { listOfPharmacist } from './../../Models/list-of-pharmacist';
import { MatTableDataSource } from '@angular/material/table';
import { Pharmacist } from '../../../Pharmacist/Models/pharmacist';
import { DistributorService} from '../../Services/distributor.service';

@Component({
  selector: 'app-list-of-pharmacist',
  templateUrl: './list-of-pharmacist.component.html',
  styleUrls: ['./list-of-pharmacist.component.css']
})
export class ListOfPharmacistComponent implements OnInit {
  displayedColumns: string[] = ['Sr No', 'Pharmacist Name', 'License No','Address'];
  pharmacistList: Pharmacist[] = null;
  dataSource = new MatTableDataSource<Pharmacist>(this.pharmacistList);
  constructor(private distributorService: DistributorService) { }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {
    this.getPharmacistList();
  }

  getPharmacistList(){
    this.distributorService.getPharmacists().subscribe(pharmacistList =>{
      this.pharmacistList = pharmacistList;
      this.dataSource.data = this.pharmacistList;
      console.log(this.dataSource.data);
    })  
  }

}


