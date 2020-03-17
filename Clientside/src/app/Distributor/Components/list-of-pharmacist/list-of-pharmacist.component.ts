//import { listOfPharmacist } from './../../Models/list-of-pharmacist';
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
  
  pharmacistList: Pharmacist[] = null;
  //dataSource = new MatTableDataSource<Pharmacist>(this.pharmacistList);
  constructor(private distributorService: DistributorService) { }
  displayedColumns: string[] = ['Sr No', 'Firm Name', 'Pharmacist Name', 'License No','Address'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
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
      //this.dataSource.data = this.pharmacistList;
      console.log(this.dataSource.data);
    })  
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}

const ELEMENT_DATA: listOfPharmacist[] = [
  { no: 1, firmName: 'GLOBAL MEDICAL AND GENERAL STORES', pharmacistName:'hitendra mukund pathare, DPH, [43584-18/07/2019]' , license:'RWHXN-8' , address:'POLICE CHOW, PUNE-ROOM NO. 15, GLOBAL HOSPITAL & RESEARCH INSTITUTE,,FINAL PLOT NO. 577/2, S.NO.129A/1A, NR DATTAWADI' },
  { no: 2, firmName: 'MEDICINE WORLD  ', pharmacistName:'sanjeevani nitin musale, DPH, [56381-12/01/2018]'  , license:'RH - 3' , address:'PUNE-S. NO.82/1, SHOP NO.B-3, BUILDING-B, ARANYESHWAR PARK-A,,PHASE-1, SAHAKAR NAGAR-I, PARVATI' },
  { no: 3, firmName: 'RohVINAYAK MEDICINES', pharmacistName:'shweta tatyaso khandagale, DPH, [185035-24/05/2019]', license:'RH - 3' , address: 'PUNE-1ST FLOOR,F. NO. 109,AJINKYATARA BUILDING,S.NO.120+124/214,,PARVATI , SINHGAD ROAD '},
  { no: 4, firmName: 'AL FATAHA MEDICAL AND GENERAL STORES  ', pharmacistName: 'shaikh faiyaz ahmed basharat husain , DPH, [80946-13/07/2011]  ' , license: 'RH - 3  ', address:'PUNE-SURVEY NO. 90/91, KASHIWADI ZOPADPATTI, BHAWANI PETH,BHAWANI PETH  ' },
  { no: 1, firmName: 'GLOBAL MEDICAL AND GENERAL STORES', pharmacistName:'hitendra mukund pathare, DPH, [43584-18/07/2019]' , license:'RWHXN-8' , address:'POLICE CHOW, PUNE-ROOM NO. 15, GLOBAL HOSPITAL & RESEARCH INSTITUTE,,FINAL PLOT NO. 577/2, S.NO.129A/1A, NR DATTAWADI' },
  { no: 2, firmName: 'MEDICINE WORLD  ', pharmacistName:'sanjeevani nitin musale, DPH, [56381-12/01/2018]'  , license:'RH - 3' , address:'PUNE-S. NO.82/1, SHOP NO.B-3, BUILDING-B, ARANYESHWAR PARK-A,,PHASE-1, SAHAKAR NAGAR-I, PARVATI' },
  { no: 3, firmName: 'RohVINAYAK MEDICINES', pharmacistName:'shweta tatyaso khandagale, DPH, [185035-24/05/2019]', license:'RH - 3' , address: 'PUNE-1ST FLOOR,F. NO. 109,AJINKYATARA BUILDING,S.NO.120+124/214,,PARVATI , SINHGAD ROAD '},
  { no: 4, firmName: 'AL FATAHA MEDICAL AND GENERAL STORES  ', pharmacistName: 'shaikh faiyaz ahmed basharat husain , DPH, [80946-13/07/2011]  ' , license: 'RH - 3  ', address:'PUNE-SURVEY NO. 90/91, KASHIWADI ZOPADPATTI, BHAWANI PETH,BHAWANI PETH  ' },
  { no: 1, firmName: 'GLOBAL MEDICAL AND GENERAL STORES', pharmacistName:'hitendra mukund pathare, DPH, [43584-18/07/2019]' , license:'RWHXN-8' , address:'POLICE CHOW, PUNE-ROOM NO. 15, GLOBAL HOSPITAL & RESEARCH INSTITUTE,,FINAL PLOT NO. 577/2, S.NO.129A/1A, NR DATTAWADI' },
  { no: 2, firmName: 'MEDICINE WORLD  ', pharmacistName:'sanjeevani nitin musale, DPH, [56381-12/01/2018]'  , license:'RH - 3' , address:'PUNE-S. NO.82/1, SHOP NO.B-3, BUILDING-B, ARANYESHWAR PARK-A,,PHASE-1, SAHAKAR NAGAR-I, PARVATI' },
  { no: 3, firmName: 'RohVINAYAK MEDICINES', pharmacistName:'shweta tatyaso khandagale, DPH, [185035-24/05/2019]', license:'RH - 3' , address: 'PUNE-1ST FLOOR,F. NO. 109,AJINKYATARA BUILDING,S.NO.120+124/214,,PARVATI , SINHGAD ROAD '},
  { no: 4, firmName: 'AL FATAHA MEDICAL AND GENERAL STORES  ', pharmacistName: 'shaikh faiyaz ahmed basharat husain , DPH, [80946-13/07/2011]  ' , license: 'RH - 3  ', address:'PUNE-SURVEY NO. 90/91, KASHIWADI ZOPADPATTI, BHAWANI PETH,BHAWANI PETH  ' },
  { no: 1, firmName: 'GLOBAL MEDICAL AND GENERAL STORES', pharmacistName:'hitendra mukund pathare, DPH, [43584-18/07/2019]' , license:'RWHXN-8' , address:'POLICE CHOW, PUNE-ROOM NO. 15, GLOBAL HOSPITAL & RESEARCH INSTITUTE,,FINAL PLOT NO. 577/2, S.NO.129A/1A, NR DATTAWADI' },
  { no: 2, firmName: 'MEDICINE WORLD  ', pharmacistName:'sanjeevani nitin musale, DPH, [56381-12/01/2018]'  , license:'RH - 3' , address:'PUNE-S. NO.82/1, SHOP NO.B-3, BUILDING-B, ARANYESHWAR PARK-A,,PHASE-1, SAHAKAR NAGAR-I, PARVATI' },
  { no: 3, firmName: 'RohVINAYAK MEDICINES', pharmacistName:'shweta tatyaso khandagale, DPH, [185035-24/05/2019]', license:'RH - 3' , address: 'PUNE-1ST FLOOR,F. NO. 109,AJINKYATARA BUILDING,S.NO.120+124/214,,PARVATI , SINHGAD ROAD '},
  { no: 4, firmName: 'AL FATAHA MEDICAL AND GENERAL STORES  ', pharmacistName: 'shaikh faiyaz ahmed basharat husain , DPH, [80946-13/07/2011]  ' , license: 'RH - 3  ', address:'PUNE-SURVEY NO. 90/91, KASHIWADI ZOPADPATTI, BHAWANI PETH,BHAWANI PETH  ' },
  { no: 1, firmName: 'GLOBAL MEDICAL AND GENERAL STORES', pharmacistName:'hitendra mukund pathare, DPH, [43584-18/07/2019]' , license:'RWHXN-8' , address:'POLICE CHOW, PUNE-ROOM NO. 15, GLOBAL HOSPITAL & RESEARCH INSTITUTE,,FINAL PLOT NO. 577/2, S.NO.129A/1A, NR DATTAWADI' },
  { no: 2, firmName: 'MEDICINE WORLD  ', pharmacistName:'sanjeevani nitin musale, DPH, [56381-12/01/2018]'  , license:'RH - 3' , address:'PUNE-S. NO.82/1, SHOP NO.B-3, BUILDING-B, ARANYESHWAR PARK-A,,PHASE-1, SAHAKAR NAGAR-I, PARVATI' },
  { no: 3, firmName: 'RohVINAYAK MEDICINES', pharmacistName:'shweta tatyaso khandagale, DPH, [185035-24/05/2019]', license:'RH - 3' , address: 'PUNE-1ST FLOOR,F. NO. 109,AJINKYATARA BUILDING,S.NO.120+124/214,,PARVATI , SINHGAD ROAD '},
  { no: 4, firmName: 'AL FATAHA MEDICAL AND GENERAL STORES  ', pharmacistName: 'shaikh faiyaz ahmed basharat husain , DPH, [80946-13/07/2011]  ' , license: 'RH - 3  ', address:'PUNE-SURVEY NO. 90/91, KASHIWADI ZOPADPATTI, BHAWANI PETH,BHAWANI PETH  ' },
];

