import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DistributorServiceService {

  constructor(private http: Http) { }

  getManufacturers(){
     this.http.get('http://localhost:3000/distributor/allmanufacturers')
  }
  getPharmacists(){
    this.http.get('http://localhost:3000/distributor/allpharmacists')
  }
  placeOrder(){
    const headers = new Headers();
    headers.append('content-Type' , 'application/json');
   // this.http.post('http://localhost:3000/distributor/placeorder', order, {headers : headers})
  }
  getPendingOrders(){

  }
  getCompletedOrders(){

  }
  getOrders(){

  }
 

}
