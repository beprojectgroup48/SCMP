import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DistributorService {

  constructor(private http: Http) { }

  getManufacturers(){
    return this.http.get('http://localhost:3000/distributor/allmanufacturers').pipe(map(res => res.json()));
  }
  getPharmacists(){
   return  this.http.get('http://localhost:3000/distributor/allpharmacists').pipe(map(res => res.json()));
  }
  placeOrder(order){
    const headers = new Headers();
    headers.append('content-Type' , 'application/json');
    console.log(order);
    return this.http.post('http://localhost:3000/distributor/placeOrder', order, {headers : headers}).pipe(map(res => res.json()));
  }
  getIncomingOrders(){
   return this.http.get('http://localhost:3000/distributor/allIncomingOrders').pipe(map(res => res.json()));
  }
  getOutgoingOrders(){
    return this.http.get('http://localhost:3000/distributor/allOutgoingOrders').pipe(map(res => res.json()));
  }
  getPendingOrders(){

  }
  getCompletedOrders(){

  }
  getOrders(){

  }
 

}
