import { Pharmacist } from '../../../Pharmacist/Models/pharmacist';
import { DistributorService} from '../../Services/distributor.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { listOfPharmacist } from './../../Models/list-of-pharmacist';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-list-of-pharmacist',
  templateUrl: './list-of-pharmacist.component.html',
  styleUrls: ['./list-of-pharmacist.component.css']
})
export class ListOfPharmacistComponent implements OnInit {
  
  pharmacistList: Pharmacist[];
  constructor(private distributorService: DistributorService) { }
  displayedColumns: string[] = ['username', 'firmName', 'pharmacistName', 'mobileNumber', 'licenceNumber', 'address'];
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {
    this.getPharmacistList();
  }
  getPharmacistList(){
    console.log('inside phar')
    this.distributorService.getPharmacists().subscribe(pharmacistList =>{
      console.log(pharmacistList)
      //this.pharmacistList = pharmacistList;
      //this.dataSource = new MatTableDataSource(this.pharmacistList);
      //this.dataSource.paginator = this.paginator;
    })  
  }
}

const ELEMENT_DATA: listOfPharmacist[] = [
  { username: "PH123", firmName: 'GLOBAL MEDICAL AND GENERAL STORES', pharmacistName:'hitendra mukund pathare, DPH, [43584-18/07/2019]' , mobileNumber: 8605038260, licenceNumber:'RWHXN-8' , address:'POLICE CHOW, PUNE-ROOM NO. 15, GLOBAL HOSPITAL & RESEARCH INSTITUTE,,FINAL PLOT NO. 577/2, S.NO.129A/1A, NR DATTAWADI' },
  { username: "PH965", firmName: 'MEDICINE WORLD  ', pharmacistName:'sanjeevani nitin musale, DPH, [56381-12/01/2018]'  , mobileNumber: 8605038260, licenceNumber:'RH - 3' , address:'PUNE-S. NO.82/1, SHOP NO.B-3, BUILDING-B, ARANYESHWAR PARK-A,,PHASE-1, SAHAKAR NAGAR-I, PARVATI' },
  { username: "PH745", firmName: 'RohVINAYAK MEDICINES', pharmacistName:'shweta tatyaso khandagale, DPH, [185035-24/05/2019]', mobileNumber: 8605038260, licenceNumber:'RH - 3' , address: 'PUNE-1ST FLOOR,F. NO. 109,AJINKYATARA BUILDING,S.NO.120+124/214,,PARVATI , SINHGAD ROAD '},
  { username: "PH200", firmName: 'AL FATAHA MEDICAL AND GENERAL STORES  ', pharmacistName: 'shaikh faiyaz ahmed basharat husain , DPH, [80946-13/07/2011]  ' , mobileNumber: 8605038260, licenceNumber: 'RH - 3  ', address:'PUNE-SURVEY NO. 90/91, KASHIWADI ZOPADPATTI, BHAWANI PETH,BHAWANI PETH  ' },
  { username: "PH123", firmName: 'GLOBAL MEDICAL AND GENERAL STORES', pharmacistName:'hitendra mukund pathare, DPH, [43584-18/07/2019]' , mobileNumber: 8605038260, licenceNumber:'RWHXN-8' , address:'POLICE CHOW, PUNE-ROOM NO. 15, GLOBAL HOSPITAL & RESEARCH INSTITUTE,,FINAL PLOT NO. 577/2, S.NO.129A/1A, NR DATTAWADI' },
  { username: "PH965", firmName: 'MEDICINE WORLD  ', pharmacistName:'sanjeevani nitin musale, DPH, [56381-12/01/2018]'  , mobileNumber: 8605038260, licenceNumber:'RH - 3' , address:'PUNE-S. NO.82/1, SHOP NO.B-3, BUILDING-B, ARANYESHWAR PARK-A,,PHASE-1, SAHAKAR NAGAR-I, PARVATI' },
  { username: "PH745", firmName: 'RohVINAYAK MEDICINES', pharmacistName:'shweta tatyaso khandagale, DPH, [185035-24/05/2019]', mobileNumber: 8605038260, licenceNumber:'RH - 3' , address: 'PUNE-1ST FLOOR,F. NO. 109,AJINKYATARA BUILDING,S.NO.120+124/214,,PARVATI , SINHGAD ROAD '},
  { username: "PH200", firmName: 'AL FATAHA MEDICAL AND GENERAL STORES  ', pharmacistName: 'shaikh faiyaz ahmed basharat husain , DPH, [80946-13/07/2011]  ' , mobileNumber: 8605038260, licenceNumber: 'RH - 3  ', address:'PUNE-SURVEY NO. 90/91, KASHIWADI ZOPADPATTI, BHAWANI PETH,BHAWANI PETH  ' },
];

